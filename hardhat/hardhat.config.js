require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" })

const STAGING_INFURA_URL = process.env.STAGING_INFURA_URL
const STAGING_PRIVATE_KEY = process.env.STAGING_PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: STAGING_INFURA_URL,
      accounts: [STAGING_PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
    }
  },
};
