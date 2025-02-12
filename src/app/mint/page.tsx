"use client";
import { useState } from "react";
import MintForm from "@/components/MintForm";
import { mintNFT } from "@/lib/contractMethods";
import Link from "next/link";

const MintNFTFPage = () => {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleMint = async (recipient: string, tokenURI: string) => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-neutral-950 min-h-screen pt-10">
      <section className="max-w-6xl mx-auto bg-neutral-100 p-16 mt-9 ">
        <Link href={"/profile"} className="text-indigo-600">
          ← Volver a mi perfil
        </Link>

        <div className="flex items-center w-full mb-8 justify-center">
          <h1 className={`text-4xl font-bold text-center`}>Mint NFT</h1>
        </div>
        <p className="text-center">Acuñar un Nuevo NFT</p>
        <MintForm handleMint={handleMint} />

        {(status || isLoading) && (
          <div className="flex flex-col gap-8 fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center">
            <p className="text-neutral-100">{status}</p>
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
              onClick={() => setStatus("")}
            >
              Volver
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default MintNFTFPage;
