import HeartLogo from "@/entities/HeartLogo";
import StartText from "@/entities/StartText";
import { Section } from "@/shared/ui/Section";
import DateSelection from "@/widgets/DateSelection";

export default function Home() {
  return (
    <Section image="startBg">
      <HeartLogo />
      <StartText />
      <DateSelection />
    </Section>
  );
}
