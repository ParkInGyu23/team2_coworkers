import CommentInput from "@/shared/ui/comment/CommentInput"
import React, { useState } from "react"

export default function CommentSection() {
  const [comment, setComment] = useState("")

  const postComment = async (text: string) => {
    if (!text.trim()) return

    // 👉 API 호출 자리
    console.log("댓글 등록:", text)

  }

  return (
    <div>

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