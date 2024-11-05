import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChemicalService } from './chemical.service';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { chemicalsEntity } from './entities/chemical.entity';
import { createListingDTO } from 'src/DTOs/createListing.DTO';



@ApiTags('Chemicals Sales')
@Controller('chemical')
export class ChemicalController {

  constructor(
    private readonly chemicalService: ChemicalService
  ){}

  @Post()
  @ApiOperation({summary:'creating chemical sales'})
  @ApiBody({type: chemicalsEntity})

   postChemicalSales(@Body() chemicalsEntity:chemicalsEntity){

    return this.chemicalService.createChemicaSales(chemicalsEntity)

   }
  @Get()
  @ApiOperation({summary:'retrieving chemical sales'})
  getChemicalSales(): Promise<createListingDTO[]>{
    
    return this.chemicalService.getChemicaSales()

  }

  @Delete()
  @ApiOperation({summary:'deleting chemical sales'})
  @ApiParam({name:'id', description:'is the id of the chemical', type:Number})
  removeChemicalSales(@Param(':id') id:number){

    return this.chemicalService.deleteChemicalSales(id)

  }

 


 
}
