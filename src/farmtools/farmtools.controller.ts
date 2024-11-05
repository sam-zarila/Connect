import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FarmtoolsService } from './farmtools.service';
import { farmEntity } from 'src/Entities/FarmEntity';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { farmToolDto } from 'src/DTOs/createFarmTool.Dto';



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
@Get()
@ApiOperation({summary:'retrieving farm tools'})
findFarmTools():Promise<farmToolDto[]>{

  return this.farmToolsService.findFarmTools()

}

@Delete()
@ApiOperation({summary:'deleting farm tools'})
@ApiParam({name:'id', description:'is the id of the farm', type:Number})

removeFarmTools(@Param('id') id:number){
  
  return this.farmToolsService.removefarmTools(id)
  
  
}

 
}
