const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const MyNFT = await hre.ethers.getContractFactory("ArtCollectibles");
  const myNFT = await MyNFT.deploy(deployer.address);

  await myNFT.deployed();

  console.log("MyNFT deployed to:", myNFT.address);
  console.log("🚀 Copy this address and update frontend (web3.ts)!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
