import MoonLogo from "@/shared/ui/MoonLogo";
import SwiperPage from "@/widgets/SwiperPage";
import { useLocale } from "next-intl";
import Link from "next/link";
import BgHeart from "../public/bgUnion.svg";
import Cross from "../public/cross.svg";

export default function Carousel() {
  const locale = useLocale();
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="mt-[4rem]">
        <MoonLogo />
      </div>
      <Link href={`/${locale}/plan`} className="absolute right-0 mr-[41px] mt-[4.25rem]">
        <Cross />
      </Link>
      <div className="absolute mr-[3.95rem]">
        <BgHeart />
      </div>
      <SwiperPage />
    </div>
  );
}
