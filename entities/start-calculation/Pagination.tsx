import { cn } from "@/shared/lib/utils/cn";
import { FC } from "react";

type PaginationProps = {
  activePage: number;
};
export const Pagination: FC<PaginationProps> = (props) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={`pagination-${index}`}
          className={cn(
            "h-[5px] w-[5px] rounded-full bg-white",
            props.activePage === index + 1 && "w-[26px]",
          )}
        />
      ))}
    </div>
  );
};
