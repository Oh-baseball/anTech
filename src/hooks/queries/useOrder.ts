import createOrder, { CreateOrderRequest } from '@/apis/orders/createOrder';
import fetchOrderPaymentHistory from '@/apis/stores/fetchOrderPaymentHistory';
import { UseMutationCustomOptions, UseQueryCustomOptions } from '@/types/api';
import { useMutation, useQuery } from '@tanstack/react-query';

const useOrderPaymentHistory = (userId: number, queryOptions?: UseQueryCustomOptions) => {
  const { data, isSuccess, isPending } = useQuery({
    queryFn: () => fetchOrderPaymentHistory(userId),
    queryKey: ['order', 'history'],
    ...queryOptions,
  });

  return { data, isSuccess, isPending };
};

const useCreateOrder = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: (req: CreateOrderRequest) => createOrder(req),
    ...mutationOptions,
  });
};

export { useOrderPaymentHistory, useCreateOrder };
