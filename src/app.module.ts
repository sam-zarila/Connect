import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
import { FarmtoolsController } from './farmtools/farmtools.controller';
import { FarmtoolsModule } from './farmtools/farmtools.module';
import { farmEntity } from './Entities/FarmEntity';
import { ChemicalModule } from './chemical/chemical.module';
import { chemicalsEntity } from './chemical/entities/chemical.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Task, notifacationEntity, listingEntity, cartEntity, farmEntity, chemicalsEntity],
        synchronize: true,
        
      }),
      inject: [ConfigService],
    }),
    TasksModule,
    NotificationModule,
    ListingModule,
    CartModule,
    FarmtoolsModule,
    ChemicalModule,
  ],
  controllers: [AppController, NotificationController, FarmtoolsController],
  providers: [AppService, NotificationService],
})
export class AppModule {}
