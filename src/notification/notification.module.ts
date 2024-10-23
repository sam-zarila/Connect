import { Module } from '@nestjs/common';
import { NotificationController } from 'src/notifacation/controllers/notification/notification.controller';
import { NotificationService } from 'src/notifacation/services/notification/notification.service';
import { notifacationEntity } from 'src/Entities/notification.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports:[
        TypeOrmModule.forFeature([notifacationEntity])
    ],
    controllers:[NotificationController],
    providers:[NotificationService]
    
})
export class NotificationModule {}
