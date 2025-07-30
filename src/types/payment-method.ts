export interface PaymentProvider {
  is_active: boolean;
  logo_url: string;
  payment_type: string;
  provider_id: string;
  provider_name: string;
}
