"use client";

import type { ComponentProps, FC, ReactNode } from "react";

interface BackBtnProps extends ComponentProps<"button"> {
  children: ReactNode;
  icon?: JSX.Element;
}

export const BackBtn: FC<BackBtnProps> = ({ children, icon, ...props }) => {
  return (
    <button
      className="max-h-[56px] max-w-[56px] rounded-3xl border-[2px] border-btn bg-gradient-to-bl from-backBtnGradient2 to-backBtnGradient1 px-[1.22rem] py-[1.315rem]"
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
