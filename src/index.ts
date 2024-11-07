import { Connection } from "@solana/web3.js";

export async function getClusterName(rpc: string): Promise<string | null> {
  const conn = new Connection(rpc);
  const genHash = await conn.getGenesisHash();
  return mapCluster(genHash);
}

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

export const AllClusters = {
  ...SolanaClusters,
  ...EclipseClusters,
} as const;
