import { APIResponse, ErrorResponse } from '@/types/api';
import { axiosInstance } from '@/apis/axiosInstance';
import axios, { AxiosError } from 'axios';
import { Order } from '@/types/order';

type CreateOrderPaymentRequest = Order;

type CreateOrderPaymentResponse = Order;

const createOrderPayment = async (
  req: CreateOrderPaymentRequest,
): Promise<APIResponse<CreateOrderPaymentResponse>> => {
  try {
    const response = await axiosInstance.post<APIResponse<CreateOrderPaymentResponse>>(
      `/orders/payment`,
      req,
    );
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

export default createOrderPayment;
