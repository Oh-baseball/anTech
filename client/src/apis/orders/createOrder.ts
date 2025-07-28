import { APIResponse, ErrorResponse } from '@/types/api';
import { axiosInstance } from '@/apis/axiosInstance';
import axios, { AxiosError } from 'axios';
import { Order, OrderItem } from '@/types/order';

type CreateOrderRequest = {
  user_id: number;
  store_id: number;
  items: Pick<OrderItem, 'menu_id' | 'menu_name'>[];
  point_used: number;
};

type CreateOrderResponse = Order;

const createOrder = async (req: CreateOrderRequest): Promise<APIResponse<CreateOrderResponse>> => {
  try {
    const response = await axiosInstance.post<APIResponse<CreateOrderResponse>>(`orders`, req);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorResponse = (error as AxiosError<ErrorResponse>).response?.data;
      console.error(errorResponse);
      throw new Error(errorResponse?.message || '네트워크 요청을 확인해주세요');
    }
    throw new Error('다시 시도해주세요');
  }
};

export default createOrder;
