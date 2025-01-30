require("dotenv").config();

const KEY = process.env.NEXT_PUBLIC_OPEN_SEA_KEY || "";
const mode = "testnet"; // testnet or mainnet
const network = mode === "testnet" ? "sepolia" : "ethereum";
const BASE_URL =
  mode === "testnet"
    ? "https://testnets-api.opensea.io/api/v1"
    : "https://api.opensea.io/api/v2";
("https://testnets-api.opensea.io/api/v1");

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

const getNFTsByCollection = (slug: string) => {
  const res = fetchData(`assets?collection=${slug}`);
  return res;
};

const getCollectionBySlug = (slug: string) => {
  const res = fetchData(`collection/${slug}`);
  return res;
};

export { getNFTsByCollection, getNFTsfromAccount, getCollectionBySlug };
