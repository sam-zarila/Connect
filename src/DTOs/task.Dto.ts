import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class taskDTO{
  @ApiProperty({ description: 'Title of the task' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Description of the task', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Status of the task' })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({ description: 'Completion percentage of the task' })
  @IsNumber()
  @IsNotEmpty()
  completionPercentage: number;
}
