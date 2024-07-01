import Web3 from "web3";

let web3: Web3;

const infuraKey = process.env.REACT_APP_INFURA_KEY;

if (typeof window !== "undefined" && window.ethereum) {
  window.ethereum.request?.({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum as any);
} else {
  const provider = new Web3.providers.HttpProvider(
    `https://sepolia.infura.io/v3/${infuraKey}`
  );
  web3 = new Web3(provider);
}

export default web3;
