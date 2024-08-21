import PaymentErrorModal from "@/entities/calculate/payment/PaymentErrorModal";
import PaymentText from "@/entities/calculate/payment/PaymentText";
import { cn } from "@/shared/lib/utils/cn";
import MoonLogo from "@/shared/ui/MoonLogo";

export default function page() {
  return (
    <main
      className={cn("min-w-screen relative flex min-h-screen flex-col items-center", "startBg")}
    >
      <div className="mt-[4rem]">
        <MoonLogo />
      </div>
      <PaymentText />
      <PaymentErrorModal />
    </main>
  );
}
