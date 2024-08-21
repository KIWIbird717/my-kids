import CalculateText from "@/entities/calculate/CalculateText";
import SpinnerBg from "@/entities/calculate/SpinnerBg";
import { cn } from "@/shared/lib/utils/cn";
import MoonLogo from "@/shared/ui/MoonLogo";
import React from "react";

export default function page() {
  return (
    <main
      className={cn(
        "min-w-screen relative flex min-h-screen flex-col items-center overflow-hidden",
        "startBg",
      )}
    >
      <div className="mt-[4rem]">
        <MoonLogo />
      </div>
      <SpinnerBg />
      <CalculateText />
    </main>
  );
}
