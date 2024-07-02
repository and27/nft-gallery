import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FeatureCards from "@/components/FeatureCards";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <Gallery />
      <About />
      <Contact />
    </>
  );
}
