import { Module } from '@nestjs/common';
import { WavService } from './wav.service';

@Module({
  providers: [WavService]
})
export class WavModule {}
