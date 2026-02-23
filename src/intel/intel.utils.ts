import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class IntelUtils {
  constructor(private config: ConfigService) {}
  private geminiIndex = 0;

  get geminiApiKey() {
    const keys = [
      this.config.get<string>('API_KEY_1'),
      this.config.get<string>('API_KEY_2'),
      this.config.get<string>('API_KEY_3'),
      this.config.get<string>('API_KEY_4'),
      this.config.get<string>('API_KEY_5'),
      this.config.get<string>('API_KEY_6'),
      this.config.get<string>('API_KEY_7'),
      this.config.get<string>('API_KEY_8'),
      this.config.get<string>('API_KEY_9'),
      this.config.get<string>('API_KEY_10'),
      this.config.get<string>('API_KEY_11'),
      this.config.get<string>('API_KEY_12'),
      this.config.get<string>('API_KEY_13'),
      this.config.get<string>('API_KEY_14'),
      this.config.get<string>('API_KEY_15'),
      this.config.get<string>('API_KEY_16'),
      this.config.get<string>('API_KEY_17'),
      this.config.get<string>('API_KEY_18'),
      this.config.get<string>('API_KEY_19'),
      this.config.get<string>('API_KEY_20'),
      this.config.get<string>('API_KEY_21'),
      this.config.get<string>('API_KEY_22'),
      this.config.get<string>('API_KEY_23'),
      this.config.get<string>('API_KEY_24'),
      this.config.get<string>('API_KEY_25'),
      this.config.get<string>('API_KEY_26'),
      this.config.get<string>('API_KEY_27'),
      this.config.get<string>('API_KEY_28'),
      this.config.get<string>('API_KEY_29'),
      this.config.get<string>('API_KEY_30'),
      this.config.get<string>('API_KEY_31'),
      this.config.get<string>('API_KEY_32'),
      this.config.get<string>('API_KEY_33'),
      this.config.get<string>('API_KEY_34'),
      this.config.get<string>('API_KEY_35'),
      this.config.get<string>('API_KEY_36'),
      this.config.get<string>('API_KEY_37'),
      this.config.get<string>('API_KEY_38'),
      this.config.get<string>('API_KEY_39'),
      this.config.get<string>('API_KEY_40'),
      this.config.get<string>('API_KEY_41'),
      this.config.get<string>('API_KEY_42'),
      this.config.get<string>('API_KEY_43'),
      this.config.get<string>('API_KEY_44'),
      this.config.get<string>('API_KEY_45'),
      this.config.get<string>('API_KEY_46'),
      this.config.get<string>('API_KEY_47'),
      this.config.get<string>('API_KEY_48'),
      this.config.get<string>('API_KEY_49'),
      this.config.get<string>('API_KEY_50'),
      this.config.get<string>('API_KEY_51'),
      this.config.get<string>('API_KEY_52'),
      this.config.get<string>('API_KEY_53'),
      this.config.get<string>('API_KEY_54'),
      this.config.get<string>('API_KEY_55'),
      this.config.get<string>('API_KEY_56'),
      this.config.get<string>('API_KEY_57'),
      this.config.get<string>('API_KEY_58'),
      this.config.get<string>('API_KEY_59'),
      this.config.get<string>('API_KEY_60'),
    ];
    const key = keys[this.geminiIndex];
    this.geminiIndex = (this.geminiIndex + 1) % keys.length;
    return key;
  }

  getRandomVoice(gender: 'male' | 'female'): string {
    const voices = VOICES[gender];
    const randomIndex = Math.floor(Math.random() * voices.length);
    return voices[randomIndex];
  }
}

export const VOICES = {
  male: [
    'Puck',
    'Charon',
    'Fenrir',
    'Orus',
    'Enceladus',
    'Iapetus',
    'Umbriel',
    'Algieba',
    'Algenib',
    'Rasalgethi',
    'Alnilam',
    'Schedar',
    'Pulcherrima',
    'Achird',
    'Zubenelgenubi',
    'Sadachbia',
    'Sadaltager',
  ],
  female: [
    'Zephyr',
    'Kore',
    'Leda',
    'Aoede',
    'Callirrhoe',
    'Autonoe',
    'Despina',
    'Erinome',
    'Laomedeia',
    'Achernar',
    'Gacrux',
    'Vindemiatrix',
    'Sulafat',
  ],
};
