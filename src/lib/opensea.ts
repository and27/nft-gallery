import web3, { contractAddress, getAccount } from "./web3";
import { OpenSeaSDK, Chain } from "opensea-js";
import { ethers } from "ethers";

require("dotenv").config();

const KEY = process.env.NEXT_PUBLIC_OPEN_SEA_KEY || "";
console.log(KEY);
const mode = "testnet"; // testnet or mainnet
const network = mode === "testnet" ? Chain.Sepolia : Chain.Mainnet;
export const BASE_URL =
  mode === "testnet"
    ? "https://testnets-api.opensea.io/api/v2"
    : "https://api.opensea.io/api/v2";

const getOpenSeaSDK = async () => {
  if (!window.ethereum) {
    throw new Error("Metamask no está instalado.");
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  return new OpenSeaSDK(provider as any, {
    chain: network,
    // apiKey: KEY, //not required when testnet
  });
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": KEY,
  },
};

const fetchData = async (endpoint: string) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, options);
    if (!res.ok) throw new Error(`Error en la API: ${res.statusText}`);

    return await res.json();
  } catch (error) {
    console.error("Error fetching Account:", error);
    return null;
  }
};

const getNFTsfromAccount = async (address: string) => {
  const res = await fetchData(`chain/${network}/account/${address}/nfts`);
  return res;
};

const getNFTsByCollection = async (slug: string) => {
  const res = fetchData(`collections/${slug}/nfts?chain=sepolia`);
  return res;
};

const getCollectionBySlug = (slug: string) => {
  const res = fetchData(`collections/${slug}?chain=sepolia`);
  return res;
};

const listOnOpenSea = async (tokenId: number, price: number) => {
  try {
    const account = await getAccount();
    const opensea = await getOpenSeaSDK();

    await opensea.createListing({
      asset: {
        tokenId: tokenId.toString(),
        tokenAddress: contractAddress,
      },
      accountAddress: ethers.utils.getAddress(account),
      startAmount: price, // in ETH
    });
    return "sucess";
  } catch (error) {
    throw new Error("Falló la transacción");
  }
};

export {
  getNFTsByCollection,
  getNFTsfromAccount,
  getCollectionBySlug,
  listOnOpenSea,
};
