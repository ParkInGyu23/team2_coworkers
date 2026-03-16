import { useState } from "react";

export type ImageItem =
  | { type: "url"; url: string }
  | { type: "file"; file: File };

type Props = {
  maxCount?: number;
  defaultImages?: string[];
  onChange?: (files: File[]) => void;
};

export function ImagePicker({
  maxCount = 5,
  defaultImages = [],
  onChange,
}: Props) {
  const [images, setImages] = useState<ImageItem[]>(
    defaultImages.map((url) => ({ type: "url", url }))
  );

  const addImages = (files: FileList) => {
    const newImages: ImageItem[] = Array.from(files).map((file) => ({
      type: "file",
      file,
    }));

    setImages((prev) => {
      const next = [...prev, ...newImages].slice(0, maxCount);

      const newFiles = next
        .filter((img) => img.type === "file")
        .map((img) => img.file);

      onChange?.(newFiles);

      return next;
    });
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      const next = prev.filter((_, i) => i !== index);

      const newFiles = next
        .filter((img) => img.type === "file")
        .map((img) => img.file);

      onChange?.(newFiles);

      return next;
    });
  };

  return {
    images,
    maxCount,
    addImages,
    removeImage,
  };
}