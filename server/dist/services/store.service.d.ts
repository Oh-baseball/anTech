import { DatabaseConfig } from '../config/database.config';
import { Store, CreateStoreDto, UpdateStoreDto, Menu, Category } from '../entities/store.entity';
export declare class StoreService {
    private databaseConfig;
    constructor(databaseConfig: DatabaseConfig);
    private get supabase();
    createStore(createStoreDto: CreateStoreDto): Promise<Store>;
    findAllStores(): Promise<Store[]>;
    findStoreById(storeId: number): Promise<Store>;
    updateStore(storeId: number, updateStoreDto: UpdateStoreDto): Promise<Store>;
    deleteStore(storeId: number): Promise<void>;
    getStoreMenus(storeId: number): Promise<Menu[]>;
    getMenusByCategory(storeId: number, categoryId: string): Promise<Menu[]>;
    getMenuById(menuId: string): Promise<Menu>;
    getAllCategories(): Promise<Category[]>;
    createCategory(categoryId: string, name: string): Promise<Category>;
    getCategoryById(categoryId: string): Promise<Category>;
    searchStores(keyword: string): Promise<Store[]>;
    getStoreStats(storeId: number): Promise<{
        menuCount: any;
        paymentCount: any;
    }>;
}
