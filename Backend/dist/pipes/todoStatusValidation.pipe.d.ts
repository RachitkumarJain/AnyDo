import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { TodoStatus } from "../Entity/todo.entity";
export declare class TodoStatusValidationPipe implements PipeTransform {
    readonly allowedStatus: TodoStatus[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
