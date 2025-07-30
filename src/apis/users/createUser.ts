import { APIResponse, ErrorResponse } from '@/types/api';
import { axiosInstance } from '@/apis/axiosInstance';
import axios, { AxiosError } from 'axios';
import { User } from '@/types/user';

type CreateUserRequest = Omit<User, 'user_id' | 'created_at' | 'updated_at'>;

type CreateUserResponse = Omit<User, 'password'>;

const createUser = async (req: CreateUserRequest): Promise<APIResponse<CreateUserResponse>> => {
  try {
    const response = await axiosInstance.post<APIResponse<CreateUserResponse>>(`/users`, req);
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

export default createUser;
