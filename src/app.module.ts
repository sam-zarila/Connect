import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './Entities/task.entity';
import { NotificationModule } from './notification/notification.module';
import { NotificationService } from './notifacation/services/notification/notification.service';
import { NotificationController } from './notifacation/controllers/notification/notification.controller';
import { notifacationEntity } from './Entities/notification.entity';
import { ListingModule } from './listing/listing.module';
import { listingEntity } from './Entities/listing.Entity';
import { CartModule } from './cart/cart.module';
import { cartEntity } from './Entities/createCart.Entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'farm_connect',
      entities: [Task, notifacationEntity,listingEntity,cartEntity ],
      synchronize: false,
    }),
    TasksModule,
    NotificationModule,
    ListingModule,
    CartModule
  ],
  controllers: [AppController, NotificationController],
  providers: [AppService, NotificationService],
})
export class AppModule {}
