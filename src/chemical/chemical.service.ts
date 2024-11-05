import { Injectable } from '@nestjs/common';
import { CreateChemicalDto } from './dto/create-chemical.dto';
import { UpdateChemicalDto } from './dto/update-chemical.dto';

@Injectable()
export class ChemicalService {
  create(createChemicalDto: CreateChemicalDto) {
    return 'This action adds a new chemical';
  }

  findAll() {
    return `This action returns all chemical`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chemical`;
  }

  update(id: number, updateChemicalDto: UpdateChemicalDto) {
    return `This action updates a #${id} chemical`;
  }

  remove(id: number) {
    return `This action removes a #${id} chemical`;
  }
}
