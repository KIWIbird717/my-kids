import type { FC, ReactNode } from "react";
import { cn } from "../lib/utils/cn";

interface SectionProps {
  children: ReactNode;
  image: string;
  className?: string;
}

interface SectionComponent extends FC<SectionProps> {}

export const Section: SectionComponent = ({ children, image, className }) => {
  return (
    <main className={cn("min-w-screen flex min-h-screen flex-col items-center", image, className)}>
      {children}
    </main>
  );
};
