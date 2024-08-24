import TipsContent from "@/entities/TipsContent";
import { BackBtn } from "@/shared/ui/BackBtn";
import { Section } from "@/shared/ui/Section";
import TipsNextBtn from "@/shared/ui/tips/TipsNextBtn";
import { useRouter } from "next/navigation";

export default function page() {
  return (
    <Section image="tipsBg" className="flex h-screen flex-col justify-between">
      <TipsContent />
    </Section>
  );
}
