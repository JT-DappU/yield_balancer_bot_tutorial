require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider-privatekey');
const privateKeys = provess.env.PRIVATEKEYS || ""

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
            privateKeys.split(','), //Array of account private keys
            'https://rinkeby.infura.io/v3/${provess.env.INFURA_API_KEY}' //Url to Ethereum Node
          )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 4
    }
  },
  plugins: [
    "truffle-plugin-verify"
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
