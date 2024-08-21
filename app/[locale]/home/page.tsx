import HomeTitle from "@/entities/HomeTitle";
import { cn } from "@/shared/lib/utils/cn";

export default function page() {
  return (
    <main className={cn("min-w-screen flex min-h-screen flex-col items-center", "startBg")}>
      <HomeTitle />
    </main>
  );
}
