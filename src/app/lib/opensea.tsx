const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": "c066b26a07ef42789b49049adf1ea2fa",
  },
};

const getNFTsFromCollection = async (owner: string) => {
  try {
    const res = await fetch(
      `https://api.opensea.io/api/v2/chain/ethereum/account/${owner}/nfts?limit=10`,
      options
    );
    const nfts = await res.json();
    return nfts;
  } catch (error) {
    console.error("Error fetching NFTs:", error);
  }
};

const getNFTsfromAccount = async (account: string) => {
  try {
    const res = await fetch(
      `https://api.opensea.io/api/v2/chain/ethereum/account/${account}/nfts`,
      options
    );
    const nfts = await res.json();
    return nfts;
  } catch (error) {
    console.error("Error fetching NFTs:", error);
  }
};

export { getNFTsFromCollection, getNFTsfromAccount };
