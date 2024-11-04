import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FarmtoolsService } from './farmtools.service';
import { farmEntity } from 'src/Entities/FarmEntity';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';



@ApiTags('Farm Tools')
@Controller('farmtools')
export class FarmtoolsController {

  constructor(private readonly farmToolsService: FarmtoolsService) {}

  @Post()
  @ApiOperation({summary:'creating farm tools'})
  @ApiBody({type: farmEntity})

  createFarmTools(@Body() farmEntity:farmEntity){

    return this.farmToolsService.createFarmTools(farmEntity)
  }


 
}
