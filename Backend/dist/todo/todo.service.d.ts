import { TodoEntity, TodoStatus } from '../Entity/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from '../DTO/create-todo.dto';
import { UserEntity } from '../Entity/user.entity';
export declare class TodoService {
    private repo;
    constructor(repo: Repository<TodoEntity>);
    getAllTodos(user: UserEntity): Promise<TodoEntity[]>;
    createTodo(createTodoDTO: CreateTodoDto, user: UserEntity): Promise<TodoEntity>;
    update(id: number, status: TodoStatus, user: UserEntity): Promise<TodoEntity>;
    delete(id: number, user: UserEntity): Promise<{
        success: boolean;
    }>;
}
