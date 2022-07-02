"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const create_todo_dto_1 = require("../DTO/create-todo.dto");
const todo_entity_1 = require("../Entity/todo.entity");
const TodoStatusValidation_pipe_1 = require("../pipes/TodoStatusValidation.pipe");
const passport_1 = require("@nestjs/passport");
const user_decorator_1 = require("../auth/user.decorator");
const user_entity_1 = require("../Entity/user.entity");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    getAllTodos(user) {
        return this.todoService.getAllTodos(user);
    }
    createNewTodo(data, user) {
        return this.todoService.createTodo(data, user);
    }
    updateTodo(status, id, user) {
        return this.todoService.update(id, status, user);
    }
    deleteTodo(id, user) {
        return this.todoService.delete(id, user);
    }
};
__decorate([
    common_1.Get(),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getAllTodos", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateTodoDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "createNewTodo", null);
__decorate([
    common_1.Patch(":id"),
    __param(0, common_1.Body("status", TodoStatusValidation_pipe_1.TodoStatusValidationPipe)),
    __param(1, common_1.Param("id")),
    __param(2, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "updateTodo", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Param("id")),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "deleteTodo", null);
TodoController = __decorate([
    common_1.Controller("todos"),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map