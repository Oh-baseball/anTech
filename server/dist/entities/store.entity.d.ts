export interface Store {
    store_id: number;
    name: string;
    address: string;
    image?: string;
    created_at?: Date;
    updated_at?: Date;
}
export interface CreateStoreDto {
    name: string;
    address: string;
    image?: string;
}
export interface UpdateStoreDto {
    name?: string;
    address?: string;
    image?: string;
}
export interface Category {
    category_id: string;
    name: string;
    created_at?: Date;
    updated_at?: Date;
}
export interface Menu {
    menu_id: string;
    store_id: number;
    category_id: string;
    name: string;
    content?: string;
    price: number;
    image?: string;
    created_at?: Date;
    updated_at?: Date;
}
export interface Company {
    company_id: string;
    point: number;
}
export interface Logo {
    logo_id: string;
    image: string;
}
export interface PaymentMethod {
    method_id: string;
    logo_id: string;
    type: 'CARD' | 'BANK' | 'MOBILE';
    name: string;
}
export interface Account {
    account_id: string;
    user_id: number;
    company_id?: string;
    number: string;
    logo_id?: string;
}
export interface Card {
    card_id: string;
    user_id: number;
    company_id?: string;
    number: string;
}
export interface Toss {
    toss_id: number;
    user_id: number;
    company_id: string;
    toss_amount: number;
}
