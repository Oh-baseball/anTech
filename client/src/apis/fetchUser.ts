import { APIResponse, User } from '@/types/api';
import axios from 'axios';

const fetchUser = async (): Promise<APIResponse<User[]>> => {
  try {
    const response = await axios.get<APIResponse<User[]>>(`http://localhost:8000/users`);
    return response.data;
  } catch (error: any) {
    console.error('사용자 조회 실패:', error.response?.data || error.message);
    throw error;
  }
};

export default fetchUser;
