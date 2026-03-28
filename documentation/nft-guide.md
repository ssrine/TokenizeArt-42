# TokenizeArt - ERC721 NFT Contract Guide

## Overview

The **NelHarkNFT42** is an ERC721-based NFT contract that allows minting unique digital art pieces with IPFS-hosted metadata and images.

---

## Contract Details

### NelHarkNFT42.sol

**Key Features:**
- ERC721 standard with URI storage
- Only owner can mint NFTs
- Custom metadata URI per token
- Token counter to track minted NFTs
- Full owner verification support

**Contract Functions:**

#### `mintNFT(address to, string memory tokenURI) → uint256`
- **Purpose:** Mint a new NFT with metadata
- **Parameters:**
  - `to`: Recipient address
  - `tokenURI`: IPFS link to metadata (format: `ipfs://CIDhere`)
- **Returns:** Token ID of minted NFT
- **Access:** Owner only
- **Example:**
  ```solidity
  uint256 tokenId = nft.mintNFT(
    "0x...",
    "ipfs://QmYourMetadataCID"
  );
  ```

#### `ownerOf(uint256 tokenId) → address`
- **Purpose:** Get the owner of a token
- **Parameters:**
  - `tokenId`: Token ID
- **Returns:** Address of the token owner

#### `tokenURI(uint256 tokenId) → string`
- **Purpose:** Get the metadata URI for a token
- **Parameters:**
  - `tokenId`: Token ID
- **Returns:** IPFS URI pointing to metadata

#### `getTokenIdCounter() → uint256`
- **Purpose:** Get the current token ID counter
- **Returns:** Total number of tokens minted

---

## Project Structure

```
TokenizeArt-42/
├── code/
│   └── contracts/
│       ├── NelHark42.sol           (ERC20 token)
│       └── NelHarkNFT42.sol        (ERC721 NFT)
├── deployment/
│   ├── .env                        (Private key & RPC URL)
│   ├── package.json                (Scripts & dependencies)
│   ├── hardhat.config.js           (Network config)
│   ├── deploy.js                   (Deploy both contracts)
│   ├── interact.js                 (ERC20 demo)
│   ├── copy-contracts.js           (Copy contracts for compilation)
│   ├── deployment-info.json        (ERC20 deployment details)
│   └── nft-deployment-info.json    (ERC721 deployment details)
├── mint/
│   └── mint.js                     (NFT minting script)
├── metadata.json                   (NFT metadata template)
└── documentation/
    ├── contract.md                 (ERC20 details)
    ├── deployment.md               (Deployment guide)
    ├── interact.md                 (ERC20 demo guide)
    └── nft-guide.md                (This file)
```

---

## Setup & Deployment

### 1. Prerequisites

Ensure you have:
- Node.js installed
- `.env` file in `deployment/` folder with:
  ```
  SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
  PRIVATE_KEY=your_private_key
  ```

### 2. Install Dependencies

```bash
cd deployment
npm install
```

### 3. Compile Contracts

```bash
npm run compile
```

This will:
- Copy contracts from `../code/contracts/` to `./contracts/`
- Compile both ERC20 and ERC721 contracts
- Generate ABIs in `artifacts/contracts/`

### 4. Deploy Both Contracts

```bash
npm run deploy
```

This will:
- Deploy **NelHark42** (ERC20)
- Deploy **NelHarkNFT42** (ERC721)
- Save deployment info to:
  - `deployment-info.json` (ERC20)
  - `nft-deployment-info.json` (ERC721)

**Example output:**
```
================== Deploying NelHark42 ERC20 ==================

✅ NelHark42 (ERC20) deployed:
  Contract Address: 0x1234...
  Owner Address:    0x5678...
  Total Supply:     1000.0 NH42

================== Deploying NelHarkNFT42 ERC721 ==================

✅ NelHarkNFT42 (ERC721) deployed:
  Contract Address: 0xabcd...
  Owner Address:    0x5678...
```

---

## IPFS Metadata Setup

### 1. Prepare Metadata

The `metadata.json` file defines the NFT properties:

