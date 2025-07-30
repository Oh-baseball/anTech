import createUser, { CreateUserRequest } from '@/apis/users/createUser';
import fetchUserById, { FetchUserByIdResponse } from '@/apis/users/fetchUserById';
import fetchUsers, { FetchUsersResponse } from '@/apis/users/fetchUsers';
import { APIResponse, UseMutationCustomOptions, UseQueryCustomOptions } from '@/types/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useUser = (queryOptions?: UseQueryCustomOptions<APIResponse<FetchUsersResponse>>) => {
  const { isSuccess, data, isPending } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    refetchOnReconnect: true,
    ...queryOptions,
  });

  const users = data?.data;

  return { isSuccess, users, isPending };
};

const useUserById = (
  userId: number,
  queryOptions?: UseQueryCustomOptions<APIResponse<FetchUserByIdResponse>>,
) => {
  const { isSuccess, isPending, data } = useQuery({
    queryFn: () => fetchUserById(userId),
    queryKey: ['users', userId],
    ...queryOptions,
  });

  const user = data?.data;

  return { isSuccess, isPending, user };
};

const useCreateUser = (mutationOptions?: UseMutationCustomOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (req: CreateUserRequest) => createUser(req),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
    onError: (error) => console.error(error),
    ...mutationOptions,
  });
};

export { useUser, useUserById, useCreateUser };
