import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class cartEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()  
   
    // @ApiProperty()
    // userId: number;

    @Column()  
    @ApiProperty()
    item: number;

    @Column()
    @ApiProperty()
    quantity: number;
    
    @Column()
    name: string; 

    @Column()
    image: string; 

    @Column()
    price: string; 

}
