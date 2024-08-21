import BigCirclePng from "@/public/BigCirclePng.png";
import SmallCirclePng from "@/public/SmallCirclePng.png";
import SpinnerSvg from "@/public/spinnersvg.svg";
import Image from "next/image";

export default function SpinnerBg() {
  return (
    <div className="relative flex w-screen items-center justify-center overflow-hidden">
      <Image src={BigCirclePng} className="z-[2] mt-[28px] w-screen bg-cover" alt="bigcircle" />
      <Image
        src={SmallCirclePng}
        className="absolute z-[3] bg-cover backdrop-blur-[2px]"
        alt="smallcircle"
      />
      <div className="absolute z-[4]">
        <SpinnerSvg />
      </div>
    </div>
  );
}
