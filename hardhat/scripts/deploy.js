const hre = require("hardhat");

const main = async () => {
  const rsvpContractFactry = await hre.ethers.getContractFactory("Web3RSVP");
  const rsvpContract = await rsvpContractFactry.deploy();
  await rsvpContract.deployed();

  console.log("RSVPContract deployed to:", rsvpContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();