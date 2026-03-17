import CommentInput from "@/shared/ui/comment/CommentInput"
import React, { useState } from "react"

export default function CommentSection() {
  const [comment, setComment] = useState("")

  const postComment = async (text: string) => {
    if (!text.trim()) return


    console.log("댓글 등록:", text)

  }

  return (
    <div className="w-[1000px] mx-auto  mt-15">

      <CommentInput
        value={comment}
        onChange={setComment}
        onSubmit={() => {
          postComment(comment)
          setComment("")
        }}
      />
    </div>
  )
}