export declare class CreateLogoDto {
    logo_id: string;
    image: string;
}
export declare class UpdateLogoDto {
    image?: string;
}
export declare enum PaymentType {
    CARD = "CARD",
    BANK = "BANK",
    MOBILE = "MOBILE"
}
export declare class CreatePaymentMethodDto {
    method_id: string;
    logo_id: string;
    type: PaymentType;
    name: string;
}
export declare class UpdatePaymentMethodDto {
    logo_id?: string;
    type?: PaymentType;
    name?: string;
}
export declare class CreateAccountDto {
    account_id: string;
    user_id: number;
    company_id?: string;
    number: string;
    logo_id?: string;
}
export declare class UpdateAccountDto {
    company_id?: string;
    number?: string;
    logo_id?: string;
}
export declare class CreateCardDto {
    card_id: string;
    user_id: number;
    company_id?: string;
    number: string;
}
export declare class UpdateCardDto {
    company_id?: string;
    number?: string;
}
export declare class CreateTossDto {
    user_id: number;
    company_id: string;
    toss_amount: number;
}
export declare class UpdateTossDto {
    company_id?: string;
    toss_amount?: number;
}
