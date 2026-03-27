import Checkbox from '@/shared/ui/checkbox';
import { formatDate } from '@/shared/lib/date';
import { IconCalendar } from '@/shared/ui/icons/IconCalendar';
import { IconRepeat } from '@/shared/ui/icons/IconRepeat';
import { IconComment } from '@/shared/ui/icons/IconComment';
import { RECURRENCE_LABELS } from './recurrence';

interface HistoryTaskItemProps {
  name: string;
  date: Date;
  frequency?: string;
  commentCount?: number;
}

function MetaItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="text-txt-default flex items-center gap-1 text-xs">
      {icon}
      <span>{children}</span>
    </div>
  );
}

export function HistoryTaskItem({ name, date, frequency, commentCount = 0 }: HistoryTaskItemProps) {
  return (
    <li className="border-border-primary bg-background-secondary flex items-start justify-between rounded-lg border px-3 py-2">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <Checkbox
            id={`history-${name}`}
            size="lg"
            checked={true}
            disabled={true}
            readOnly={true}
          />
          <label className="text-txt-disabled cursor-default text-sm line-through decoration-gray-400">
            {name}
          </label>
          {commentCount > 0 && <MetaItem icon={<IconComment />}>{commentCount}</MetaItem>}
        </div>

        <div className="flex items-center gap-2">
          <MetaItem icon={<IconCalendar />}>{date && formatDate(date)}</MetaItem>
          {frequency && frequency !== 'ONCE' && (
            <>
              <span className="bg-txt-secondary h-3 w-px" />
              <MetaItem icon={<IconRepeat />}>
                {RECURRENCE_LABELS[frequency as keyof typeof RECURRENCE_LABELS] || frequency}
              </MetaItem>
            </>
          )}
        </div>
      </div>
    </li>
  );
}
