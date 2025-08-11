import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Joaquin Ross - Full-Stack Developer",
  description: "19-year-old Full-Stack Developer building enterprise solutions. 1M+ users impacted through Status, FMCG Dashboard, and more.",
  keywords: ["Joaquin Ross", "Full-Stack Developer", "TypeScript", "React", "Node.js", "Enterprise Software", "AI Engineer", "Data Manager"],
  authors: [{ name: "Joaquin Ross" }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: "Joaquin Ross - Full-Stack Developer",
    description: "19-year-old Full-Stack Developer building enterprise solutions. 1M+ users impacted.",
    type: "website",
    url: 'https://nyrrine.github.io/portfolio',
    siteName: 'Joaquin Ross Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Joaquin Ross - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joaquin Ross - Full-Stack Developer',
    description: '19-year-old Full-Stack Developer building enterprise solutions. 1M+ users impacted.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Background />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
