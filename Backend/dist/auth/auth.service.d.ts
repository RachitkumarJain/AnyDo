import { UserEntity } from '../Entity/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from '../DTO/registerUser.dto';
import { UserLoginDto } from '../DTO/userLogin.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private repo;
    private jwt;
    constructor(repo: Repository<UserEntity>, jwt: JwtService);
    registerUser(registerDTO: RegisterUserDto): Promise<UserEntity>;
    loginUser(userLoginDTO: UserLoginDto): Promise<{
        token: string;
    }>;
}
