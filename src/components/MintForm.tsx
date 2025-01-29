interface MintFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  recipient: string;
  setRecipient: (recipient: string) => void;
  tokenURI: string;
  setTokenURI: (tokenURI: string) => void;
}

const MintForm = ({
  handleSubmit,
  recipient,
  setRecipient,
  tokenURI,
  setTokenURI,
}: MintFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div>
        <label>Recipient address</label>
        <input
          className="w-full p-2 border border-gray-300 rounded mt-1"
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="0x..."
          required
        />
      </div>
      <div>
        <label>Token URI:</label>
        <input
          className="w-full p-2 border border-gray-300 rounded mt-1"
          type="text"
          value={tokenURI}
          onChange={(e) => setTokenURI(e.target.value)}
          placeholder="https://example.com/metadata.json"
          required
        />
      </div>
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg mt-5"
        type="submit"
      >
        Acuñar NFT
      </button>
    </form>
  );
};

export default MintForm;
