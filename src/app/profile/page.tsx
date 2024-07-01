"use client";
import { useEffect, useState } from "react";
import { bebasNeue } from "@/components/Hero";
import { useRouter } from "next/navigation";
import { getNFTsfromAccount } from "../lib/opensea";
import web3 from "../../lib/web3";

const getAccount = async () => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const providerInfo = web3.currentProvider;
  let provider = "Unknown";

  if (providerInfo && (providerInfo as any).isMetaMask) {
    provider = "MetaMask";
  } else if (providerInfo) {
    provider = providerInfo.constructor.name;
  } else {
    provider = "Unknown";
  }

  return [account, provider];
};

const getNFTs = async (account: string) => {
  const NFTs = await getNFTsfromAccount(account);
  return NFTs;
};

const Account: React.FC = () => {
  const [account, setAccount] = useState<string>(
    "0xCF00eC2B327BCfA2bee2D8A5Aee0A7671d08A283"
  );
  const [provider, setProvider] = useState<string | null>(null);
  const [NFTs, setNFTs] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchAccount = async () => {
      const [account, provider] = await getAccount();
      setAccount(account);
      setProvider(provider);
    };

    const fetchNFTs = async (account: string) => {
      if (!account) return;
      const NFTs = await getNFTs(account);
      setNFTs(NFTs.nfts);
    };
    fetchAccount();
    fetchNFTs(account);
  }, []);

  return (
    <div className="bg-neutral-200 min-h-screen">
      <div className="max-w-6xl mx-auto bg-neutral-100 p-10 ">
        <div className="flex items-center w-full  mb-8 justify-between">
          <h1 className={`${bebasNeue.className} text-4xl font-bold`}>
            Welcome
          </h1>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            onClick={() => router.push("/surf")}
          >
            Browse NFTs
          </button>
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-neutral-500 font-semibold">Account info</h2>
          <div>Account owner: {account}</div>
          <div>Provider: {provider}</div>
        </div>
        <h2 className="text-neutral-500 font-semibold">My NFTs</h2>
        {NFTs.length === 0 ? (
          <div className="flex justify-center items-center py-5">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-x-4 gap-y-10 justify-center">
            {NFTs.map((NFT) => (
              <div
                key={NFT.id}
                className="flex flex-col gap-2 w-full aspect-square overflow-hidden rounded-lg relative"
              >
                <div className="">
                  <img
                    src={NFT.image_url}
                    alt={NFT.name}
                    className="object-cover"
                  />
                </div>
                <div className="text-center absolute top-0 w-full h-full bg-gradient-to-t from-transparent to-black ">
                  <p className="text-white pt-4">{NFT.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
