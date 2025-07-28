import { QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

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

export type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, APIResponse<ErrorResponse>, TData, QueryKey>,
  'queryKey'
>;

export type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, APIResponse<ErrorResponse>, TVariables, unknown>,
  'mutationFn'
>;
