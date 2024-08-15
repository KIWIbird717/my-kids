import HeartLogo from "@/entities/HeartLogo";
import StartText from "@/entities/StartText";
import { cn } from "@/shared/lib/utils/cn";

export default function Home() {
  return (
    <main className={cn("min-w-screen flex min-h-screen flex-col items-center", "startBg")}>
      <HeartLogo />
      <StartText />
    </main>
  );
}
