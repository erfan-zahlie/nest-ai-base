import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { IntelModule } from './intel/intel.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CommonModule, IntelModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
