import { Module } from '@nestjs/common';
import { FarmtoolsService } from './farmtools.service';
import { FarmtoolsController } from './farmtools.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { farmEntity } from 'src/Entities/FarmEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([farmEntity])
  ],
  exports: [FarmtoolsService],
  controllers: [FarmtoolsController],
  providers: [FarmtoolsService],
})
export class FarmtoolsModule {}
