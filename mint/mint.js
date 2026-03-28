const fs = require("fs");
const path = require("path");
const { ethers } = require("ethers");
require("dotenv/config");

async function main() {
  // Connect to Sepolia RPC
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const owner = wallet;

  // Read deployment info from file (from parent deployment directory)
  const infoPath = path.join(__dirname, "../deployment/deployment-info.json");
  if (!fs.existsSync(infoPath)) {
    console.error("❌ Error: deployment-info.json not found!");
    console.error("Please run 'npm run deploy' first to deploy the NFT contract.");
    process.exit(1);
  }

  const deploymentInfo = JSON.parse(fs.readFileSync(infoPath, "utf8"));
  const contractAddress = deploymentInfo.contractAddress;

  // Read ABI from artifacts
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

  // Step 1: Get current token counter
  console.log("\nStep 1: Check Token Counter");
  console.log("----------------------------");
  const currentCounter = await nft.getTokenIdCounter();
  console.log("  Current token ID counter:", currentCounter.toString());

  // Step 2: Prepare metadata URI (IPFS link to metadata.json)
  // Note: You'll need to upload metadata.json to IPFS first
  // For now, using a placeholder - replace with your actual IPFS metadata CID
  const metadataIPFSCID = "bafybeievtj6y57t6ezjuyr2b7gf2w7z2drqk5nnde5ewuglgywz32gz4jq"; // Your IPFS image CID
  const tokenURI = `ipfs://${metadataIPFSCID}`;

  console.log("\nStep 2: Mint NFT");
  console.log("-----------------");
  console.log("  Recipient:    ", owner.address);
  console.log("  Token URI:    ", tokenURI);
  console.log("  Token ID:     ", currentCounter.toString());

  // Step 3: Call mintNFT
  console.log("\n  Minting NFT...");
  try {
    const tx = await nft.mintNFT(owner.address, tokenURI);
    console.log("  Transaction hash:", tx.hash);
    
    const receipt = await tx.wait();
    console.log("  ✅ NFT minted successfully!");
    console.log("  Block number:    ", receipt.blockNumber);
    console.log("  Gas used:        ", receipt.gasUsed.toString());
  } catch (error) {
    console.error("  ❌ Minting failed:", error.message);
    process.exit(1);
  }

  // Step 4: Verify minting
  console.log("\nStep 3: Verify Minting");
  console.log("----------------------");
  
  try {
    const tokenId = currentCounter.toString();
    const ownerOfToken = await nft.ownerOf(tokenId);
    const retrievedURI = await nft.tokenURI(tokenId);
    
    console.log("  ✅ Token verification:");
    console.log("    Token ID:     ", tokenId);
    console.log("    Owner:        ", ownerOfToken);
    console.log("    Token URI:    ", retrievedURI);
    console.log("    Owner match:  ", ownerOfToken.toLowerCase() === owner.address.toLowerCase() ? "✅ Yes" : "❌ No");
  } catch (error) {
    console.error("  ❌ Verification failed:", error.message);
  }

  // Step 5: Display contract info
  console.log("\nStep 4: Contract Information");
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
