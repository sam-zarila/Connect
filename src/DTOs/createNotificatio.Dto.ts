

import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class notifacationDTO {
  id: number;
  
  @ApiProperty({ description: 'creation date ' })
  @IsDate()
  @IsNotEmpty()
  date: Date;
  
  @ApiProperty({ description: 'Title of the notification' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'message of the notification' })
  @IsString()
  @IsNotEmpty()
  message: string;
}
