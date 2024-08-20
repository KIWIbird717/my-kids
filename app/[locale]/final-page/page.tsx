import PageBoy from "@/entities/final-page/PageBoy";
import { BackButton } from "@/entities/final-page/shared/BackButton";
import { cn } from "@/shared/lib/utils/cn";
import MoonLogo from "@/shared/ui/MoonLogo";
import React from "react";

export default function page() {
  return (
    <main
      className={cn(
        "min-w-screen relative flex h-screen min-h-screen flex-col items-center overflow-hidden",
        "startBg",
      )}
    >
      <div className="mt-[4rem] flex w-full items-center justify-between px-[20px]">
        <BackButton />
        <MoonLogo />
        <div className="aspect-square w-[56px]" />
      </div>

      <PageBoy />
      {/* <PageGirl /> */}
    </main>
  );
}
