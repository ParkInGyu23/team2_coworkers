export const USER_QUERY_KEYS = {
  all: ['users'] as const,

  me: (teamId: string) => [...USER_QUERY_KEYS.all, teamId, 'me'] as const,
};
