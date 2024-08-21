"use client";

import BoyIcon from "@/public/Boy - EXPORT (3).png";
import Image from "next/image";
import { Modals } from "./shared/Modals";
import { useFinalModal } from "@/shared/lib/store/final-page/useFinalModal";
import { motion } from "framer-motion";

export default function PageBoy() {
  const { isOpen } = useFinalModal();
  return (
    <div className="max-w-screen relative flex h-full flex-col items-center justify-center">
      <motion.div initial={{ opacity: 1 }} animate={{ opacity: isOpen ? 0 : 1 }}>
        <Image src={BoyIcon} alt="boyicon" className="max-w-none" />
        <p className="mt-[50px] flex w-full flex-col gap-4 px-[40px]">
          <span className="h-[52px] text-start text-[24px] font-bold leading-[32px] text-white">
            Я... Мальчик!
          </span>
          <span className="w-[311px] text-start text-[14px] font-normal leading-[26px] text-textSemiWhite">
            Для достижения цели в процессе подготовки к зачатию должны участвовать и папа и мама!
          </span>
        </p>
      </motion.div>
      <Modals />
    </div>
  );
}
