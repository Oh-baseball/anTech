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
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../config/database.config");
let StoreService = class StoreService {
    databaseConfig;
    constructor(databaseConfig) {
        this.databaseConfig = databaseConfig;
    }
    get supabase() {
        return this.databaseConfig.getClient();
    }
    async createStore(createStoreDto) {
        const { data, error } = await this.supabase
            .from('store')
            .insert([createStoreDto])
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to create store: ${error.message}`);
        }
        return data;
    }
    async findAllStores() {
        const { data, error } = await this.supabase
            .from('store')
            .select('*')
            .order('name');
        if (error) {
            throw new Error(`Failed to fetch stores: ${error.message}`);
        }
        return data || [];
    }
    async findStoreById(storeId) {
        const { data, error } = await this.supabase
            .from('store')
            .select('*')
            .eq('store_id', storeId)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Store not found');
        }
        return data;
    }
    async updateStore(storeId, updateStoreDto) {
        const { data, error } = await this.supabase
            .from('store')
            .update(updateStoreDto)
            .eq('store_id', storeId)
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to update store: ${error.message}`);
        }
        if (!data) {
            throw new common_1.NotFoundException('Store not found');
        }
        return data;
    }
    async deleteStore(storeId) {
        const { error } = await this.supabase
            .from('store')
            .delete()
            .eq('store_id', storeId);
        if (error) {
            throw new Error(`Failed to delete store: ${error.message}`);
        }
    }
    async getStoreMenus(storeId) {
        const { data, error } = await this.supabase
            .from('menu')
            .select(`
        *,
        category:category_id (name)
      `)
            .eq('store_id', storeId)
            .order('category_id')
            .order('name');
        if (error) {
            throw new Error(`Failed to fetch store menus: ${error.message}`);
        }
        return data || [];
    }
    async getMenusByCategory(storeId, categoryId) {
        const { data, error } = await this.supabase
            .from('menu')
            .select('*')
            .eq('store_id', storeId)
            .eq('category_id', categoryId)
            .order('name');
        if (error) {
            throw new Error(`Failed to fetch menus by category: ${error.message}`);
        }
        return data || [];
    }
    async getMenuById(menuId) {
        const { data, error } = await this.supabase
            .from('menu')
            .select(`
        *,
        store:store_id (name, address),
        category:category_id (name)
      `)
            .eq('menu_id', menuId)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Menu not found');
        }
        return data;
    }
    async getAllCategories() {
        const { data, error } = await this.supabase
            .from('category')
            .select('*')
            .order('name');
        if (error) {
            throw new Error(`Failed to fetch categories: ${error.message}`);
        }
        return data || [];
    }
    async createCategory(categoryId, name) {
        const { data, error } = await this.supabase
            .from('category')
            .insert([{ category_id: categoryId, name }])
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to create category: ${error.message}`);
        }
        return data;
    }
    async getCategoryById(categoryId) {
        const { data, error } = await this.supabase
            .from('category')
            .select('*')
            .eq('category_id', categoryId)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Category not found');
        }
        return data;
    }
    async searchStores(keyword) {
        const { data, error } = await this.supabase
            .from('store')
            .select('*')
            .or(`name.ilike.%${keyword}%,address.ilike.%${keyword}%`)
            .order('name');
        if (error) {
            throw new Error(`Failed to search stores: ${error.message}`);
        }
        return data || [];
    }
    async getStoreStats(storeId) {
        const { data: menuCount, error: menuError } = await this.supabase
            .from('menu')
            .select('menu_id', { count: 'exact' })
            .eq('store_id', storeId);
        const { data: paymentCount, error: paymentError } = await this.supabase
            .from('pay_history')
            .select('pay_id', { count: 'exact' })
            .eq('store_id', storeId);
        if (menuError || paymentError) {
            throw new Error('Failed to fetch store statistics');
        }
        return {
            menuCount: menuCount?.length || 0,
            paymentCount: paymentCount?.length || 0,
        };
    }
};
exports.StoreService = StoreService;
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_config_1.DatabaseConfig])
], StoreService);
//# sourceMappingURL=store.service.js.map