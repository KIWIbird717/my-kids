import React from "react";

export default function StatsIntro() {
  return (
    <div className="flex flex-col">
      <p className="flex w-screen flex-col gap-3 px-4 text-start text-white">
        <span className="text-[1.5rem] font-bold leading-8">Добро пожаловать!</span>
        <span className="w-[14rem] text-[0.875rem] font-normal">
          Прежде чем приступить, пожалуйста, выберите ваш путь!
        </span>
      </p>
    </div>
  );
}
