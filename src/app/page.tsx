import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Realizacje } from "@/components/Realizacje";
import { Systemy } from "@/components/Systemy";
import { Proces } from "@/components/Proces";
import { Cennik } from "@/components/Cennik";
import { Opinie } from "@/components/Opinie";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { Kontakt } from "@/components/Kontakt";
import { Footer } from "@/components/Footer";
import { DemoSheet } from "@/components/DemoSheet";

export default function Home() {
  return (
    <div className="gb-page">
      <div className="gb-shell">
        <Nav />
        <Hero />
        <Marquee />
        <Realizacje />
        <Systemy />
        <Proces />
        <Cennik />
        <Opinie />
        <About />
        <Faq />
        <Kontakt />
        <Footer />
        <DemoSheet />
      </div>
    </div>
  );
}
