import { useMutation, useQuery } from '@tanstack/react-query';
import { AuthenApi } from './api';


export const useLogin = () => {
  return useMutation((payload: any) => AuthenApi.checkLogin(payload));
};



