/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};

task("deploy", "Compile and deploy contract").setAction(
  async (taskArgs, hre) => {
    console.log("🔨 Compiling before deployment...");
    await hre.run("compile");
    console.log("🚀 Deploying contract...");
    await hre.run("run", { script: "./scripts/deploy.js" });
  }
);
