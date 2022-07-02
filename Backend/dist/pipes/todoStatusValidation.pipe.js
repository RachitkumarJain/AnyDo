"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const todo_entity_1 = require("../Entity/todo.entity");
class TodoStatusValidationPipe {
    constructor() {
        this.allowedStatus = [todo_entity_1.TodoStatus.OPEN, todo_entity_1.TodoStatus.WIP, todo_entity_1.TodoStatus.COMPLETED];
    }
    transform(value, metadata) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} is an invalid status.`);
        }
        return value;
    }
    isStatusValid(status) {
        const index = this.allowedStatus.indexOf(status);
        return index !== -1;
    }
}
exports.TodoStatusValidationPipe = TodoStatusValidationPipe;
//# sourceMappingURL=TodoStatusValidation.pipe.js.map