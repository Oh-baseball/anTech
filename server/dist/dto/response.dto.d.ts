export declare class BaseResponseDto<T = any> {
    success: boolean;
    data?: T;
    message?: string;
}
export declare class ErrorResponseDto {
    success: boolean;
    statusCode: number;
    timestamp: string;
    path: string;
    method: string;
    message: string;
}
export declare class UserDto {
    user_id: string;
    name: string;
    pw_number: number;
    pw_pattern: number;
    created_at: string;
    updated_at: string;
}
export declare class UserResponseDto {
    success: boolean;
    data: UserDto;
    message?: string;
}
export declare class UsersResponseDto {
    success: boolean;
    data: UserDto[];
    message?: string;
}
export declare class StoreDto {
    store_id: string;
    name: string;
    address: string;
    image?: string;
    created_at: string;
    updated_at: string;
}
export declare class StoreResponseDto {
    success: boolean;
    data: StoreDto;
    message?: string;
}
export declare class StoresResponseDto {
    success: boolean;
    data: StoreDto[];
    message?: string;
}
export declare class CategoryDto {
    category_id: string;
    name: string;
    created_at: string;
    updated_at: string;
}
export declare class CategoryResponseDto {
    success: boolean;
    data: CategoryDto;
    message?: string;
}
export declare class CategoriesResponseDto {
    success: boolean;
    data: CategoryDto[];
    message?: string;
}
export declare class PayHistoryDto {
    pay_id: string;
    user_id: string;
    store_id: string;
    method_id: string;
    time: string;
    amount: number;
    created_at: string;
    updated_at: string;
}
export declare class PayHistoryWithDetailsDto extends PayHistoryDto {
    user_name?: string;
    store_name?: string;
    method_type?: string;
    method_name?: string;
}
export declare class PayHistoryResponseDto {
    success: boolean;
    data: PayHistoryDto;
    message?: string;
}
export declare class PayHistoriesResponseDto {
    success: boolean;
    data: PayHistoryWithDetailsDto[];
    message?: string;
}
export declare class PointBalanceDto {
    balance: number;
}
export declare class PointBalanceResponseDto {
    success: boolean;
    data: PointBalanceDto;
    message: string;
}
export declare class PasswordVerificationDto {
    isValid: boolean;
}
export declare class PasswordVerificationResponseDto {
    success: boolean;
    data: PasswordVerificationDto;
    message: string;
}
export declare class MonthlyStatsDto {
    totalAmount: number;
    transactionCount: number;
    month: string;
}
export declare class MonthlyStatsResponseDto {
    success: boolean;
    data: MonthlyStatsDto;
    message?: string;
}
export declare class HealthCheckDto {
    success: boolean;
    message: string;
    timestamp: string;
    version: string;
}
export declare class ApiInfoDataDto {
    name: string;
    version: string;
    description: string;
    endpoints: object;
    documentation: string;
}
export declare class ApiInfoResponseDto {
    success: boolean;
    data: ApiInfoDataDto;
    message?: string;
}
