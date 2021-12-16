require('babel-register');
require('babel-polyfill');

// Specify connection to the blockchain
module.exports = {
  networks: {
    development: {    // dev network that comects to ganache 
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },

  // Directories where the smart contracts live inside of the project
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',

  // Compiler for smart contracts
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
