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
exports.TossController = exports.CardController = exports.AccountController = exports.PaymentMethodController = exports.LogoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payment_service_1 = require("../services/payment.service");
const payment_dto_1 = require("../dto/payment.dto");
let LogoController = class LogoController {
    paymentService;
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async createLogo(createLogoDto) {
        const logo = await this.paymentService.createLogo(createLogoDto);
        return {
            success: true,
            data: logo,
            message: '로고가 성공적으로 생성되었습니다.',
        };
    }
    async getAllLogos() {
        const logos = await this.paymentService.findAllLogos();
        return {
            success: true,
            data: logos,
        };
    }
    async getLogo(logoId) {
        const logo = await this.paymentService.findLogoById(logoId);
        return {
            success: true,
            data: logo,
        };
    }
    async updateLogo(logoId, updateLogoDto) {
        const logo = await this.paymentService.updateLogo(logoId, updateLogoDto);
        return {
            success: true,
            data: logo,
            message: '로고 정보가 성공적으로 업데이트되었습니다.',
        };
    }
    async deleteLogo(logoId) {
        await this.paymentService.deleteLogo(logoId);
        return {
            success: true,
            message: '로고가 성공적으로 삭제되었습니다.',
        };
    }
};
exports.LogoController = LogoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '로고 생성',
        description: '새로운 로고를 생성합니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_dto_1.CreateLogoDto]),
    __metadata("design:returntype", Promise)
], LogoController.prototype, "createLogo", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '모든 로고 조회',
        description: '등록된 모든 로고 목록을 조회합니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LogoController.prototype, "getAllLogos", null);
