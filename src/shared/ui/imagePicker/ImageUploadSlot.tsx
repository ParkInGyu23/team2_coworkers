import { useImagePicker } from './ImagePicker';
import {IconImg} from '@/shared/ui/icons/IconImg';

export function ImageUploadSlot() {
  const { images, max, addImages } = useImagePicker();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    addImages(e.target.files);
  };
  if (images.length >= max) return null;

  return (
    <label className="flex h-[120px] w-[120px] cursor-pointer
     flex-col items-center justify-center border rounded-[10px] border-background-tertiary ">
      <input type="file" multiple accept="image/*" className="hidden" onChange={handleChange} />
      <IconImg className="text-gray-400" />
      <div className="text-lg text-txt-default pt-4">
        {images.length}/{max}
      </div>
    </label>
  );
}
