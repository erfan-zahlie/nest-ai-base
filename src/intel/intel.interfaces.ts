export interface TextData {
  prompt: string;
  schema?: object;
  model?: string;
}

export interface AudioData {
  prompt: string;
  config: {
    speakerName: string;
    speakerGender: 'male' | 'female';
    speakerVoice?: string;
  }[];
  transcript: {
    speakerName: string;
    speakerText: string;
  }[];
}
