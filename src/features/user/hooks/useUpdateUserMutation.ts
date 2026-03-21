import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../api/updateUser';
import { USER_QUERY_KEYS } from '../lib/queryKeys';
import { authKeys } from '@/shared/lib/queryKeys/authKeys';
import { ApiError } from '@/shared/types/apiError';
import { PatchUserRequest } from '../model/dto/user.dto';

export function useUpdateUserMutation() {
  const queryClient = useQueryClient();

  return useMutation<{ message: string }, ApiError, PatchUserRequest>({
    mutationFn: updateUser,
    onSuccess: () => {
      // 기존 유저 캐시 무효화
      queryClient.invalidateQueries({ queryKey: USER_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: authKeys.me() }); // 최상단도 동기화
    },
  });
}
