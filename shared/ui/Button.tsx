"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import type { ComponentProps, FC, ReactNode } from "react";
import { cn } from "../lib/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";

  icon?: JSX.Element;
}

interface ButtonComponent extends FC<ButtonProps> {}

export const Button: ButtonComponent = ({
  children,
  variant = "primary",

  icon,
  ...props
}) => {
  const router = useRouter();
  const locale = useLocale();
  const variants = {
    primary: "btnGrad bg-btn",
    secondary: "border-[2px] border-btn bg-transparent",
  };

  return (
    <button
      className={cn(
        "flex w-full items-center justify-center rounded-[1.5rem] px-[3rem] py-[0.9375rem] text-[1.15rem] font-bold leading-[1.75rem] text-white disabled:opacity-50",
        variants[variant],
        icon && "gap-2",
      )}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
};
