import { Module } from '@nestjs/common';
import { IntelService } from './intel.service';
import { CommonModule } from 'src/common/common.module';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports: [CommonModule, UtilsModule],
  providers: [IntelService],
  exports: [IntelService]
})
export class IntelModule {}
