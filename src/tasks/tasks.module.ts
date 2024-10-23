import { Module } from '@nestjs/common';
import { TaskController } from './controllers/task/task.controller';
import { TaskService } from './services/task/task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/Entities/task.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TasksModule {}
