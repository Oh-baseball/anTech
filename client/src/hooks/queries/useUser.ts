import fetchUserById from '@/apis/users/fetchUserById';
import fetchUsers from '@/apis/users/fetchUsers';
import { UseQueryCustomOptions } from '@/types/api';
import { useQuery } from '@tanstack/react-query';

const useUser = (queryOptions?: UseQueryCustomOptions) => {
  const { isSuccess, data, isPending } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    refetchOnReconnect: true,
    ...queryOptions,
  });

  return { isSuccess, data, isPending };
};

const useUserById = (userId: number, queryOptions?: UseQueryCustomOptions) => {
  const { isSuccess, isPending, data } = useQuery({
    queryFn: () => fetchUserById(userId),
    queryKey: ['users', userId],
    ...queryOptions,
  });

  return { isSuccess, isPending, data };
};

export { useUser, useUserById };
