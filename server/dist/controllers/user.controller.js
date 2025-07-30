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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("../services/user.service");
const user_dto_1 = require("../dto/user.dto");
const response_dto_1 = require("../dto/response.dto");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(createUserDto) {
        const user = await this.userService.createUser(createUserDto);
        const { password, ...userWithoutPassword } = user;
        return {
            success: true,
            data: userWithoutPassword,
            message: '사용자가 성공적으로 생성되었습니다.',
        };
    }
    async getAllUsers() {
        const users = await this.userService.findAllUsers();
        const usersWithoutPassword = users.map(({ password, ...user }) => user);
        return {
            success: true,
            data: usersWithoutPassword,
        };
    }
    async getUser(userId) {
        const user = await this.userService.findByUserId(userId);
        const { password, ...userWithoutPassword } = user;
        return {
            success: true,
            data: userWithoutPassword,
        };
    }
    async updateUser(userId, updateUserDto) {
        const user = await this.userService.updateUser(userId, updateUserDto);
        const { password, ...userWithoutPassword } = user;
        return {
            success: true,
            data: userWithoutPassword,
            message: '사용자 정보가 성공적으로 업데이트되었습니다.',
        };
    }
    async deleteUser(userId) {
        await this.userService.deleteUser(userId);
        return {
            success: true,
            message: '사용자가 성공적으로 삭제되었습니다.',
        };
    }
    async verifyPassword(userId, verifyPasswordDto) {
        const isValid = await this.userService.verifyPassword(userId, verifyPasswordDto.password);
        return {
            success: true,
            data: { isValid },
            message: isValid
                ? '비밀번호가 일치합니다.'
                : '비밀번호가 일치하지 않습니다.',
        };
    }
    async getUsersByCompany(companyId) {
        const users = await this.userService.findUsersByCompany(companyId);
        const usersWithoutPassword = users.map(({ password, ...user }) => user);
        return {
            success: true,
            data: usersWithoutPassword,
        };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '사용자 생성',
        description: '새로운 사용자를 생성합니다. user_id는 자동으로 생성됩니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '사용자가 성공적으로 생성되었습니다.',
        type: response_dto_1.UserResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '잘못된 요청 데이터입니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '모든 사용자 조회',
        description: '등록된 모든 사용자 목록을 조회합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '사용자 목록 조회 성공',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':userId'),
    (0, swagger_1.ApiOperation)({
        summary: '사용자 조회',
        description: '사용자 ID로 사용자 정보를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '사용자 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '사용자 정보 조회 성공',
        type: response_dto_1.UserResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: '사용자를 찾을 수 없습니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Put)(':userId'),
    (0, swagger_1.ApiOperation)({
        summary: '사용자 정보 수정',
        description: '사용자 정보를 수정합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '사용자 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '사용자 정보가 성공적으로 수정되었습니다.',
        type: response_dto_1.UserResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: '사용자를 찾을 수 없습니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '잘못된 요청 데이터입니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':userId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: '사용자 삭제', description: '사용자를 삭제합니다.' }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '사용자 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: '사용자가 성공적으로 삭제되었습니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: '사용자를 찾을 수 없습니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Post)(':userId/verify-password'),
    (0, swagger_1.ApiOperation)({
        summary: '비밀번호 확인',
        description: '사용자의 비밀번호를 확인합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '사용자 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '비밀번호 확인 완료',
        type: response_dto_1.PasswordVerificationResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: '사용자를 찾을 수 없습니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.VerifyPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verifyPassword", null);
__decorate([
    (0, common_1.Get)('company/:companyId'),
    (0, swagger_1.ApiOperation)({
        summary: '회사별 사용자 조회',
        description: '특정 회사에 속한 사용자들을 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'companyId', description: '회사 ID', example: 'COMP0001' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '회사별 사용자 목록 조회 성공',
    }),
    __param(0, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsersByCompany", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map