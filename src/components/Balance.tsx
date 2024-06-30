"use client";

import { useEffect, useState } from "react";
import web3 from "../lib/web3";

const Balance: React.FC = () => {
  const [balance, setBalance] = useState<string>("");

  useEffect(() => {
    const getBalance = async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          const balanceWei = await web3.eth.getBalance(accounts[0]);
          const balanceEth = web3.utils.fromWei(balanceWei, "ether");
          setBalance(balanceEth);
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    getBalance();
  }, []);

  return (
    <div>
      <div>Balance de la cuenta: {balance} ETH</div>
    </div>
  );
};

export default Balance;
