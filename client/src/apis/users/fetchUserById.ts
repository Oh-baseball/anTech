import { APIResponse, User } from '@/types/api';
import { axiosInstance } from '../axiosInstance';

const fetchUserById = async (userId: number): Promise<APIResponse<User>> => {
  try {
    const response = await axiosInstance.get<APIResponse<User>>(`users/${userId}`);
    return response.data;
  } catch (error: any) {
    console.error('사용자 조회 실패:', error.response?.data || error.message);
    throw error;
  }
};

export default fetchUserById;
