import BigCirclePng from "@/public/BigCirclePng.png";
import SmallCirclePng from "@/public/SmallCirclePng.png";
import { cn } from "@/shared/lib/utils/cn";
import MoonLogo from "@/shared/ui/MoonLogo";
import Image from "next/image";

export default function loading() {
  return (
    <main
      className={cn(
        "min-w-screen relative flex min-h-screen flex-col items-center overflow-hidden",
        "startBg",
      )}
    >
      <div className="mt-[4rem]">
        <MoonLogo />
      </div>
      <div className="relative flex w-screen items-center justify-center overflow-hidden">
        <Image src={BigCirclePng} className="z-[2] mt-[28px] w-screen bg-cover" alt="bigcircle" />
        <Image
          src={SmallCirclePng}
          className="absolute z-[3] bg-cover backdrop-blur-[2px]"
          alt="smallcircle"
        />
        <div className={cn("absolute z-[4]", "loader")} />
        <p className="text-[16px] font-normal leading-[26px] text-white">
          Подождите, мы подсчитываем результаты
        </p>
      </div>
    </main>
  );
}
