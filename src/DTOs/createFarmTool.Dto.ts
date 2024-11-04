import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"


export class farmToolDto{

    @ApiProperty({description:'unique identifier'})
    @IsNotEmpty()
    @IsNumber()
     id:number

     @ApiProperty({description:'image of the listing'})
     @IsNotEmpty()
     @IsString()

     image:string

     @ApiProperty({description:'image of the listing'})
     @IsNotEmpty()
     @IsString()

     description:string

     @ApiProperty({description:'image of the listing'})
     @IsNotEmpty()
     @IsString()

     price:string 

}