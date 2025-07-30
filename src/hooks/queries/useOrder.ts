import fetchOrderPaymentHistory from '@/apis/stores/fetchOrderPaymentHistory';
import { UseQueryCustomOptions } from '@/types/api';
import { useQuery } from '@tanstack/react-query';

const useOrderPaymentHistory = (userId: number, queryOptions?: UseQueryCustomOptions) => {
  const { data, isSuccess, isPending } = useQuery({
    queryFn: () => fetchOrderPaymentHistory(userId),
    queryKey: ['order', 'history'],
    ...queryOptions,
  });

  return { data, isSuccess, isPending };
};

export { useOrderPaymentHistory };
