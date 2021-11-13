import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { getPhantomWallet } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { FC, ReactNode, useMemo } from "react";

console.warn('phantom', getPhantomWallet)

export const WalletConnectionProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            getPhantomWallet()
        ],
    []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                {children}
            </WalletProvider>
        </ConnectionProvider>
    )
};