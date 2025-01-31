"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { bebasNeue } from "@/components/Hero";
import { getNFTsfromAccount } from "@/lib/opensea";
import NFTSection from "@/modules/NFTSection";
import useWallet from "@/hooks/useWallet";

const Account: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [NFTs, setNFTs] = useState<any[]>([]);
  const router = useRouter();
  const { account, provider } = useWallet();

  useEffect(() => {
    if (account) {
      const fetchNFTs = async () => {
        setIsLoading(true);
        try {
          const NFTs = await getNFTsfromAccount(account);
          setNFTs(NFTs.nfts);
        } catch (error) {
          console.error("Error fetching NFTs:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchNFTs();
    }
  }, [account]);

  return (
    <div className="bg-neutral-950 min-h-screen pt-10">
      <div className="max-w-6xl mx-auto bg-neutral-100 p-16 mt-9 ">
        <div className="flex items-center w-full  mb-8 justify-between">
          <h1 className={`${bebasNeue.className} text-4xl font-bold`}>
            Welcome
          </h1>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            onClick={() => router.push("/mint")}
          >
            Mint NFT
          </button>
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <div>Account owner: {account}</div>
          <div>Provider: {provider}</div>
        </div>
        <NFTSection isLoading={isLoading} NFTs={NFTs} />
      </div>
    </div>
  );
};

export default Account;
