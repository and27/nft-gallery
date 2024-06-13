import Image from "next/image";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="relative rounded-lg w-full h-64 col-span-2 border border-transparent hover:border-fuchsia-500 hover:scale-105 transition-transform duration-300">
        <Image
          src="/gallery/item3.webp"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          alt="NFT 1"
        />
      </div>
      <div className="relative rounded-lg w-full h-100 row-span-2 border border-transparent hover:border-fuchsia-500 hover:scale-105 transition-transform duration-300">
        <Image
          src="/gallery/item1.webp"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          alt="NFT 2"
        />
      </div>

      <div className="relative rounded-lg w-full h-64 border border-transparent hover:border-fuchsia-500 hover:scale-105 transition-transform duration-300">
        <Image
          src="/gallery/item1.webp"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          alt="NFT 5"
        />
      </div>
      <div className="relative rounded-lg w-full h-64 w-full border border-transparent hover:border-fuchsia-500 hover:scale-105 transition-transform duration-300">
        <Image
          src="/gallery/item1.webp"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          alt="NFT 6"
        />
      </div>
      <div className="relative rounded-lg w-full h-64 border border-transparent hover:border-fuchsia-500   hover:scale-105 transition-transform duration-300">
        <Image
          src="/gallery/item3.webp"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          alt="NFT 7"
        />
      </div>
      <div className="relative rounded-lg w-full h-64 border border-transparent hover:border-fuchsia-500 hover:scale-105 transition-transform duration-300">
        <Image
          src="/gallery/item2.webp"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          alt="NFT 8"
        />
      </div>
    </div>
  );
};

export default Gallery;
