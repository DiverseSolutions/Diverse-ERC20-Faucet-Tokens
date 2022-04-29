const hre = require("hardhat");

async function main() {
  const ARDX = await hre.ethers.getContractFactory("ARDX");
  const ARDXContract = await ARDX.deploy();

  await ARDXContract.deployed();

  const faucetContractAddress = "0x2eFbAa7BC2a3F2c351084469907D493861988980"
  await ARDXContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  console.log("ARDXContract deployed to:", ARDXContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
