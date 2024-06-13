import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-neutral-95 0 back">
      <Hero />
      <section className="text-white py-[8rem] bg-neutral-950">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-4xl font-bold text-center w-[20rem] mx-auto mb-[7rem]">
            Would you discover all our master pieces?
          </h2>
          <Gallery />
        </div>
      </section>
      <About />
      <Contact />
    </div>
  );
}