__decorate([
    (0, common_1.Get)(':logoId'),
    (0, swagger_1.ApiOperation)({
        summary: '로고 조회',
        description: '로고 ID로 로고 정보를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'logoId', description: '로고 ID', example: 'LOGO0001' }),
    __param(0, (0, common_1.Param)('logoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LogoController.prototype, "getLogo", null);
__decorate([
    (0, common_1.Put)(':logoId'),
    (0, swagger_1.ApiOperation)({
        summary: '로고 정보 수정',
        description: '로고 정보를 수정합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'logoId', description: '로고 ID', example: 'LOGO0001' }),
    __param(0, (0, common_1.Param)('logoId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, payment_dto_1.UpdateLogoDto]),
    __metadata("design:returntype", Promise)
], LogoController.prototype, "updateLogo", null);
__decorate([
    (0, common_1.Delete)(':logoId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: '로고 삭제',
        description: '로고를 삭제합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'logoId', description: '로고 ID', example: 'LOGO0001' }),
    __param(0, (0, common_1.Param)('logoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LogoController.prototype, "deleteLogo", null);
exports.LogoController = LogoController = __decorate([
    (0, swagger_1.ApiTags)('logos'),
    (0, common_1.Controller)('logos'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], LogoController);
let PaymentMethodController = class PaymentMethodController {
    paymentService;
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async createPaymentMethod(createPaymentMethodDto) {
        const paymentMethod = await this.paymentService.createPaymentMethod(createPaymentMethodDto);
        return {
            success: true,
            data: paymentMethod,
            message: '결제 수단이 성공적으로 생성되었습니다.',
        };
    }
    async getAllPaymentMethods() {
        const paymentMethods = await this.paymentService.findAllPaymentMethods();
        return {
            success: true,
            data: paymentMethods,
        };
    }
    async getPaymentMethodsByType(type) {
        const paymentMethods = await this.paymentService.findPaymentMethodsByType(type);
        return {
            success: true,
            data: paymentMethods,
        };
    }
    async getPaymentMethod(methodId) {
        const paymentMethod = await this.paymentService.findPaymentMethodById(methodId);
        return {
            success: true,
            data: paymentMethod,
        };
    }
    async updatePaymentMethod(methodId, updatePaymentMethodDto) {
        const paymentMethod = await this.paymentService.updatePaymentMethod(methodId, updatePaymentMethodDto);
        return {
            success: true,
            data: paymentMethod,
            message: '결제 수단 정보가 성공적으로 업데이트되었습니다.',
        };
    }
    async deletePaymentMethod(methodId) {
        await this.paymentService.deletePaymentMethod(methodId);
        return {
            success: true,
            message: '결제 수단이 성공적으로 삭제되었습니다.',
        };
    }
};
exports.PaymentMethodController = PaymentMethodController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '결제 수단 생성',
        description: '새로운 결제 수단을 생성합니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_dto_1.CreatePaymentMethodDto]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "createPaymentMethod", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '모든 결제 수단 조회',
        description: '등록된 모든 결제 수단 목록을 조회합니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "getAllPaymentMethods", null);
__decorate([
    (0, common_1.Get)('type/:type'),
    (0, swagger_1.ApiOperation)({
        summary: '타입별 결제 수단 조회',
        description: '특정 타입의 결제 수단들을 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'type',
        description: '결제 수단 타입',
        example: 'CARD',
        enum: ['CARD', 'BANK', 'MOBILE'],
    }),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "getPaymentMethodsByType", null);
__decorate([
    (0, common_1.Get)(':methodId'),
    (0, swagger_1.ApiOperation)({
        summary: '결제 수단 조회',
        description: '결제 수단 ID로 결제 수단 정보를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'methodId',
        description: '결제 수단 ID',
        example: 'METHOD0001',
    }),
    __param(0, (0, common_1.Param)('methodId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "getPaymentMethod", null);
__decorate([
    (0, common_1.Put)(':methodId'),
    (0, swagger_1.ApiOperation)({
        summary: '결제 수단 정보 수정',
        description: '결제 수단 정보를 수정합니다.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'methodId',
        description: '결제 수단 ID',
        example: 'METHOD0001',
    }),
    __param(0, (0, common_1.Param)('methodId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, payment_dto_1.UpdatePaymentMethodDto]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "updatePaymentMethod", null);
__decorate([
    (0, common_1.Delete)(':methodId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: '결제 수단 삭제',
        description: '결제 수단을 삭제합니다.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'methodId',
        description: '결제 수단 ID',
        example: 'METHOD0001',
    }),
    __param(0, (0, common_1.Param)('methodId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "deletePaymentMethod", null);
exports.PaymentMethodController = PaymentMethodController = __decorate([
    (0, swagger_1.ApiTags)('payment-methods'),
    (0, common_1.Controller)('payment-methods'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentMethodController);
let AccountController = class AccountController {
    paymentService;
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async createAccount(createAccountDto) {
        const account = await this.paymentService.createAccount(createAccountDto);
        return {
            success: true,
            data: account,
            message: '계좌가 성공적으로 생성되었습니다.',
        };
    }
    async getAccountsByUserId(userId) {
        const accounts = await this.paymentService.findAccountsByUserId(userId);
        return {
            success: true,
            data: accounts,
        };
    }
    async getAccount(accountId) {
        const account = await this.paymentService.findAccountById(accountId);
        return {
            success: true,
            data: account,
        };
    }
    async updateAccount(accountId, updateAccountDto) {
        const account = await this.paymentService.updateAccount(accountId, updateAccountDto);
        return {
            success: true,
            data: account,
            message: '계좌 정보가 성공적으로 업데이트되었습니다.',
        };
    }
    async deleteAccount(accountId) {
        await this.paymentService.deleteAccount(accountId);
        return {
            success: true,
            message: '계좌가 성공적으로 삭제되었습니다.',
        };
    }
};
exports.AccountController = AccountController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '계좌 생성',
        description: '새로운 계좌를 생성합니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_dto_1.CreateAccountDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "createAccount", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOperation)({
        summary: '사용자별 계좌 조회',
        description: '특정 사용자의 모든 계좌를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '사용자 ID', example: 1 }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "getAccountsByUserId", null);
__decorate([
    (0, common_1.Get)(':accountId'),
    (0, swagger_1.ApiOperation)({
        summary: '계좌 조회',
        description: '계좌 ID로 계좌 정보를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'accountId', description: '계좌 ID', example: 'ACC0001' }),
    __param(0, (0, common_1.Param)('accountId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "getAccount", null);
__decorate([
    (0, common_1.Put)(':accountId'),
    (0, swagger_1.ApiOperation)({
        summary: '계좌 정보 수정',
        description: '계좌 정보를 수정합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'accountId', description: '계좌 ID', example: 'ACC0001' }),
    __param(0, (0, common_1.Param)('accountId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, payment_dto_1.UpdateAccountDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "updateAccount", null);
__decorate([
    (0, common_1.Delete)(':accountId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: '계좌 삭제',
        description: '계좌를 삭제합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'accountId', description: '계좌 ID', example: 'ACC0001' }),
    __param(0, (0, common_1.Param)('accountId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "deleteAccount", null);
exports.AccountController = AccountController = __decorate([
    (0, swagger_1.ApiTags)('accounts'),
    (0, common_1.Controller)('accounts'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], AccountController);
let CardController = class CardController {
    paymentService;
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async createCard(createCardDto) {
        const card = await this.paymentService.createCard(createCardDto);
        return {
            success: true,
            data: card,
            message: '카드가 성공적으로 생성되었습니다.',
        };
    }
    async getCardsByUserId(userId) {
        const cards = await this.paymentService.findCardsByUserId(userId);
        return {
            success: true,
            data: cards,
        };
    }
    async getCard(cardId) {
        const card = await this.paymentService.findCardById(cardId);
        return {
            success: true,
            data: card,
        };
    }
    async updateCard(cardId, updateCardDto) {
        const card = await this.paymentService.updateCard(cardId, updateCardDto);
        return {
            success: true,
            data: card,
            message: '카드 정보가 성공적으로 업데이트되었습니다.',
        };
    }
    async deleteCard(cardId) {
        await this.paymentService.deleteCard(cardId);
        return {
            success: true,
            message: '카드가 성공적으로 삭제되었습니다.',
        };
    }
};
exports.CardController = CardController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '카드 생성',
        description: '새로운 카드를 생성합니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_dto_1.CreateCardDto]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "createCard", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOperation)({
        summary: '사용자별 카드 조회',
        description: '특정 사용자의 모든 카드를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '사용자 ID', example: 1 }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "getCardsByUserId", null);
__decorate([
    (0, common_1.Get)(':cardId'),
    (0, swagger_1.ApiOperation)({
        summary: '카드 조회',
        description: '카드 ID로 카드 정보를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'cardId', description: '카드 ID', example: 'CARD0001' }),
    __param(0, (0, common_1.Param)('cardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "getCard", null);
__decorate([
    (0, common_1.Put)(':cardId'),
    (0, swagger_1.ApiOperation)({
        summary: '카드 정보 수정',
        description: '카드 정보를 수정합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'cardId', description: '카드 ID', example: 'CARD0001' }),
    __param(0, (0, common_1.Param)('cardId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, payment_dto_1.UpdateCardDto]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "updateCard", null);
__decorate([
    (0, common_1.Delete)(':cardId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: '카드 삭제',
        description: '카드를 삭제합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'cardId', description: '카드 ID', example: 'CARD0001' }),
    __param(0, (0, common_1.Param)('cardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "deleteCard", null);
exports.CardController = CardController = __decorate([
    (0, swagger_1.ApiTags)('cards'),
    (0, common_1.Controller)('cards'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], CardController);
let TossController = class TossController {
    paymentService;
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async createToss(createTossDto) {
        const toss = await this.paymentService.createToss(createTossDto);
        return {
            success: true,
            data: toss,
            message: '토스 송금이 성공적으로 생성되었습니다.',
        };
    }
    async getTossByUserId(userId) {
        const tossList = await this.paymentService.findTossByUserId(userId);
        return {
            success: true,
            data: tossList,
        };
    }
    async getToss(tossId) {
        const toss = await this.paymentService.findTossById(tossId);
        return {
            success: true,
            data: toss,
        };
    }
    async updateToss(tossId, updateTossDto) {
        const toss = await this.paymentService.updateToss(tossId, updateTossDto);
        return {
            success: true,
            data: toss,
            message: '토스 정보가 성공적으로 업데이트되었습니다.',
        };
    }
    async deleteToss(tossId) {
        await this.paymentService.deleteToss(tossId);
        return {
            success: true,
            message: '토스가 성공적으로 삭제되었습니다.',
        };
    }
    async getTossStatsByCompany(companyId) {
        const stats = await this.paymentService.getTossStatsByCompany(companyId);
        return {
            success: true,
            data: stats,
        };
    }
};
exports.TossController = TossController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '토스 송금 생성',
        description: '새로운 토스 송금을 생성합니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_dto_1.CreateTossDto]),
    __metadata("design:returntype", Promise)
], TossController.prototype, "createToss", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOperation)({
        summary: '사용자별 토스 내역 조회',
        description: '특정 사용자의 모든 토스 내역을 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '사용자 ID', example: 1 }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TossController.prototype, "getTossByUserId", null);
__decorate([
    (0, common_1.Get)(':tossId'),
    (0, swagger_1.ApiOperation)({
        summary: '토스 조회',
        description: '토스 ID로 토스 정보를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'tossId', description: '토스 ID', example: 1 }),
    __param(0, (0, common_1.Param)('tossId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TossController.prototype, "getToss", null);
__decorate([
    (0, common_1.Put)(':tossId'),
    (0, swagger_1.ApiOperation)({
        summary: '토스 정보 수정',
        description: '토스 정보를 수정합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'tossId', description: '토스 ID', example: 1 }),
    __param(0, (0, common_1.Param)('tossId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, payment_dto_1.UpdateTossDto]),
    __metadata("design:returntype", Promise)
], TossController.prototype, "updateToss", null);
__decorate([
    (0, common_1.Delete)(':tossId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: '토스 삭제',
        description: '토스를 삭제합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'tossId', description: '토스 ID', example: 1 }),
    __param(0, (0, common_1.Param)('tossId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TossController.prototype, "deleteToss", null);
__decorate([
    (0, common_1.Get)('stats/company/:companyId'),
    (0, swagger_1.ApiOperation)({
        summary: '회사별 토스 통계 조회',
        description: '특정 회사의 토스 통계를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'companyId', description: '회사 ID', example: 'COMP0001' }),
    __param(0, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TossController.prototype, "getTossStatsByCompany", null);
exports.TossController = TossController = __decorate([
    (0, swagger_1.ApiTags)('toss'),
    (0, common_1.Controller)('toss'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], TossController);
//# sourceMappingURL=payment.controller.js.map