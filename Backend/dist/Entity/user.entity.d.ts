import { TodoEntity } from "./todo.entity";
export declare class UserEntity {
    id: number;
    username: string;
    password: string;
    salt: string;
    todos: TodoEntity[];
}
