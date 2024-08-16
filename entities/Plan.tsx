import MoonLogo from "@/shared/ui/MoonLogo";
import PlanNextBtn from "@/shared/ui/plan/PlanNextBtn";
import { useTranslations } from "next-intl";
import React from "react";

export default function Plan() {
  const t = useTranslations("entities.Plan");
  return (
    <div className="mt-[4rem] flex flex-col items-center">
      <MoonLogo />
      <p className="mt-[3.25rem] h-[5.3125rem] w-[319px] text-center text-[1.5rem] font-normal leading-[2rem] text-white">
        <span>{t("title.part1")}</span>
        <span className="font-bold">{t("title.part2")}</span>
        <span>{t("title.part3")}</span>
        <span className="font-bold">{t("title.part4")}</span>
      </p>
      <p className="mt-[23.875rem] h-[3.5625rem] text-center text-[1rem] font-normal leading-[1.625rem] text-textSemiWhite">
        <span>{t("span")}</span>
      </p>
      <PlanNextBtn />
    </div>
  );
}
