import { useTranslations } from "next-intl";
import Tips from "./Tips";

export default function TipsContent() {
  const t = useTranslations("entities.TipsContent");
  return (
    <div className="relative mt-[40px] flex flex-col">
      <span className="px-[24px] text-[1rem] leading-[1.625rem] text-white">{t("span")}</span>
      <Tips />
    </div>
  );
}
