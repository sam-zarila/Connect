import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { listingEntity } from 'src/Entities/listing.Entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListingService {
  constructor(
      @InjectRepository(listingEntity) private listingRepository:Repository<listingEntity>,
  ){ }

  createListing(listing:listingEntity){
    return this.listingRepository.save(listing);

  }

  findListing(): Promise<listingEntity[]>{
    return this.listingRepository.find()
    
  }
  async updateListing(id:number, updateData: Partial<listingEntity>){
    await this.listingRepository.update(id,updateData)
    return this.listingRepository.findOneBy({id})

  }

  async removeListing(id:number): Promise<void>{


      await this.listingRepository.delete(id)

  }

}
