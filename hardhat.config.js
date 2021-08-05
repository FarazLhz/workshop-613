require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
let secret = require("./secret")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// const RINKEBY_RPC_URL = process.env.secret.url
// const PRIVATE_KEY = process.env.secret.key
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: secret.url,
      accounts: [secret.key]
    }
  },
  solidity: "0.7.0",
};
