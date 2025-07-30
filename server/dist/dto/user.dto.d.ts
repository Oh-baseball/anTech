export declare class CreateUserDto {
    company_id?: string;
    password: string;
    name: string;
    pw_number?: string;
    pw_pattern?: string;
}
export declare class UpdateUserDto {
    company_id?: string;
    password?: string;
    name?: string;
    pw_number?: string;
    pw_pattern?: string;
}
export declare class VerifyPasswordDto {
    password: string;
}
