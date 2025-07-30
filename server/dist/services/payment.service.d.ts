import { DatabaseConfig } from '../config/database.config';
import { Logo, PaymentMethod, Account, Card, Toss } from '../entities/store.entity';
import { CreateLogoDto, UpdateLogoDto, CreatePaymentMethodDto, UpdatePaymentMethodDto, CreateAccountDto, UpdateAccountDto, CreateCardDto, UpdateCardDto, CreateTossDto, UpdateTossDto } from '../dto/payment.dto';
export declare class PaymentService {
    private databaseConfig;
    constructor(databaseConfig: DatabaseConfig);
    private get supabase();
    createLogo(createLogoDto: CreateLogoDto): Promise<Logo>;
    findAllLogos(): Promise<Logo[]>;
    findLogoById(logoId: string): Promise<Logo>;
    updateLogo(logoId: string, updateLogoDto: UpdateLogoDto): Promise<Logo>;
    deleteLogo(logoId: string): Promise<void>;
    createPaymentMethod(createPaymentMethodDto: CreatePaymentMethodDto): Promise<PaymentMethod>;
    findAllPaymentMethods(): Promise<PaymentMethod[]>;
    findPaymentMethodById(methodId: string): Promise<PaymentMethod>;
    findPaymentMethodsByType(type: 'CARD' | 'BANK' | 'MOBILE'): Promise<PaymentMethod[]>;
    updatePaymentMethod(methodId: string, updatePaymentMethodDto: UpdatePaymentMethodDto): Promise<PaymentMethod>;
    deletePaymentMethod(methodId: string): Promise<void>;
    createAccount(createAccountDto: CreateAccountDto): Promise<Account>;
    findAccountsByUserId(userId: number): Promise<Account[]>;
    findAccountById(accountId: string): Promise<Account>;
    updateAccount(accountId: string, updateAccountDto: UpdateAccountDto): Promise<Account>;
    deleteAccount(accountId: string): Promise<void>;
    createCard(createCardDto: CreateCardDto): Promise<Card>;
    findCardsByUserId(userId: number): Promise<Card[]>;
    findCardById(cardId: string): Promise<Card>;
    updateCard(cardId: string, updateCardDto: UpdateCardDto): Promise<Card>;
    deleteCard(cardId: string): Promise<void>;
    createToss(createTossDto: CreateTossDto): Promise<Toss>;
    findTossByUserId(userId: number): Promise<Toss[]>;
    findTossById(tossId: number): Promise<Toss>;
    updateToss(tossId: number, updateTossDto: UpdateTossDto): Promise<Toss>;
    deleteToss(tossId: number): Promise<void>;
    getTossStatsByCompany(companyId: string): Promise<{
        totalAmount: any;
        transactionCount: any;
        companyId: string;
    }>;
}
