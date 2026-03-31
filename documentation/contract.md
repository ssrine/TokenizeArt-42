# NelHarkNFT42 Contract

ERC721 NFT contract with IPFS metadata storage and ownership verification.

## Details

| Property | Value |
|----------|-------|
| Address | [`0x5Ff0B264a2616892b85600e13B5d8Af617F8E79B`](https://sepolia.etherscan.io/address/0x5Ff0B264a2616892b85600e13B5d8Af617F8E79B) |
| Name | NelHarkNFT42 |
| Symbol | NH42NFT |
| Network | Sepolia |
| Standard | ERC721URIStorage |
| Solidity | 0.8.20 |

## Functions

**Minting:**
```solidity
mintNFT(address to, string memory nftTokenURI) external onlyOwner returns (uint256)
```
Owner-only minting with auto-incrementing token ID.

**Reading:**
```solidity
tokenURI(uint256 tokenId) external view returns (string memory)
ownerOf(uint256 tokenId) external view returns (address)
getTokenIdCounter() external view returns (uint256)
```

## Metadata

Store IPFS URI pointing to JSON metadata:
```json
{
  "name": "NelHark42 NFT",
  "description": "Professional ERC721 NFT",
  "image": "ipfs://...",
  "attributes": [{"trait_type": "Artist", "value": "nel-hark"}]
}
```

## Dependencies

- `ERC721` - Standard NFT
- `ERC721URIStorage` - URI storage
- `Ownable` - Owner control

