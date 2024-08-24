"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "../Button";

export const PlanBtn = () => {
  const locale = useLocale();
  const t = useTranslations("UI.Home");
  const router = useRouter();
  return (
    <Button onClick={() => router.push(`/${locale}/home/start-calculation`)} variant="third">
      {t("PlanBtn")}
    </Button>
  );
};
