import { APIResponse, ErrorResponse } from '@/types/api';
import { axiosInstance } from '@/apis/axiosInstance';
import axios, { AxiosError } from 'axios';
import { PaymentMethod } from '@/types/payment-method';

export type FetchPaymentMethodRequest = {
  userId: string | null;
  methodId: string | null;
};

export type FetchPaymentMethodResponse = PaymentMethod;

const fetchPaymentMethod = async ({
  userId,
  methodId,
}: FetchPaymentMethodRequest): Promise<APIResponse<FetchPaymentMethodResponse>> => {
  try {
    const response = await axiosInstance.get<APIResponse<FetchPaymentMethodResponse>>(
      `/payment-methods/users/${userId}/methods/${methodId}`,
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

export default fetchPaymentMethod;
