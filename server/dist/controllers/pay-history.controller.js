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
exports.PayHistoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pay_history_service_1 = require("../services/pay-history.service");
const pay_history_dto_1 = require("../dto/pay-history.dto");
const response_dto_1 = require("../dto/response.dto");
let PayHistoryController = class PayHistoryController {
    payHistoryService;
    constructor(payHistoryService) {
        this.payHistoryService = payHistoryService;
    }
    async createPayHistory(createPayHistoryDto) {
        const payHistory = await this.payHistoryService.createPayHistory(createPayHistoryDto);
        return {
            success: true,
            data: payHistory,
            message: '결제 이력이 성공적으로 생성되었습니다.',
        };
    }
    async getUserPayHistory(userId) {
        const payHistory = await this.payHistoryService.findByUserId(userId);
        return {
            success: true,
            data: payHistory,
        };
    }
    async getStorePayHistory(storeId) {
        const payHistory = await this.payHistoryService.findByStoreId(storeId);
        return {
            success: true,
            data: payHistory,
        };
    }
    async getPayHistory(payId) {
        const payHistory = await this.payHistoryService.findByPayId(payId);
        return {
            success: true,
            data: payHistory,
        };
    }
    async getUserPointBalance(userId) {
        const balance = await this.payHistoryService.getUserPointBalance(userId);
        return {
            success: true,
            data: { balance },
            message: `현재 포인트 잔액: ${balance}원`,
        };
    }
    async getMonthlyStats(userId, year, month) {
        const yearNum = parseInt(year, 10);
        const monthNum = parseInt(month, 10);
        if (isNaN(yearNum) || isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
            return {
                success: false,
                message: '올바른 년도와 월을 입력해주세요.',
            };
        }
        const stats = await this.payHistoryService.getMonthlyStats(userId, yearNum, monthNum);
        return {
            success: true,
            data: stats,
        };
    }
    async earnPoints(earnPointsDto) {
        if (earnPointsDto.amount <= 0) {
            return {
                success: false,
                message: '적립할 포인트는 0보다 커야 합니다.',
            };
        }
        const payHistory = await this.payHistoryService.earnPoints(earnPointsDto.user_id, earnPointsDto.store_id, earnPointsDto.method_id, earnPointsDto.amount);
        return {
            success: true,
            data: payHistory,
            message: `${earnPointsDto.amount}원이 적립되었습니다.`,
        };
    }
    async usePoints(usePointsDto) {
        if (usePointsDto.amount <= 0) {
            return {
                success: false,
                message: '사용할 포인트는 0보다 커야 합니다.',
            };
        }
        try {
            const payHistory = await this.payHistoryService.usePoints(usePointsDto.user_id, usePointsDto.store_id, usePointsDto.method_id, usePointsDto.amount);
            return {
                success: true,
                data: payHistory,
                message: `${usePointsDto.amount}원이 사용되었습니다.`,
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    }
    async getPaymentMethodStats(methodId) {
        const stats = await this.payHistoryService.getPaymentMethodStats(methodId);
        return {
            success: true,
            data: stats,
        };
    }
};
exports.PayHistoryController = PayHistoryController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '결제 이력 생성',
        description: '새로운 결제 이력을 생성합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '결제 이력이 성공적으로 생성되었습니다.',
        type: response_dto_1.PayHistoryResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '잘못된 요청 데이터입니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pay_history_dto_1.CreatePayHistoryDto]),
    __metadata("design:returntype", Promise)
], PayHistoryController.prototype, "createPayHistory", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOperation)({
        summary: '사용자 결제 이력 조회',
        description: '특정 사용자의 모든 결제 이력을 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '사용자 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '사용자 결제 이력 조회 성공',
        type: response_dto_1.PayHistoriesResponseDto,
    }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PayHistoryController.prototype, "getUserPayHistory", null);
__decorate([
    (0, common_1.Get)('store/:storeId'),
    (0, swagger_1.ApiOperation)({
        summary: '매장 결제 이력 조회',
        description: '특정 매장의 모든 결제 이력을 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'storeId', description: '매장 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '매장 결제 이력 조회 성공',
        type: response_dto_1.PayHistoriesResponseDto,
    }),
    __param(0, (0, common_1.Param)('storeId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PayHistoryController.prototype, "getStorePayHistory", null);
__decorate([
    (0, common_1.Get)('pay/:payId'),
    (0, swagger_1.ApiOperation)({
        summary: '결제 내역 조회',
        description: '결제 ID로 결제 내역을 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'payId', description: '결제 ID', example: 'PAY0001' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '결제 내역 조회 성공',
    }),
    __param(0, (0, common_1.Param)('payId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PayHistoryController.prototype, "getPayHistory", null);
__decorate([
    (0, common_1.Get)('user/:userId/balance'),
    (0, swagger_1.ApiOperation)({
        summary: '사용자 포인트 잔액 조회',
        description: '사용자의 현재 포인트 잔액을 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '사용자 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '포인트 잔액 조회 성공',
        type: response_dto_1.PointBalanceResponseDto,
    }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PayHistoryController.prototype, "getUserPointBalance", null);
__decorate([
    (0, common_1.Get)('user/:userId/monthly-stats'),
    (0, swagger_1.ApiOperation)({
        summary: '월별 포인트 통계 조회',
        description: '사용자의 특정 월 포인트 사용 통계를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '사용자 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'year', description: '연도', example: '2024' }),
    (0, swagger_1.ApiQuery)({ name: 'month', description: '월 (1-12)', example: '1' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '월별 통계 조회 성공',
        type: response_dto_1.MonthlyStatsResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '올바른 년도와 월을 입력해주세요.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('year')),
    __param(2, (0, common_1.Query)('month')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], PayHistoryController.prototype, "getMonthlyStats", null);
__decorate([
    (0, common_1.Post)('earn-points'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '포인트 적립',
        description: '사용자에게 포인트를 적립합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '포인트가 성공적으로 적립되었습니다.',
        type: response_dto_1.PayHistoryResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '적립할 포인트는 0보다 커야 합니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pay_history_dto_1.CreatePayHistoryDto]),
    __metadata("design:returntype", Promise)
], PayHistoryController.prototype, "earnPoints", null);
__decorate([
    (0, common_1.Post)('use-points'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '포인트 사용',
        description: '사용자의 포인트를 사용합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '포인트가 성공적으로 사용되었습니다.',
        type: response_dto_1.PayHistoryResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '포인트 잔액이 부족합니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pay_history_dto_1.CreatePayHistoryDto]),
    __metadata("design:returntype", Promise)
], PayHistoryController.prototype, "usePoints", null);
__decorate([
    (0, common_1.Get)('method/:methodId/stats'),
    (0, swagger_1.ApiOperation)({
        summary: '결제 수단별 통계 조회',
        description: '특정 결제 수단의 이용 통계를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'methodId',
        description: '결제 수단 ID',
        example: 'METHOD0001',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '결제 수단 통계 조회 성공',
    }),
    __param(0, (0, common_1.Param)('methodId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PayHistoryController.prototype, "getPaymentMethodStats", null);
exports.PayHistoryController = PayHistoryController = __decorate([
    (0, swagger_1.ApiTags)('pay-history'),
    (0, common_1.Controller)('pay-history'),
    __metadata("design:paramtypes", [pay_history_service_1.PayHistoryService])
], PayHistoryController);
//# sourceMappingURL=pay-history.controller.js.map