import React from "react";

export default function CarouselPlan() {
  return (
    <div className="mt-[3.25rem] flex flex-col items-center">
      <p className="h-[5.3125rem] text-center text-[1.5rem] font-normal leading-[2rem] text-white">
        <span>Решите каким будет </span>
        <span className="font-bold">пол </span>
        <span>вашего </span>
        <span className="font-bold">будущего малыша?</span>
      </p>

      <p className="mt-[23.875rem] h-[3.5625rem] text-center text-[1rem] font-normal leading-[1.625rem] text-white">
        <span>Нажмите </span>
        <span className="font-bold">“Запланировать” </span>
        <span>и узнайте план действий!</span>
      </p>
    </div>
  );
}
