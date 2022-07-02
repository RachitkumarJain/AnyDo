"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../Entity/user.entity");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const jwt_custom_strategy_1 = require("./jwt-custom.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]),
            jwt_1.JwtModule.register({
                secret: "LOijtrkljdklsufidsui12jkj43k21l4",
                signOptions: {
                    algorithm: "HS512",
                    expiresIn: "1d"
                }
            }),
            passport_1.PassportModule.register({
                defaultStrategy: "jwt"
            })
        ],
        providers: [auth_service_1.AuthService, jwt_custom_strategy_1.JwtCustomStrategy],
        controllers: [auth_controller_1.AuthController],
        exports: [passport_1.PassportModule, jwt_custom_strategy_1.JwtCustomStrategy]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map