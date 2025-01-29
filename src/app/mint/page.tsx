"use client";
import MintForm from "@/components/MintForm";
import { mintNFT } from "@/lib/web3";
import React, { useState } from "react";

const MintNFTFPage = () => {
  const [recipient, setRecipient] = useState("");
  const [tokenURI, setTokenURI] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      <div className="max-w-6xl mx-auto bg-neutral-100 p-16 mt-9 ">
        <div className="flex items-center w-full mb-8 justify-center">
          <h1 className={`text-4xl font-bold text-center`}>Mint NFT</h1>
        </div>
        <h1 className="text-center">Acuñar un Nuevo NFT</h1>
        <MintForm
          handleSubmit={handleSubmit}
          recipient={recipient}
          setRecipient={setRecipient}
          tokenURI={tokenURI}
          setTokenURI={setTokenURI}
        />
        {status && <p>{status}</p>}
      </div>
    </div>
  );
};

export default MintNFTFPage;
