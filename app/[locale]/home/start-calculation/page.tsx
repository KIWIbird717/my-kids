import BottomSvg from "@/public/bottomfigurine.svg";
import PregnPng from "@/public/pregn1.png";
import { cn } from "@/shared/lib/utils/cn";
import { FC } from "react";

export default function page() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-auto flex-col items-center justify-center gap-3 bg-blue-300 p-6">
        <img src={PregnPng.src} className="h-full bg-contain" alt="pregn1" />

        <Pagination activePage={2} />
      </div>
      <div className="flex-1 bg-red-400">
        <div className="h-[600px]">content2</div>
      </div>
      <div className="absolute bottom-0">
        <BottomSvg />
      </div>
    </div>
  );
}

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
            props.activePage === index + 1 && "w-[15px]",
          )}
        />
      ))}
    </div>
  );
};
