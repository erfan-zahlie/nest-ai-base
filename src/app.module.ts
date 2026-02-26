import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { IntelModule } from './intel/intel.module';
import { ConfigModule } from '@nestjs/config';
import { WavModule } from './wav/wav.module';
import { DbModule } from './db/db.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [CommonModule, IntelModule, ConfigModule.forRoot({
    isGlobal: true
  }), WavModule, DbModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
