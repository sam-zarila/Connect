import { Module } from '@nestjs/common';
import { ChemicalService } from './chemical.service';
import { ChemicalController } from './chemical.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { chemicalsEntity } from './entities/chemical.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([chemicalsEntity])
  ],
  exports: [ChemicalService],
  controllers: [ChemicalController],
  providers: [ChemicalService],
})
export class ChemicalModule {}
