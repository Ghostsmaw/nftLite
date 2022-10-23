const fs = require('fs');
require("@nomicfoundation/hardhat-toolbox");

const privateKey = fs.readFileSync('.secret').toString().trim;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    }
  },
  // solidity: "0.8.4",
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.7.3",
      },
      {
        version: "0.8.0",
      },
      {
        version: "0.8.1",
      }
    ]
  }
};
