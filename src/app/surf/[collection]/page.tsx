import { getCollectionBySlug, getNFTsByCollection } from "@/lib/opensea";
import { bebasNeue } from "@/components/Hero";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { collection: string };
}) {
  const data = await getNFTsByCollection(params.collection);
  const collectionData = await getCollectionBySlug(params.collection);

  return (
    <>
      <h1 className={`${bebasNeue.className} text-3xl font-bold mb-4`}>
        Collection: {collectionData.name}
      </h1>
      <div className="flex gap-10 items-center mb-10">
        <Image
          src={collectionData.image_url || "/lyonHero.webp"}
          alt={collectionData.name}
          width={100}
          height={100}
          className="rounded-full aspect-square"
        />
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{collectionData.name}</p>
          <p>{collectionData.description}</p>
          <p>Owner: {collectionData.owner}</p>
        </div>
      </div>
      <h2
        className={`${bebasNeue.className} text-neutral-500 font-semibold text-3xl mb-4`}
      >
        Items
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {!data?.nfts?.length && (
          <div className="col-span-3 text-center min-h-56 grid items-center">
            <p className="text-xl">No NFTs found in this collection</p>
          </div>
        )}
        {data?.nfts?.map((nft: any) => (
          <div className="relative overflow-hidden rounded-lg w-full h-64 group">
            <Image
              src={nft.image_url || "/lyonHero.webp"}
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
    </>
  );
}
