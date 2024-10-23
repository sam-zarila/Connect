import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

 export class Task{
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id:number

    @Column()
    @ApiProperty()
    title:string
    @Column()
    @ApiProperty()
    description: string

    @Column()
    @ApiProperty()
    date:Date

    @Column()
    @ApiProperty()
    status:string

    @Column( {type:'float', default:0})
    @ApiProperty()
    percentage:number

 }
