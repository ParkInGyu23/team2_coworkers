import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteArticle } from '../api/deleteArticle';
import { toast } from 'sonner';
import { useRouter } from 'next/router';
import { ARTICLE_QUERY_KEYS } from '../model/querykeys';

export function useDeleteArticle() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: deleteArticle,
  });

  const deleteHandler = (articleId: number) => {
    mutate(articleId, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ARTICLE_QUERY_KEYS.all,
        });
        queryClient.removeQueries({
          queryKey: ARTICLE_QUERY_KEYS.detail(articleId),
        });
        toast.success('게시글이 삭제되었습니다.');
        router.push('/articles');
      },
      onError: (error: any) => {
        const message = error?.response?.data?.message;

        if (error?.response?.status === 403) {
          toast.error('삭제 권한이 없습니다.');
        } else if (error?.response?.status === 404) {
          toast.error('이미 삭제되었거나 존재하지 않는 게시글입니다.');
        } else {
          toast.error(message || '삭제 중 오류가 발생했습니다.');
        }
      },
    });
  };
  return {
    deleteArticle: deleteHandler,
    isDeleting: isPending,
  };
}
