import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';
import { WalletConnectionProvider } from '../src/WalletConnectionProvider';
import theme from '../src/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
        <ThemeProvider theme={theme}>
          <WalletConnectionProvider>
            <WalletDialogProvider >
              <CssBaseline />
              <Component {...pageProps} />
            </WalletDialogProvider>
          </WalletConnectionProvider>
        </ThemeProvider>
  );
}
