"use client";

import BackArrowSvg from "@/public/BackArrow.svg";
import { useFinalModal } from "@/shared/lib/store/final-page/useFinalModal";

export const BackButton = () => {
  const { close } = useFinalModal();

  return (
    <button onClick={close} className="flex aspect-square w-[56px] items-center justify-center">
      <BackArrowSvg />
    </button>
  );
};
