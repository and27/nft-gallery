import web3, { contract, contractAddress, getAccount } from "./web3";
import { BrowserProvider } from "ethers";

require("dotenv").config();

const domain = {
  name: "Seaport",
  version: "1.1",
  chainId: 11155111, // Sepolia
  verifyingContract: "0x00000000006c3852cbEf3e08E8dF289169EdE581", // Seaport contract
};

const types = {
  OrderComponents: [
    { name: "offerer", type: "address" },
    { name: "zone", type: "address" },
    { name: "offer", type: "OfferItem[]" },
    { name: "consideration", type: "ConsiderationItem[]" },
    { name: "orderType", type: "uint8" },
    { name: "startTime", type: "uint256" },
    { name: "endTime", type: "uint256" },
    { name: "zoneHash", type: "bytes32" },
    { name: "salt", type: "uint256" },
    { name: "conduitKey", type: "bytes32" },
    { name: "counter", type: "uint256" },
  ],
  OfferItem: [
    { name: "itemType", type: "uint8" },
    { name: "token", type: "address" },
    { name: "identifierOrCriteria", type: "uint256" },
    { name: "startAmount", type: "uint256" },
    { name: "endAmount", type: "uint256" },
  ],
  ConsiderationItem: [
    { name: "itemType", type: "uint8" },
    { name: "token", type: "address" },
    { name: "identifierOrCriteria", type: "uint256" },
    { name: "startAmount", type: "uint256" },
    { name: "endAmount", type: "uint256" },
    { name: "recipient", type: "address" },
  ],
};

const KEY = process.env.NEXT_PUBLIC_OPEN_SEA_KEY || "";
const mode = "testnet"; // testnet or mainnet
const network = mode === "testnet" ? "sepolia" : "mainnet";
export const BASE_URL =
  mode === "testnet"
    ? "https://testnets-api.opensea.io/api/v2"
    : "https://api.opensea.io/api/v2";

const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": KEY,
  },
};

const fetchData = async (endpoint: string) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, getOptions);
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

const signOrder = async (orderData: any) => {
  try {
    const provider = new BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    const signature = (await signer).signTypedData(domain, types, orderData);
    console.log(
      "📌 Order Data enviado a OpenSea:",
      JSON.stringify(orderData, null, 2)
    );

    return signature;
  } catch (error) {
    console.error("❌ Error al firmar la orden:", error);
    throw new Error("No se pudo firmar el order.");
  }
};

const listOnOpenSea = async (tokenId: number, price: string) => {
  try {
    const account = await getAccount();

    const nftOwner = await contract.methods.ownerOf(tokenId).call();

    const priceInWei = web3.utils.toWei(price, "ether");
    if (isNaN(Number(priceInWei))) {
      throw new Error(`❌ Precio inválido: ${price}`);
    }
    const orderData = {
      offerer: account,
      offer: [
        {
          token: contractAddress,
          identifierOrCriteria: "0",
          itemType: 2, // ✅ 2 = NFT ERC721
          startAmount: 1,
          endAmount: 1,
        },
      ],
      consideration: [
        {
          token: "0x0000000000000000000000000000000000000000", // ✅ ETH
          itemType: 0,
          identifierOrCriteria: "0",
          startAmount: priceInWei,
          endAmount: priceInWei,
          recipient: account,
        },
      ],
      startTime: Math.floor(Date.now() / 1000),
      endTime: Math.floor(Date.now() / 1000) + 86400,
      orderType: 0,
      zone: "0x004C00500000aD104D7DBd00e3ae0A5C00560C00",
      zoneHash:
        "0x0000000000000000000000000000000000000000000000000000000000000000",
      conduitKey:
        "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
      totalOriginalConsiderationItems: 1,
      salt: Date.now().toString(),
      counter: 0,
    };

    const signature = await signOrder(orderData);

    const response = await fetch(
      "https://testnets-api.opensea.io/api/v2/orders/sepolia/seaport/listings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          parameters: orderData,
          signature: signature,
          protocol_address: "0x0000000000000068f116a894984e2db1123eb395",
        }),
      }
    );

    const result = await response.json();
    console.log("✅ NFT listado en OpenSea:", result);
    return result;
  } catch (error) {
    console.error("❌ Error listando en OpenSea:", error);
    throw new Error("Falló la transacción");
  }
};

export {
  getNFTsByCollection,
  getNFTsfromAccount,
  getCollectionBySlug,
  listOnOpenSea,
};
