import { useMutation, useQueryClient } from '@tanstack/react-query';
import { likeArticle } from '../api/likeArticle';
import { unlikeArticle } from '../api/unlikeArticle';
import { ARTICLE_QUERY_KEYS } from '../model/querykeys';

export function useToggleLikeArticle() {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({ mutationFn: likeArticle });
  const unlikeMutation = useMutation({ mutationFn: unlikeArticle });

  const toggleLike = (articleId: number, isLiked: boolean) => {
    const mutation = isLiked ? unlikeMutation : likeMutation;

    mutation.mutate(articleId, {
      onSuccess: (updatedArticle) => {
        queryClient.setQueryData(ARTICLE_QUERY_KEYS.detail(articleId), updatedArticle);
        queryClient.invalidateQueries({
          queryKey: ARTICLE_QUERY_KEYS.all,
        });
      },
    });
  };

  return {
    toggleLike,
    isLiking: likeMutation.isPending || unlikeMutation.isPending,
  };
}
