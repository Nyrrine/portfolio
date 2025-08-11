import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ImpactSummary from "@/components/ImpactSummary";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <ImpactSummary />
      <Contact />
      <Footer />
    </>
  );
}