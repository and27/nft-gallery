import React, { useState } from "react";
import web3 from "../lib/web3";

const TransactionForm: React.FC = () => {
  const [recipient, setRecipient] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleRecipientChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecipient(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (!web3.utils.isAddress(recipient)) {
        throw new Error("Invalid recipient address");
      }

      const amountWei = web3.utils.toWei(amount, "ether");

      const accounts = await web3.eth.getAccounts();
      const from = accounts[0];

      await web3.eth.sendTransaction({
        from,
        to: recipient,
        value: amountWei,
      });

      alert(`Transaction sent successfully to ${recipient}`);
    } catch (error) {
      console.error("Error sending transaction:", error);
      alert(`Failed to send transaction: ${error.message}`);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl mb-2">Transaction Creator</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label>Recipient Address:</label>
          <input
            type="text"
            value={recipient}
            onChange={handleRecipientChange}
            required
            className="border border-gray-300 mb-2 px-2 py-1 w-full"
          />
        </div>
        <div>
          <label>Amount (ETH):</label>
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            required
            className="border border-gray-300 mb-2 px-2 py-1 w-full"
          />
        </div>
        <button className="px-5 py-2 bg-teal-600 text-white" type="submit">
          Send Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
