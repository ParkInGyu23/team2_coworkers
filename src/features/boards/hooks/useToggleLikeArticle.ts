import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleLikeArticle } from '../api/toggleLikeArticle';
import { toast } from 'sonner';
import { ARTICLE_QUERY_KEYS } from '../model/querykeys';

export function useToggleLikeArticle() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: toggleLikeArticle,
  });

  const toggleLike = (articleId: number) => {
    mutate(articleId, {
      onSuccess: (updatedArticle) => {
        queryClient.setQueryData(ARTICLE_QUERY_KEYS.detail(articleId), updatedArticle);
        queryClient.invalidateQueries({
          queryKey: ARTICLE_QUERY_KEYS.list(),
        });
      },

      onError: (error: any) => {
        const status = error?.response?.status;

        if (status === 404) {
          toast.error('게시글을 찾을 수 없습니다.');
        } else {
          toast.error('좋아요 처리 중 오류가 발생했습니다.');
        }
      },
    });
  };

  return {
    toggleLike,
    isLiking: isPending,
  };
}
