import BoyIcon from "@/public/Boy - EXPORT (3).png";
import Image from "next/image";
import { Modals } from "./shared/Modals";

export default function PageBoy() {
  return (
    <div className="max-w-screen relative flex h-full flex-col items-center justify-center">
      <Image src={BoyIcon} alt="boyicon" className="max-w-none" />
      <p className="mt-[50px] flex flex-col gap-4">
        <span className="h-[52px] text-start text-[24px] font-bold leading-[32px] text-white">
          Я... Мальчик!
        </span>
        <span className="w-[311px] text-start text-[14px] font-normal leading-[26px] text-textSemiWhite">
          Для достижения цели в процессе подготовки к зачатию должны участвовать и папа и мама!
        </span>
      </p>

      <Modals />
    </div>
  );
}
