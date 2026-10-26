// The home page — just a list of sections, top to bottom.
// To reorder the page, move these lines around.
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { WorkGrid } from "@/components/WorkGrid";
import { Curiosity } from "@/components/Curiosity";
import { Writing } from "@/components/Writing";
import { Creative } from "@/components/Creative";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <WorkGrid />
      <Curiosity />
      <Writing />
      <Creative />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
