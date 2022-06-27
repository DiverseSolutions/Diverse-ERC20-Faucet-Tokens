const hre = require("hardhat");

async function main() {
  // Foreign Tokens
  const BUSD = await ethers.getContractFactory("BUSD");
  const BUSDContract = await BUSD.deploy();
  await BUSDContract.deployed();

  const USDT = await ethers.getContractFactory("USDT");
  const USDTContract = await USDT.deploy();
  await USDTContract.deployed();

  // Mongolian Tokens
  
  const ARDX = await hre.ethers.getContractFactory("ARDX");
  const ARDXContract = await ARDX.deploy();
  await ARDXContract.deployed();

  const ARDM = await hre.ethers.getContractFactory("ARDM");
  const ARDMContract = await ARDM.deploy();
  await ARDMContract.deployed();

  const IHC = await ethers.getContractFactory("IHC");
  const IHCContract = await IHC.deploy();
  await IHCContract.deployed();

  const MONT = await ethers.getContractFactory("MONT");
  const MONTContract = await MONT.deploy();
  await MONTContract.deployed();
  

  const faucetContractAddress = "0x128e6614252b70225a65088052a686fef7a4fdd0"

  await BUSDContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await USDTContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));

  await ARDXContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await ARDMContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await IHCContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await MONTContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));


  console.log("BUSD deployed to:", BUSDContract.address);
  console.log("USDT deployed to:", USDTContract.address);

  console.log("ARDX deployed to:", ARDXContract.address);
  console.log("MONT deployed to:", MONTContract.address);
  console.log("ARDM deployed to:", ARDMContract.address);
  console.log("IHC deployed to:", IHCContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

