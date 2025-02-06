"use client";

import { bebasNeue } from "@/components/Hero";
import ImageWithContent from "@/components/ImageWithContent";
import { BASE_URL } from "@/lib/opensea";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Account: React.FC = () => {
  const [collections, setCollections] = useState<any[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const router = useRouter();

  const getCollections = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-api-key": "c066b26a07ef42789b49049adf1ea2fa",
        },
      };

      const url = nextPage
        ? `${BASE_URL}/collections?chain=sepolia&limit=8&next=${nextPage}`
        : `${BASE_URL}/collections?chain=sepolia&limit=8`;

      const res = await fetch(url, options);
      const collections = await res.json();
      setCollections((prev) => [...prev, ...collections.collections]);
      setNextPage(collections.next);
    } catch (error) {
      console.error("Error fetching Collections:", error);
    }
  };

  useEffect(() => {
    if (inView) {
      getCollections();
    }
  }, [inView]);

  const navigateToCollection = (collection: string) => {
    router.push(`/surf/${collection}`);
  };

  const Spiner = () => (
    <div className="flex justify-center items-center py-5">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );

  return (
    <>
      <h1 className={`${bebasNeue.className} text-3xl font-bold mb-2`}>
        Collections
      </h1>
      <p>
        Explore the ultimate platform for NFT book lovers! Discover, organize,
        and showcase your exclusive NFT bookshelf collection.
      </p>
      <div className="mt-10">
        <div className="grid grid-cols-4 gap-x-4 gap-y-10 justify-center">
          {collections.map((collection) => {
            const image =
              collection.image_url !== ""
                ? collection.image_url
                : "/lyonHero.webp";
            return (
              <div key={collection.id} className="flex flex-col gap-2 relative">
                <ImageWithContent
                  image={image}
                  onClick={() => navigateToCollection(collection?.collection)}
                >
                  <p className="text-white mt-4">{collection?.name}</p>
                </ImageWithContent>
              </div>
            );
          })}
        </div>
        <div ref={ref} className="mb-10">
          {inView ? <Spiner /> : null}
        </div>
      </div>
    </>
  );
};

export default Account;
