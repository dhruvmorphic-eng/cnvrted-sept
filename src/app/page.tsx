import { Header } from "@/components/Header";
import { ScrollStack } from "@/components/sections/ScrollStack";
// import { WaterfallSection } from "@/components/sections/WaterfallSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <ScrollStack />
        {/* Add sections back one at a time as each is finalized */}
        {/* <WaterfallSection /> */}
      </main>
    </>
  );
}
