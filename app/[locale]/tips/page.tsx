import TipsContent from "@/entities/TipsContent";
import { cn } from "@/shared/lib/utils/cn";
import TipsNextBtn from "@/shared/ui/tips/TipsNextBtn";

export default function page() {
  return (
    <main className={cn("min-w-screen flex min-h-screen flex-col items-center", "tipsBg")}>
      <TipsContent />
      <TipsNextBtn />
    </main>
  );
}
