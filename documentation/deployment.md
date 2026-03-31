# Deployment

Deploy NelHarkNFT42 to Sepolia testnet.

## Contract

| Property | Value |
|----------|-------|
| Address | [`0x5Ff0B264a2616892b85600e13B5d8Af617F8E79B`](https://sepolia.etherscan.io/address/0x5Ff0B264a2616892b85600e13B5d8Af617F8E79B) |
| Name | NelHarkNFT42 |
| Network | Sepolia (11155111) |
| Standard | ERC721URIStorage |

## Setup

1. **Get test ETH:** https://sepoliafaucet.com
2. **Configure** `deployment/.env`:
   ```
   PRIVATE_KEY=0xYourPrivateKey
   SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YourKey
   ```

## Deploy

```bash
cd deployment
npm run deploy
```

Output: Contract address saved to `deployment-info.json`

## Commands

```bash
npm run deploy    # Deploy contract
npm run mint      # Mint NFT
npm run compile   # Compile only
```

## Troubleshooting

| Error | Solution |
|-------|----------|
| Insufficient gas | Get test ETH: https://sepoliafaucet.com |
| Private key error | Check `.env` file location |
| Connection error | Verify RPC URL |
| JSON not found | Run `npm run deploy` first |

