import { StoreService } from '../services/store.service';
import { CreateStoreDto, UpdateStoreDto, CreateCategoryDto } from '../dto/store.dto';
export declare class StoreController {
    private readonly storeService;
    constructor(storeService: StoreService);
    createStore(createStoreDto: CreateStoreDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Store;
        message: string;
    }>;
    getAllStores(): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Store[];
    }>;
    searchStores(keyword: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: import("../entities/store.entity").Store[];
        message: string;
    }>;
    getStore(storeId: number): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Store;
    }>;
    updateStore(storeId: number, updateStoreDto: UpdateStoreDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Store;
        message: string;
    }>;
    deleteStore(storeId: number): Promise<{
        success: boolean;
        message: string;
    }>;
    getStoreMenus(storeId: number): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Menu[];
    }>;
    getMenusByCategory(storeId: number, categoryId: string): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Menu[];
    }>;
    getStoreStats(storeId: number): Promise<{
        success: boolean;
        data: {
            menuCount: any;
            paymentCount: any;
        };
    }>;
}
export declare class CategoryController {
    private readonly storeService;
    constructor(storeService: StoreService);
    getAllCategories(): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Category[];
    }>;
    getCategory(categoryId: string): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Category;
    }>;
    createCategory(createCategoryDto: CreateCategoryDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Category;
        message: string;
    }>;
}
