import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class notifacationEntity{
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id:number

    @Column()
    @ApiProperty()
    date:Date

    @Column()
    @ApiProperty()
    title:string

    @Column()
    @ApiProperty()
    message: string

}