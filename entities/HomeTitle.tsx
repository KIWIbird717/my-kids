import BottomImg from "@/public/bottomfigure.png";
import { PlanBtn } from "@/shared/ui/home/PlanBtn";
import { ToggleBtn } from "@/shared/ui/home/ToggleBtn";
import MoonLogo from "@/shared/ui/MoonLogo";
import { useTranslations } from "next-intl";
import Image from "next/image";
import homeImg from "../public/finalhomeimg.png";

export default function HomeTitle() {
  const t = useTranslations("entities.HomeTitle");
  return (
    <div className="flex h-full w-full flex-col items-center px-[16px]">
      <div className="mt-[3rem]">
        <MoonLogo />
      </div>
      <div className="flex flex-col gap-2 text-white">
        <h3 className="text-[1.5rem] font-bold leading-10">{t("title")}</h3>
        <p className="text-[0.875rem] font-normal leading-[16.41px]">{t("span")}</p>
      </div>

      <ToggleBtn />

      <Image src={homeImg} alt="homepageimg" />
      <PlanBtn />

      <div className="absolute bottom-0">
        <Image src={BottomImg} alt="btmfigure" className="w-screen bg-cover" />
      </div>
    </div>
  );
}
