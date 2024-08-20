import { cn } from "@/shared/lib/utils/cn";
import { FC } from "react";

export const Calendar = () => {
  const monthsAmount = 12;
  const months = Array.from({ length: monthsAmount }).fill({ id: 0 });

  return (
    <div className="max-w-screen relative mt-[16px] flex h-fit w-screen flex-row overflow-hidden">
      <div className="relative flex w-full snap-x snap-proximity flex-row gap-[8px] overflow-auto">
        {months.map((_, index) => (
          <CalendarItem
            key={`calendar-item-${index}`}
            name="Май"
            date={index + 1}
            isFirstItem={index === 0}
            isLastItem={index === monthsAmount - 1}
          />
        ))}
      </div>
    </div>
  );
};

type CalendarItemProps = {
  name: string;
  date: number;
  isFirstItem?: boolean;
  isLastItem?: boolean;
};
const CalendarItem: FC<CalendarItemProps> = (props) => {
  return (
    <div
      className={cn(
        "flex h-[90px] w-[72.85px] shrink-0 snap-start scroll-mx-[30px] flex-col items-center justify-center gap-[17px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#2D2563] text-white",
        props.isFirstItem && "ml-[30px]",
        props.isLastItem && "mr-[30px]",
      )}
    >
      <span className="text-[12px] font-normal leading-[14.06px]">{props.name}</span>
      <span className="text-[24px] font-bold leading-[28.13px]">{props.date}</span>
    </div>
  );
};
