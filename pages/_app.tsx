import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange={false}
            storageKey="portfolio-theme"
        >
            <div suppressHydrationWarning>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}
