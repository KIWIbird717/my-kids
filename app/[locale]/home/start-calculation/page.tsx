import BottomImg from "@/public/bottomfigure.png";
import ChildPhoto from "@/public/childbigphoto.png";
import swipeShadow from "@/public/swipeshadow.png";
import { cn } from "@/shared/lib/utils/cn";
import { StatsNextBtnProps } from "@/shared/ui/home/start-calculation/NextBtn";
import MoonLogo from "@/shared/ui/MoonLogo";
import { StatsSwiper } from "@/widgets/StatsSwiper";
import Image from "next/image";
import { FC } from "react";

type StartCalcPageProps = {} & Pick<StatsNextBtnProps, "currentSlideIndex">;

export default function page(props: StartCalcPageProps) {
  console.log(props.currentSlideIndex);
  return (
    <div className={cn("flex h-full flex-col", "startBg")}>
      <div className="mb-[24px] flex flex-auto flex-col items-center justify-center gap-3">
        <div className="mt-[2.5rem]">
          <MoonLogo />
        </div>
        <Image src={ChildPhoto} className="h-full bg-contain" alt="pregn1" />
        <Pagination activePage={props.currentSlideIndex} />
      </div>
      <div className="flex-1 rounded-[44px] bg-[#1C1B33] shadow-toggleBtnShadow">
        <div className="relative">
          <Image src={swipeShadow} alt="shadow" className="absolute w-full" />
          <div className="absolute mt-[85px] h-[1px] w-full bg-[#252346] shadow-lineShadow"></div>
          <StatsSwiper currentSlideIndex={props.currentSlideIndex} />
          <div className="h-[102px] w-screen bg-[#1C1B33]"></div>
        </div>
      </div>
      <div className="absolute bottom-0 z-[5] w-screen">
        <Image src={BottomImg} alt="bottom" className="w-screen bg-cover" />
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
            props.activePage === index && "w-[26px]",
          )}
        />
      ))}
    </div>
  );
};
