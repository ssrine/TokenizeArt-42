# NFT Guide

Complete guide to mint NFTs on NelHarkNFT42 contract.

## Contract

| Property | Value |
|----------|-------|
| Address | [`0x5Ff0B264a2616892b85600e13B5d8Af617F8E79B`](https://sepolia.etherscan.io/address/0x5Ff0B264a2616892b85600e13B5d8Af617F8E79B) |
| Name | NelHarkNFT42 |
| Owner | `0x09f963232EEF8b4a25752AeF491d695d287ff6F3` |
| Network | Sepolia |
| Standard | ERC721URIStorage |

## Core Functions

**mintNFT(address to, string memory nftTokenURI)**
- Mint NFT with IPFS metadata URI
- Owner-only access
- Returns token ID

**tokenURI(uint256 tokenId)**
- Get metadata URI for token

**ownerOf(uint256 tokenId)**
- Get token owner address

**getTokenIdCounter()**
- Get total minted tokens

## Setup

1. **Get test ETH:** https://sepoliafaucet.com
2. **Configure** `deployment/.env`:
   ```
   PRIVATE_KEY=0xYourKey
   SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YourKey
   ```

## Mint NFT

### Step 1: Prepare IPFS Metadata

Create `metadata.json`:
```json
{
  "name": "NelHark42 NFT",
  "description": "Professional ERC721 NFT",
  "image": "ipfs://your-image-cid",
  "attributes": [
    {"trait_type": "Artist", "value": "nel-hark"}
  ]
}
```

Upload to IPFS (Pinata, NFT.storage, etc.) and get CID.

### Step 2: Update mint.js

In `mint/mint.js` line 47, replace CID:
```javascript
const metadataIPFSCID = "bafkreiby4bfe23bdaheoh6nocs3vovrlj4733e2ovc5s7tefdlv55p4tci";
```

### Step 3: Mint

```bash
cd deployment
npm run mint
```

Output: Token ID, transaction hash, owner, URI

## Verify

```bash
# View on Etherscan
https://sepolia.etherscan.io/address/0x5Ff0B264a2616892b85600e13B5d8Af617F8E79B

# View metadata
https://gateway.pinata.cloud/ipfs/YOUR_METADATA_CID
```

## Minted Tokens

| Token ID | Owner | URI | Tx Hash |
|----------|-------|-----|---------|
| 0 | `0x09f9...` | `ipfs://bafki...` | [`0xf62e...`](https://sepolia.etherscan.io/tx/0xf62ebdd26ad5644d84329cd676f55907dcacda41e9025e0601da8741f48983f8) |

## Security

✅ Owner-only minting
✅ Safe minting prevents accidents
✅ Address validation
✅ URI validation
✅ Immutable metadata

## References

- [OpenZeppelin ERC721URIStorage](https://docs.openzeppelin.com/contracts/5.x/erc721)
- [IPFS & NFT Metadata Standard](https://docs.opensea.io/docs/metadata-standards)
- [Hardhat Documentation](https://hardhat.org/docs)
- [ethers.js Documentation](https://docs.ethers.org/v6/)

---

**Solidity:** ^0.8.20  
**OpenZeppelin:** ^5.0.0  
**Network:** Ethereum Sepolia Testnet  
