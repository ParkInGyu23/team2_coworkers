import { useImagePicker } from "./ImagePicker";
import { ImagePreviewItem } from "./ImagePreviewItem";


export function ImagePreviewList(){
  const {images}=useImagePicker()

  return(
    <>
    {images.map((file,index)=>(
      <ImagePreviewItem
      key={index}
      file={file}
      index={index}
      />
    ))}
    </>
  )
}