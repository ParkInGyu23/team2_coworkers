import { Skeleton } from './Skeleton';
import { cn } from '@/shared/lib/cn';
type Props = {
  lines?: number;
  className?: string;
};
export function TextSkeleton({ lines = 3, className }: Props) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={cn('h-4 w-full', className)} />
      ))}
    </div>
  );
}
