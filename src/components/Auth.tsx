"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { SiweMessage } from "siwe";

const API_URL = "/api/verify-siwe";

const Auth = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedWallet = localStorage.getItem("walletAddress");
    if (storedWallet) {
      setWalletAddress(storedWallet);
      setIsAuthenticated(true);
    }
  }, []);

  const loginWithEthereum = async () => {
    if (!window.ethereum) {
      alert("Install metamask please");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await (await signer).getAddress();
      const siweMessageData = {
        domain: window.location.host,
        address,
        statement: "Login with ethereum with our platform.",
        uri: window.location.origin,
        version: "1",
        chainId: 1,
        nonce: "1234567890",
        issuedAt: new Date().toISOString(),
      };

      const siweMessage = new SiweMessage(siweMessageData);
      const preparedMessage = siweMessage.prepareMessage();
      const signedMessage = await signer.signMessage(preparedMessage);

      const response = await fetch("/api/verify-siwe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: siweMessageData,
          signature: signedMessage,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setWalletAddress(address);
        setIsAuthenticated(true);
        localStorage.setItem("walletAddress", address);
      } else {
        console.error("Error en autenticación SIWE:", data.error);
      }
    } catch (error) {
      console.error("Error en SIWE:", error);
    }
  };

  function logout() {
    setWalletAddress(null);
    setIsAuthenticated(false);
    localStorage.removeItem("walletAddress");
  }

  return (
    <div>
      {!isAuthenticated ? (
        <button
          onClick={loginWithEthereum}
          className="px-6 py-2 bg-transparent text-neutral-200 text-lg border border-neutral-200 rounded-md hover:bg-black/50"
        >
          Ethereum Login
        </button>
      ) : (
        <div className="flex items-center gap-4">
          <p className="text-white">
            🟢 {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}
          </p>
          <button
            onClick={logout}
            className="px-3 py-2 bg-transparent border border-red-500 text-red-500 rounded-md hover:bg-red-800/50"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
