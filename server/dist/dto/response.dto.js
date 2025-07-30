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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiInfoResponseDto = exports.ApiInfoDataDto = exports.HealthCheckDto = exports.MonthlyStatsResponseDto = exports.MonthlyStatsDto = exports.PasswordVerificationResponseDto = exports.PasswordVerificationDto = exports.PointBalanceResponseDto = exports.PointBalanceDto = exports.PayHistoriesResponseDto = exports.PayHistoryResponseDto = exports.PayHistoryWithDetailsDto = exports.PayHistoryDto = exports.CategoriesResponseDto = exports.CategoryResponseDto = exports.CategoryDto = exports.StoresResponseDto = exports.StoreResponseDto = exports.StoreDto = exports.UsersResponseDto = exports.UserResponseDto = exports.UserDto = exports.ErrorResponseDto = exports.BaseResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class BaseResponseDto {
    success;
    data;
    message;
}
exports.BaseResponseDto = BaseResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], BaseResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '응답 데이터' }),
    __metadata("design:type", Object)
], BaseResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: '성공적으로 처리되었습니다.',
    }),
    __metadata("design:type", String)
], BaseResponseDto.prototype, "message", void 0);
class ErrorResponseDto {
    success;
    statusCode;
    timestamp;
    path;
    method;
    message;
}
exports.ErrorResponseDto = ErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: false }),
    __metadata("design:type", Boolean)
], ErrorResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'HTTP 상태 코드', example: 400 }),
    __metadata("design:type", Number)
], ErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '타임스탬프',
        example: '2024-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], ErrorResponseDto.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '요청 경로', example: '/users' }),
    __metadata("design:type", String)
], ErrorResponseDto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'HTTP 메서드', example: 'POST' }),
    __metadata("design:type", String)
], ErrorResponseDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '오류 메시지', example: '잘못된 요청입니다.' }),
    __metadata("design:type", String)
], ErrorResponseDto.prototype, "message", void 0);
class UserDto {
    user_id;
    name;
    pw_number;
    pw_pattern;
    created_at;
    updated_at;
}
exports.UserDto = UserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용자 ID', example: 'john_doe' }),
    __metadata("design:type", String)
], UserDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용자 이름', example: '홍길동' }),
    __metadata("design:type", String)
], UserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '숫자 패스워드', example: 1234 }),
    __metadata("design:type", Number)
], UserDto.prototype, "pw_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '패턴 패스워드', example: 5678 }),
    __metadata("design:type", Number)
], UserDto.prototype, "pw_pattern", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성일', example: '2024-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], UserDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정일', example: '2024-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], UserDto.prototype, "updated_at", void 0);
class UserResponseDto {
    success;
    data;
    message;
}
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: UserDto }),
    __metadata("design:type", UserDto)
], UserResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: '사용자가 성공적으로 조회되었습니다.',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "message", void 0);
class UsersResponseDto {
    success;
    data;
    message;
}
exports.UsersResponseDto = UsersResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], UsersResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [UserDto] }),
    __metadata("design:type", Array)
], UsersResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: '사용자 목록이 성공적으로 조회되었습니다.',
    }),
    __metadata("design:type", String)
], UsersResponseDto.prototype, "message", void 0);
class StoreDto {
    store_id;
    name;
    address;
    image;
    created_at;
    updated_at;
}
exports.StoreDto = StoreDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '매장 ID', example: 'store_001' }),
    __metadata("design:type", String)
], StoreDto.prototype, "store_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '매장 이름', example: '스타벅스 강남점' }),
    __metadata("design:type", String)
], StoreDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '매장 주소',
        example: '서울시 강남구 테헤란로 123',
    }),
    __metadata("design:type", String)
], StoreDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '매장 이미지 URL',
        example: 'https://example.com/image.jpg',
        required: false,
    }),
    __metadata("design:type", String)
], StoreDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성일', example: '2024-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], StoreDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정일', example: '2024-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], StoreDto.prototype, "updated_at", void 0);
class StoreResponseDto {
    success;
    data;
    message;
}
exports.StoreResponseDto = StoreResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], StoreResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: StoreDto }),
    __metadata("design:type", StoreDto)
], StoreResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: '매장이 성공적으로 조회되었습니다.',
    }),
    __metadata("design:type", String)
], StoreResponseDto.prototype, "message", void 0);
class StoresResponseDto {
    success;
    data;
    message;
}
exports.StoresResponseDto = StoresResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], StoresResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [StoreDto] }),
    __metadata("design:type", Array)
], StoresResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: '매장 목록이 성공적으로 조회되었습니다.',
    }),
    __metadata("design:type", String)
], StoresResponseDto.prototype, "message", void 0);
class CategoryDto {
    category_id;
    name;
    created_at;
    updated_at;
}
exports.CategoryDto = CategoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '카테고리 ID', example: 'cat_001' }),
    __metadata("design:type", String)
], CategoryDto.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '카테고리 이름', example: '음료' }),
    __metadata("design:type", String)
], CategoryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성일', example: '2024-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], CategoryDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정일', example: '2024-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], CategoryDto.prototype, "updated_at", void 0);
class CategoryResponseDto {
    success;
    data;
    message;
}
exports.CategoryResponseDto = CategoryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], CategoryResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CategoryDto }),
    __metadata("design:type", CategoryDto)
], CategoryResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: '카테고리가 성공적으로 조회되었습니다.',
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "message", void 0);
class CategoriesResponseDto {
    success;
    data;
    message;
}
exports.CategoriesResponseDto = CategoriesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], CategoriesResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CategoryDto] }),
    __metadata("design:type", Array)
], CategoriesResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: '카테고리 목록이 성공적으로 조회되었습니다.',
    }),
    __metadata("design:type", String)
], CategoriesResponseDto.prototype, "message", void 0);
class PayHistoryDto {
    pay_id;
    user_id;
    store_id;
    method_id;
    time;
    amount;
    created_at;
    updated_at;
}
exports.PayHistoryDto = PayHistoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '결제 ID', example: 'pay_001' }),
    __metadata("design:type", String)
], PayHistoryDto.prototype, "pay_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용자 ID', example: 'john_doe' }),
    __metadata("design:type", String)
], PayHistoryDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '매장 ID', example: 'store_001' }),
    __metadata("design:type", String)
], PayHistoryDto.prototype, "store_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '결제 수단 ID', example: 'method_001' }),
    __metadata("design:type", String)
], PayHistoryDto.prototype, "method_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '거래 시간',
        example: '2024-01-01T12:00:00.000Z',
    }),
    __metadata("design:type", String)
], PayHistoryDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '금액 (양수: 적립, 음수: 사용)', example: 1000 }),
    __metadata("design:type", Number)
], PayHistoryDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성일', example: '2024-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], PayHistoryDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정일', example: '2024-01-01T00:00:00.000Z' }),
    __metadata("design:type", String)
], PayHistoryDto.prototype, "updated_at", void 0);
class PayHistoryWithDetailsDto extends PayHistoryDto {
    user_name;
    store_name;
    method_type;
    method_name;
}
exports.PayHistoryWithDetailsDto = PayHistoryWithDetailsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '사용자 이름',
        example: '홍길동',
        required: false,
    }),
    __metadata("design:type", String)
], PayHistoryWithDetailsDto.prototype, "user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '매장 이름',
        example: '스타벅스 강남점',
        required: false,
    }),
    __metadata("design:type", String)
], PayHistoryWithDetailsDto.prototype, "store_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '결제 수단 타입',
        example: '카드',
        required: false,
    }),
    __metadata("design:type", String)
], PayHistoryWithDetailsDto.prototype, "method_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '결제 수단 이름',
        example: '신한카드',
        required: false,
    }),
    __metadata("design:type", String)
], PayHistoryWithDetailsDto.prototype, "method_name", void 0);
class PayHistoryResponseDto {
    success;
    data;
    message;
}
exports.PayHistoryResponseDto = PayHistoryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], PayHistoryResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PayHistoryDto }),
    __metadata("design:type", PayHistoryDto)
], PayHistoryResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: '결제 내역이 성공적으로 조회되었습니다.',
    }),
    __metadata("design:type", String)
], PayHistoryResponseDto.prototype, "message", void 0);
class PayHistoriesResponseDto {
    success;
    data;
    message;
}
exports.PayHistoriesResponseDto = PayHistoriesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], PayHistoriesResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PayHistoryWithDetailsDto] }),
    __metadata("design:type", Array)
], PayHistoriesResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: '결제 내역 목록이 성공적으로 조회되었습니다.',
    }),
    __metadata("design:type", String)
], PayHistoriesResponseDto.prototype, "message", void 0);
class PointBalanceDto {
    balance;
}
exports.PointBalanceDto = PointBalanceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '현재 포인트 잔액', example: 5000 }),
    __metadata("design:type", Number)
], PointBalanceDto.prototype, "balance", void 0);
class PointBalanceResponseDto {
    success;
    data;
    message;
}
exports.PointBalanceResponseDto = PointBalanceResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], PointBalanceResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PointBalanceDto }),
    __metadata("design:type", PointBalanceDto)
], PointBalanceResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: '현재 포인트 잔액: 5000원',
    }),
    __metadata("design:type", String)
], PointBalanceResponseDto.prototype, "message", void 0);
class PasswordVerificationDto {
    isValid;
}
exports.PasswordVerificationDto = PasswordVerificationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '비밀번호 일치 여부', example: true }),
    __metadata("design:type", Boolean)
], PasswordVerificationDto.prototype, "isValid", void 0);
class PasswordVerificationResponseDto {
    success;
    data;
    message;
}
exports.PasswordVerificationResponseDto = PasswordVerificationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], PasswordVerificationResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PasswordVerificationDto }),
    __metadata("design:type", PasswordVerificationDto)
], PasswordVerificationResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: '비밀번호가 일치합니다.',
    }),
    __metadata("design:type", String)
], PasswordVerificationResponseDto.prototype, "message", void 0);
class MonthlyStatsDto {
    totalAmount;
    transactionCount;
    month;
}
exports.MonthlyStatsDto = MonthlyStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '총 거래 금액', example: 15000 }),
    __metadata("design:type", Number)
], MonthlyStatsDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '거래 횟수', example: 8 }),
    __metadata("design:type", Number)
], MonthlyStatsDto.prototype, "transactionCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '조회 월', example: '2024-01' }),
    __metadata("design:type", String)
], MonthlyStatsDto.prototype, "month", void 0);
class MonthlyStatsResponseDto {
    success;
    data;
    message;
}
exports.MonthlyStatsResponseDto = MonthlyStatsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], MonthlyStatsResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: MonthlyStatsDto }),
    __metadata("design:type", MonthlyStatsDto)
], MonthlyStatsResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: '월별 통계가 성공적으로 조회되었습니다.',
    }),
    __metadata("design:type", String)
], MonthlyStatsResponseDto.prototype, "message", void 0);
class HealthCheckDto {
    success;
    message;
    timestamp;
    version;
}
exports.HealthCheckDto = HealthCheckDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], HealthCheckDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: 'API is running successfully',
    }),
    __metadata("design:type", String)
], HealthCheckDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '타임스탬프',
        example: '2024-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", String)
], HealthCheckDto.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '버전', example: '1.0.0' }),
    __metadata("design:type", String)
], HealthCheckDto.prototype, "version", void 0);
class ApiInfoDataDto {
    name;
    version;
    description;
    endpoints;
    documentation;
}
exports.ApiInfoDataDto = ApiInfoDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'API 이름',
        example: '포인트 적립/사용 시스템 API',
    }),
    __metadata("design:type", String)
], ApiInfoDataDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '버전', example: '1.0.0' }),
    __metadata("design:type", String)
], ApiInfoDataDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '설명',
        example: 'Supabase를 백엔드로 사용하는 NestJS 기반의 포인트 적립 및 사용 시스템',
    }),
    __metadata("design:type", String)
], ApiInfoDataDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '엔드포인트 목록',
        example: {
            users: '/users',
            stores: '/stores',
            categories: '/categories',
            payHistory: '/pay-history',
        },
    }),
    __metadata("design:type", Object)
], ApiInfoDataDto.prototype, "endpoints", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '문서', example: 'README.md 파일을 참조하세요.' }),
    __metadata("design:type", String)
], ApiInfoDataDto.prototype, "documentation", void 0);
class ApiInfoResponseDto {
    success;
    data;
    message;
}
exports.ApiInfoResponseDto = ApiInfoResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부', example: true }),
    __metadata("design:type", Boolean)
], ApiInfoResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ApiInfoDataDto }),
    __metadata("design:type", ApiInfoDataDto)
], ApiInfoResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '응답 메시지',
        example: 'API 정보가 성공적으로 조회되었습니다.',
    }),
    __metadata("design:type", String)
], ApiInfoResponseDto.prototype, "message", void 0);
//# sourceMappingURL=response.dto.js.map