export interface PaymentProvider {
  is_active: boolean;
  logo_url: string;
  payment_type: string;
  provider_id: string;
  provider_name: string;
}

export interface PaymentMethod {
  alias_name: string;
  bank_name: string | null;
  card_company: string | null;
  card_image_url: string | null;
  created_at: string;
  is_active: boolean;
  is_default: boolean;
  masked_number: string | null;
  method_id: number;
  payment_token: string;
  provider_id: string;
  user_id: number;
}
