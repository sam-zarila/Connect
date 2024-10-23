import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { taskDTO } from 'src/DTOs/task.Dto';
import { Task } from 'src/Entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>
    ) {}

    async createTask(createTaskDto: taskDTO): Promise<Task> {
        const task = this.taskRepository.create(createTaskDto);
        return await this.taskRepository.save(task);
    }

    async getTasks(): Promise<Task[]> {
        return await this.taskRepository.find();
    }

    async getCompletedTask(): Promise<{ percentage: number }> {
        const completedTasks = await this.taskRepository.find({ where: { status: 'completed' } });
        const totalTasks = await this.taskRepository.count();
    
        const percentage = totalTasks === 0 ? 0 : (completedTasks.length / totalTasks) * 100;
    
        return { percentage };  
    }
    

    async deleteTask(id: number): Promise<void> {
        const task = await this.taskRepository.findOneBy({ id });

        if (!task) {
            throw new NotFoundException('task not found');
        }

        await this.taskRepository.remove(task);
    }
}
