import { describe } from "node:test";
import { Connection } from "@solana/web3.js";
import assert from "node:assert/strict";
import { getClusterName } from "../src";

const RPC_ENDPOINTS = {
  "solana/mainnet-beta": "https://api.mainnet-beta.solana.com",
  "solana/testnet": "https://api.testnet.solana.com",
  "solana/devnet": "https://api.devnet.solana.com",
  "eclipse/mainnet-beta": "https://mainnetbeta-rpc.eclipse.xyz",
  "eclipse/testnet": "https://testnet.dev2.eclipsenetwork.xyz",
  "eclipse/devnet2": "https://staging-rpc.dev2.eclipsenetwork.xyz",
};

describe("should identify clusters", async () => {
  for (const [cluster, rpc] of Object.entries(RPC_ENDPOINTS)) {
    const clusterName = await getClusterName(rpc);
    assert.equal(clusterName, cluster);
    console.log(`✓ Identified ${cluster}`);
  }
});
