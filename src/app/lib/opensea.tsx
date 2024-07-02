const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-api-key": "c066b26a07ef42789b49049adf1ea2fa",
  },
};

const getNFTsfromAccount = async (address: string) => {
  try {
    const res = await fetch(
      `https://api.opensea.io/api/v2/chain/ethereum/account/${address}/nfts`,
      options
    );
    const account = await res.json();
    return account;
  } catch (error) {
    console.error("Error fetching Account:", error);
  }
};

const getNFTsByCollection = async (slug: string) => {
  try {
    const res = await fetch(
      `https://api.opensea.io/api/v2/collection/${slug}/nfts`,
      options
    );
    const collection = await res.json();
    return collection;
  } catch (error) {
    console.error("Error fetching Collection:", error);
  }
};

const getCollectionBySlug = async (slug: string) => {
  try {
    const res = await fetch(
      `https://api.opensea.io/api/v2/collections/${slug}`,
      options
    );
    const collection = await res.json();
    return collection;
  } catch (error) {
    console.error("Error fetching Collection:", error);
  }
};

export { getNFTsByCollection, getNFTsfromAccount, getCollectionBySlug };
