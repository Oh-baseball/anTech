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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../config/database.config");
let PaymentService = class PaymentService {
    databaseConfig;
    constructor(databaseConfig) {
        this.databaseConfig = databaseConfig;
    }
    get supabase() {
        return this.databaseConfig.getClient();
    }
    async createLogo(createLogoDto) {
        const { data: existingLogo } = await this.supabase
            .from('logo')
            .select('logo_id')
            .eq('logo_id', createLogoDto.logo_id)
            .single();
        if (existingLogo) {
            throw new common_1.ConflictException('Logo ID already exists');
        }
        const { data, error } = await this.supabase
            .from('logo')
            .insert([createLogoDto])
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to create logo: ${error.message}`);
        }
        return data;
    }
    async findAllLogos() {
        const { data, error } = await this.supabase
            .from('logo')
            .select('*')
            .order('logo_id');
        if (error) {
            throw new Error(`Failed to fetch logos: ${error.message}`);
        }
        return data || [];
    }
    async findLogoById(logoId) {
        const { data, error } = await this.supabase
            .from('logo')
            .select('*')
            .eq('logo_id', logoId)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Logo not found');
        }
        return data;
    }
    async updateLogo(logoId, updateLogoDto) {
        const { data, error } = await this.supabase
            .from('logo')
            .update(updateLogoDto)
            .eq('logo_id', logoId)
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to update logo: ${error.message}`);
        }
        if (!data) {
            throw new common_1.NotFoundException('Logo not found');
        }
        return data;
    }
    async deleteLogo(logoId) {
        const { error } = await this.supabase
            .from('logo')
            .delete()
            .eq('logo_id', logoId);
        if (error) {
            throw new Error(`Failed to delete logo: ${error.message}`);
        }
    }
    async createPaymentMethod(createPaymentMethodDto) {
        const { data: existingMethod } = await this.supabase
            .from('payment_method')
            .select('method_id')
            .eq('method_id', createPaymentMethodDto.method_id)
            .single();
        if (existingMethod) {
            throw new common_1.ConflictException('Payment method ID already exists');
        }
        const { data, error } = await this.supabase
            .from('payment_method')
            .insert([createPaymentMethodDto])
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to create payment method: ${error.message}`);
        }
        return data;
    }
    async findAllPaymentMethods() {
        const { data, error } = await this.supabase
            .from('payment_method')
            .select(`
        *,
        logo:logo_id (image)
      `)
            .order('method_id');
        if (error) {
            throw new Error(`Failed to fetch payment methods: ${error.message}`);
        }
        return data || [];
    }
    async findPaymentMethodById(methodId) {
        const { data, error } = await this.supabase
            .from('payment_method')
            .select(`
        *,
        logo:logo_id (image)
      `)
            .eq('method_id', methodId)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Payment method not found');
        }
        return data;
    }
    async findPaymentMethodsByType(type) {
        const { data, error } = await this.supabase
            .from('payment_method')
            .select(`
        *,
        logo:logo_id (image)
      `)
            .eq('type', type)
            .order('name');
        if (error) {
            throw new Error(`Failed to fetch payment methods by type: ${error.message}`);
        }
        return data || [];
    }
    async updatePaymentMethod(methodId, updatePaymentMethodDto) {
        const { data, error } = await this.supabase
            .from('payment_method')
            .update(updatePaymentMethodDto)
            .eq('method_id', methodId)
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to update payment method: ${error.message}`);
        }
        if (!data) {
            throw new common_1.NotFoundException('Payment method not found');
        }
        return data;
    }
    async deletePaymentMethod(methodId) {
        const { error } = await this.supabase
            .from('payment_method')
            .delete()
            .eq('method_id', methodId);
        if (error) {
            throw new Error(`Failed to delete payment method: ${error.message}`);
        }
    }
    async createAccount(createAccountDto) {
        const { data: existingAccount } = await this.supabase
            .from('account')
            .select('account_id')
            .eq('account_id', createAccountDto.account_id)
            .single();
        if (existingAccount) {
            throw new common_1.ConflictException('Account ID already exists');
        }
        const { data, error } = await this.supabase
            .from('account')
            .insert([createAccountDto])
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to create account: ${error.message}`);
        }
        return data;
    }
    async findAccountsByUserId(userId) {
        const { data, error } = await this.supabase
            .from('account')
            .select(`
        *,
        logo:logo_id (image),
        company:company_id (point)
      `)
            .eq('user_id', userId)
            .order('account_id');
        if (error) {
            throw new Error(`Failed to fetch user accounts: ${error.message}`);
        }
        return data || [];
    }
    async findAccountById(accountId) {
        const { data, error } = await this.supabase
            .from('account')
            .select(`
        *,
        logo:logo_id (image),
        company:company_id (point)
      `)
            .eq('account_id', accountId)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Account not found');
        }
        return data;
    }
    async updateAccount(accountId, updateAccountDto) {
        const { data, error } = await this.supabase
            .from('account')
            .update(updateAccountDto)
            .eq('account_id', accountId)
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to update account: ${error.message}`);
        }
        if (!data) {
            throw new common_1.NotFoundException('Account not found');
        }
        return data;
    }
    async deleteAccount(accountId) {
        const { error } = await this.supabase
            .from('account')
            .delete()
            .eq('account_id', accountId);
        if (error) {
            throw new Error(`Failed to delete account: ${error.message}`);
        }
    }
    async createCard(createCardDto) {
        const { data: existingCard } = await this.supabase
            .from('card')
            .select('card_id')
            .eq('card_id', createCardDto.card_id)
            .single();
        if (existingCard) {
            throw new common_1.ConflictException('Card ID already exists');
        }
        const { data, error } = await this.supabase
            .from('card')
            .insert([createCardDto])
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to create card: ${error.message}`);
        }
        return data;
    }
    async findCardsByUserId(userId) {
        const { data, error } = await this.supabase
            .from('card')
            .select(`
        *,
        company:company_id (point)
      `)
            .eq('user_id', userId)
            .order('card_id');
        if (error) {
            throw new Error(`Failed to fetch user cards: ${error.message}`);
        }
        return data || [];
    }
    async findCardById(cardId) {
        const { data, error } = await this.supabase
            .from('card')
            .select(`
        *,
        company:company_id (point)
      `)
            .eq('card_id', cardId)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Card not found');
        }
        return data;
    }
    async updateCard(cardId, updateCardDto) {
        const { data, error } = await this.supabase
            .from('card')
            .update(updateCardDto)
            .eq('card_id', cardId)
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to update card: ${error.message}`);
        }
        if (!data) {
            throw new common_1.NotFoundException('Card not found');
        }
        return data;
    }
    async deleteCard(cardId) {
        const { error } = await this.supabase
            .from('card')
            .delete()
            .eq('card_id', cardId);
        if (error) {
            throw new Error(`Failed to delete card: ${error.message}`);
        }
    }
    async createToss(createTossDto) {
        const { data, error } = await this.supabase
            .from('toss')
            .insert([createTossDto])
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to create toss: ${error.message}`);
        }
        return data;
    }
    async findTossByUserId(userId) {
        const { data, error } = await this.supabase
            .from('toss')
            .select(`
        *,
        company:company_id (point)
      `)
            .eq('user_id', userId)
            .order('toss_id', { ascending: false });
        if (error) {
            throw new Error(`Failed to fetch user toss history: ${error.message}`);
        }
        return data || [];
    }
    async findTossById(tossId) {
        const { data, error } = await this.supabase
            .from('toss')
            .select(`
        *,
        company:company_id (point)
      `)
            .eq('toss_id', tossId)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Toss transaction not found');
        }
        return data;
    }
    async updateToss(tossId, updateTossDto) {
        const { data, error } = await this.supabase
            .from('toss')
            .update(updateTossDto)
            .eq('toss_id', tossId)
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to update toss: ${error.message}`);
        }
        if (!data) {
            throw new common_1.NotFoundException('Toss transaction not found');
        }
        return data;
    }
    async deleteToss(tossId) {
        const { error } = await this.supabase
            .from('toss')
            .delete()
            .eq('toss_id', tossId);
        if (error) {
            throw new Error(`Failed to delete toss: ${error.message}`);
        }
    }
    async getTossStatsByCompany(companyId) {
        const { data, error } = await this.supabase
            .from('toss')
            .select('toss_amount')
            .eq('company_id', companyId);
        if (error) {
            throw new Error(`Failed to fetch toss stats: ${error.message}`);
        }
        const totalAmount = data?.reduce((sum, record) => sum + record.toss_amount, 0) || 0;
        const transactionCount = data?.length || 0;
        return {
            totalAmount,
            transactionCount,
            companyId,
        };
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_config_1.DatabaseConfig])
], PaymentService);
//# sourceMappingURL=payment.service.js.map