import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Lake Anna Lake For All',
    template: '%s | Lake Anna Lake For All',
  },
  description:
    'Advocating for public lake access and preservation of all watersports on Lake Anna, Virginia through education and equal representation.',
  keywords: ['Lake Anna', 'public lake access', 'boating', 'watercraft', 'Virginia', 'lake advocacy'],
  openGraph: {
    siteName: 'Lake Anna Lake For All',
    url: 'https://lakeanna4all.org',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
