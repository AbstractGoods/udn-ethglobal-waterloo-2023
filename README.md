# Unified Data (Network) Concept Demo

NOTE: this project is grossly incomplete, but I am submitting it as is to have
something to refer to and discuss with judges if for nothing else than feedback
on the general concept.

- - -

This demo was created for the ETHGlobal Waterloo 2023 hackathon and is intended
to illustrate a way of building apps on top of a unified data network composed
of schema-defined datasets.

Instead of creating a p2p network, this demo simply relies on Arweave for p2p
storage of datasets. The goal of this demo is to show how datasets are defined
and used to build decentralized apps to serve a variety of use cases. Building
apps in this way will enable developers to leverage existing data sets across
chains, published to an offchain network, such as Arweave. In the future this
may be combined with p2p networking and set reconciliation to enable even more
lightweight operation with a wider range of trade-offs. The current demo relies
on Arweave for this, but there are likely to be other use cases where more
ephemeral storage of datasets is preferable. Farcaster is a good example of
such a use case.

In conclusion, I hope to show with this demo, how building offchain allows
developers to make a wider range of trade-offs while incorporating elements of
blockchain and cryptography where needed to acheive the guarantees required for
their use case.

- - -

This is a [wagmi](https://wagmi.sh) + [RainbowKit](https://rainbowkit.com) + [Next.js](https://nextjs.org) project bootstrapped with [`create-wagmi`](https://github.com/wagmi-dev/wagmi/tree/main/packages/create-wagmi)

# Getting Started

Run `npm run dev` in your terminal, and then open [localhost:3000](http://localhost:3000) in your browser.

Once the webpage has loaded, changes made to files inside the `src/` directory (e.g. `src/pages/index.tsx`) will automatically update the webpage.

# Learn more

To learn more about [Next.js](https://nextjs.org) or [wagmi](https://wagmi.sh), check out the following resources:

- [wagmi Documentation](https://wagmi.sh) – learn about wagmi Hooks and API.
- [wagmi Examples](https://wagmi.sh/examples/connect-wallet) – a suite of simple examples using wagmi.
- [RainbowKit Documentation](https://rainbowkit.com/docs/introduction) – learn more about RainbowKit (configuration, theming, advanced usage, etc).
- [Next.js Documentation](https://nextjs.org/docs) learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
