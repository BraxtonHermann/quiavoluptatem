/* eslint no-template-curly-in-string: 0 */
import type { Chain } from "../../shared"

export const eip155_421614 = {
  "name": "Arbitrum Sepolia",
  "shortName": "arb-sep",
  "title": "Arbitrum Sepolia Rollup Testnet",
  "chain": "ETH",
  "rpc": [
    "https://sepolia-rollup.arbitrum.io/rpc",
    "https://arbitrum-sepolia.infura.io/v3/${INFURA_API_KEY}"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Sepolia Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://arbitrum.io",
  "chainId": 421614,
  "networkId": 421614,
  "slip44": 1,
  "explorers": [
    {
      "name": "Arbitrum Sepolia Rollup Testnet Explorer",
      "url": "https://sepolia-explorer.arbitrum.io",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": [
      {
        "url": "https://bridge.arbitrum.io"
      }
    ]
  }
} satisfies Chain