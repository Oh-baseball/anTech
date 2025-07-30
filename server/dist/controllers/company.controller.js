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
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const company_service_1 = require("../services/company.service");
const company_dto_1 = require("../dto/company.dto");
const response_dto_1 = require("../dto/response.dto");
let CompanyController = class CompanyController {
    companyService;
    constructor(companyService) {
        this.companyService = companyService;
    }
    async createCompany(createCompanyDto) {
        const company = await this.companyService.createCompany(createCompanyDto);
        return {
            success: true,
            data: company,
            message: '회사가 성공적으로 생성되었습니다.',
        };
    }
    async getAllCompanies() {
        const companies = await this.companyService.findAllCompanies();
        return {
            success: true,
            data: companies,
        };
    }
    async getCompany(companyId) {
        const company = await this.companyService.findCompanyById(companyId);
        return {
            success: true,
            data: company,
        };
    }
    async updateCompany(companyId, updateCompanyDto) {
        const company = await this.companyService.updateCompany(companyId, updateCompanyDto);
        return {
            success: true,
            data: company,
            message: '회사 정보가 성공적으로 업데이트되었습니다.',
        };
    }
    async deleteCompany(companyId) {
        await this.companyService.deleteCompany(companyId);
        return {
            success: true,
            message: '회사가 성공적으로 삭제되었습니다.',
        };
    }
    async addPoints(companyId, body) {
        const company = await this.companyService.addPoints(companyId, body.amount);
        return {
            success: true,
            data: company,
            message: `${body.amount} 포인트가 추가되었습니다.`,
        };
    }
    async deductPoints(companyId, body) {
        const company = await this.companyService.deductPoints(companyId, body.amount);
        return {
            success: true,
            data: company,
            message: `${body.amount} 포인트가 차감되었습니다.`,
        };
    }
    async getCompanyStats(companyId) {
        const stats = await this.companyService.getCompanyStats(companyId);
        return {
            success: true,
            data: stats,
        };
    }
};
exports.CompanyController = CompanyController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '회사 생성',
        description: '새로운 회사를 생성합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '회사가 성공적으로 생성되었습니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: '이미 존재하는 회사 ID입니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '잘못된 요청 데이터입니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_dto_1.CreateCompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "createCompany", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '모든 회사 조회',
        description: '등록된 모든 회사 목록을 조회합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '회사 목록 조회 성공',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getAllCompanies", null);
__decorate([
    (0, common_1.Get)(':companyId'),
    (0, swagger_1.ApiOperation)({
        summary: '회사 조회',
        description: '회사 ID로 회사 정보를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'companyId', description: '회사 ID', example: 'COMP0001' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '회사 정보 조회 성공',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: '회사를 찾을 수 없습니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getCompany", null);
__decorate([
    (0, common_1.Put)(':companyId'),
    (0, swagger_1.ApiOperation)({
        summary: '회사 정보 수정',
        description: '회사 정보를 수정합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'companyId', description: '회사 ID', example: 'COMP0001' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '회사 정보가 성공적으로 수정되었습니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: '회사를 찾을 수 없습니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '잘못된 요청 데이터입니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Param)('companyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, company_dto_1.UpdateCompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "updateCompany", null);
__decorate([
    (0, common_1.Delete)(':companyId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: '회사 삭제',
        description: '회사를 삭제합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'companyId', description: '회사 ID', example: 'COMP0001' }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: '회사가 성공적으로 삭제되었습니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: '회사를 찾을 수 없습니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "deleteCompany", null);
__decorate([
    (0, common_1.Put)(':companyId/points/add'),
    (0, swagger_1.ApiOperation)({
        summary: '회사 포인트 추가',
        description: '회사의 포인트를 추가합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'companyId', description: '회사 ID', example: 'COMP0001' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '포인트가 성공적으로 추가되었습니다.',
    }),
    __param(0, (0, common_1.Param)('companyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "addPoints", null);
__decorate([
    (0, common_1.Put)(':companyId/points/deduct'),
    (0, swagger_1.ApiOperation)({
        summary: '회사 포인트 차감',
        description: '회사의 포인트를 차감합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'companyId', description: '회사 ID', example: 'COMP0001' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '포인트가 성공적으로 차감되었습니다.',
    }),
    __param(0, (0, common_1.Param)('companyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "deductPoints", null);
__decorate([
    (0, common_1.Get)(':companyId/stats'),
    (0, swagger_1.ApiOperation)({
        summary: '회사 통계 조회',
        description: '회사의 사용자 수, 토스 내역 등 통계를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'companyId', description: '회사 ID', example: 'COMP0001' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '회사 통계 조회 성공',
    }),
    __param(0, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getCompanyStats", null);
exports.CompanyController = CompanyController = __decorate([
    (0, swagger_1.ApiTags)('companies'),
    (0, common_1.Controller)('companies'),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
//# sourceMappingURL=company.controller.js.map