import { clientFetcher } from '@/shared/lib/axios/client-fetcher';

export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', file);

  const { data } = await clientFetcher.post(`/images/upload`, formData);

  return data.url;
}
