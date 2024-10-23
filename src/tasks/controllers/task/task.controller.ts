import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { taskDTO } from 'src/DTOs/task.Dto';
import { Task } from 'src/Entities/task.entity';
import { TaskService } from 'src/tasks/services/task/task.service';

@ApiTags('Task and completion')
@Controller('task')
export class TaskController {
    constructor(private readonly taskservice: TaskService) {}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.taskservice.getTasks();
    }

    @Post()
    createTask(@Body() createTaskDto: taskDTO): Promise<Task> {
        return this.taskservice.createTask(createTaskDto);
    }

    @Get('percentage')  
    getCompletedPercentage(): Promise<{ percentage: number }> {
        return this.taskservice.getCompletedTask();
    }

    @Delete(':id')
    async removeTask(@Param('id') id: number): Promise<void> {
        return this.taskservice.deleteTask(id);
    }
}
