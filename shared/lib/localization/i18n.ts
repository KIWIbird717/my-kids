import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { Localization } from "./types";

export const locales: Localization.Locale[] = ["en", "ru"];

export default getRequestConfig(async ({ locale }) => {
  // Валидируем, что входящий параметр `locale` является допустимым
  if (!locales.includes(locale as any)) notFound();

  const localizationJson = (await import(`@/public/localization/${locale}.json`)).default;

  return {
    messages: localizationJson,
  };
});
