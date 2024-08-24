"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "../Button";

export default function PlanNextBtn() {
  const locale = useLocale();
  const t = useTranslations("UI.Plan");
  const router = useRouter();
  return <Button onClick={() => router.push(`/${locale}/home`)}>{t("NextBtn")}</Button>;
}
