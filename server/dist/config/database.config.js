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
exports.DatabaseConfig = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let DatabaseConfig = class DatabaseConfig {
    configService;
    supabase;
    constructor(configService) {
        this.configService = configService;
        const supabaseUrl = this.configService.get('SUPABASE_URL');
        const supabaseKey = this.configService.get('SUPABASE_ANON_KEY');
        if (!supabaseUrl || !supabaseKey) {
            console.error('❌ Supabase 환경변수가 설정되지 않았습니다!');
            console.error('다음 환경변수들을 .env 파일에 추가해주세요:');
            console.error('- SUPABASE_URL=https://your-project-ref.supabase.co');
            console.error('- SUPABASE_ANON_KEY=your_anon_key_here');
            throw new Error('Supabase URL과 Anon Key가 환경변수에 설정되지 않았습니다. ' +
                '.env 파일을 확인해주세요.');
        }
        this.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey, {
            auth: {
                autoRefreshToken: false,
                persistSession: false,
            },
        });
    }
    getClient() {
        return this.supabase;
    }
    async testConnection() {
        try {
            console.log('🔍 Supabase 연결을 테스트 중...');
            const { data, error } = await this.supabase
                .from('user')
                .select('count(*)')
                .limit(1);
            if (error) {
                console.error('❌ Supabase 연결 테스트 실패:', error.message);
                console.error('💡 확인사항:');
                console.error('  1. SUPABASE_URL이 올바른지 확인');
                console.error('  2. SUPABASE_ANON_KEY가 올바른지 확인');
                console.error('  3. 데이터베이스에 "user" 테이블이 존재하는지 확인');
                return false;
            }
            console.log('✅ Supabase 연결 성공!');
            return true;
        }
        catch (error) {
            console.error('❌ Supabase 연결 중 오류 발생:', error.message);
            return false;
        }
    }
};
exports.DatabaseConfig = DatabaseConfig;
exports.DatabaseConfig = DatabaseConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], DatabaseConfig);
//# sourceMappingURL=database.config.js.map