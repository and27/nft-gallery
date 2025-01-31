import Web3 from "web3";
import myNFTAbi from "./myNFTAbi.json";
const abi = myNFTAbi.abi;

// Deployed contract address
const contractAddress = "0x7D9B1a8d2D53A3d76325DC7d40CA7D057c2A140F";
const infuraKey = process.env.REACT_APP_INFURA_KEY;

let web3: Web3;

if (typeof window !== "undefined" && window.ethereum) {
  window.ethereum.request?.({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum as any);
} else {
  const provider = new Web3.providers.HttpProvider(
    `https://sepolia.infura.io/v3/${infuraKey}`
  );
  web3 = new Web3(provider);
}

export const getAccount = async () => {
  const accounts = (await window.ethereum?.request?.({
    method: "eth_requestAccounts",
  })) as unknown as string[];
  if (accounts.length === 0) {
    throw new Error("No hay cuentas disponibles");
  }
  return accounts[0];
};

// contract instance
export const contract = new web3.eth.Contract(abi, contractAddress);

export default web3;
