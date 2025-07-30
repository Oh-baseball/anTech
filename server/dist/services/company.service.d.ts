import { DatabaseConfig } from '../config/database.config';
import { Company } from '../entities/store.entity';
import { CreateCompanyDto, UpdateCompanyDto } from '../dto/company.dto';
export declare class CompanyService {
    private databaseConfig;
    constructor(databaseConfig: DatabaseConfig);
    private get supabase();
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findAllCompanies(): Promise<Company[]>;
    findCompanyById(companyId: string): Promise<Company>;
    updateCompany(companyId: string, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
    deleteCompany(companyId: string): Promise<void>;
    deductPoints(companyId: string, amount: number): Promise<Company>;
    addPoints(companyId: string, amount: number): Promise<Company>;
    getCompanyStats(companyId: string): Promise<{
        userCount: any;
        totalTossAmount: any;
        tossCount: any;
    }>;
}
