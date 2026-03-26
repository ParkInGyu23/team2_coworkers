import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createComment } from '../api/createComment';
import { toast } from 'sonner';
import { ARTICLE_QUERY_KEYS } from '../model/querykeys';

export function useCreateComment() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createComment,
  });

  const createCommentHandler = (articleId: number, content: string) => {
    mutate(
      { articleId, content },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ARTICLE_QUERY_KEYS.comments(articleId),
          });
          queryClient.invalidateQueries({
            queryKey: ARTICLE_QUERY_KEYS.detail(articleId),
          });

          toast.success('댓글이 등록되었습니다.');
        },

        onError: (error: any) => {
          const status = error?.response?.status;

          if (status === 404) {
            toast.error('게시글을 찾을 수 없습니다.');
          } else {
            toast.error('댓글 작성 중 오류가 발생했습니다.');
          }
        },
      },
    );
  };

  return {
    createComment: createCommentHandler,
    isCreating: isPending,
  };
}
