import React from 'react';
import { cn } from '@/shared/lib/cn';
/**
 * @description
 * 공통 Textarea(InputBox) 컴포넌트
 *
 * - 기본 높이(h-30)가 지정되어 있으며 부모 컴포넌트에서 className을 통해 너비와 높이 등 원하는 크기를 덮어 씌울 수 있음.
 *
 * * @example
 * 1. 기본 사용법 (기본 높이 h-30 적용)
 * <InputBox placeholder="내용을 입력해주세요." />
 * * @example
 * 2. 외부에서 크기 및 반응형 스타일 주입
 * <InputBox
 * className="w-[300px] h-[200px] min-[744px]:w-[540px] min-[744px]:h-[240px]"
 * placeholder="반응형 크기 적용"
 * />
 */

export interface InputBoxProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: React.Ref<HTMLTextAreaElement>;
}

export const InputBox = ({ className, ref, ...props }: InputBoxProps) => {
  return (
    <div
      className={cn(
        'bg-background-primary border-background-tertiary flex rounded-xl border transition-colors',
        'hover:border-interaction-pressed focus-within:border-interaction-pressed',
        'px-4 py-3', // 스크롤바 위치
        'h-30',
        className,
      )}
    >
      <textarea
        ref={ref}
        className={cn(
          'h-full w-full resize-none bg-transparent outline-none',
          'text-md text-txt-primary placeholder:text-txt-default',
          'pr-2',
          '[&::-webkit-scrollbar]:w-1',
          '[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#CBD5E1]',
          '[&::-webkit-scrollbar-track]:bg-transparent',
          '[&::-webkit-scrollbar-thumb]:min-h-7',
        )}
        {...props}
      />
    </div>
  );
};
InputBox.displayName = 'InputBox';
