import { contract, getAccount } from "./web3";
import web3 from "./web3";
export const mintNFT = async (recipient: string, metadataURI: string) => {
  try {
    const account = await getAccount();
    if (!account) throw new Error("No se pudo obtener la cuenta");

    console.log("📌 Enviando transacción con:");
    console.log("🔹 Recipient:", recipient);
    console.log("🔹 Metadata URI:", metadataURI);
    console.log("🔹 From Account:", account);

    const tx = await contract.methods
      .mintNFT(recipient, metadataURI)
      .send({ from: account, gas: "500000" });

    return tx;
  } catch (error) {
    console.error("Error al acuñar NFT:", error);
    throw new Error("Falló la transacción");
  }
};

export const listNFTForSale = async (tokenId: number, price: string) => {
  try {
    const account = await getAccount();
    if (!account) throw new Error("No se pudo obtener la cuenta");

    const currentOwner: string = await contract.methods.ownerOf(tokenId).call();

    if (currentOwner.toLowerCase() !== account.toLowerCase()) {
      throw new Error("❌ You do not own this NFT!");
    }

    const priceInWei = web3.utils.toWei(price, "ether");

    await contract.methods
      .approve(contract.options.address, tokenId)
      .send({ from: account });

    const tx = await contract.methods
      .listNFT(tokenId, priceInWei)
      .send({ from: account, gas: "500000" });

    return tx;
  } catch (error) {
    console.error("Error listing NFT:", error);
    throw new Error("Falló la transacción");
  }
};
