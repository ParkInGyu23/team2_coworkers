import { useUserQuery } from '@/features/user/hooks/useUserQuery';
import { cn } from '@/shared/lib/cn';
import decorationImg from '@/shared/assets/images/decoration.png';

interface TeamHeaderProps {
  selectedCategory: string | null;
  onResetCategory: () => void;
}

export function TeamHeader({ selectedCategory, onResetCategory }: TeamHeaderProps) {
  const { data: user } = useUserQuery();
  const hasTeam = user?.memberships && user.memberships.length > 0;
  const teamName = hasTeam ? user.memberships[0].group.name : '참여 중인 팀이 없습니다';

  return (
    <header
      className={cn(
        'relative flex w-full items-center justify-between overflow-hidden',
        'max-w-[343px] md:max-w-[620px] xl:max-w-[1120px]',
        'mx-auto h-14 bg-transparent md:h-[64px] xl:mx-0',
        'xl:bg-background-primary xl:h-[64px] xl:px-[26px]',
        'xl:border-border-primary xl:rounded-[12px] xl:border xl:shadow-sm',
      )}
    >
      <section className="relative z-10 flex min-w-0 items-center gap-2 text-[16px] font-bold md:text-[24px]">
        <button
          type="button"
          onClick={() => hasTeam && onResetCategory()}
          className={cn(
            'truncate text-[16px] font-bold transition-colors md:text-[20px]',
            hasTeam
              ? 'text-txt-primary hover:text-brand-primary cursor-pointer'
              : 'text-shadow-txt-default cursor-default',
          )}
        >
          {teamName}
        </button>

        {selectedCategory && (
          <>
            <span className="text-txt-tertiary text-[16px] font-bold md:text-[20px]">{'>'}</span>
            <span className="text-txt-primary truncate text-[16px] font-bold md:text-[20px]">
              {selectedCategory}
            </span>
          </>
        )}
      </section>

      <div
        className={cn(
          'pointer-events-none absolute top-0 right-17 z-0 hidden h-full w-75 bg-[#a6c4ff] xl:block',
        )}
        style={{
          WebkitMaskImage: `url(${decorationImg.src})`,
          WebkitMaskSize: 'cover',
          WebkitMaskPosition: 'right center',
          maskImage: `url(${decorationImg.src})`,
          maskSize: 'cover',
          maskPosition: 'right center',
        }}
      />
    </header>
  );
}
