import MoonLogo from "@/shared/ui/MoonLogo";
import SwiperPage from "@/widgets/SwiperPage";
import BgHeart from "../public/bgUnion.svg";

export default function Carousel() {
  return (
    <div className="relative flex h-full w-full flex-col items-center">
      <div className="absolute top-[4rem]">
        <MoonLogo />
      </div>
      <div className="absolute left-0">
        <BgHeart />
      </div>
      <SwiperPage />
    </div>
  );
}
