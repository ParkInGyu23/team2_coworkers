import { ImageItem } from './ImagePicker';
import { cn } from '@/shared/lib/cn';
type Props = {
  images: ImageItem[];
  onRemove: (index: number) => void;
  className?: string;
};

export function ImagePreviewList({ images, onRemove, className }: Props) {
  return (
    <>
      {images.map((image, index) => {
        const src = image.type === 'url' ? image.url : URL.createObjectURL(image.file);

        return (
          <div key={index} className={cn('relative h-[120px] w-[120px]', className)}>
            <img src={src} className="h-full w-full rounded object-cover" />

            <button
              onClick={() => onRemove(index)}
              className="absolute top-1 right-1 bg-black px-1 text-xs text-white"
            >
              ✕
            </button>
          </div>
        );
      })}
    </>
  );
}
