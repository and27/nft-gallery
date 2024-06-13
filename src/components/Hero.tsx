import { bebasNeue } from "@/app/layout";
import Spline from "@splinetool/react-spline";

const Hero = () => (
  <main className="min-h-screen grid md:grid-cols-2 gap-10 max-w-[1280px] mx-auto text-white items-center">
    <div className="flex flex-col gap-10 items-start justify-center">
      <h1 className={`${bebasNeue.className} text-6xl font-bold leading-snug`}>
        The best NTF
        <span className="bg-black rounded-lg px-2 ml-1">gallery</span>
      </h1>
      <p className="text-lg">
        We provide the best NTF library for you to use in your projects. The
        best NTF library for you to use in your projects.
      </p>
      <div className="flex gap-5 text-lg">
        <button className="px-4 py-2 bg-white text-black rounded-md">
          Get started
        </button>
        <button className="px-4 py-2 border border-white text-white rounded-md">
          Learn more
        </button>
      </div>
    </div>
    <div className="relative">
      <Spline scene="https://prod.spline.design/MIeBzF1PcIZuuEas/scene.splinecode" />{" "}
    </div>
  </main>
);

export default Hero;
