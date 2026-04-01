import { uploadImage } from '@/features/boards/api/uploadImage';
import { ArticleForm } from '@/features/boards/components/ArticleForm';
import { useCreateArticle } from '@/features/boards/hooks/useCreateArticle';

export default function CreateArticle() {
  const { createArticle } = useCreateArticle();

  return (
    <div>
      <ArticleForm
        onSubmit={async ({ title, content, images }) => {
          const files = images.filter((img) => img.type === 'file').map((img) => img.file);

          const urls = images.filter((img) => img.type === 'url').map((img) => img.url);

          const uploadedUrls = await Promise.all(files.map((file) => uploadImage(file)));

          const allImages = [...urls, ...uploadedUrls];

          const image = allImages[0];

          createArticle(title, content, image);
        }}
      />
    </div>
  );
}
