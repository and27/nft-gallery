import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Auth from "./Auth";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => (
  <main className="relative back md:h-screen text-white pt-[80px] md:pt-0 px-4">
    <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full">
      <div className="flex flex-col gap-7 items-start justify-center">
        <h1
          className={`${bebasNeue.className} text-4xl md:text-6xl font-bold leading-none slide-bottom mt-5`}
        >
          Discover, Collect, and Manage Your Creative NFTs
        </h1>
        <p className="text-lg">
          Explore, organize, and manage your NFTs effortlessly. Our platform
          provides you with advanced tools to showcase, sort, and share your
          digital assets.
        </p>
        <button
          // onClick={loginWithEthereum}
          className="px-6 py-3 bg-transparent text-neutral-200 text-lg border border-neutral-200 rounded-md hover:bg-black/50"
        >
          Login with Ethereum
        </button>
      </div>
      <div className="w-full h-full">
        <Image
          src="/lyonHero.webp"
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="w-full md:w-1/2 md:absolute "
          style={{ insetBlockEnd: "0" }}
        />
      </div>
    </div>
  </main>
);

export default Hero;
