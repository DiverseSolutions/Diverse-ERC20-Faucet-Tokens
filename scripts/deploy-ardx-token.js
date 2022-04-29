const hre = require("hardhat");

async function main() {
  const ARDX = await hre.ethers.getContractFactory("ARDX");
  const ARDXContract = await ARDX.deploy();

  await ARDXContract.deployed();

  console.log("ARDXContract deployed to:", ARDXContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
