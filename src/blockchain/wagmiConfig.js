import { createConfig } from 'wagmi';
import { bsc, bscTestnet } from 'wagmi/chains';
import { http } from 'wagmi';
import { config } from './config';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
    metaMaskWallet,
    trustWallet,
    baseAccount,
    walletConnectWallet,
    rabbyWallet,
    okxWallet,
    binanceWallet,
    phantomWallet,
    bitgetWallet,
    oneKeyWallet,
    coin98Wallet,
    ledgerWallet,
    gateWallet,
    braveWallet,
    bybitWallet,
    tokenPocketWallet,
    uniswapWallet
} from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
    [
        {
            groupName: 'Recommended',
            wallets: [
                walletConnectWallet,
                metaMaskWallet,
                trustWallet,
                baseAccount,
                tokenPocketWallet,
                rabbyWallet,
            ],
        },
        {
            groupName: 'Other Popular',
            wallets: [
                uniswapWallet,
                binanceWallet,
                phantomWallet,
                bitgetWallet,
                braveWallet,
                bybitWallet,
                oneKeyWallet,
                ledgerWallet,
                okxWallet,
                gateWallet,
            ],
        },
    ],
    {
        appName: 'Aurex',
        projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '935fb6b22595e3ade237adee1c290110',
    }
);

export const wagmiConfig = createConfig({
    connectors,
    chains: [config.CHAIN],
    transports: {
        [config.CHAIN_ID]: http(config.RPC_URL),
    },
});