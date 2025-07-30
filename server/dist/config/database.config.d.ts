import { ConfigService } from '@nestjs/config';
export declare class DatabaseConfig {
    private configService;
    private supabase;
    constructor(configService: ConfigService);
    getClient(): any;
    testConnection(): Promise<boolean>;
}
