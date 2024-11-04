import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class farmEntity{
    @PrimaryGeneratedColumn()
    @ApiProperty()
    
    id: number;

    @Column()
    @ApiProperty()
    image: string;

    @Column()
    @ApiProperty()
    name: string;


    @Column()
    @ApiProperty()
    price: string;
}