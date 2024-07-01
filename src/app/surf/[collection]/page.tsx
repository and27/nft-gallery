import { getNFTsFromCollection } from "@/app/lib/opensea";
import { bebasNeue } from "@/components/Hero";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { collection: string };
}) {
  const data = await getNFTsFromCollection(params.collection);

  return (
    <section className="bg-neutral-200">
      <div className="mx-auto max-w-[1280px] bg-white">
        <h1 className={`${bebasNeue.className} text-3xl font-bold`}>
          Collection
        </h1>
        <h2 className="">Owner: {params.collection}</h2>
        <div className="grid grid-cols-3 gap-4">
          {data.nfts.map((nft: any) => (
            <div className="relative overflow-hidden rounded-lg w-full h-64 group">
              <Image
                src={nft.image_url}
                alt={nft.name}
                fill
                className="rounded-lg transition-transform duration-500 transform group-hover:scale-110 w-full h-full object-cover"
              />
              <div className="z-10 relative w-full h-full bg-gradient-to-t from-transparent to-black opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                <p className="text-center text-white pt-5">{nft.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
