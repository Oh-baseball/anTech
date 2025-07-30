import { PaymentService } from '../services/payment.service';
import { CreateLogoDto, UpdateLogoDto, CreatePaymentMethodDto, UpdatePaymentMethodDto, CreateAccountDto, UpdateAccountDto, CreateCardDto, UpdateCardDto, CreateTossDto, UpdateTossDto } from '../dto/payment.dto';
export declare class LogoController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createLogo(createLogoDto: CreateLogoDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Logo;
        message: string;
    }>;
    getAllLogos(): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Logo[];
    }>;
    getLogo(logoId: string): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Logo;
    }>;
    updateLogo(logoId: string, updateLogoDto: UpdateLogoDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Logo;
        message: string;
    }>;
    deleteLogo(logoId: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
export declare class PaymentMethodController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createPaymentMethod(createPaymentMethodDto: CreatePaymentMethodDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").PaymentMethod;
        message: string;
    }>;
    getAllPaymentMethods(): Promise<{
        success: boolean;
        data: import("../entities/store.entity").PaymentMethod[];
    }>;
    getPaymentMethodsByType(type: 'CARD' | 'BANK' | 'MOBILE'): Promise<{
        success: boolean;
        data: import("../entities/store.entity").PaymentMethod[];
    }>;
    getPaymentMethod(methodId: string): Promise<{
        success: boolean;
        data: import("../entities/store.entity").PaymentMethod;
    }>;
    updatePaymentMethod(methodId: string, updatePaymentMethodDto: UpdatePaymentMethodDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").PaymentMethod;
        message: string;
    }>;
    deletePaymentMethod(methodId: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
export declare class AccountController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createAccount(createAccountDto: CreateAccountDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Account;
        message: string;
    }>;
    getAccountsByUserId(userId: number): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Account[];
    }>;
    getAccount(accountId: string): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Account;
    }>;
    updateAccount(accountId: string, updateAccountDto: UpdateAccountDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Account;
        message: string;
    }>;
    deleteAccount(accountId: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
export declare class CardController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createCard(createCardDto: CreateCardDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Card;
        message: string;
    }>;
    getCardsByUserId(userId: number): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Card[];
    }>;
    getCard(cardId: string): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Card;
    }>;
    updateCard(cardId: string, updateCardDto: UpdateCardDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Card;
        message: string;
    }>;
    deleteCard(cardId: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
export declare class TossController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createToss(createTossDto: CreateTossDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Toss;
        message: string;
    }>;
    getTossByUserId(userId: number): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Toss[];
    }>;
    getToss(tossId: number): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Toss;
    }>;
    updateToss(tossId: number, updateTossDto: UpdateTossDto): Promise<{
        success: boolean;
        data: import("../entities/store.entity").Toss;
        message: string;
    }>;
    deleteToss(tossId: number): Promise<{
        success: boolean;
        message: string;
    }>;
    getTossStatsByCompany(companyId: string): Promise<{
        success: boolean;
        data: {
            totalAmount: any;
            transactionCount: any;
            companyId: string;
        };
    }>;
}
