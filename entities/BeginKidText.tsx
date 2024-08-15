import LearnBtn from "@/shared/ui/intro/LearnBtn";
import { useTranslations } from "next-intl";

export default function BeginKidText() {
  const t = useTranslations("entities.IntroText");
  return (
    <div className="mb-[3.3125rem] mt-[551px] flex w-[20rem] flex-col items-center gap-12">
      <div className="flex w-[20rem] flex-col items-center gap-2">
        <h3 className="text-[2rem] font-bold leading-10 text-white">{t("title")}</h3>
        <p className="items-center text-center text-[1rem] font-bold leading-[1.625rem] text-white">
          <span className="font-normal text-textSemiWhite">{t("span")}</span>
        </p>
      </div>
      <LearnBtn />
    </div>
  );
}
