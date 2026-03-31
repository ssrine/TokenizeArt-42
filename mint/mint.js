const fs = require("fs");
const path = require("path");
const { ethers } = require("ethers");
require("dotenv/config");

async function main() {
  // Initialize Sepolia provider and wallet
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const owner = wallet;

  // Load deployment info
  const infoPath = path.join(__dirname, "../deployment/deployment-info.json");
  if (!fs.existsSync(infoPath)) {
    console.error("❌ Error: deployment-info.json not found!");
    console.error("Please run 'npm run deploy' first to deploy the NFT contract.");
    process.exit(1);
  }

  const deploymentInfo = JSON.parse(fs.readFileSync(infoPath, "utf8"));
  const contractAddress = deploymentInfo.contractAddress;

  // Load contract ABI
  const abiPath = path.join(__dirname, "../deployment/artifacts/contracts/NelHarkNFT42.sol/NelHarkNFT42.json");
  if (!fs.existsSync(abiPath)) {
    console.error("❌ Error: Contract ABI not found! Please run 'npm run compile' first.");
    process.exit(1);
  }

  const artifact = JSON.parse(fs.readFileSync(abiPath, "utf8"));
  const contractABI = artifact.abi;

  // Create contract instance
  const nft = new ethers.Contract(contractAddress, contractABI, wallet);

  console.log("\n================== NelHarkNFT42 Minting ==================\n");
  console.log("Using deployed contract at:", contractAddress);
  console.log("Block Explorer:", deploymentInfo.blockExplorerUrl);
  console.log("Owner Address:  ", owner.address);

  // Get token counter
  console.log("\nStep 1: Fetch Token Counter");
  console.log("----------------------------");
  const currentCounter = await nft.getTokenIdCounter();
  console.log("  Current token ID counter:", currentCounter.toString());

  // Prepare metadata URI (IPFS link)
  const metadataIPFSCID = "bafkreiby4bfe23bdaheoh6nocs3vovrlj4733e2ovc5s7tefdlv55p4tci"; // Replace with actual CID
  const tokenURI = `ipfs://${metadataIPFSCID}`;
  
  console.log("\n IMPORTANT: Ensure you've uploaded metadata.json to IPFS first!");
  console.log(`   Current tokenURI: ${tokenURI}`);

  console.log("\nStep 2: Mint NFT");
  console.log("-----------------");
  console.log("  Recipient:           ", owner.address);
  console.log("  Metadata URI:        ", tokenURI);
  console.log("  (Points to metadata.json on IPFS, which contains image reference)");
  console.log("  Token ID:            ", currentCounter.toString());

  // Call mintNFT transaction
  console.log("\n  Minting...");
  let tokenId, txHash, blockNumber, gasUsed;
  try {
    const tx = await nft.mintNFT(owner.address, tokenURI);
    txHash = tx.hash;
    console.log("  Transaction hash:", txHash);
    
    const receipt = await tx.wait();
    tokenId = currentCounter.toString();
    blockNumber = receipt.blockNumber;
    gasUsed = receipt.gasUsed.toString();
    console.log("  ✅ NFT minted successfully!");
    console.log("  Block number:    ", blockNumber);
    console.log("  Gas used:        ", gasUsed);
  } catch (error) {
    console.error("  ❌ Minting failed:", error.message);
    process.exit(1);
  }

  // Verify minting result
  console.log("\nStep 3: Verify Minting");
  console.log("----------------------");
  
  let ownerOfToken, retrievedURI;
  try {
    ownerOfToken = await nft.ownerOf(tokenId);
    retrievedURI = await nft.tokenURI(tokenId);
    
    console.log("  ✅ Verification passed:");
    console.log("    Token ID:     ", tokenId);
    console.log("    Owner:        ", ownerOfToken);
    console.log("    Token URI:    ", retrievedURI);
    console.log("    Owner match:  ", ownerOfToken.toLowerCase() === owner.address.toLowerCase() ? "✅ Yes" : "❌ No");
  } catch (error) {
    console.error("  ❌ Verification failed:", error.message);
    process.exit(1);
  }

  // Save minting info to deployment-info.json
  try {
    const updatedDeploymentInfo = { ...deploymentInfo };
    if (!updatedDeploymentInfo.mintedTokens) {
      updatedDeploymentInfo.mintedTokens = [];
    }
    
    updatedDeploymentInfo.mintedTokens.push({
      tokenId,
      owner: ownerOfToken,
      uri: retrievedURI,
      txHash,
      blockNumber,
      gasUsed,
      mintedAt: new Date().toISOString()
    });

    fs.writeFileSync(infoPath, JSON.stringify(updatedDeploymentInfo, null, 2));
    console.log("\n  ✅ Minting info saved to deployment-info.json");
  } catch (error) {
    console.error("  ⚠️  Warning: Could not save to deployment-info.json:", error.message);
  }

  // Fetch contract details
  console.log("\nStep 4: Contract Info");
  console.log("----------------------------");
  try {
    const name = await nft.name();
    const symbol = await nft.symbol();
    const newCounter = await nft.getTokenIdCounter();
    
    console.log("  Name:         ", name);
    console.log("  Symbol:       ", symbol);
    console.log("  Total minted: ", newCounter.toString());
  } catch (error) {
    console.error("  ❌ Error retrieving contract info:", error.message);
  }

  console.log("\n========================================================\n");
}

main().catch(console.error);
