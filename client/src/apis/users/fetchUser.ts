import { APIResponse, User } from '@/types/api';
import { axiosInstance } from '../axiosInstance';

const fetchUser = async (): Promise<APIResponse<User[]>> => {
  try {
    const response = await axiosInstance.get<APIResponse<User[]>>(`users`);
    return response.data;
  } catch (error: any) {
    console.error('사용자 조회 실패:', error.response?.data || error.message);
    throw error;
  }
};

export default fetchUser;
