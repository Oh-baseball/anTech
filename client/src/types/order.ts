export interface OrderItem {
  menu_id: number;
  menu_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

export interface Order {
  order_id: string;
  order_status: string;
  created_at: string;
  point_used: number;
  discount_amount: number;
  total_amount: number;
  final_amount: number;
  items: OrderItem[];
}
