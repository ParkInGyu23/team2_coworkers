import React, { forwardRef, useState } from 'react';
import { IconEyeOpen, IconEyeClose } from '@/shared/ui/icons';
import { cn } from '@/shared/lib/cn';

/**
 * @description
 * 공통 Input 컴포넌트
 * 기본 입력창, 비밀번호 입력창(눈 아이콘 자동 생성), 커스텀 버튼 삽입 형태를 지원함.
 *
 * @example
 * // 1. 기본 사용법
 * <Input placeholder="이메일을 입력해주세요" />
 *
 * // 2. 비밀번호 타입 (눈 아이콘 자동 생성, 오른쪽 여백 자동 조절)
 * <Input type="password" placeholder="비밀번호를 입력해주세요" />
 *
 * // 3. 에러 상태 처리
 * <Input isError={true} errorMessage="유효한 이메일이 아닙니다." />
 *
 * // 4. 오른쪽에 커스텀 요소(버튼) 넣기
 * <Input type="password" rightElement={<Button>변경하기</Button>} />
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  errorMessage?: string;
  rightElement?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', isError = false, errorMessage, rightElement, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
      <div className="flex w-full flex-col gap-1">
        <div className="relative flex w-full items-center">
          <input
            ref={ref}
            type={inputType}
            className={cn(
              'w-full border transition-colors outline-none',
              'bg-background-primary rounded-xl',
              'text-txt-primary placeholder:text-txt-default',
              //반응형 높이 (모바일: 44px, 태블릿 이상: 48px)
              'h-11 min-[744px]:h-12',
              'pl-4', // 왼쪽 패딩

              rightElement
                ? 'pr-1.5' // 버튼이 있을 때:  오른쪽 6px
                : 'pr-4', // 눈 아이콘/텍스트일 때:  오른쪽 16px

              'overflow-hidden text-ellipsis whitespace-nowrap',
              inputType === 'password' ? 'py-3' : 'py-[10.5px]', // 상하 패딩
              'border-background-tertiary hover:border-interaction-pressed focus:border-interaction-pressed',
              isError && 'border-status-danger focus:border-status-danger',
              className,
            )}
            {...props}
          />
          <div
            className={cn(
              'absolute flex h-full items-center',
              // 버튼이면 오른쪽에서 6px, 아이콘이면 16px
              rightElement ? 'right-1.5' : 'right-4',
            )}
          >
            {rightElement ? (
              rightElement
            ) : type === 'password' ? (
              <button
                type="button"
                onClick={handleTogglePassword}
                className="via-background-primary to-background-primary text-icon-primary hover:text-interaction-pressed flex w-9.5 items-center justify-end bg-linear-to-r from-transparent via-45% transition-colors focus:outline-none"
              >
                {showPassword ? <IconEyeOpen size={24} /> : <IconEyeClose size={24} />}
              </button>
            ) : null}
          </div>
        </div>

        {isError && errorMessage && (
          <p className="text-status-danger ml-1 text-[14px]">{errorMessage}</p>
        )}
      </div>
    );
  },
);
