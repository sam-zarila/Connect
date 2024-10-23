import { Injectable } from '@nestjs/common';
import { notifacationDTO } from 'src/DTOs/createNotificatio.Dto';

 interface Notification{
    id:number;
    date:Date;
    title:string;
    message:string;
 }

@Injectable()
export class NotificationService {

    private notification: Notification[] =[];

    private idCounter =1;

    create(createNotification:notifacationDTO){
        const newNotification = {
            id: this.idCounter++, ...createNotification
        };
        this.notification.push(newNotification);
        return newNotification;

    }
    findAll(){
        return this.notification;
    }

}
