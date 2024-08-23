import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "../lib/utils/cn";

export default function StartBtn() {
  const locale = useLocale();
  const t = useTranslations("UI.StartBtn");
  return (
    <Link
      href={`/${locale}/intro`}
      className={cn(
        "flex w-full items-center justify-center rounded-[1.5rem] bg-btn px-[3rem] py-[0.9375rem] text-[1.15rem] font-bold leading-[1.75rem] text-white",
        "btnGrad",
      )}
    >
      {t("text")}
    </Link>
  );
}
