import { useState } from "react";
import { listNFTForSale } from "@/lib/contractMethods";
import { listOnOpenSea } from "@/lib/opensea";

interface SellModalProps {
  nft: {
    identifier: string;
    name: string;
  };
  setShowModal: (showModal: boolean) => void;
}

const SellModal: React.FC<SellModalProps> = ({ nft, setShowModal }) => {
  const [price, setPrice] = useState<string>("");
  //local listing (own marketplace)
  const handleSell = async () => {
    if (!price || parseFloat(price) <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    try {
      console.log("Selling NFT:", nft.identifier, price);
      const tx = await listNFTForSale(parseInt(nft.identifier), price);
      console.log("📌 NFT Listed:", tx);

      alert("NFT Listed Successfully!");
      setShowModal(false);
    } catch (error) {
      console.error("Error selling NFT:", error);
      alert("Failed to list NFT.");
    }
  };

  const handleSellNFT = async () => {
    try {
      const res = await listOnOpenSea(0, parseInt(price));
      if (res === "success") {
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error listing on OpenSea:", error);
      setShowModal(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Sell {nft.name}</h2>
        <label className="block text-sm font-semibold mb-2 text-neutral-700">
          Price
          <input
            type="number"
            placeholder="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 mb-4 mt-2 border border-gray-300 rounded-lg"
          />
        </label>
        <div className="flex gap-4">
          <button
            className="bg-neutral-100 border border-neutral-400 text-neutral-600 px-4 py-2 rounded-lg"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            onClick={handleSellNFT}
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellModal;
