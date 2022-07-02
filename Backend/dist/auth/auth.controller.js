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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const registerUser_dto_1 = require("../DTO/registerUser.dto");
const userLogin_dto_1 = require("../DTO/userLogin.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    registration(regDTO) {
        return this.authService.registerUser(regDTO);
    }
    signin(loginDTO) {
        return this.authService.loginUser(loginDTO);
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registerUser_dto_1.RegisterUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registration", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userLogin_dto_1.UserLoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signin", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map