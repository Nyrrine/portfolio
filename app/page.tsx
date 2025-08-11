import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ImpactSummary from "@/components/ImpactSummary";
import WhyContactMe from "@/components/WhyContactMe";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <ImpactSummary />
      <WhyContactMe />
      <About />
      <Contact />
      <Footer />
    </>
  );
}