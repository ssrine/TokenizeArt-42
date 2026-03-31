# TokenizeArt - ERC721 NFT

ERC721 NFT contract on Ethereum Sepolia with IPFS metadata.

---

## Contract Details

| Property | Value                                      |
| -------- | ------------------------------------------ |
| Name     | NelHarkNFT42                               |
| Symbol   | NH42NFT                                    |
| Address  | 0x5Ff0B264a2616892b85600e13B5d8Af617F8E79B |
| Owner    | 0x09f963232EEF8b4a25752AeF491d695d287ff6F3 |
| Network  | Sepolia                                    |

---

## NFT Metadata & Image

### Metadata (IPFS JSON)

https://gateway.pinata.cloud/ipfs/bafkreiby4bfe23bdaheoh6nocs3vovrlj4733e2ovc5s7tefdlv55p4tci

This JSON file contains:

* NFT name (includes "42")
* Description
* Artist attribute (nel-hark)
* Image reference stored on IPFS

### NFT Image (IPFS)

https://gateway.pinata.cloud/ipfs/bafybeievtj6y57t6ezjuyr2b7gf2w7z2drqk5nnde5ewuglgywz32gz4jq

The image includes the number "42" as required by the subject.

### IPFS URIs used in contract

* Metadata URI: ipfs://bafkreiby4bfe23bdaheoh6nocs3vovrlj4733e2ovc5s7tefdlv55p4tci
* Image URI: ipfs://bafybeievtj6y57t6ezjuyr2b7gf2w7z2drqk5nnde5ewuglgywz32gz4jq

IPFS ensures decentralized and immutable storage of both metadata and image, as required by the project.

---

## NFT Verification

After minting, the ownership of the NFT can be verified using the `ownerOf` function.

Example:

* Token ID: 0
* Owner: 0x09f963232EEF8b4a25752AeF491d695d287ff6F3

This confirms that the NFT was successfully minted and assigned to the correct address.

---

## Blockchain Choice

Although the subject mentions BNB Chain, I chose Ethereum Sepolia testnet for the following reasons:

* ERC721 is the original and most widely adopted NFT standard
* Better tooling and documentation (Hardhat, Ethers.js, OpenZeppelin)
* Sepolia provides a stable and widely supported testnet environment
* The implementation remains fully compatible with BEP-721, as both standards are technically identical

This choice ensures reliability, security, and easier evaluation while respecting NFT standards.

---

## Quick Start

```bash
cd deployment
npm install

# Deploy contract
npm run deploy

# Mint NFT
npm run mint
```

---

## Setup

**Prerequisites:**

* Node.js v18+
* `.env` in `deployment/`:

```
PRIVATE_KEY=0xYourKey
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YourKey
```

**Get testnet ETH:** https://sepoliafaucet.com

---

## Scripts

### Deploy (`deployment/deploy.js`)

Compiles and deploys the contract. Saves details to `deployment-info.json`.

### Mint (`mint/mint.js`)

Mints NFT with IPFS metadata URI and verifies ownership.

### Interact

Query contract state and verify tokens.

---

## Project Structure

```
TokenizeArt-42/
├── code/
│   └── contracts/
│       └── NelHarkNFT42.sol
├── deployment/
│   ├── .env
│   ├── package.json
│   ├── hardhat.config.js
│   ├── deploy.js
│   └── deployment-info.json
├── mint/
│   └── mint.js
├── metadata.json
├── documentation/
└── README.md
```

---

## How It Works

1. Smart contract defines NFT logic (ERC721)
2. Deployment script publishes contract on Sepolia
3. Metadata and image are stored on IPFS
4. Mint script creates NFT and assigns ownership
5. Ownership can be verified on-chain using `ownerOf`

---

## Contract Functions

| Function              | Purpose           |
| --------------------- | ----------------- |
| mintNFT(to, tokenURI) | Mint new NFT      |
| ownerOf(tokenId)      | Get NFT owner     |
| tokenURI(tokenId)     | Get metadata      |
| getTokenIdCounter()   | Total minted NFTs |

---

## Verification Links

* Contract: https://sepolia.etherscan.io/address/0x5Ff0B264a2616892b85600e13B5d8Af617F8E79B
* Transaction: https://sepolia.etherscan.io/tx/0xf62ebdd26ad5644d84329cd676f55907dcacda41e9025e0601da8741f48983f8

---

## Tech Stack

* Solidity ^0.8.20
* OpenZeppelin Contracts
* Hardhat
* ethers.js
* IPFS

---

## Security Considerations

* Only owner can mint NFTs
* Safe minting using `_safeMint`
* Input validation for address and URI
* OpenZeppelin audited contracts

---

## Network Information

| Property | Value                    |
| -------- | ------------------------ |
| Network  | Ethereum Sepolia Testnet |
| Chain ID | 11155111                 |

---

## Conclusion

This project demonstrates the complete lifecycle of an NFT:

* Creation of image and metadata
* Storage on IPFS
* Smart contract deployment
* NFT minting
* Ownership verification
