import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

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
        <div className="flex gap-5 text-lg bg-white p-1 md:p-1.5 rounded-lg w-full md:w-auto mb-5 md:mb-0">
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            type="text"
            placeholder="Enter your email"
            className="p-3 text-black w-full text-base md:text-lg"
          />
          <button className="px-4 py-2 bg-violet-950 text-white rounded-md hover:bg-black shrink-0 ">
            Join now
          </button>
        </div>
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
