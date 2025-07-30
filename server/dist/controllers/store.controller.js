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
exports.CategoryController = exports.StoreController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const store_service_1 = require("../services/store.service");
const store_dto_1 = require("../dto/store.dto");
const response_dto_1 = require("../dto/response.dto");
let StoreController = class StoreController {
    storeService;
    constructor(storeService) {
        this.storeService = storeService;
    }
    async createStore(createStoreDto) {
        const store = await this.storeService.createStore(createStoreDto);
        return {
            success: true,
            data: store,
            message: '매장이 성공적으로 생성되었습니다.',
        };
    }
    async getAllStores() {
        const stores = await this.storeService.findAllStores();
        return {
            success: true,
            data: stores,
        };
    }
    async searchStores(keyword) {
        if (!keyword) {
            return {
                success: false,
                message: '검색 키워드를 입력해주세요.',
            };
        }
        const stores = await this.storeService.searchStores(keyword);
        return {
            success: true,
            data: stores,
            message: `'${keyword}'에 대한 검색 결과입니다.`,
        };
    }
    async getStore(storeId) {
        const store = await this.storeService.findStoreById(storeId);
        return {
            success: true,
            data: store,
        };
    }
    async updateStore(storeId, updateStoreDto) {
        const store = await this.storeService.updateStore(storeId, updateStoreDto);
        return {
            success: true,
            data: store,
            message: '매장 정보가 성공적으로 업데이트되었습니다.',
        };
    }
    async deleteStore(storeId) {
        await this.storeService.deleteStore(storeId);
        return {
            success: true,
            message: '매장이 성공적으로 삭제되었습니다.',
        };
    }
    async getStoreMenus(storeId) {
        const menus = await this.storeService.getStoreMenus(storeId);
        return {
            success: true,
            data: menus,
        };
    }
    async getMenusByCategory(storeId, categoryId) {
        const menus = await this.storeService.getMenusByCategory(storeId, categoryId);
        return {
            success: true,
            data: menus,
        };
    }
    async getStoreStats(storeId) {
        const stats = await this.storeService.getStoreStats(storeId);
        return {
            success: true,
            data: stats,
        };
    }
};
exports.StoreController = StoreController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '매장 생성',
        description: '새로운 매장을 생성합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '매장이 성공적으로 생성되었습니다.',
        type: response_dto_1.StoreResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '잘못된 요청 데이터입니다.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_dto_1.CreateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "createStore", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '매장 목록 조회',
        description: '모든 매장 목록을 조회합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '매장 목록 조회 성공',
        type: response_dto_1.StoresResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "getAllStores", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({
        summary: '매장 검색',
        description: '키워드로 매장을 검색합니다.',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'keyword',
        description: '검색 키워드',
        example: '스타벅스',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '매장 검색 성공',
        type: response_dto_1.StoresResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '검색 키워드를 입력해주세요.',
        type: response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Query)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "searchStores", null);
__decorate([
    (0, common_1.Get)(':storeId'),
    (0, swagger_1.ApiOperation)({
        summary: '매장 상세 조회',
        description: '매장 ID로 상세 정보를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'storeId', description: '매장 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '매장 상세 정보 조회 성공' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: '매장을 찾을 수 없습니다.' }),
    __param(0, (0, common_1.Param)('storeId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "getStore", null);
__decorate([
    (0, common_1.Put)(':storeId'),
    (0, swagger_1.ApiOperation)({
        summary: '매장 정보 수정',
        description: '매장 정보를 수정합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'storeId', description: '매장 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '매장 정보가 성공적으로 수정되었습니다.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: '매장을 찾을 수 없습니다.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: '잘못된 요청 데이터입니다.' }),
    __param(0, (0, common_1.Param)('storeId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, store_dto_1.UpdateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "updateStore", null);
__decorate([
    (0, common_1.Delete)(':storeId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: '매장 삭제', description: '매장을 삭제합니다.' }),
    (0, swagger_1.ApiParam)({ name: 'storeId', description: '매장 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: '매장이 성공적으로 삭제되었습니다.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: '매장을 찾을 수 없습니다.' }),
    __param(0, (0, common_1.Param)('storeId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "deleteStore", null);
__decorate([
    (0, common_1.Get)(':storeId/menus'),
    (0, swagger_1.ApiOperation)({
        summary: '매장 메뉴 조회',
        description: '매장의 모든 메뉴를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'storeId', description: '매장 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '매장 메뉴 조회 성공' }),
    __param(0, (0, common_1.Param)('storeId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "getStoreMenus", null);
__decorate([
    (0, common_1.Get)(':storeId/menus/category/:categoryId'),
    (0, swagger_1.ApiOperation)({
        summary: '카테고리별 메뉴 조회',
        description: '특정 카테고리의 메뉴를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'storeId', description: '매장 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiParam)({
        name: 'categoryId',
        description: '카테고리 ID',
        example: 'CAT0001',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '카테고리별 메뉴 조회 성공' }),
    __param(0, (0, common_1.Param)('storeId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "getMenusByCategory", null);
__decorate([
    (0, common_1.Get)(':storeId/stats'),
    (0, swagger_1.ApiOperation)({
        summary: '매장 통계 조회',
        description: '매장의 메뉴 수, 결제 내역 수 등 통계를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({ name: 'storeId', description: '매장 ID (숫자)', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '매장 통계 조회 성공' }),
    __param(0, (0, common_1.Param)('storeId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "getStoreStats", null);
exports.StoreController = StoreController = __decorate([
    (0, swagger_1.ApiTags)('stores'),
    (0, common_1.Controller)('stores'),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], StoreController);
let CategoryController = class CategoryController {
    storeService;
    constructor(storeService) {
        this.storeService = storeService;
    }
    async getAllCategories() {
        const categories = await this.storeService.getAllCategories();
        return {
            success: true,
            data: categories,
        };
    }
    async getCategory(categoryId) {
        const category = await this.storeService.getCategoryById(categoryId);
        return {
            success: true,
            data: category,
        };
    }
    async createCategory(createCategoryDto) {
        const category = await this.storeService.createCategory(createCategoryDto.category_id, createCategoryDto.name);
        return {
            success: true,
            data: category,
            message: '카테고리가 성공적으로 생성되었습니다.',
        };
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '카테고리 목록 조회',
        description: '모든 카테고리 목록을 조회합니다.',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '카테고리 목록 조회 성공' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAllCategories", null);
__decorate([
    (0, common_1.Get)(':categoryId'),
    (0, swagger_1.ApiOperation)({
        summary: '카테고리 조회',
        description: '카테고리 ID로 카테고리 정보를 조회합니다.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'categoryId',
        description: '카테고리 ID',
        example: 'CAT0001',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '카테고리 조회 성공' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: '카테고리를 찾을 수 없습니다.' }),
    __param(0, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategory", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '카테고리 생성',
        description: '새로운 카테고리를 생성합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '카테고리가 성공적으로 생성되었습니다.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: '카테고리 정보를 입력해주세요.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)('categories'),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], CategoryController);
//# sourceMappingURL=store.controller.js.map