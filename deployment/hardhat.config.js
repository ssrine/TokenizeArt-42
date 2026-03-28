require("hardhat-gas-reporter");
require("solidity-coverage");
require("dotenv/config");

// Hardhat configuration for NelHarkNFT42 ERC721 NFT
module.exports = {
    // Solidity compiler settings
    solidity: {
        version: "0.8.24",
        settings: {
            optimizer: { enabled: true, runs: 200 }, // Optimize for deployment size
            evmVersion: "cancun", // Required for OpenZeppelin 5.0.0 mcopy support
        },
    },

    networks: {
        // Ethereum Sepolia testnet (requires testnet ETH)
        sepolia: {
            url: process.env.SEPOLIA_RPC_URL || "",
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
            chainId: 11155111,
        },
    },

    defaultNetwork: "sepolia",

    // Gas cost reporting 
    gasReporter: {
        enabled: process.env.REPORT_GAS === "true",
        currency: "USD",
        coinmarketcap: process.env.COINMARKETCAP_API_KEY,
        outputFile: "gas-report.txt",
        noColors: true,
    },

    // Code coverage analysis
    coverage: {
        provider: "hardhat",
        reports: ["text", "text-summary", "html"],
        exclude: ["node_modules/", "test/"],
    },

    // File paths (contracts copied from ../code/ by copy-contracts.js)
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
        deployments: "./deployments",
    },

    // Test runner settings
    mocha: {
        timeout: 40000,
    },
};
