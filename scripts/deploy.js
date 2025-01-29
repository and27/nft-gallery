const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners(); // Usa la cuenta del deployer como propietario inicial

  console.log("Deploying contract with the account:", deployer.address);

  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy(deployer.address); // Pasa la dirección del propietario inicial

  await myNFT.deployed();

  console.log("MyNFT deployed to:", myNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
