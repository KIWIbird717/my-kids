import MoonLogo from "@/shared/ui/MoonLogo";
import PlanNextBtn from "@/shared/ui/plan/PlanNextBtn";
import React from "react";

export default function Plan() {
  return (
    <div className="mt-[4rem] flex flex-col items-center">
      <MoonLogo />
      <p className="mt-[3.25rem] h-[5.3125rem] w-[319px] text-center text-[1.5rem] font-normal leading-[2rem] text-white">
        <span>Решите каким будет </span>
        <span className="font-bold">пол </span>
        <span>вашего </span>
        <span className="font-bold">будущего малыша?</span>
      </p>
      <p className="mt-[23.875rem] h-[3.5625rem] text-center text-[1rem] font-normal leading-[1.625rem] text-textSemiWhite">
        <span>Нажмите “Запланировать” и узнайте план действий!</span>
      </p>
      <PlanNextBtn />
    </div>
  );
}
