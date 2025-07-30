export interface User {
    user_id: number;
    company_id?: string;
    password: string;
    name: string;
    pw_number?: string;
    pw_pattern?: string;
    created_at?: Date;
    updated_at?: Date;
}
export interface CreateUserDto {
    company_id?: string;
    password: string;
    name: string;
    pw_number?: string;
    pw_pattern?: string;
}
export interface UpdateUserDto {
    company_id?: string;
    password?: string;
    name?: string;
    pw_number?: string;
    pw_pattern?: string;
}
