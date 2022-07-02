import { UserEntity } from "./user.entity";
export declare class TodoEntity {
    id: number;
    title: string;
    description: string;
    status: TodoStatus;
    user: UserEntity;
    userId: number;
}
export declare enum TodoStatus {
    OPEN = "OPEN",
    WIP = "WIP",
    COMPLETED = "COMPLETED"
}
