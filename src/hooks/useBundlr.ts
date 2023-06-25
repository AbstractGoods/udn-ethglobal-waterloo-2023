import { useState, useEffect } from 'react';
import { WalletClient } from 'viem';
import { useNetwork, useAccount, useWalletClient } from "wagmi";
import { mainnet, polygon } from 'wagmi/chains'
import { WebBundlr } from "@bundlr-network/client";

type Client = Partial<WalletClient> & {
  getSigner: () => Client;
  getAddress: () => `0x${string}` | undefined;
  _signTypedData: any;
}

type Network = "ethereum" | "matic" | undefined

export const useBundlr = (nodeAddress = "https://devnet.bundlr.network") => {
  const [isReady, setIsReady] = useState(false);
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data: walletClient } = useWalletClient();

  let provider: Client;
  provider = {
    ...walletClient,
    getSigner: () => provider,
    getAddress: () => address,
    _signTypedData: (domain, types, message) => walletClient.signTypedData({
      account: address,
      primaryType: 'Bundlr',
      domain,
      types,
      message
    })
  };

  const network: Network = chain?.id && chain?.id === mainnet.id ? 'ethereum' : 'matic'

  console.log({ network, chain })

  // create a WebBundlr object
  const bundlr = network && new WebBundlr(nodeAddress, network, provider);

  useEffect(() => {
    const init = async () => {
      if (bundlr) {
        await bundlr.ready()
        setIsReady(true)
      }
    }

    // run it!
    init()
  }, [bundlr])

  return {
    data: bundlr,
    isReady,
  };

};

export default useBundlr;
