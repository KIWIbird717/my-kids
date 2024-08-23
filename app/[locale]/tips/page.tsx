import TipsContent from "@/entities/TipsContent";
import BackBtn from "@/shared/ui/BackBtn";
import { Section } from "@/shared/ui/Section";
import TipsNextBtn from "@/shared/ui/tips/TipsNextBtn";

export default function page() {
  return (
    <Section image="tipsBg" className="flex h-full flex-col justify-between">
      <TipsContent />

      <div className="flex w-full items-center justify-center gap-2 px-[30px] pb-4">
        <BackBtn />
        <TipsNextBtn />
      </div>
    </Section>
  );
}
