import fetchProviders from '@/apis/payment-methods/fetchProviders';
import { APIResponse, UseQueryCustomOptions } from '@/types/api';
import { PaymentProvider } from '@/types/payment-method';
import { useQuery } from '@tanstack/react-query';

const useProviders = (queryOptions?: UseQueryCustomOptions<APIResponse<PaymentProvider>>) => {
  const { data, isPending, isError } = useQuery({
    queryFn: fetchProviders,
    queryKey: ['provider'],
    ...queryOptions,
  });

  const providers = data?.data;

  return { providers, isPending, isError };
};

export { useProviders };