```json
{
  "name": "NelHarkNFT42 - Genesis",
  "description": "A unique digital art piece from the TokenizeArt collection.",
  "image": "ipfs://bafybeievtj6y57t6ezjuyr2b7gf2w7z2drqk5nnde5ewuglgywz32gz4jq",
  "attributes": [
    {
      "trait_type": "Artist",
      "value": "nel-hark"
    },
    {
      "trait_type": "Collection",
      "value": "TokenizeArt"
    },
    {
      "trait_type": "Edition",
      "value": "42"
    }
  ]
}
```

### 2. Upload to IPFS

Options:
- **Pinata** (Recommended): https://pinata.cloud
- **NFT.storage**: https://nft.storage
- **IPFS Desktop**: https://github.com/ipfs-tech/ipfs-desktop

**Steps:**
1. Upload `metadata.json` to IPFS
2. Get the Content Identifier (CID)
3. Update `mint.js` with the CID:
   ```javascript
   const metadataIPFSCID = "YOUR_METADATA_CID_HERE";
   const tokenURI = `ipfs://${metadataIPFSCID}`;
   ```

---

## Minting NFTs

### 1. Update Metadata CID

In `mint/mint.js`, replace the placeholder CID:

```javascript
// Before:
const metadataIPFSCID = "QmYourMetadataIPFSCIDHere";

// After:
const metadataIPFSCID = "QmActualCIDFromIPFS";
```

### 2. Run Mint Script

```bash
npm run mint
```

**Expected output:**
```
================== NelHarkNFT42 Minting ==================

Using deployed contract at: 0xabcd...
Owner Address:              0x5678...

Step 1: Check Token Counter
----------------------------
  Current token ID counter: 0

Step 2: Mint NFT
-----------------
  Recipient:     0x5678...
  Token URI:     ipfs://QmYourMetadata...
  Token ID:      0
  Minting NFT...
  Transaction hash: 0x1234...
  ✅ NFT minted successfully!

Step 3: Verify Minting
----------------------
  ✅ Token verification:
    Token ID:     0
    Owner:        0x5678...
    Token URI:    ipfs://QmYourMetadata...
    Owner match:  ✅ Yes
```

---

## Verification

### View on Block Explorer

After deployment and minting:

1. **Contract**: https://sepolia.etherscan.io/address/0xYourNFTAddress
2. **Token**: View token #0 on Etherscan
3. **Metadata**: Accessible via IPFS gateway: `https://gateway.pinata.cloud/ipfs/YOUR_CID`

### Verify on-chain

```bash
# Check token owner
etherscan-cli contract:read NelHarkNFT42 ownerOf 0

# Check token URI
etherscan-cli contract:read NelHarkNFT42 tokenURI 0

# Check token counter
etherscan-cli contract:read NelHarkNFT42 getTokenIdCounter
```

---

## Security Features

✅ **Only owner can mint** - `onlyOwner` modifier
✅ **Safe minting** - Uses `_safeMint()` to prevent accidents
✅ **Valid addresses** - Checks `to != address(0)`
✅ **Non-empty URI** - Validates token URI
✅ **Immutable metadata** - Once set, URI cannot be changed

---

## Next Steps

1. ✅ Deploy NFT contract
2. ✅ Upload metadata.json to IPFS
3. ✅ Update mint.js with metadata CID
4. ✅ Mint your first NFT
5. View on Etherscan and OpenSea
6. Consider multi-NFT drops with variations

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `nft-deployment-info.json not found` | Run `npm run deploy` first |
| `Contract ABI not found` | Run `npm run compile` first |
| `Invalid address` | Ensure recipient address is valid (0x...) |
| `Token URI cannot be empty` | Ensure metadata CID is provided |
| Minting fails with permission error | Only contract owner can mint |
| Metadata not loading | Verify IPFS CID is correct |

---

## References

- [OpenZeppelin ERC721URIStorage](https://docs.openzeppelin.com/contracts/5.x/erc721)
- [IPFS & NFT Metadata Standard](https://docs.opensea.io/docs/metadata-standards)
- [Hardhat Documentation](https://hardhat.org/docs)
- [ethers.js Documentation](https://docs.ethers.org/v6/)

---

**Solidity:** ^0.8.20  
**OpenZeppelin:** ^5.0.0  
**Network:** Ethereum Sepolia Testnet  
