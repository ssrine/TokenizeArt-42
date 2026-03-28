# NelHarkNFT42 Contract Reference

## Overview

ERC721 NFT contract enabling IPFS-based metadata storage and on-chain ownership verification.

**Deployed Address:** `0x53F8AA4c16DBd787a906c762E091180CCF0B0338`

## Specifications

| Property | Value |
|----------|-------|
| Name | NelHarkNFT42 |
| Symbol | NH42NFT |
| Standard | ERC721URIStorage |
| Solidity | 0.8.24 |
| EVM | Cancun |

## Core Functions

### Minting
```solidity
function mintNFT(address to, string memory nftTokenURI) external onlyOwner
```
- Creates new NFT with IPFS metadata URI
- Only contract owner can mint
- Auto-increments token ID

### Queries
```solidity
function tokenURI(uint256 tokenId) external view returns (string memory)
function ownerOf(uint256 tokenId) external view returns (address)
function getTokenIdCounter() external view returns (uint256)
```

## Metadata Format

All NFTs reference IPFS JSON metadata:

```json
{
  "name": "NelHark42 NFT",
  "description": "My first NFT for 42 project",
  "image": "ipfs://bafybeievtj6y57t6ezjuyr2b7gf2w7z2drqk5nnde5ewuglgywz32gz4jq",
  "attributes": [
    {
      "trait_type": "Artist",
      "value": "nel-hark"
    }
  ]
}
```

## OpenZeppelin Dependencies

- `ERC721` - NFT standard
- `ERC721URIStorage` - Metadata URI storage
- `Ownable` - Access control

