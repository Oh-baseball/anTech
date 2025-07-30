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
exports.createSupabaseClient = exports.SupabaseConfig = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const common_1 = require("@nestjs/common");
let SupabaseConfig = class SupabaseConfig {
    supabase;
    constructor() {
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_ANON_KEY;
        if (!supabaseUrl || !supabaseKey) {
            throw new Error('Supabase URL과 API Key가 환경변수에 설정되지 않았습니다. ' +
                'SUPABASE_URL과 SUPABASE_ANON_KEY를 .env 파일에 추가해주세요.');
        }
        this.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey, {
            auth: {
                persistSession: false,
            },
            realtime: {
                params: {
                    eventsPerSecond: 10,
                },
            },
        });
    }
    getClient() {
        return this.supabase;
    }
    async testConnection() {
        try {
            const { data, error } = await this.supabase
                .from('users')
                .select('count(*)')
                .limit(1);
            if (error) {
                console.error('Supabase 연결 테스트 실패:', error);
                return false;
            }
            console.log('✅ Supabase 연결 성공');
            return true;
        }
        catch (error) {
            console.error('Supabase 연결 오류:', error);
            return false;
        }
    }
};
exports.SupabaseConfig = SupabaseConfig;
exports.SupabaseConfig = SupabaseConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SupabaseConfig);
const createSupabaseClient = () => {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase 환경변수가 설정되지 않았습니다.\n' +
            '다음 변수들을 .env 파일에 추가해주세요:\n' +
            '- SUPABASE_URL=your_supabase_project_url\n' +
            '- SUPABASE_ANON_KEY=your_supabase_anon_key');
    }
    return (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey, {
        auth: {
            persistSession: false,
        },
    });
};
exports.createSupabaseClient = createSupabaseClient;
//# sourceMappingURL=supabase.config.js.map