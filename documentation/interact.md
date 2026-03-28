# NFT Minting Guide

## Prerequisites

1. **Deploy first**
   ```bash
   npm run deploy
   ```

2. **Test ETH:** https://sepoliafaucet.com

3. **Update IPFS URI** (optional)
   ```javascript
   const metadataIPFSCID = "your-ipfs-cid-here";
   ```

## Mint NFT

```bash
npm run mint
```

Creates new NFT with IPFS metadata and verifies ownership.

## Output

```
================== NelHarkNFT42 Minting ==================

Using deployed contract at: 0x53F8AA4c16DBd787a906c762E091180CCF0B0338
Owner Address: 0x09f963232EEF8b4a25752AeF491d695d287ff6F3

Step 2: Mint NFT
  ✅ NFT minted successfully!
  Transaction hash: 0x501023bfb0872...
  Block number: 10540988
  Gas used: 140478

Step 3: Verify Minting
  ✅ Token ID: 0
  ✅ Owner verified
  ✅ Token URI: ipfs://bafybeievtj6y57t6ezjuyr2b7gf2w7z2drqk5nnde5ewuglgywz32gz4jq
```

```
================== NelHarkNFT42 Minting ==================

Using deployed contract at: 0x53F8AA4c16DBd787a906c762E091180CCF0B0338
Block Explorer: https://sepolia.etherscan.io/address/0x53F8AA4c16DBd787a906c762E091180CCF0B0338
Owner Address:   0x09f963232EEF8b4a25752AeF491d695d287ff6F3

Step 1: Check Token Counter
----------------------------
  Current token ID counter: 0

Step 2: Mint NFT
-----------------
  Recipient:     0x09f963232EEF8b4a25752AeF491d695d287ff6F3
  Token URI:     ipfs://bafybeievtj6y57t6ezjuyr2b7gf2w7z2drqk5nnde5ewuglgywz32gz4jq
  Token ID:      0

  Minting NFT...
  Transaction hash: 0x501023bfb0872830741a1ea4632dcf36949fc00cbf932ebc91747ea1ed80f87e
  ✅ NFT minted successfully!
  Block number:     10540988
  Gas used:         140478

Step 3: Verify Minting
----------------------
  ✅ Token verification:
    Token ID:      0
    Owner:         0x09f963232EEF8b4a25752AeF491d695d287ff6F3
    Token URI:     ipfs://bafybeievtj6y57t6ezjuyr2b7gf2w7z2drqk5nnde5ewuglgywz32gz4jq
    Owner match:   ✅ Yes

Step 4: Contract Information
----------------------------
  Name:          NelHarkNFT42
  Symbol:        NH42NFT
  Total minted:  1

========================================================
```

Step 1: Token Information
------------------------
  Token name:     NelHark42
  Symbol:         NH42
  Decimals:       18
  Total Supply:   1000.0 NH42

Step 2: Initial Balance
  Owner balance:  1000.0 NH42

Step 3: Transfer Tokens
  From:    0x09f963232EEF8b4a25752AeF491d695d287ff6F3
  To:      0x0000000000000000000000000000000000000001
  Amount:  100.0 NH42
  TX:      https://sepolia.etherscan.io/tx/0x...
  
Step 4: Burn Tokens
  Burn amount:    50.0 NH42
  Total supply:   950.0 NH42
  TX:             https://sepolia.etherscan.io/tx/0x...

================== Final Summary ==================

  Contract:        0x8525F73547378e21F2356247b87D8aEcd9dAd213
  Total Supply:    950.0 NH42
  Owner Balance:   850.0 NH42
  Recipient:       100.0 NH42

================================================
```

---

## How It Works

**Step 1:** Load contract address from `deployment-info.json`

**Step 2:** Fetch token info (name, symbol, supply) from blockchain

**Step 3:** Transfer 100 NH42 to recipient address
- Costs gas (test ETH)
- Creates transaction on Sepolia
- Records on etherscan

**Step 4:** Burn 50 NH42 tokens
- Reduces total supply permanently
- Costs gas
- Creates transaction on Sepolia

**Final:** Show all updated balances & transaction links

---

## Customize the Demo

Edit `deployment/interact.js`:

```javascript
// Transfer amount (line ~44)
const transferAmount = ethers.parseEther("100");  // Change to 50, 200, etc.

// Transfer recipient (line ~47)
const recipient = process.env.RECIPIENT || owner.address;

// Burn amount (line ~56)
const burnAmount = ethers.parseEther("50");  // Change to 25, 100, etc.
```

Then run: `npm run interact`

---

## View Transactions

All transactions are recorded on Sepolia Etherscan:

**Contract Address:**
https://sepolia.etherscan.io/address/0x8525F73547378e21F2356247b87D8aEcd9dAd213

**Owner's Wallet:**
https://sepolia.etherscan.io/address/0x09f963232EEF8b4a25752AeF491d695d287ff6F3

View:
- All transactions (transfers, burns)
- Gas used
- Block confirmations
- Balances in real-time

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "deployment-info.json not found" | Run `npm run deploy` first |
| "Insufficient gas" | Get test ETH: https://sepoliafaucet.com |
| "Contract not found" | Verify contract address in deployment-info.json |
| "Transaction pending" | Wait for confirmation (~15 seconds) |
| **etherscan** | Transaction verification |

---

## Troubleshooting

### "deployment-info.json not found"
**Solution:** Run `npm run deploy` first to create it

### "Insufficient funds for gas"
**Solution:** Get free test ETH from faucet
```
https://sepoliafaucet.com
```

### "Network connection error"
**Solution:** 
- Check internet connection
- Verify RPC endpoint in `.env`
- Wait a moment and try again

### Transaction takes long time
**Solution:** Sepolia can be slow during high network traffic. This is normal. Wait 30-60 seconds for confirmation.

---

## Next Steps

After running the demo:

1. **View on etherscan:** Click the transaction links shown in output
2. **Run again:** Execute `npm run interact` to create more transactions
3. **Modify amounts:** Edit `interact.js` and customize transfer/burn amounts
4. **Deploy new version:** Run `npm run deploy` to deploy a fresh contract

---
- Additional operations
- Different recipients

## Error Handling

Script includes error catching:
```javascript
main().catch((error) => {
  console.error('Error:', error.message);
  process.exit(1);
});
```

Any error stops script and displays message.

## Use Cases

- Test contract after deployment
- Verify all functions work
- Learn ethers.js patterns
- Demo for stakeholders

