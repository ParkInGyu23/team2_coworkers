import { ImagePicker } from "@/shared/ui/imagePicker/ImagePicker";
import { ImagePreviewList } from "@/shared/ui/imagePicker/ImagePreviewList";
import { ImageUploadSlot } from "@/shared/ui/imagePicker/ImageUploadSlot";

export default function Test() {
  const picker = ImagePicker({
    maxCount: 5,
    defaultImages: [
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    ],
  });

  return (
    <div className="flex gap-2 mt-12 justify-center">
      <ImagePreviewList
        images={picker.images}
        onRemove={picker.removeImage}
         className="h-[200px]"
      />

      <ImageUploadSlot
        disabled={picker.images.length >= picker.maxCount}
        onUpload={picker.addImages}
        count={picker.images.length}
        maxCount={picker.maxCount}
        isCount={true}
        className="w-[200px] h-[200px] bg-blue-50 rounded-xl"
      />
    </div>
  );
}
