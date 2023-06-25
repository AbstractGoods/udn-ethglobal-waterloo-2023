import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
// import { publicProvider } from 'wagmi/providers/public'

const walletConnectProjectId = '5c5326451cb37f1e9b85fe65ca9c56e0'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        let slug: string = "MISSING";
        switch (chain.id) {
          case mainnet.id:
            slug = 'eth'
            break;
          case polygon.id:
            slug = 'polygon'
            break;
          default:
        }
        return {
          http: `https://rpc.ankr.com/${slug}`,
        }
      }
    }),
    // publicProvider()
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'My wagmi + RainbowKit App',
  chains,
  projectId: walletConnectProjectId,
})

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export { chains }
