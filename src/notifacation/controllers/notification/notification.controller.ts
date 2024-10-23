import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { notifacationDTO } from 'src/DTOs/createNotificatio.Dto';
import { NotificationService } from 'src/notifacation/services/notification/notification.service';


@ApiTags('Notification')
@Controller('notification')
export class NotificationController {

    constructor(
        private readonly notification: NotificationService
    ){}

    @Post()
     createNotification(@Body() notification:notifacationDTO){
        return this.notification.create(notification)
        
     }

     @Get()
     async findNotification(): Promise<notifacationDTO[]> {
       return this.notification.findAll(); 
     }
   }
     
    
