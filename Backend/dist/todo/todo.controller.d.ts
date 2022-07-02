import { TodoService } from "./todo.service";
import { CreateTodoDto } from "../DTO/create-todo.dto";
import { TodoStatus } from "../Entity/todo.entity";
import { UserEntity } from "../Entity/user.entity";
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getAllTodos(user: UserEntity): Promise<import("../Entity/todo.entity").TodoEntity[]>;
    createNewTodo(data: CreateTodoDto, user: UserEntity): Promise<import("../Entity/todo.entity").TodoEntity>;
    updateTodo(status: TodoStatus, id: number, user: UserEntity): Promise<import("../Entity/todo.entity").TodoEntity>;
    deleteTodo(id: number, user: UserEntity): Promise<{
        success: boolean;
    }>;
}
