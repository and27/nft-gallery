"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import web3 from "../../lib/web3";

const Account: React.FC = () => {
  const [account, setAccount] = useState<string>("");
  const [provider, setProvider] = useState<string>("");
  const [nfts, setNfts] = useState<any[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    const getAccount = async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0] || "");

        const providerInfo = web3.currentProvider;
        if (providerInfo && (providerInfo as any).isMetaMask) {
          setProvider("MetaMask");
        } else if (providerInfo) {
          setProvider(providerInfo.constructor.name);
        } else {
          setProvider("N/A");
        }
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    getAccount();
  }, []);

  const getNFTs = async () => {
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
      setNfts((prev) => [...prev, ...collections.collections]);
      setNextPage(collections.next);
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    }
  };

  useEffect(() => {
    if (inView) {
      getNFTs();
    }

    console.log(inView, nextPage);
  }, [inView]);

  const Spiner = () => (
    <div className="flex justify-center items-center py-5">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );

  return (
    <div className="bg-neutral-200">
      <div className="max-w-6xl mx-auto bg-neutral-100 p-10">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-5">Account info</h2>
          <div>Cuenta conectada: {account}</div>
          <div>Proveedor actual: {provider}</div>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-5">Your NFTS</h2>
          <div className="grid grid-cols-4 gap-x-4 gap-y-10 justify-center">
            {nfts.map((nft) => (
              <div key={nft.id} className="flex flex-col gap-2">
                <div className="aspect-square w-full">
                  <img
                    src={nft.image_url}
                    alt={nft.name}
                    className="w-full h-full object-cover rounded-lg bg-neutral-300"
                  />
                </div>
                <p>{nft.name}</p>
                <p className="text-sm text-neutral-600 line-clamp-1">
                  {nft.owner}
                </p>
                <button className="bg-indigo-600 text-white w-full py-2 rounded-lg">
                  View
                </button>
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
