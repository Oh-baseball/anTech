import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto, VerifyPasswordDto } from '../dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<{
        success: boolean;
        data: {
            user_id: number;
            company_id?: string;
            name: string;
            pw_number?: string;
            pw_pattern?: string;
            created_at?: Date;
            updated_at?: Date;
        };
        message: string;
    }>;
    getAllUsers(): Promise<{
        success: boolean;
        data: {
            user_id: number;
            company_id?: string;
            name: string;
            pw_number?: string;
            pw_pattern?: string;
            created_at?: Date;
            updated_at?: Date;
        }[];
    }>;
    getUser(userId: number): Promise<{
        success: boolean;
        data: {
            user_id: number;
            company_id?: string;
            name: string;
            pw_number?: string;
            pw_pattern?: string;
            created_at?: Date;
            updated_at?: Date;
        };
    }>;
    updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<{
        success: boolean;
        data: {
            user_id: number;
            company_id?: string;
            name: string;
            pw_number?: string;
            pw_pattern?: string;
            created_at?: Date;
            updated_at?: Date;
        };
        message: string;
    }>;
    deleteUser(userId: number): Promise<{
        success: boolean;
        message: string;
    }>;
    verifyPassword(userId: number, verifyPasswordDto: VerifyPasswordDto): Promise<{
        success: boolean;
        data: {
            isValid: boolean;
        };
        message: string;
    }>;
    getUsersByCompany(companyId: string): Promise<{
        success: boolean;
        data: {
            user_id: number;
            company_id?: string;
            name: string;
            pw_number?: string;
            pw_pattern?: string;
            created_at?: Date;
            updated_at?: Date;
        }[];
    }>;
}
