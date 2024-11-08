import { Connection } from "@solana/web3.js";

/**
 * Finds the name and network of the cluster that the given RPC endpoint is pointing to.
 * @param rpc - Relevant RPC endpoint to check
 * @returns name | null - Working name for the corresponding cluster (i.e 'solana/mainnet-beta'), or null if none found.
 * @throws Error if RPC endpoint is invalid
 */
export async function getClusterName(rpc: string): Promise<string | null> {
  const conn = new Connection(rpc);
  const genHash = await conn.getGenesisHash();
  return mapCluster(genHash);
}

/**
 * Maps a given genesis hash to a cluster name.
 * @param genesisHash - Genesis hash fetched from an RPC endpoint
 * @returns name | null - Working name for the corresponding cluster (i.e 'solana/mainnet-beta'), or null if none found.
 */
export function mapCluster(genesisHash: string): string | null {
  switch (genesisHash) {
    case "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d":
      return SolanaClusters.MainnetBeta;
    case "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY":
      return SolanaClusters.Testnet;
    case "EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG":
      return SolanaClusters.Devnet;
    case "EAQLJCV2mh23BsK2P9oYpV5CHVLDNHTxYss3URrNmg3s":
      return EclipseClusters.MainnetBeta;
    case "CX4huckiV9QNAkKNVKi5Tj8nxzBive5kQimd94viMKsU":
      return EclipseClusters.Testnet;
    case "8axJLKAqQU9oyULRunGrZTLDEXhn17VWxoH5F7MCmdXG":
      return EclipseClusters.Devnet2;
    case "Ep5wb4kbMk8yHqV4jMXNqDiMWnNtnTh8jX6WY59Y8Qvj":
      return SonicClusters.Testnet;
    case "BsJstMXKW4DpjzHPsSCdEcAn4YtpNiLFRFa5M5L7UxFx":
      return SonicClusters.Devnet;
    default:
      return null;
  }
}

export const SolanaClusters = {
  MainnetBeta: "solana/mainnet-beta",
  Testnet: "solana/testnet",
  Devnet: "solana/devnet",
};

export const EclipseClusters = {
  MainnetBeta: "eclipse/mainnet-beta",
  Testnet: "eclipse/testnet",
  Devnet2: "eclipse/devnet2",
} as const;

export const SonicClusters = {
  Testnet: "sonic/testnet",
  Devnet: "sonic/devnet",
};

export const AllClusters = {
  ...SolanaClusters,
  ...EclipseClusters,
  ...SonicClusters,
} as const;

export type SolanaCluster = keyof typeof SolanaClusters;
export type EclipseCluster = keyof typeof EclipseClusters;
export type SonicCluster = keyof typeof SonicClusters;
