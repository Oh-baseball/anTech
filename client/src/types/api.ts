export type APIResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';

export interface ErrorResponse {
  success: false;
  statusCode: number;
  timestamp: string;
  path: string;
  method: HttpMethod;
  message: string;
}
