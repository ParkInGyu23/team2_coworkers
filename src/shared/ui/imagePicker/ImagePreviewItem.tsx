import { useImagePicker } from "./ImagePicker"


type Props={
  file:File 
  index:number
}

export function ImagePreviewItem({file,index}:Props){
  const {removeImage}=useImagePicker()
  const url=URL.createObjectURL(file)

  return(
    <div className="relative h-[120px] w-[120px]">
      <img
        src={url}
        className="w-full h-full object-cover rounded"
      />

      <button
        onClick={() => removeImage(index)}
        className="absolute top-1 right-1 bg-black text-white text-xs px-1"
      >
        ✕
      </button>
    </div>
  )
}