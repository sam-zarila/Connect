import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { chemicalsEntity } from './entities/chemical.entity';
import { Repository } from 'typeorm';
import { chemicalDTO } from './dto/create-chemical.dto';


@Injectable()
export class ChemicalService {

  constructor(
    @InjectRepository(chemicalsEntity) private chemicalsRepository:Repository<chemicalsEntity>
  ){}

  createChemicaSales( chemical:chemicalsEntity){
    
   return this.chemicalsRepository.save(chemical);


  }

  getChemicaSales() :Promise<chemicalDTO[]>{
  
     return this.chemicalsRepository.find()

  }
 async deleteChemicalSales( id:number) :Promise<void>{
  
  await this.chemicalsRepository.delete(id)

 }


}
