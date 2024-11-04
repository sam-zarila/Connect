import { Module } from '@nestjs/common';
import { FarmtoolsService } from './farmtools.service';
import { FarmtoolsController } from './farmtools.controller';

@Module({
  imports: [],
  exports: [FarmtoolsService],
  controllers: [FarmtoolsController],
  providers: [FarmtoolsService],
})
export class FarmtoolsModule {}
