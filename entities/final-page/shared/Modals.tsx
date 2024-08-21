"use client";

import { FinalPageModal } from "@/widgets/FinalPageModal";
import { CalendarWrapper } from "./CalendarWrapper";
import { HandleSwipe } from "@/shared/ui/HandleSwipe";
import { useFinalModal } from "@/shared/lib/store/final-page/useFinalModal";
import SwipeSvg from "@/public/SwipeSvg.svg";

export const Modals = () => {
  const { isOpen, open, close } = useFinalModal();

  return (
    <div className="h-full w-full">
      <HandleSwipe
        onSwipeUp={() => {
          open();
        }}
        className="flex h-full w-full flex-col items-center justify-center gap-[15px]"
      >
        <span className="text-white">Проведите вверх, чтобы узнать подробности</span>
        <SwipeSvg />
      </HandleSwipe>

      <div className="absolute left-0 top-[50px]">
        <CalendarWrapper isShown={isOpen} />
        <FinalPageModal isOpen={isOpen} onModalClose={close} />
      </div>
    </div>
  );
};
