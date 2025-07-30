import { DatabaseConfig } from '../config/database.config';
import { PayHistory, CreatePayHistoryDto, PayHistoryWithDetails } from '../entities/pay-history.entity';
export declare class PayHistoryService {
    private databaseConfig;
    constructor(databaseConfig: DatabaseConfig);
    private get supabase();
    createPayHistory(createPayHistoryDto: CreatePayHistoryDto): Promise<PayHistory>;
    findByUserId(userId: number): Promise<PayHistoryWithDetails[]>;
    findByStoreId(storeId: number): Promise<PayHistoryWithDetails[]>;
    getUserPointBalance(userId: number): Promise<number>;
    getMonthlyStats(userId: number, year: number, month: number): Promise<{
        totalAmount: any;
        transactionCount: any;
        month: string;
    }>;
    earnPoints(userId: number, storeId: number, methodId: string, amount: number): Promise<PayHistory>;
    usePoints(userId: number, storeId: number, methodId: string, amount: number): Promise<PayHistory>;
    findByPayId(payId: string): Promise<PayHistoryWithDetails>;
    getPaymentMethodStats(methodId: string): Promise<{
        totalAmount: any;
        transactionCount: any;
        methodId: string;
    }>;
}
