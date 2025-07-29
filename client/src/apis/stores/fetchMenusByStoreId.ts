import { APIResponse, ErrorResponse } from '@/types/api';
import { axiosInstance } from '@/apis/axiosInstance';
import axios, { AxiosError } from 'axios';
import { Menu } from '@/types/store';


interface CategoryNameOnly {
  category_name: string;
}

interface MenuItem extends Menu {
  category_id: number;
  store_id: number;
  category: CategoryNameOnly;
}

type fetchMenusByStoreIdResponse = MenuItem[];

const fetchMenusByStoreId = async (
  store_id: number,
): Promise<APIResponse<fetchMenusByStoreIdResponse>> => {
  try {
    const response = await axiosInstance.get<APIResponse<fetchMenusByStoreIdResponse>>(
      `/stores/${store_id}/menus`,
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

export default fetchMenusByStoreId;
export type {MenuItem};
