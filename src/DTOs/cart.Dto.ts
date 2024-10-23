import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString, IsNotEmpty } from 'class-validator';

export class addToCartDto {
    @ApiProperty()
    @IsInt()
    @IsPositive()
    item: number; 

    @ApiProperty()
    @IsInt()
    @IsPositive()
    quantity: number; 

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string; 

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    image: string; 

    @ApiProperty()
    @IsInt()
    @IsPositive()
    price: string; 
}
