import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import NextArrow from "../../../public/NextArrow.svg";

export default function TipsNextBtn() {
  const locale = useLocale();
  const t = useTranslations("UI.Tips");
  return (
    <Link
      href={`/${locale}/swiperpage`}
      className="relative mt-[509px] flex w-[18.25rem] items-center justify-center rounded-[1.25rem] border-[2px] border-btn bg-transparent py-[0.875rem] text-[1.125rem] font-normal leading-[1.625rem] text-white"
    >
      {t("NextBtn")}
      <div className="absolute right-[1.5rem] mt-[0.25rem] items-center">
        <NextArrow />
      </div>
    </Link>
  );
}