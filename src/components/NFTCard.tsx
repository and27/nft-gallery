interface NFTCardProps {
  nft: {
    image_url: string;
    name: string;
  };
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <div className="flex flex-col gap-2 w-full aspect-square overflow-hidden rounded-lg relative">
      <div className="">
        <img src={nft.image_url} alt={nft.name} className="object-cover" />
      </div>
      <div className="text-center absolute top-0 w-full h-full bg-gradient-to-t from-transparent to-black ">
        <p className="text-white pt-4">{nft.name}</p>
      </div>
    </div>
  );
};

export default NFTCard;
