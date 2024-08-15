import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/shared/lib/utils/cn";

export default function PlanNextBtn() {
  const locale = useLocale();
  const t = useTranslations("UI.Plan");
  return (
    <Link
      href={`/${locale}/toggle`}
      className={cn(
        "mt-[38px] flex w-full max-w-[18.25rem] items-center justify-center rounded-[1.25rem] bg-btn px-[3rem] py-[0.9375rem] text-[1.15rem] font-normal leading-[1.625rem] text-white",
        "btnGrad",
      )}
    >
      {t("NextBtn")}
    </Link>
  );
}
