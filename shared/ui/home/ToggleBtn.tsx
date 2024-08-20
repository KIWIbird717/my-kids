import { cn } from "@/shared/lib/utils/cn";
import { useTranslations } from "next-intl";

export const ToggleBtn = () => {
  const t = useTranslations("UI.Home.ToggleBtn");
  return (
    <span className="flex h-[59px] w-[343px] flex-col items-center justify-center rounded-[14px]">
      <input type="checkbox" id="toggle" className={cn("hidden", "inputToggle")} />
      <label
        htmlFor="toggle"
        className={cn(
          "bg-toggleBtn shadow-toggleBtnShadow relative grid h-full w-fit cursor-pointer grid-cols-[repeat(2,1fr)] items-center justify-center rounded-[14px] text-white backdrop-blur-xl",
          "toggleSpan",
        )}
      >
        <span className="z-[999] text-center">{t("before")}</span>
        <span className="z-[999] text-center">{t("after")}</span>
      </label>
    </span>
  );
};
