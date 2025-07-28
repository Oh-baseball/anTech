export interface Store {
  store_id: number;
  store_name: string;
  address: string;
  phone: string;
  business_number: string | null;
  logo_url: string | null;
  point_rate: number;
  is_active: boolean;
  created_at: string;
}

export interface Category {
  category_id: number;
  category_name: string;
  description: string;
  is_active: boolean;
}

export interface Menu {
  menu_id: number;
  menu_name: string;
  created_at: string;
  description: string;
  image_url: string;
  is_available: boolean;
  price: number;
}
