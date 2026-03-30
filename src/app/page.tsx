import { CanvasSequence } from "@/components/CanvasSequence";
import { ScrollOverlays } from "@/components/ScrollOverlays";

export default function Home() {
  return (
    <main className="relative bg-deepBlack text-white">
      {/* 
        This is the main scrollable track.
        Because we have 5 defined sections with a lot of transitions,
        we use 500vh to ensure it feels very slow and deliberate.
      */}
      <div className="h-[400vh] w-full">
        {/* Sticky Canvas that stays on screen while user scrolls */}
        <CanvasSequence />

        {/* Floating text section elements linked to scroll */}
        <ScrollOverlays />
      </div>
    </main>
  );
}
