import { IconCommentBtn } from '../icons/IconCommentBtn';

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
  placeholder = '댓글을 달아주세요',
  disabled = false,
}: CommentInputProps) {
  return (
    <div className="flex h-12 w-full justify-between border-t border-b border-[rgba(226,232,240,1)] px-3 focus-within:ring-black">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="font-pretendard w-full text-[14px] outline-none"
      />
      <button onClick={onSubmit} disabled={disabled || !value.trim()}>
        <IconCommentBtn />
      </button>
    </div>
  );
}
