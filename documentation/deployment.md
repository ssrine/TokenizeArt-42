# Deployment Guide

## Contract Details

| Property | Value |
|----------|-------|
| Contract | NelHarkNFT42 |
| Standard | ERC721URIStorage |
| Network | Sepolia (11155111) |
| Address | 0x53F8AA4c16DBd787a906c762E091180CCF0B0338 |

## Prerequisites

1. **Test ETH:** https://sepoliafaucet.com
2. **Configure** `deployment/.env`:
   ```
   PRIVATE_KEY=0xYourPrivateKey
   SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YourInfuraKey
   ```

## Deploy

```bash
npm run deploy
```

**Output:**
- Contract deployed to Sepolia
- `deployment-info.json` created with contract details
- View on Etherscan: https://sepolia.etherscan.io/address/0x53F8AA4c16DBd787a906c762E091180CCF0B0338

## Commands

| Command | Action |
|---------|--------|
| `npm run deploy` | Deploy contract |
| `npm run mint` | Mint NFT |
| `npm run compile` | Compile only |
| `npm run clean` | Remove artifacts |
  "chainId": 11155111,
  "network": "sepolia"
}
```

---

## Flow

```
1. npm run deploy    → Deploy once → Save address
2. npm run interact  → Use saved address → Create transactions
3. Run again anytime → Same contract, new transactions
```

---

## Troubleshooting

| Error | Solution |
|-------|----------|
| "Insufficient funds for gas" | Get test ETH: https://sepoliafaucet.com |
| "Private key not found" | Verify `.env` file in `deployment/` folder |
| "Network connection error" | Check RPC URL or try different endpoint |
| "deployment-info.json not found" | Run `npm run deploy` first |
| Dependency conflict (ERESOLVE) | Use `npm install --legacy-peer-deps` |

---

## Tools Used

| Tool | Purpose |
|------|---------|
| **Hardhat** | Smart contract development & deployment |
| **ethers.js** | Blockchain interaction |
| **OpenZeppelin** | Secure ERC20 contracts |
| **Sepolia** | Ethereum test network |
| **Infura/PublicNode** | RPC endpoints |

