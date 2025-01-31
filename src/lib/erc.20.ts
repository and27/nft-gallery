import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);

const daiContractAddress = "0x7F045e51d2ef86C6ECE1b74EdA3f1b3775a99Bb6";

const daiContractAbi = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const daiContract = new web3.eth.Contract(
  daiContractAbi as any[],
  daiContractAddress
);

export default daiContract;
