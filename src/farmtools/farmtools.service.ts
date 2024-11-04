import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { farmEntity } from 'src/Entities/FarmEntity';
import { Repository } from 'typeorm';


@Injectable()
export class FarmtoolsService {

  constructor(

    @InjectRepository(farmEntity) private farmToolsRepository: Repository<farmEntity>,
  ){}

  createFarmTools(farm:farmEntity){

    return this.farmToolsRepository.save(farm);
  }

  findFarmTools() : Promise<farmEntity[]>{
    return this.farmToolsRepository.find()
  }
 
  async removefarmTools( id :number) :Promise<void>{

    await this.farmToolsRepository.delete(id);

  }
}
