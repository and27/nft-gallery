import Web3 from "web3";
import myNFTAbi from "./myNFTAbi.json";
const abi = myNFTAbi.abi;

// Deployed contract address
export const contractAddress = "0xFA782834558a01b3fCB2EbE4b4778946b8be71A2";
const infuraKey = process.env.REACT_APP_INFURA_KEY;

export let web3: Web3;

const initializeWeb3 = () => {
  if (typeof window !== "undefined" && window.ethereum) {
    return new Web3(window.ethereum as any);
  } else {
    return new Web3(
      new Web3.providers.HttpProvider(
        `https://sepolia.infura.io/v3/${infuraKey}`
      )
    );
  }
};

web3 = initializeWeb3();

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
