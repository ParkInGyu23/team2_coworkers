import { IconCommentBtn } from "../icons/IconCommentBtn";

type CommentInputProps = {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  disabled?: boolean;
};
export default function CommentInput({
  value,
  onChange,
  onSubmit,
  placeholder = '댓글을 입력하세요',
  disabled = false,
}: CommentInputProps) {
  return (
    <div className="comment-input">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
      <button onClick={onSubmit} disabled={disabled || !value.trim()}>
     <IconCommentBtn width={20} height={20} />
      </button>
    </div>
  );
}
