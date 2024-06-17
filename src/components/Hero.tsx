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
        <div className="relative flex gap-5 text-lg bg-white p-1 md:p-1.5 rounded-lg w-full md:w-auto mb-5 md:mb-0">
          <input
            id="contact-email"
            type="text"
            placeholder=""
            className="block p-3 text-black w-full text-base md:text-lg peer focus:outline-none focus:ring-0"
          />

          <label
            htmlFor="contact-email"
            className="absolute text-lg text-neutral-600 duration-300 ml-1transform -translate-y-2 scale-75 top-2 z-10 origin-[0] bg-white px-3 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
            peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Enter your email
          </label>
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
