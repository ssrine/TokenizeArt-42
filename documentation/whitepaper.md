# TokenizeArt - NelHarkNFT42

Professional ERC721 NFT contract for digital art tokenization on Ethereum Sepolia with decentralized IPFS metadata.

## Contract

| Property | Details |
|----------|---------|
| Address | [`0x5Ff0B264a2616892b85600e13B5d8Af617F8E79B`](https://sepolia.etherscan.io/address/0x5Ff0B264a2616892b85600e13B5d8Af617F8E79B) |
| Name | NelHarkNFT42 |
| Symbol | NH42NFT |
| Standard | ERC721URIStorage |
| Network | Sepolia |
| Owner | `0x09f963232EEF8b4a25752AeF491d695d287ff6F3` |

## Features

✅ **Owner-Controlled Minting** - Only owner can create NFTs
✅ **IPFS Integration** - Decentralized metadata storage
✅ **On-Chain Verification** - Immutable ownership records
✅ **OpenSea Compatible** - ERC721 standard compliance
✅ **Secure Design** - OpenZeppelin audited libraries

## Architecture

**Smart Contract** (Solidity 0.8.20)
- `mintNFT()` - Create NFT with metadata URI
- `ownerOf()` - Verify token ownership
- `tokenURI()` - Retrieve metadata URI
- `getTokenIdCounter()` - Check total mints

**Metadata Storage** (IPFS)
- JSON files describing NFT properties
- Content-addressed for immutability
- Accessible via gateways (Pinata, Infura, etc.)

**Deployment** (Ethereum Sepolia)
- Testnet deployment with live contracts
- Verified on Etherscan
- Production-ready code patterns

## Technical Stack

- **Blockchain:** Ethereum (Sepolia testnet)
- **Smart Contract:** Solidity 0.8.20
- **Storage:** IPFS (decentralized)
- **Libraries:** OpenZeppelin Contracts
- **Tools:** Hardhat, ethers.js
- **Standard:** ERC721URIStorage

## Use Cases

- Digital art tokenization and ownership
- NFT development and testing
- Blockchain learning and implementation
- Decentralized artwork marketplace integration
- Artist portfolio showcasing

## Security Considerations

✅ OpenZeppelin audited standard contracts
✅ Owner-restricted critical functions
✅ Immutable on-chain records
✅ Content-addressed storage prevents tampering
✅ Safe minting practices prevent accidents

## Token Status

| Metric | Value |
|--------|-------|
| Total Minted | 1 |
| Contract Status | Active |
| Deployment Date | 2026-03-30 17:35:27 UTC |
| Network Status | ✅ Live |

## References

- **Contract:** [Etherscan](https://sepolia.etherscan.io/address/0x5Ff0B264a2616892b85600e13B5d8Af617F8E79B)
- **ERC721 Standard:** [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/erc721)
- **IPFS:** [ipfs.io](https://ipfs.io)
- **Sepolia Faucet:** [sepoliafaucet.com](https://sepoliafaucet.com)
