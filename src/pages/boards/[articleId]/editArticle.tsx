import { uploadImage } from '@/features/boards/api/uploadImage';
import { ArticleForm } from '@/features/boards/components/ArticleForm';
import { useArticleDetailQuery } from '@/features/boards/hooks/useArticleDetailQuery';
import { useUpdateArticle } from '@/features/boards/hooks/useUpdateArticle';
import { useRouter } from 'next/router';

export default function EditArticle() {
  const router = useRouter();
  const { articleId } = router.query;

  const id = typeof articleId === 'string' ? Number(articleId) : NaN;
  const { updateArticle } = useUpdateArticle();
  const { data: article } = useArticleDetailQuery(id);
  if (!article) return null;
  const initialImages = article?.image ? [{ type: 'url' as const, url: article.image }] : [];
  return (
    <div>
      <ArticleForm
        initialTitle={article?.title}
        initialContent={article?.content}
        initialImages={initialImages}
        onSubmit={async ({ title, content, images }) => {
          const files = images.filter((img) => img.type === 'file').map((img) => img.file);

          const urls = images.filter((img) => img.type === 'url').map((img) => img.url);

          const uploadedUrls = await Promise.all(files.map((file) => uploadImage(file)));

          const allImages = [...urls, ...uploadedUrls];

          const image = allImages[0];

          updateArticle(article.id, title, content, image);
        }}
        mode="edit"
      />
    </div>
  );
}
