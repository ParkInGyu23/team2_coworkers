import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../api/deleteUser';
import { ApiError } from '@/shared/types/apiError';
import { authKeys } from '@/shared/lib/queryKeys/authKeys';

export function useDeleteUserMutation() {
  const queryClient = useQueryClient();

  return useMutation<void, ApiError, void>({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.clear();
      queryClient.setQueryData(authKeys.me(), null);

      window.location.href = '/';
    },
  });
}
