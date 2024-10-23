import { Module } from '@nestjs/common';
import { ListingController } from './controllers/listing/listing.controller';
import { ListingService } from './services/listing/listing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { listingEntity } from 'src/Entities/listing.Entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([listingEntity])
  ],
  controllers: [ListingController],
  providers: [ListingService]
})
export class ListingModule {}
