import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
import { GoogleGenAI } from '@google/genai';
import { UtilsService } from 'src/utils/utils.service';
import { AudioData, TextData } from '../interfaces/intel.interfaces';

@Injectable()
export class IntelService {
  constructor(
    private utils: UtilsService,
    private common: CommonService,
  ) {}

  async generateText(data:TextData) {
    const response: any = await this.common.handleRetry(() => {
      const ai = new GoogleGenAI({ apiKey: this.utils.getGeminiApiKey });
      return ai.models.generateContent({
        model: data.model ?? 'gemini-2.5-flash',
        contents: [{ parts: [{ text: data.prompt }] }],
        config: {
          responseMimeType:
            data.schema !== undefined ? 'application/json' : 'text/plain',
          responseSchema: data.schema !== undefined ? data.schema : undefined,
        },
      });
    }, 3);
    if (response.text) {
      if (data.schema) {
        try {
          return JSON.parse(response.text);
        } catch {
          throw new Error('Invalid JSON returned from AI');
        }
      } else return response.text;
    } else throw new Error('AI Generation Failed.');
  }

  async generateAudio(data: AudioData) {
    const script = data.transcript
      .map((snippet) =>
        snippet.speakerName.concat(': ').concat(snippet.speakerText),
      )
      .join('\n');

    const speakerVoiceConfigs = data.config.map((speaker) => ({
      speaker: speaker.speakerName,
      voiceConfig: {
        prebuiltVoiceConfig: {
          voiceName:
            speaker.speakerVoice ??
            this.utils.getRandomVoice(speaker.speakerGender)
        },
      },
    }));

    const response: any = await this.common.handleRetry(() => {
      const ai = new GoogleGenAI({ apiKey: this.utils.getGeminiApiKey });
      return ai.models.generateContent({
        model: 'gemini-2.5-flash-preview-tts',
        contents: [
          {
            parts: [{ text: data.prompt.concat('\n').concat(script) }],
          },
        ],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig:
            speakerVoiceConfigs.length === 1
              ? { voiceConfig: speakerVoiceConfigs[0].voiceConfig }
              : { multiSpeakerVoiceConfig: { speakerVoiceConfigs } },
        },
      });
    }, 3);

    const audio: any =
      response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (audio) return Buffer.from(audio, 'base64');
    else throw new Error('Audio Is Undefined.');
  }
}
