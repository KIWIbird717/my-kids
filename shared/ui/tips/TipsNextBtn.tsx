"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "../Button";

export default function TipsNextBtn() {
  const locale = useLocale();
  const t = useTranslations("UI.Tips");
  const router = useRouter();
  return <Button onClick={() => router.push(`/${locale}/swiperpage`)}>{t("NextBtn")}</Button>;
}
