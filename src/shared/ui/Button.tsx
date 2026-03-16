import { cn } from '../lib/cn';

export type ButtonVariant = 'primary' | 'danger' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  isFullWidth?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center gap-1 font-semibold transition-colors disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-white hover:bg-interaction-hover active:bg-interaction-pressed disabled:bg-interaction-inactive',
  outline:
    'bg-transparent border border-brand-primary text-brand-primary hover:border-interaction-hover hover:text-interaction-hover active:border-interaction-pressed active:text-interaction-pressed disabled:border-interaction-inactive disabled:text-interaction-inactive',
  danger: 'bg-status-danger text-white hover:opacity-80 active:opacity-60 disabled:opacity-50',
  ghost:
    'bg-background-primary border border-brand-primary text-brand-primary hover:border-interaction-hover hover:text-interaction-hover active:border-interaction-pressed active:text-interaction-pressed disabled:border-interaction-inactive disabled:text-interaction-inactive',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-[33px] px-3 rounded-lg',
  md: 'h-10 px-4 rounded-[40px]',
  lg: 'h-12 px-8 rounded-xl',
};

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isFullWidth = false,
  leftIcon,
  children,
  className,
  disabled,
  type = 'button',
  ref,
  ...props
}: ButtonProps) {
  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    isFullWidth && 'w-full',
    className,
  );

  return (
    <button
      ref={ref}
      type={type}
      className={combinedClassName}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
    </button>
  );
}
