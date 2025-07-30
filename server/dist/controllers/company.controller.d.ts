import { CompanyService } from '../services/company.service';
import { CreateCompanyDto, UpdateCompanyDto } from '../dto/company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createCompany(createCompanyDto: CreateCompanyDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Company;
        message: string;
    }>;
    getAllCompanies(): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Company[];
    }>;
    getCompany(companyId: string): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Company;
    }>;
    updateCompany(companyId: string, updateCompanyDto: UpdateCompanyDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Company;
        message: string;
    }>;
    deleteCompany(companyId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    addPoints(companyId: string, body: {
        amount: number;
    }): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Company;
        message: string;
    }>;
    deductPoints(companyId: string, body: {
        amount: number;
    }): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Company;
        message: string;
    }>;
    getCompanyStats(companyId: string): Promise<{
        success: boolean;
        data: {
            userCount: any;
            totalTossAmount: any;
            tossCount: any;
        };
    }>;
}
