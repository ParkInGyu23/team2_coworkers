import { useQuery } from '@tanstack/react-query';
import { getUser, GetUserParams } from '../api/getUser';
import { USER_QUERY_KEYS } from '../lib/queryKeys';

export function useUserQuery(params: GetUserParams) {
  const { teamId } = params;

  return useQuery({
    queryKey: USER_QUERY_KEYS.me(teamId),
    queryFn: () => getUser({ teamId }),
    enabled: Boolean(teamId),
  });
}
