import Header from '@/components/layout/Header';
import { Container } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import theme from './theme';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'A fake product shop demo using Nextjs',
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Header />
            <Container disableGutters maxWidth="xl" sx={{ paddingTop: 2 }}>
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
