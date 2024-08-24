import HomeTitle from "@/entities/HomeTitle";
import { cn } from "@/shared/lib/utils/cn";
import { Section } from "@/shared/ui/Section";

export default function page() {
  return (
    <Section image="startBg">
      <HomeTitle />
    </Section>
  );
}
