"use client";

import { useTranslations } from "next-intl";
import Tips from "./Tips";
import { useRouter } from "next/navigation";
import { BackBtn } from "@/shared/ui/BackBtn";
import TipsNextBtn from "@/shared/ui/tips/TipsNextBtn";
import BackArrow from "@/public/BackArrow.svg";

export default function TipsContent() {
  const t = useTranslations("entities.TipsContent");
  const router = useRouter();
  return (
    <div className="relative flex h-full flex-col justify-between pt-[40px]">
      <span className="px-[24px] text-[1rem] leading-[1.625rem] text-white">{t("span")}</span>
      <Tips />
      <div className="flex w-full items-center justify-center gap-2 px-[30px] pb-4">
        <BackBtn
          onClick={() => {
            router.back();
          }}
        >
          <BackArrow />
        </BackBtn>
        <TipsNextBtn />
      </div>
    </div>
  );
}
