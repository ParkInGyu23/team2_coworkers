import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../api/deleteUser';
import { ApiError } from '@/shared/types/apiError';
import { authKeys } from '@/shared/lib/queryKeys/authKeys';
import { useRouter } from 'next/router';

export function useDeleteUserMutation() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<void, ApiError, void>({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.clear();
      queryClient.setQueryData(authKeys.me(), null);

      document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      router.replace('/');
    },
  });
}
