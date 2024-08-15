import Plan from "@/entities/Plan";
import { cn } from "@/shared/lib/utils/cn";
import React from "react";

export default function page() {
  return (
    <main className={cn("min-w-screen flex min-h-screen flex-col items-center", "planBg")}>
      <Plan />
    </main>
  );
}
