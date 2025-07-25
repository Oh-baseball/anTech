import { APIResponse, ErrorResponse, User } from '@/types/api';
import { axiosInstance } from '../axiosInstance';
import axios, { AxiosError } from 'axios';

const fetchUserById = async (): Promise<APIResponse<User>> => {
  try {
    const response = await axiosInstance.get<APIResponse<User>>(`users`);
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

export default fetchUserById;
