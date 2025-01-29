const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/a4752435dc794672a64a5846f11a6f10`
);

(async () => {
  try {
    const blockNumber = await provider.getBlockNumber();
    console.log("Conexión exitosa. Número de bloque:", blockNumber);
  } catch (error) {
    console.error("Error de conexión:", error);
  }
})();
