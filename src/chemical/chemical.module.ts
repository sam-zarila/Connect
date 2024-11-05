import { Module } from '@nestjs/common';
import { ChemicalService } from './chemical.service';
import { ChemicalController } from './chemical.controller';

@Module({
  controllers: [ChemicalController],
  providers: [ChemicalService],
})
export class ChemicalModule {}
