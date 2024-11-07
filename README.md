<h1 align="center">Detect Cluster</h1>
<div align="center">
  <h3>Get the current SVM cluster name with an RPC endpoint.</h3>
</div>
<div align="center">
  <img src="https://badgen.net/badge/version/1.0.0/orange">
  <a href="https://www.npmjs.com/package/@arrangedev/detect-cluster" target="_blank">
    <img src="https://img.shields.io/npm/v/@arrangedev/detect-cluster">
  </a>
</div>

<br></br>

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

Install via your favorite package manager:
```sh
npm install @arrangedev/detect-cluster
```
Additionally, you can load the source code via unpkg:
```
https://unpkg.com/@joeymeere/dreamcast@latest
```

## Usage

```ts
import { getClusterName } from "@arrangedev/detect-cluster";

const cluster = await getClusterName("https://api.mainnet-beta.solana.com");
console.log(cluster); // solana/mainnet-beta
```
