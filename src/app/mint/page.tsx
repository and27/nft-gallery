"use client";
import { useState } from "react";
import MintForm from "@/components/MintForm";
import { mintNFT } from "@/lib/contractMethods";

const MintNFTFPage = () => {
  const [status, setStatus] = useState("");

  const handleMint = async (recipient: string, tokenURI: string) => {
    try {
      setStatus("Acuñando NFT...");
      const tx = await mintNFT(recipient, tokenURI);
      setStatus(
        `NFT acuñado exitosamente. Hash de la transacción: ${tx?.transactionHash}`
      );
    } catch (error) {
      setStatus(
        "Error al acuñar el NFT. Verifique la consola para más detalles."
      );
      console.error(error);
    }
  };

  return (
    <div className="bg-neutral-950 min-h-screen pt-10">
      <section className="max-w-6xl mx-auto bg-neutral-100 p-16 mt-9 ">
        <div className="flex items-center w-full mb-8 justify-center">
          <h1 className={`text-4xl font-bold text-center`}>Mint NFT</h1>
        </div>
        <p className="text-center">Acuñar un Nuevo NFT</p>
        <MintForm handleMint={handleMint} />
        {status && <p>{status}</p>}
      </section>
    </div>
  );
};

export default MintNFTFPage;
