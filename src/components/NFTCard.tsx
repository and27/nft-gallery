interface NFTCardProps {
  nft: {
    image_url: string;
    name: string;
    price?: string;
    owner?: string;
    isListed?: boolean;
  };
  onSell: () => void;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, onSell }) => {
  return (
    <>
      <div className="flex flex-col gap-2 w-full aspect-square overflow-hidden rounded-lg shadow-lg relative bg-white dark:bg-gray-800">
        <div className="relative w-full h-full">
          <img
            src={nft.image_url}
            alt={nft.name}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="absolute inset-0 h-full flex flex-col justify-between w-full bg-gradient-to-t from-transparent to-neutral-800 text-neutral-100 p-2">
          <div>
            <p className="text-sm">{nft.name}</p>
            {nft.price && <p className="text-xs">💰 {nft.price} ETH</p>}
            {nft.owner && <p className="text-xs">👤 {nft.owner}</p>}
            {nft.isListed ? (
              <span className="text-green-400 text-xs">✅ Listed</span>
            ) : (
              <span className="text-red-400 text-xs">🚫 Not Listed</span>
            )}
          </div>
          <button
            className="mt-2 bg-neutral-800 text-neutral-200 px-4 py-2 rounded-lg w-full hover:bg-neutral-800 hover:text-neutral-100"
            onClick={onSell}
          >
            Sell
          </button>
        </div>
      </div>
    </>
  );
};

export default NFTCard;
