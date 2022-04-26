const hre = require("hardhat");

async function main() {
  const ARDM = await hre.ethers.getContractFactory("ARDM");
  const ARDMContract = await ARDM.deploy();
  await ARDMContract.deployed();

  const BARI = await ethers.getContractFactory("BARI");
  const BARIContract = await BARI.deploy();
  await BARIContract.deployed();

  const CAEL = await ethers.getContractFactory("CAEL");
  const CAELContract = await CAEL.deploy();
  await CAELContract.deployed();

  const CHB = await ethers.getContractFactory("CHB");
  const CHBContract = await CHB.deploy();
  await CHBContract.deployed();

  const CPX = await ethers.getContractFactory("CPX");
  const CPXContract = await CPX.deploy();
  await CPXContract.deployed();

  const CRX = await ethers.getContractFactory("CRX");
  const CRXContract = await CRX.deploy();
  await CRXContract.deployed();

  const DAC = await ethers.getContractFactory("DAC");
  const DACContract = await DAC.deploy();
  await DACContract.deployed();

  const DC = await ethers.getContractFactory("DC");
  const DCContract = await DC.deploy();
  await DCContract.deployed();

  const ELFC = await ethers.getContractFactory("ELFC");
  const ELFCContract = await ELFC.deploy();
  await ELFCContract.deployed();

  const GER = await ethers.getContractFactory("GER");
  const GERContract = await GER.deploy();
  await GERContract.deployed();

  const IHC = await ethers.getContractFactory("IHC");
  const IHCContract = await IHC.deploy();
  await IHCContract.deployed();

  const MNFT = await ethers.getContractFactory("MNFT");
  const MNFTContract = await MNFT.deploy();
  await MNFTContract.deployed();

  const MONT = await ethers.getContractFactory("MONT");
  const MONTContract = await MONT.deploy();
  await MONTContract.deployed();

  const OBOT = await ethers.getContractFactory("OBOT");
  const OBOTContract = await OBOT.deploy();
  await OBOTContract.deployed();

  const SPC = await ethers.getContractFactory("SPC");
  const SPCContract = await SPC.deploy();
  await SPCContract.deployed();

  const TRD = await ethers.getContractFactory("TRD");
  const TRDContract = await TRD.deploy();
  await TRDContract.deployed();

  const URG = await ethers.getContractFactory("URG");
  const URGContract = await URG.deploy();
  await URGContract.deployed();

  const WPL = await ethers.getContractFactory("WPL");
  const WPLContract = await WPL.deploy();
  await WPLContract.deployed();

  const ZESC = await ethers.getContractFactory("ZESC");
  const ZESCContract = await ZESC.deploy();
  await ZESCContract.deployed();
  


  console.log("ARDMContract deployed to:", ARDMContract.address);
  console.log("BARIContract deployed to:", BARIContract.address);
  console.log("CAELContract deployed to:", CAELContract.address);
  console.log("CHBContract deployed to:", CHBContract.address);
  console.log("CPXContract deployed to:", CPXContract.address);
  console.log("CRXContract deployed to:", CRXContract.address);
  console.log("DACContract deployed to:", DACContract.address);
  console.log("DCContract deployed to:", DCContract.address);
  console.log("ELFCContract deployed to:", ELFCContract.address);
  console.log("GERContract deployed to:", GERContract.address);
  console.log("IHCContract deployed to:", IHCContract.address);
  console.log("MNFTContract deployed to:", MNFTContract.address);
  console.log("MONTContract deployed to:", MONTContract.address);
  console.log("OBOTContract deployed to:", OBOTContract.address);
  console.log("SPCContract deployed to:", SPCContract.address);
  console.log("TRDContract deployed to:", TRDContract.address);
  console.log("URGContract deployed to:", URGContract.address);
  console.log("WPLContract deployed to:", WPLContract.address);
  console.log("ZESCContract deployed to:", ZESCContract.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
