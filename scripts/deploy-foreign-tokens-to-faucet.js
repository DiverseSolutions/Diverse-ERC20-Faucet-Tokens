const hre = require("hardhat");

async function main() {
  const ADA = await ethers.getContractFactory("ADA");
  const ADAContract = await ADA.deploy();
  await ADAContract.deployed();

  const AVAX = await ethers.getContractFactory("AVAX");
  const AVAXContract = await AVAX.deploy();
  await AVAXContract.deployed();

  const BNB = await ethers.getContractFactory("BNB");
  const BNBContract = await BNB.deploy();
  await BNBContract.deployed();

  const BTC = await ethers.getContractFactory("BTC");
  const BTCContract = await BTC.deploy();
  await BTCContract.deployed();

  const BUSD = await ethers.getContractFactory("BUSD");
  const BUSDContract = await BUSD.deploy();
  await BUSDContract.deployed();

  const DOGE = await ethers.getContractFactory("DOGE");
  const DOGEContract = await DOGE.deploy();
  await DOGEContract.deployed();

  const DOT = await ethers.getContractFactory("DOT");
  const DOTContract = await DOT.deploy();
  await DOTContract.deployed();

  const ETH = await ethers.getContractFactory("ETH");
  const ETHContract = await ETH.deploy();
  await ETHContract.deployed();

  const LUNA = await ethers.getContractFactory("LUNA");
  const LUNAContract = await LUNA.deploy();
  await LUNAContract.deployed();

  const SHIB = await ethers.getContractFactory("SHIB");
  const SHIBContract = await SHIB.deploy();
  await SHIBContract.deployed();

  const SOL = await ethers.getContractFactory("SOL");
  const SOLContract = await SOL.deploy();
  await SOLContract.deployed();

  const USDT = await ethers.getContractFactory("USDT");
  const USDTContract = await USDT.deploy();
  await USDTContract.deployed();

  const XRP = await ethers.getContractFactory("XRP");
  const XRPContract = await XRP.deploy();
  await XRPContract.deployed();

  const UNI = await ethers.getContractFactory("UNI");
  const UNIContract = await UNI.deploy();
  await UNIContract.deployed();

  const MANA = await ethers.getContractFactory("MANA");
  const MANAContract = await MANA.deploy();
  await MANAContract.deployed();

  const SAND = await ethers.getContractFactory("SAND");
  const SANDContract = await SAND.deploy();
  await SANDContract.deployed();

  const faucetContractAddress = "0x2eFbAa7BC2a3F2c351084469907D493861988980"
  await ADAContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await AVAXContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await BNBContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await BTCContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await BUSDContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await DOGEContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await ETHContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await LUNAContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await SHIBContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await SOLContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await USDTContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await XRPContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await UNIContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await MANAContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));
  await SANDContract.transfer(faucetContractAddress,ethers.utils.parseUnits("5000000",18));

  console.log("ADA deployed to:", ADAContract.address);
  console.log("AVAX deployed to:", AVAXContract.address);
  console.log("BNB deployed to:", BNBContract.address);
  console.log("BTC deployed to:", BTCContract.address);
  console.log("BUSD deployed to:", BUSDContract.address);
  console.log("DOGE deployed to:", DOGEContract.address);
  console.log("DOT deployed to:", DOTContract.address);
  console.log("ETH deployed to:", ETHContract.address);
  console.log("LUNA deployed to:", LUNAContract.address);
  console.log("SHIB deployed to:", SHIBContract.address);
  console.log("SOL deployed to:", SOLContract.address);
  console.log("USDT deployed to:", USDTContract.address);
  console.log("XRP deployed to:", XRPContract.address);
  console.log("UNI deployed to:", UNIContract.address);
  console.log("MANA deployed to:", MANAContract.address);
  console.log("SAND deployed to:", SANDContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

