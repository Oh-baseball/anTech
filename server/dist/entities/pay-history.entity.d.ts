export interface PayHistory {
    pay_id: string;
    user_id: number;
    store_id: number;
    method_id: string;
    time: Date;
    amount: number;
    created_at?: Date;
    updated_at?: Date;
}
export interface CreatePayHistoryDto {
    user_id: number;
    store_id: number;
    method_id: string;
    amount: number;
}
export interface PayHistoryWithDetails extends PayHistory {
    user_name?: string;
    store_name?: string;
    method_type?: string;
    method_name?: string;
}
