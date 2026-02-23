import { Module } from '@nestjs/common';
import { IntelService } from './intel.service';
import { CommonModule } from 'src/common/common.module';
import { IntelUtils } from './intel.utils';

@Module({
  imports: [CommonModule],
  providers: [IntelService, IntelUtils],
  exports: [IntelService]
})
export class IntelModule {}
