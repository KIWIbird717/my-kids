import HeartLogo from "@/entities/HeartLogo";
import StartText from "@/entities/StartText";
import { Section } from "@/shared/ui/Section";

export default function Home() {
  return (
    <Section image="startBg">
      <HeartLogo />
      <StartText />
    </Section>
  );
}
