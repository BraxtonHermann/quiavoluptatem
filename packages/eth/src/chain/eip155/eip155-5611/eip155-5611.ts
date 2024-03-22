/* eslint no-template-curly-in-string: 0 */
import type { Chain } from "../../shared"

export const eip155_5611 = {
  "name": "opBNB Testnet",
  "shortName": "obnbt",
  "chain": "opBNB",
  "icon": "bnbchain",
  "rpc": [
    "https://opbnb-testnet-rpc.bnbchain.org",
    "https://opbnb-testnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3",
    "wss://opbnb-testnet.nodereal.io/ws/v1/64a9df0874fb4a93b9d0a3849de012d3",
    "https://opbnb-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5",
    "wss://opbnb-testnet.nodereal.io/ws/v1/e9a36765eb8a40b9bd12e680a1fd2bc5"
  ],
  "faucets": [
    "https://testnet.bnbchain.org/faucet-smart"
  ],
  "nativeCurrency": {
    "name": "BNB Chain Native Token",
    "symbol": "tBNB",
    "decimals": 18
  },
  "infoURL": "https://opbnb.bnbchain.org/en",
  "chainId": 5611,
  "networkId": 5611,
  "slip44": 1,
  "explorers": [
    {
      "name": "bscscan-opbnb-testnet",
      "url": "https://opbnb-testnet.bscscan.com",
      "standard": "EIP3091"
    },
    {
      "name": "opbnbscan",
      "url": "https://opbnbscan.com",
      "standard": "EIP3091"
    }
  ]
} satisfies Chain