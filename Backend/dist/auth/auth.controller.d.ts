import { AuthService } from './auth.service';
import { RegisterUserDto } from '../DTO/registerUser.dto';
import { UserLoginDto } from '../DTO/userLogin.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registration(regDTO: RegisterUserDto): Promise<import("../Entity/user.entity").UserEntity>;
    signin(loginDTO: UserLoginDto): Promise<{
        token: string;
    }>;
}
