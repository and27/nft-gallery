import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FeatureCards from "@/components/FeatureCards";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-neutral-95 0 bg-neutral-950">
      <Navbar />
      <Hero />
      <FeatureCards />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
