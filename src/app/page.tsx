import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <ServicesGrid />
      <CTA />
    </main>
  );
}