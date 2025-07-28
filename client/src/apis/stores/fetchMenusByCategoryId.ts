import { APIResponse, ErrorResponse } from '@/types/api';
import { axiosInstance } from '@/apis/axiosInstance';
import axios, { AxiosError } from 'axios';
import { Menu } from '@/types/store';

interface StoreNameOnly {
  store_name: string;
}

interface MenuItem extends Menu {
  category_id: number;
  store_id: number;
  store: StoreNameOnly;
}

type FetchMenusByCategoryIdResponse = MenuItem[];

const fetchMenusByCategoryId = async (
  category_id: number,
): Promise<APIResponse<FetchMenusByCategoryIdResponse>> => {
  try {
    const response = await axiosInstance.get<APIResponse<FetchMenusByCategoryIdResponse>>(
      `/stores/categories/${category_id}/menus`,
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

export default fetchMenusByCategoryId;
