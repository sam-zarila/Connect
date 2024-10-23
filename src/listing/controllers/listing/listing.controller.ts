import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createListingDTO } from 'src/DTOs/createListing.DTO';
import { listingEntity } from 'src/Entities/listing.Entity';
import { ListingService } from 'src/listing/services/listing/listing.service';


@ApiTags('market Listings')
@Controller('listing')
export class ListingController {
 constructor(

    private readonly listing:ListingService
 ){}

 @Post()
 @ApiOperation({summary:'create new market listing'})
 @ApiBody({type:listingEntity})
 @ApiResponse({status:204, description:'created new listing', type:listingEntity})
   createMarketListing(@Body() ListingEntity:listingEntity){

    return this. listing.createListing(ListingEntity)

   }

 @Get()
 @ApiOperation({summary:'retrieve the created listings'})
 @ApiResponse({status:205, description:'listings retrieved', type:createListingDTO})
   findListing():Promise<createListingDTO[]>{
    return this.listing.findListing()

  }

  @Put(':id')
  @ApiOperation({summary:'updated the listings'})
  @ApiParam({ name:'id', description:'he ID of the property', type:Number})
  @ApiBody({type:listingEntity})
  @ApiResponse({status:204, description:'updtaed listings', type:listingEntity})
  updateListing( @Param(':id') id:number, @Body() updateData:Partial<listingEntity>){
    return this.listing.updateListing(id, updateData) 
  }
  @Delete(':id')
  @ApiOperation({summary:'deleted the listings'})
  @ApiParam({ name:'id', description:'he ID of the property', type:Number})
  @ApiResponse({status:204, description:'updtaed listings'})
  removeListing(@Param(':id') id:number)
  {
      return this.listing.removeListing(id)
  }

 

}
