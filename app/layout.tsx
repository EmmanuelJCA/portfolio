import type { Metadata } from 'next';

import './globals.css';
import { onest } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { ThemeProvider } from '@/components/providers';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      href: '/logo.svg',
      url: '/logo.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
