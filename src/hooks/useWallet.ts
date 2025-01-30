import { getAccount } from "@/utils/web3Utils";
import { useState, useEffect } from "react";

const useWallet = () => {
  const [account, setAccount] = useState<string>("");
  const [provider, setProvider] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const [account, provider] = await getAccount();
        setAccount(account || "");
        setProvider(provider);
      } catch (error) {
        console.error("Error fetching Account:", error);
      }
    };

    fetchAccount();
  }, []);

  return { account, provider };
};

export default useWallet;
