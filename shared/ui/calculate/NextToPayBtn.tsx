"use client";

import { cn } from "@/shared/lib/utils/cn";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { FC } from "react";

export type NextToPayBtnProps = {
  onPaymentBtnClick?: () => void;
};

export const NextToPayBtn: FC<NextToPayBtnProps> = (props) => {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <button
      onClick={props.onPaymentBtnClick}
      className={cn(
        "flex w-full items-center justify-center rounded-[1.25rem] bg-btn px-[3rem] py-[0.9375rem] text-[1.15rem] font-normal leading-[1.625rem] text-white",
        "btnGrad",
      )}
    >
      Начать расчет
    </button>
  );
};
