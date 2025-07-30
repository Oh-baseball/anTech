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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_service_1 = require("./app.service");
const database_config_1 = require("./config/database.config");
let AppController = class AppController {
    appService;
    databaseConfig;
    constructor(appService, databaseConfig) {
        this.appService = appService;
        this.databaseConfig = databaseConfig;
    }
    getHello() {
        return this.appService.getHello();
    }
    getHealth() {
        return {
            success: true,
            message: 'API is running successfully',
            timestamp: new Date().toISOString(),
            version: '1.0.0',
        };
    }
    async getDatabaseHealth() {
        try {
            const isConnected = await this.databaseConfig.testConnection();
            return {
                success: isConnected,
                message: isConnected
                    ? '✅ Supabase 연결이 정상입니다.'
                    : '❌ Supabase 연결에 실패했습니다.',
                timestamp: new Date().toISOString(),
                database: 'Supabase',
                status: isConnected ? 'connected' : 'disconnected',
            };
        }
        catch (error) {
            return {
                success: false,
                message: `❌ Supabase 연결 오류: ${error.message}`,
                timestamp: new Date().toISOString(),
                database: 'Supabase',
                status: 'error',
                error: error.message,
            };
        }
    }
    getApiInfo() {
        return {
            success: true,
            data: {
                name: '포인트 적립/사용 시스템 API',
                version: '1.0.0',
                description: 'Supabase를 백엔드로 사용하는 NestJS 기반의 포인트 적립 및 사용 시스템',
                endpoints: {
                    users: '/users',
                    stores: '/stores',
                    categories: '/categories',
                    payHistory: '/pay-history',
                },
                documentation: 'README.md 파일을 참조하세요.',
            },
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('health'),
    (0, swagger_1.ApiOperation)({
        summary: '헬스체크',
        description: 'API 서버 상태를 확인합니다.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'API 서버가 정상 작동 중입니다.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHealth", null);
__decorate([
    (0, common_1.Get)('health/database'),
    (0, swagger_1.ApiOperation)({
        summary: 'Supabase 연결 테스트',
        description: 'Supabase 데이터베이스 연결 상태를 확인합니다.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Supabase 연결이 정상입니다.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Supabase 연결에 실패했습니다.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getDatabaseHealth", null);
__decorate([
    (0, common_1.Get)('api/info'),
    (0, swagger_1.ApiOperation)({
        summary: 'API 정보 조회',
        description: 'API의 기본 정보와 사용 가능한 엔드포인트를 조회합니다.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'API 정보 조회 성공' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getApiInfo", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)('system'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        database_config_1.DatabaseConfig])
], AppController);
//# sourceMappingURL=app.controller.js.map