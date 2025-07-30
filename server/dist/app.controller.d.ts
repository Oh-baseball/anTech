import { AppService } from './app.service';
import { DatabaseConfig } from './config/database.config';
export declare class AppController {
    private readonly appService;
    private readonly databaseConfig;
    constructor(appService: AppService, databaseConfig: DatabaseConfig);
    getHello(): string;
    getHealth(): {
        success: boolean;
        message: string;
        timestamp: string;
        version: string;
    };
    getDatabaseHealth(): Promise<{
        success: boolean;
        message: string;
        timestamp: string;
        database: string;
        status: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        timestamp: string;
        database: string;
        status: string;
        error: any;
    }>;
    getApiInfo(): {
        success: boolean;
        data: {
            name: string;
            version: string;
            description: string;
            endpoints: {
                users: string;
                stores: string;
                categories: string;
                payHistory: string;
            };
            documentation: string;
        };
    };
}
