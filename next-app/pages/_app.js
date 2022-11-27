import Layout from "../components/Layout";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

export default function MyApp({ Component, pageProps }) {

  const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

  const { chains, provider } = configureChains(
    [chain.polygon],
    [infuraProvider({ infuraId }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "web3rsvp",
    chains,
  });

  const wagmClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmClient}>
      <RainbowKitProvider chains={chains}>
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
