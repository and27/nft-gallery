import { bebasNeue } from "@/components/Hero";
import NFTCard from "@/components/NFTCard";
import Spinner from "@/components/Spinner";

interface NFTSectionProps {
  isLoading: boolean;
  NFTs: any[];
}
const NFTSection: React.FC<NFTSectionProps> = ({ isLoading, NFTs }) => {
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
            <NFTCard key={NFT.token_id} nft={NFT} />
          ))}
        </div>
      )}
    </section>
  );
};

export default NFTSection;
