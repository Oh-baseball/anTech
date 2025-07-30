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
exports.PayHistoryService = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../config/database.config");
let PayHistoryService = class PayHistoryService {
    databaseConfig;
    constructor(databaseConfig) {
        this.databaseConfig = databaseConfig;
    }
    get supabase() {
        return this.databaseConfig.getClient();
    }
    async createPayHistory(createPayHistoryDto) {
        const { data, error } = await this.supabase
            .from('pay_history')
            .insert([
            {
                ...createPayHistoryDto,
                time: new Date().toISOString(),
            },
        ])
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to create pay history: ${error.message}`);
        }
        return data;
    }
    async findByUserId(userId) {
        const { data, error } = await this.supabase
            .from('pay_history')
            .select(`
        *,
        users:user_id (name),
        store:store_id (name),
        payment_method:method_id (type, name)
      `)
            .eq('user_id', userId)
            .order('time', { ascending: false });
        if (error) {
            throw new Error(`Failed to fetch pay history: ${error.message}`);
        }
        return (data?.map((item) => ({
            ...item,
            user_name: item.users?.name,
            store_name: item.store?.name,
            method_type: item.payment_method?.type,
            method_name: item.payment_method?.name,
        })) || []);
    }
    async findByStoreId(storeId) {
        const { data, error } = await this.supabase
            .from('pay_history')
            .select(`
        *,
        users:user_id (name),
        store:store_id (name),
        payment_method:method_id (type, name)
      `)
            .eq('store_id', storeId)
            .order('time', { ascending: false });
        if (error) {
            throw new Error(`Failed to fetch pay history: ${error.message}`);
        }
        return (data?.map((item) => ({
            ...item,
            user_name: item.users?.name,
            store_name: item.store?.name,
            method_type: item.payment_method?.type,
            method_name: item.payment_method?.name,
        })) || []);
    }
    async getUserPointBalance(userId) {
        const { data, error } = await this.supabase
            .from('pay_history')
            .select('amount')
            .eq('user_id', userId);
        if (error) {
            throw new Error(`Failed to calculate point balance: ${error.message}`);
        }
        return data?.reduce((total, record) => total + record.amount, 0) || 0;
    }
    async getMonthlyStats(userId, year, month) {
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);
        const { data, error } = await this.supabase
            .from('pay_history')
            .select('amount, time')
            .eq('user_id', userId)
            .gte('time', startDate.toISOString())
            .lte('time', endDate.toISOString());
        if (error) {
            throw new Error(`Failed to fetch monthly stats: ${error.message}`);
        }
        const totalAmount = data?.reduce((sum, record) => sum + record.amount, 0) || 0;
        const transactionCount = data?.length || 0;
        return {
            totalAmount,
            transactionCount,
            month: `${year}-${month.toString().padStart(2, '0')}`,
        };
    }
    async earnPoints(userId, storeId, methodId, amount) {
        return this.createPayHistory({
            user_id: userId,
            store_id: storeId,
            method_id: methodId,
            amount: Math.abs(amount),
        });
    }
    async usePoints(userId, storeId, methodId, amount) {
        const balance = await this.getUserPointBalance(userId);
        if (balance < amount) {
            throw new Error('Insufficient points balance');
        }
        return this.createPayHistory({
            user_id: userId,
            store_id: storeId,
            method_id: methodId,
            amount: -Math.abs(amount),
        });
    }
    async findByPayId(payId) {
        const { data, error } = await this.supabase
            .from('pay_history')
            .select(`
        *,
        users:user_id (name),
        store:store_id (name),
        payment_method:method_id (type, name)
      `)
            .eq('pay_id', payId)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Payment history not found');
        }
        return {
            ...data,
            user_name: data.users?.name,
            store_name: data.store?.name,
            method_type: data.payment_method?.type,
            method_name: data.payment_method?.name,
        };
    }
    async getPaymentMethodStats(methodId) {
        const { data, error } = await this.supabase
            .from('pay_history')
            .select('amount, time')
            .eq('method_id', methodId)
            .order('time', { ascending: false });
        if (error) {
            throw new Error(`Failed to fetch payment method stats: ${error.message}`);
        }
        const totalAmount = data?.reduce((sum, record) => sum + record.amount, 0) || 0;
        const transactionCount = data?.length || 0;
        return {
            totalAmount,
            transactionCount,
            methodId,
        };
    }
};
exports.PayHistoryService = PayHistoryService;
exports.PayHistoryService = PayHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_config_1.DatabaseConfig])
], PayHistoryService);
//# sourceMappingURL=pay-history.service.js.map