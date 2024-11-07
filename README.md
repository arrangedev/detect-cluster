## Detect Cluster

Use an RPC endpoint to determine what SVM cluster you're on.

## Supported Clusters

- Solana
  - Mainnet Beta
  - Testnet
  - Devnet
- Eclipse
  - Mainnet Beta
  - Testnet
  - Devnet2

## Installation

```sh
npm install @arrangedev/detect-cluster
```

## Usage

```ts
import { getClusterName } from "@arrangedev/detect-cluster";

const cluster = await getClusterName("https://api.mainnet-beta.solana.com");
console.log(cluster); // solana/mainnet-beta
```
