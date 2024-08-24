"use client";

import { BackBtn } from "@/shared/ui/BackBtn";
import { Button } from "@/shared/ui/Button";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import BackArrow from "@/public/BackArrow.svg";

export default function BeginKidText() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("entities.IntroText");
  const btn = useTranslations("UI.Intro");
  return (
    <div className="flex h-screen w-full flex-col justify-end gap-12 px-7 py-4 text-center">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-[2rem] font-bold leading-10 text-white">{t("title")}</h3>
        <p className="items-center text-center text-[1rem] font-bold leading-[1.625rem] text-white">
          <span className="font-normal text-textSemiWhite">{t("span")}</span>
        </p>
      </div>
      <div className="flex w-full items-center gap-2">
        <BackBtn
          onClick={() => {
            router.back();
          }}
        >
          <BackArrow />
        </BackBtn>

        <Button
          variant="primary"
          onClick={() => {
            router.push(`/${locale}/tips`);
          }}
        >
          {btn("LearnBtn")}
        </Button>
      </div>
    </div>
  );
}
