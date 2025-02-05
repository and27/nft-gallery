interface NFTCardProps {
  nft: {
    image_url: string;
    name: string;
  };
  onSell: () => void;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, onSell }) => {
  return (
    <>
      <div className="flex flex-col gap-2 w-full aspect-square overflow-hidden rounded-lg relative">
        <div className="relative w-full h-full">
          <img
            src={nft.image_url}
            alt={nft.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-center flex flex-col items-start justify-between p-4 absolute top-0 w-full h-full bg-gradient-to-t from-transparent to-black">
          <p className="text-white">{nft.name}</p>
          <button
            className="bg-neutral-800 text-neutral-200 px-6 py-2 rounded-lg"
            onClick={() => onSell()}
          >
            Sell
          </button>
        </div>
      </div>
    </>
  );
};

export default NFTCard;
