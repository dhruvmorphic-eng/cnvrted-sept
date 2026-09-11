import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { IntentSection } from "@/components/sections/IntentSection";
import { WaterfallSection } from "@/components/sections/WaterfallSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <IntentSection />
        <WaterfallSection />
      </main>
    </>
  );
}
