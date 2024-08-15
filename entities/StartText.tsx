import StartBtn from "@/shared/ui/StartBtn";
import { useTranslations } from "next-intl";

export default function StartText() {
  const t = useTranslations("entities.StartText");
  return (
    <div className="mb-[3.3125rem] mt-[7rem] flex max-w-[18.25rem] flex-col items-center gap-14">
      <p className="items-center text-start text-[1.5rem] font-bold leading-8 text-white">
        <span className="text-white">{t("span1")}</span>
        <span className="font-normal text-white">{t("span2")}</span>
        <span className="text-white">{t("span3")}</span>
      </p>
      <StartBtn />
    </div>
  );
}
