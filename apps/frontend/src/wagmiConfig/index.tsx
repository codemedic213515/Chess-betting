import { createAppKit } from '@reown/appkit/react';

import { WagmiProvider } from 'wagmi';
import { arbitrumSepolia } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
const projectId = '80427c39c6ad30abe76acbc0d54af982';
//const ArbSepporliaChainId = 421614

// 2. Create a metadata object  optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
};

const networks = [arbitrumSepolia];

// 3. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  networks,
  projectId,
});

// 4. Create modal
createAppKit({
  themeVariables: {
    '--w3m-color-mix': '#b7722d',
    '--w3m-accent': '#b7722d',
  },
  adapters: [wagmiAdapter],
  allowUnsupportedChain: true,
  networks: [arbitrumSepolia],
  metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    swaps: false,
    onramp: false,
    email: false,
    socials: false,
  },
});

export function AppKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
