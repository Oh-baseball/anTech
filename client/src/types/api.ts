export type APIResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';

export type ErrorResponse = {
  success: false;
  statusCode: number;
  timestamp: string;
  path: string;
  method: HttpMethod;
  message: string;
};

export type User = {
  user_id: string;
  name: string;
  pw_number: number;
  pw_pattern: number;
  created_at: string;
  updated_at: string;
};

export type Store = {
  store_id: string;
  name: string;
  address: string;
  image: string;
  created_at: string;
  updated_at: string;
};

export type Category = {
  category_id: string;
  name: string;
};

export type Company = {
  company_id: string;
  point: number;
};

export type Logo = {
  logo_id: string;
  image: string;
};

export type PaymentMethod = {
  method_id: string;
  logo_id: string;
  type: string;
  name: string;
};

export type Account = {
  account_id: string;
  number: string;
  logo_id: string;
};

export type Card = {
  card_id: string;
  number: string;
};

export type Toss = {
  toss_id: number;
  toss_amount: number;
};
