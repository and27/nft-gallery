"use client";

import { bebasNeue } from "@/components/Hero";
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
        ? `https://api.opensea.io/api/v2/collections?chain=ethereum&limit=8&next=${nextPage}`
        : "https://api.opensea.io/api/v2/collections?chain=ethereum&limit=8";

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

  const Spiner = () => (
    <div className="flex justify-center items-center py-5">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );

  return (
    <div className="bg-neutral-200">
      <div className="max-w-6xl mx-auto bg-neutral-100 p-10">
        <h1 className={`${bebasNeue.className}  text-3xl font-bold`}>
          Collections
        </h1>
        <div className="mt-10">
          <div className="grid grid-cols-4 gap-x-4 gap-y-10 justify-center">
            {collections.map((collection) => (
              <div key={collection.id} className="flex flex-col gap-2 relative">
                <div className="aspect-square w-full">
                  <img
                    src={collection.image_url}
                    alt={collection.name}
                    className="w-full h-full object-cover rounded-lg bg-neutral-300"
                  />
                </div>
                <div className="absolute bottom-0 w-full text-center">
                  <p>{collection.name}</p>

                  <button
                    className="bg-indigo-600 text-white w-full py-2 rounded-lg m-2"
                    onClick={() => router.push(`/surf/${collection.owner}`)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div ref={ref} className="mb-10">
            {inView ? <Spiner /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
