import web3 from "@/lib/web3";
import { getNFTsfromAccount } from "@/lib/opensea";

export const getAccount = async () => {
  const accounts = await web3.eth.getAccounts();
  if (!accounts.length) return [null, "No Wallet Connected"];

  const account = accounts[0];
  const providerInfo = web3.currentProvider;
  let provider = "Unknown";

  if (providerInfo && (providerInfo as any).isMetaMask) {
    provider = "MetaMask";
  } else if (providerInfo) {
    provider = providerInfo.constructor.name;
  }

  return [account, provider];
};
