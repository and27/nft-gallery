import Spline from "@splinetool/react-spline";
import { Bebas_Neue } from "next/font/google";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => (
  <main className="min-h-screen grid md:grid-cols-2 gap-10 max-w-[1280px] mx-auto text-white items-center pt-[80px] px-4">
    <div className="flex flex-col gap-7 items-start justify-center">
      <h1
        className={`${bebasNeue.className} text-6xl font-bold leading-snug leading-tight`}
      >
        Discover, collect and sell creative NFTs
      </h1>
      <p className="text-lg">
        We provide the best NTF library for you to use in your projects. The
        best NTF library for you to use in your projects.
      </p>
      <div className="flex gap-5 text-lg bg-white p-2 rounded-lg">
        <input
          type="text"
          placeholder="Enter your email"
          className="p-3 text-black"
        />
        <button className="px-4 py-2 bg-violet-950 text-white rounded-md hover:bg-black">
          Get an invitation
        </button>
      </div>
    </div>
    <div className="relative">
      <Spline scene="https://prod.spline.design/MIeBzF1PcIZuuEas/scene.splinecode" />
    </div>
  </main>
);

export default Hero;
