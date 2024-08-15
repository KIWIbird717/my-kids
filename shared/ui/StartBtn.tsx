import { useLocale, useTranslations } from "next-intl";
import { cn } from "../lib/utils/cn";
import Link from "next/link";

export default function StartBtn() {
  const locale = useLocale();
  const t = useTranslations("UI.StartBtn");
  return (
    <Link
      href={`/${locale}/intro`}
      className={cn(
        "items-cente flex w-full justify-center rounded-[1.25rem] bg-btn px-[3rem] py-[0.9375rem] text-[1.15rem] font-normal leading-[1.625rem] text-white",
        "btnGrad",
      )}
    >
      {t("text")}
    </Link>
  );
}
