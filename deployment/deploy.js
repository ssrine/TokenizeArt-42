const fs = require("fs");
const path = require("path");
const { ethers } = require("ethers");

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const deployer = wallet;
  const chainId = 11155111; // Sepolia

  // ==================== DEPLOY ERC721 NFT ====================
  console.log("\n================== Deploying NelHarkNFT42 ERC721 ==================\n");
  
  // Load contract ABI and bytecode from artifacts
  const artifactPath = path.join(__dirname, "artifacts", "contracts", "NelHarkNFT42.sol", "NelHarkNFT42.json");
  const contractArtifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
  const abi = contractArtifact.abi;
  const bytecode = contractArtifact.bytecode;
  
  // Create contract factory and deploy
  const NFT = new ethers.ContractFactory(abi, bytecode, deployer);
  const nft = await NFT.deploy();
  await nft.waitForDeployment();

  const nftAddress = await nft.getAddress();
  const ownerAddress = deployer.address;
  const nftBlockExplorerUrl = `https://sepolia.etherscan.io/address/${nftAddress}`;

  // Save ERC721 deployment info to file
  const nftDeploymentInfo = {
    contractAddress: nftAddress,
    contractName: "NelHarkNFT42",
    ownerAddress,
    chainId,
    blockExplorerUrl: nftBlockExplorerUrl,
    deployedAt: new Date().toISOString(),
    network: "sepolia"
  };

  const nftInfoPath = path.join(__dirname, "deployment-info.json");
  fs.writeFileSync(nftInfoPath, JSON.stringify(nftDeploymentInfo, null, 2));

  console.log("✅ NelHarkNFT42 (ERC721) deployed:");
  console.log("  Contract Address:", nftAddress);
  console.log("  Owner Address:   ", ownerAddress);
  console.log("  View on Block Explorer: " + nftBlockExplorerUrl);

  // ==================== SUMMARY ====================
  console.log("\n================== Deployment Summary ==================\n");
  console.log("Network:              Sepolia Testnet");
  console.log("Chain ID:             ", chainId);
  console.log("Owner Address:        ", ownerAddress);
  console.log("");
  console.log("ERC721 NFT (NelHarkNFT42):");
  console.log("  Address: ", nftAddress);
  console.log("  Info:    ", nftInfoPath);
  console.log("  Block Explorer: ", nftBlockExplorerUrl);
  console.log("");
  console.log("Deployment info saved to:");
  console.log("  - deployment-info.json (ERC721)");
  console.log("\n========================================================\n");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });