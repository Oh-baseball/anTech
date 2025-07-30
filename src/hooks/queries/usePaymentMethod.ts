import fetchProviders from '@/apis/payment-methods/fetchProviders';
import { APIResponse, UseQueryCustomOptions } from '@/types/api';
import { PaymentProvider } from '@/types/payment-method';
import { useQuery } from '@tanstack/react-query';
import fetchPaymentMethod, {
  FetchPaymentMethodRequest,
  FetchPaymentMethodResponse,
} from '@/apis/payment-methods/fetchPaymentMethod';

const useProviders = (queryOptions?: UseQueryCustomOptions<APIResponse<PaymentProvider>>) => {
  const { data, isPending, isError } = useQuery({
    queryFn: fetchProviders,
    queryKey: ['provider'],
    ...queryOptions,
  });

  const providers = data?.data;

  return { providers, isPending, isError };
};

const usePaymentMethod = (
  { userId, methodId }: FetchPaymentMethodRequest,
  queryOptions?: UseQueryCustomOptions<APIResponse<FetchPaymentMethodResponse>>,
) => {
  const { data, isPending, isError } = useQuery({
    queryFn: () => fetchPaymentMethod({ userId, methodId }),
    queryKey: ['payment-method', userId, methodId],
    ...queryOptions,
  });

  const paymentMethod = data?.data;

  return { paymentMethod, isPending, isError };
};

export { useProviders, usePaymentMethod };
