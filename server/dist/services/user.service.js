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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../config/database.config");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    databaseConfig;
    constructor(databaseConfig) {
        this.databaseConfig = databaseConfig;
    }
    get supabase() {
        return this.databaseConfig.getClient();
    }
    async createUser(createUserDto) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const { data, error } = await this.supabase
            .from('users')
            .insert([
            {
                ...createUserDto,
                password: hashedPassword,
            },
        ])
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to create user: ${error.message}`);
        }
        return data;
    }
    async findByUserId(userId) {
        const { data, error } = await this.supabase
            .from('users')
            .select('*')
            .eq('user_id', userId)
            .single();
        if (error || !data) {
            throw new common_1.NotFoundException('User not found');
        }
        return data;
    }
    async findAllUsers() {
        const { data, error } = await this.supabase
            .from('users')
            .select('*')
            .order('user_id');
        if (error) {
            throw new Error(`Failed to fetch users: ${error.message}`);
        }
        return data || [];
    }
    async updateUser(userId, updateUserDto) {
        const updateData = { ...updateUserDto };
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        const { data, error } = await this.supabase
            .from('users')
            .update(updateData)
            .eq('user_id', userId)
            .select()
            .single();
        if (error) {
            throw new Error(`Failed to update user: ${error.message}`);
        }
        if (!data) {
            throw new common_1.NotFoundException('User not found');
        }
        return data;
    }
    async deleteUser(userId) {
        const { error } = await this.supabase
            .from('users')
            .delete()
            .eq('user_id', userId);
        if (error) {
            throw new Error(`Failed to delete user: ${error.message}`);
        }
    }
    async verifyPassword(userId, password) {
        const user = await this.findByUserId(userId);
        return bcrypt.compare(password, user.password);
    }
    async findUsersByCompany(companyId) {
        const { data, error } = await this.supabase
            .from('users')
            .select('*')
            .eq('company_id', companyId)
            .order('user_id');
        if (error) {
            throw new Error(`Failed to fetch users by company: ${error.message}`);
        }
        return data || [];
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_config_1.DatabaseConfig])
], UserService);
//# sourceMappingURL=user.service.js.map