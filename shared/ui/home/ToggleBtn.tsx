import { cn } from "@/shared/lib/utils/cn";
import { useTranslations } from "next-intl";
import AlredyPregSvg from "@/public/alreadypreg.svg";
import PlanOnPregSvg from "@/public/planonpreg.svg";

export const ToggleBtn = () => {
  const t = useTranslations("UI.Home.ToggleBtn");
  return (
    <span className="flex flex-col items-center justify-center rounded-[14px] text-white">
      <div
        className={cn(
          "relative flex items-center justify-center rounded-[14px] bg-toggleBtn shadow-toggleBtnShadow",
          "btnFemale",
        )}
      >
        <input
          type="radio"
          name="radioSmth"
          className={cn("hidden", "radioSwiperFemale")}
          id="female"
        />
        <label
          htmlFor="female"
          className={cn("flex items-center justify-center gap-[16px]", "labelFemale")}
        >
          <PlanOnPregSvg />
          <span className="text-[22px] font-bold leading-[28px]">Я планирую беременость!</span>
        </label>
      </div>
      <div
        className={cn(
          "relative flex items-center justify-center rounded-[14px] bg-toggleBtn shadow-toggleBtnShadow",
          "btnMale",
        )}
      >
        <input
          type="radio"
          className={cn("hidden", "radioSwiperMale")}
          name="radioSmth"
          id="male"
        />
        <label
          htmlFor="male"
          className={cn("flex items-center justify-center gap-[16px]", "labelMale")}
        >
          <AlredyPregSvg />
          <span className="text-[22px] font-bold leading-[28px]">Я уже беременна</span>
        </label>
      </div>
    </span>
  );
};
