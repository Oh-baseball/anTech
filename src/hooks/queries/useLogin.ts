import loginUser, { LoginUserRequest } from '@/apis/users/loginUser';
import { UseMutationCustomOptions } from '@/types/api';
import { useMutation } from '@tanstack/react-query';

const useLogin = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: (req: LoginUserRequest) => loginUser(req),
    onSuccess: (data) => console.log(data),
    ...mutationOptions,
  });
};

export default useLogin;