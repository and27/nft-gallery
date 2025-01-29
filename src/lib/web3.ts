import Web3 from "web3";
import myNFTAbi from "./myNFTAbi.json";
const abi = myNFTAbi.abi;
let web3: Web3;

const infuraKey = process.env.REACT_APP_INFURA_KEY;

// Deployed contract address
const contractAddress = "0x84a4dC15b3C3419EC3378f627661208874e710eD";

if (typeof window !== "undefined" && window.ethereum) {
  window.ethereum.request?.({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum as any);
} else {
  const provider = new Web3.providers.HttpProvider(
    `https://sepolia.infura.io/v3/${infuraKey}`
  );
  web3 = new Web3(provider);
}

// contract instance
export const contract = new web3.eth.Contract(abi, contractAddress);

export const mintNFT = async (recipient: string, tokenURI: string) => {
  try {
    const accounts = (await window.ethereum?.request?.({
      method: "eth_requestAccounts",
    })) as unknown as string[];
    const account = accounts[0];

    const tx = await contract.methods
      .mintNFT(recipient, tokenURI)
      .send({ from: account });

    return tx;
  } catch (error) {
    console.error("Error al acuñar NFT:", error);
  }
};

export default web3;
