import { cn } from "@/shared/lib/utils/cn";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export const PlanBtn = () => {
  const locale = useLocale();
  const t = useTranslations("UI.Home");
  return (
    <Link
      href={`/${locale}/home/start-calculation`}
      className={cn(
        "flex w-full items-center justify-center rounded-[1.25rem] bg-btn px-[3rem] py-[0.9375rem] text-[1.15rem] font-normal leading-[1.625rem] text-white",
        "btnGrad",
      )}
    >
      {t("PlanBtn")}
    </Link>
  );
};
