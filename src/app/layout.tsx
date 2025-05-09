import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Daily Cosmos',
  description: 'Explore the wonders of the universe with The Daily Cosmos. Each day, discover a new Astronomy Picture of the Day (APOD) with insightful explanations about the cosmos, stars, planets, and more.',
  openGraph: {
    title: 'The Daily Cosmos',
    description: 'Explore the wonders of the universe with The Daily Cosmos. Each day, discover a new Astronomy Picture of the Day (APOD) with insightful explanations.',
    url: 'https://thedailycosmos.net', 
    siteName: 'The Daily Cosmos',
  },
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
      </head>
      <body>{children}</body>
    </html>
  );
}
