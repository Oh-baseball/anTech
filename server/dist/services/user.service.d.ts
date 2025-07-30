import { DatabaseConfig } from '../config/database.config';
import { User, CreateUserDto, UpdateUserDto } from '../entities/user.entity';
export declare class UserService {
    private databaseConfig;
    constructor(databaseConfig: DatabaseConfig);
    private get supabase();
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findByUserId(userId: number): Promise<User>;
    findAllUsers(): Promise<User[]>;
    updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<User>;
    deleteUser(userId: number): Promise<void>;
    verifyPassword(userId: number, password: string): Promise<boolean>;
    findUsersByCompany(companyId: string): Promise<User[]>;
}
