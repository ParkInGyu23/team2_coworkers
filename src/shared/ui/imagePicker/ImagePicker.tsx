import { createContext, useContext, useState } from 'react';
import { ImageUploadSlot } from './ImageUploadSlot';
import { ImagePreviewList } from './ImagePreviewList';

type ContextType = {
  images: File[];
  max: number;
  addImages: (files: FileList) => void;
  removeImage: (index: number) => void;
};
type Props = {
  max?: number;
  onChange?: (files: File[]) => void;
};

const ImagePickerContext = createContext<ContextType | null>(null);

export const useImagePicker = () => {
  const context = useContext(ImagePickerContext);

  if (!context) {
    throw new Error('ImagePicker 내부에서만 사용 가능합니다');
  }

  return context;
};
export function ImagePicker({ max = 5, onChange }: Props) {
  const [images, setImages] = useState<File[]>([]);
  const addImages = (files: FileList) => {
    const newImage = Array.from(files);
    setImages((prev) => {
      const combined = [...prev, ...newImage];
       onChange?.(combined) 
      return combined.slice(0, max);
    });
  };
  const removeImage = (index: number) => {
    setImages(prev => {
      const next = prev.filter((_, i) => i !== index)

      onChange?.(next)

      return next
    })
  }
  return (
    <ImagePickerContext.Provider value={{ images, max, addImages, removeImage }}>
      <div className="flex flex-wrap gap-2">
        <ImagePreviewList />
        <ImageUploadSlot />
      </div>
    </ImagePickerContext.Provider>
  );
}
