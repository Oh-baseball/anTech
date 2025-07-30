import createOrder, { CreateOrderRequest } from '@/apis/orders/createOrder';
import fetchOrderPaymentHistory from '@/apis/stores/fetchOrderPaymentHistory';
import { UseMutationCustomOptions, UseQueryCustomOptions } from '@/types/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useOrderPaymentHistory = (userId: number, queryOptions?: UseQueryCustomOptions) => {
  const { data, isSuccess, isPending } = useQuery({
    queryFn: () => fetchOrderPaymentHistory(userId),
    queryKey: ['orders', 'history', userId],
    ...queryOptions,
  });

  return { data, isSuccess, isPending };
};

const useCreateOrder = (mutationOptions?: UseMutationCustomOptions) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (req: CreateOrderRequest) => createOrder(req),
    onSuccess: (orderResponse) => {
      const orderId = orderResponse?.data.order_id;
      queryClient.setQueryData(['order', orderId], orderResponse.data);
      navigate(`/payment/method?orderId=${orderId}`);
    },
    onError: (error) => console.log('error', error),
    ...mutationOptions,
  });
};

export { useOrderPaymentHistory, useCreateOrder };
