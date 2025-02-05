import { bebasNeue } from "@/components/Hero";
import NFTCard from "@/components/NFTCard";
import SellModal from "@/components/SellModal";
import Spinner from "@/components/Spinner";
import { useState } from "react";

interface NFTSectionProps {
  isLoading: boolean;
  NFTs: any[];
}
const NFTSection: React.FC<NFTSectionProps> = ({ isLoading, NFTs }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedNFT, setSelectedNFT] = useState<any>(null);

  const handleSellClick = (nft: string) => {
    setSelectedNFT(nft);
    setShowModal(true);
  };

  return (
    <section>
      <h2
        className={`${bebasNeue.className} text-neutral-500 font-semibold text-3xl mb-4`}
      >
        My NFTs
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-4 gap-x-4 gap-y-10 justify-center">
          {NFTs?.map((NFT) => (
            <NFTCard
              key={NFT.token_id}
              nft={NFT}
              onSell={() => handleSellClick(NFT)}
            />
          ))}
        </div>
      )}
      {showModal && <SellModal nft={selectedNFT} setShowModal={setShowModal} />}
    </section>
  );
};

export default NFTSection;
