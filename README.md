# TokenizeArt - ERC721 NFT Contract

Professional ERC721 NFT smart contract on Ethereum Sepolia with IPFS metadata integration.

## Quick Start

```bash
cd deployment
npm install
npm run deploy   # Deploy contract
npm run mint     # Mint NFT
```

## Contract Details

| Property | Value |
|----------|-------|
| Name | NelHarkNFT42 |
| Symbol | NH42NFT |
| Network | Sepolia Testnet |
| Address | `0x53F8AA4c16DBd787a906c762E091180CCF0B0338` |
| Status | ✅ Live |

**Etherscan:** https://sepolia.etherscan.io/address/0x53F8AA4c16DBd787a906c762E091180CCF0B0338

## Setup

### Prerequisites
- Node.js installed
- `.env` file in `deployment/` with:
  ```
  PRIVATE_KEY=0xYourPrivateKey
  SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YourInfuraKey
  ```
- Free ETH: https://sepoliafaucet.com

### Deploy
```bash
npm run deploy
```
Creates `deployment-info.json` with contract address.

## Minting

### Mint NFT
```bash
npm run mint
```

Update IPFS URI in `mint/mint.js`:
```javascript
const metadataIPFSCID = "your-ipfs-cid-here";
```

## Documentation

- [Deployment Guide](documentation/deployment.md)
- [Contract Reference](documentation/contract.md)
- [Minting Guide](documentation/interact.md)
- [Whitepaper](documentation/whitepaper.md)

**Step 3:** Run mint script

```bash
cd deployment
npm run mint
```

This will:
- Connect to deployed NFT contract
- Mint NFT #0 to your address
- Verify ownership
- Display token URI

---

## Project Structure

```
TokenizeArt-42/
├── code/
│   └── contracts/
│       └── NelHarkNFT42.sol        (ERC721 NFT contract)
├── deployment/
│   ├── .env                        (Private key & RPC URL)
│   ├── package.json                (npm scripts & dependencies)
│   ├── hardhat.config.js           (Sepolia network config)
│   ├── deploy.js                   (Deploy NFT contract)
│   ├── copy-contracts.js           (Copy contracts for compilation)
│   └── deployment-info.json        (Deployment details)
├── mint/
│   └── mint.js                     (NFT minting script)
├── metadata.json                   (NFT metadata template)
├── documentation/
│   ├── deployment.md               (Deployment guide)
│   ├── nft-guide.md                (ERC721 NFT guide)
│   └── whitepaper.md               (Whitepaper)
└── README.md                       (This file)
```

---

## How It Works

1. **Contract Code** → `/code/contracts/NelHarkNFT42.sol` — Solidity smart contract
2. **Deployment Script** → `/deployment/deploy.js` — Hardhat script deploys to Sepolia
3. **Minting Script** → `/mint/mint.js` — ethers.js script interacts with deployed contract
4. **Configuration** → `.env` file with private key & RPC endpoint
5. **Network** → Sepolia testnet (free test ETH blockchain)
6. **Storage** → Contract address saved in `deployment-info.json` after deploy

---

## Contract Details

### NelHarkNFT42 (ERC721)

| Function | Access | Purpose |
|----------|--------|----------|
| `mintNFT(to, tokenURI)` | Owner | Mint new NFT |
| `ownerOf(tokenId)` | Public | Get token owner |
| `tokenURI(tokenId)` | Public | Get metadata URI |
| `getTokenIdCounter()` | Public | Get total mints |

---

## Verification

### View on Block Explorer

After deployment:

1. **ERC721 NFT:** https://sepolia.etherscan.io/address/0xYourNFTAddress

### View IPFS Metadata

```
https://gateway.pinata.cloud/ipfs/YOUR_IPFS_CID
```

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Solidity | 0.8.20 | Smart contract language |
| Hardhat | 2.22.0 | Development framework |
| OpenZeppelin | 5.0.0 | Secure contract libraries |
| ethers.js | v6 | Blockchain interaction |
| Node.js | 16+ | JavaScript runtime |

---

## Commands

| Command | Purpose |
|---------|---------|
| `npm run deploy` | Deploy NFT contract to Sepolia |
| `npm run compile` | Compile contracts |
| `npm run mint` | Mint NFT |
| `npm run clean` | Remove build artifacts |

---

## Documentation

- [Deployment Guide](documentation/deployment.md) — Step-by-step deployment
- [ERC721 NFT Guide](documentation/nft-guide.md) — Complete NFT minting guide
- [Whitepaper](documentation/whitepaper.md) — Project whitepaper

---

## Security Considerations

✅ **OnlyOwner Control** — Only contract owner can mint NFTs
✅ **Input Validation** — Zero address checks, non-empty URI validation
✅ **Safe Minting** — Uses `_safeMint()` to prevent accidents
✅ **Audited Libraries** — OpenZeppelin audited implementations
✅ **Immutable Metadata** — Once set, NFT URIs cannot be changed

---

## Network Information

| Property | Value |
|----------|-------|
| **Network** | Ethereum Sepolia Testnet |
| **Chain ID** | 11155111 |
| **RPC URL** | https://sepolia.infura.io/v3/YOUR_KEY |
| **Block Explorer** | https://sepolia.etherscan.io |
| **Test Faucet** | https://sepoliafaucet.com |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `deployment-info.json not found` | Run `npm run deploy` first |
| `Contract ABI not found` | Run `npm run compile` first |
| Minting fails with permission error | Only contract owner can mint |
| Metadata not loading on IPFS | Verify CID is correct and file is accessible |

---

## Next Steps

1. ✅ Deploy ERC721 NFT contract
2. ✅ Upload metadata.json to IPFS
3. ✅ Mint your first NFT
4. View on Etherscan and OpenSea
5. Create multiple NFT editions with different metadata
6. Deploy to Ethereum mainnet when ready

---

## References

- [Solidity Documentation](https://docs.soliditylang.org/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/5.x/)
- [Hardhat Documentation](https://hardhat.org/docs)
- [ethers.js Documentation](https://docs.ethers.org/v6/)
- [IPFS & NFT Metadata Standard](https://docs.opensea.io/docs/metadata-standards)
- [ERC721 Standard](https://eips.ethereum.org/EIPS/eip-721)
- [ERC20 Standard](https://eips.ethereum.org/EIPS/eip-20)

---

**Project:** TokenizeArt - ERC721 NFT  
**Version:** 1.0.0  
**License:** MIT  
**Network:** Ethereum Sepolia  
**Updated:** 2026-03-28
