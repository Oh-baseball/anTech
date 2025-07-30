import { PayHistoryService } from '../services/pay-history.service';
import { CreatePayHistoryDto } from '../dto/pay-history.dto';
export declare class PayHistoryController {
    private readonly payHistoryService;
    constructor(payHistoryService: PayHistoryService);
    createPayHistory(createPayHistoryDto: CreatePayHistoryDto): Promise<{
        success: boolean;
        data: import("../entities/pay-history.entity").PayHistory;
        message: string;
    }>;
    getUserPayHistory(userId: number): Promise<{
        success: boolean;
        data: import("../entities/pay-history.entity").PayHistoryWithDetails[];
    }>;
    getStorePayHistory(storeId: number): Promise<{
        success: boolean;
        data: import("../entities/pay-history.entity").PayHistoryWithDetails[];
    }>;
    getPayHistory(payId: string): Promise<{
        success: boolean;
        data: import("../entities/pay-history.entity").PayHistoryWithDetails;
    }>;
    getUserPointBalance(userId: number): Promise<{
        success: boolean;
        data: {
            balance: number;
        };
        message: string;
    }>;
    getMonthlyStats(userId: number, year: string, month: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: {
            totalAmount: any;
            transactionCount: any;
            month: string;
        };
        message?: undefined;
    }>;
    earnPoints(earnPointsDto: CreatePayHistoryDto): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: import("../entities/pay-history.entity").PayHistory;
        message: string;
    }>;
    usePoints(usePointsDto: CreatePayHistoryDto): Promise<{
        success: boolean;
        data: import("../entities/pay-history.entity").PayHistory;
        message: string;
    } | {
        success: boolean;
        message: any;
        data?: undefined;
    }>;
    getPaymentMethodStats(methodId: string): Promise<{
        success: boolean;
        data: {
            totalAmount: any;
            transactionCount: any;
            methodId: string;
        };
    }>;
}
