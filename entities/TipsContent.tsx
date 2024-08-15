import { useTranslations } from "next-intl";
import Tips from "./Tips";

export default function TipsContent() {
  const t = useTranslations("entities.TipsContent");
  return (
    <div className="relative mt-[81px] flex flex-col">
      <span className="ml-[24px] h-[81px] text-[1rem] leading-[1.625rem] text-white">
        {t("span")}
      </span>
      <Tips />
    </div>
  );
}
