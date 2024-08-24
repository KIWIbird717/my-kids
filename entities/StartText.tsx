"use client";

import { useDevice } from "@/shared/lib/hooks/useDevice";
import { cn } from "@/shared/lib/utils/cn";
import { Button } from "@/shared/ui/Button";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function StartText() {
  const locale = useLocale();
  const router = useRouter();
  const device = useDevice();
  const t = useTranslations("entities.StartText");
  const btn = useTranslations("UI.StartBtn");

  return (
    <div
      className={cn(
        "flex h-screen flex-col items-center justify-end gap-14 px-7",
        device === "Mobile" && "pt-[5rem]",
      )}
    >
      <p className="items-center text-center text-[1.5rem] font-bold leading-8 text-white">
        <span className="text-white">{t("span1")}</span>
        <span className="font-normal text-white">{t("span2")}</span>
        <span className="text-white">{t("span3")}</span>
      </p>
      <Button
        variant="primary"
        onClick={() => {
          router.push(`/${locale}/intro`);
        }}
      >
        {btn("text")}
      </Button>
    </div>
  );
}
