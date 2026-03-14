// 앞으로 사용할 임시 테스트 페이지 

import { ImagePicker } from "@/shared/ui/imagePicker/ImagePicker";
import { useState } from "react";

export default function test(){
const [images, setImages] = useState<File[]>([])

return(
  <div className="flex mt-12 justify-center">
<ImagePicker max={5} onChange={setImages} />

</div>
)
}