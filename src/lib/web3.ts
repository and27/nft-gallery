import Web3 from "web3";

let web3: Web3;

if (typeof window !== "undefined" && window.ethereum) {
  window.ethereum.request?.({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum as any);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"
  );
  web3 = new Web3(provider);
}

export default web3;
