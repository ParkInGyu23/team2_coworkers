import { useQuery } from '@tanstack/react-query';
import { getComments } from '../api/getComments';
import { ARTICLE_QUERY_KEYS } from '../model/querykeys';

export function useCommentList(articleId: number, limit = 10) {
  return useQuery({
    queryKey: ARTICLE_QUERY_KEYS.comments(articleId),
    queryFn: () => getComments({ articleId, limit }),
  });
}
