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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../config/database.config");
let CompanyService = class CompanyService {
    databaseConfig;
    constructor(databaseConfig) {
        this.databaseConfig = databaseConfig;
    }
    get supabase() {
        return this.databaseConfig.getClient();
    }
    async createCompany(createCompanyDto) {
        const { data: existingCompany } = await this.supabase
            .from('company')
            .select('company_id')
            .eq('company_id', createCompanyDto.company_id)
            .single();
        if (existingCompany) {
            throw new common_1.ConflictException('Company ID already exists');
        }
        const { data, error } = await this.supabase
            .from('company')
            .insert([createCompanyDto])
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to create company: ${error.message}`);
        }
        return data;
    }
    async findAllCompanies() {
        const { data, error } = await this.supabase
            .from('company')
            .select('*')
            .order('company_id');
        if (error) {
            throw new Error(`Failed to fetch companies: ${error.message}`);
        }
        return data || [];
    }
    async findCompanyById(companyId) {
        const { data, error } = await this.supabase
            .from('company')
            .select('*')
            .eq('company_id', companyId)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('Company not found');
        }
        return data;
    }
    async updateCompany(companyId, updateCompanyDto) {
        const { data, error } = await this.supabase
            .from('company')
            .update(updateCompanyDto)
            .eq('company_id', companyId)
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to update company: ${error.message}`);
        }
        if (!data) {
            throw new common_1.NotFoundException('Company not found');
        }
        return data;
    }
    async deleteCompany(companyId) {
        const { error } = await this.supabase
            .from('company')
            .delete()
            .eq('company_id', companyId);
        if (error) {
            throw new Error(`Failed to delete company: ${error.message}`);
        }
    }
    async deductPoints(companyId, amount) {
        const company = await this.findCompanyById(companyId);
        if (company.point < amount) {
            throw new Error('Insufficient company points');
        }
        return this.updateCompany(companyId, {
            point: company.point - amount,
        });
    }
    async addPoints(companyId, amount) {
        const company = await this.findCompanyById(companyId);
        return this.updateCompany(companyId, {
            point: company.point + amount,
        });
    }
    async getCompanyStats(companyId) {
        const { data: userCount, error: userError } = await this.supabase
            .from('users')
            .select('user_id', { count: 'exact' })
            .eq('company_id', companyId);
        const { data: tossData, error: tossError } = await this.supabase
            .from('toss')
            .select('toss_amount')
            .eq('company_id', companyId);
        if (userError || tossError) {
            throw new Error('Failed to fetch company statistics');
        }
        const totalTossAmount = tossData?.reduce((sum, record) => sum + record.toss_amount, 0) || 0;
        return {
            userCount: userCount?.length || 0,
            totalTossAmount,
            tossCount: tossData?.length || 0,
        };
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_config_1.DatabaseConfig])
], CompanyService);
//# sourceMappingURL=company.service.js.map