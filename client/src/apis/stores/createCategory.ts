import { APIResponse, ErrorResponse } from '@/types/api';
import { axiosInstance } from '@/apis/axiosInstance';
import axios, { AxiosError } from 'axios';
import { Category } from '@/types/store';

type CreateCategoryRequest = Pick<Category, 'category_name' | 'description'>;

type CreateCategoryResponse = Category;

const createCategory = async (
  req: CreateCategoryRequest,
): Promise<APIResponse<CreateCategoryResponse>> => {
  try {
    const response = await axiosInstance.post<APIResponse<CreateCategoryResponse>>(
      `/stores/categories`,
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

export default createCategory;
