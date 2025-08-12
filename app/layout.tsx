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
  description: "19-year-old Full-Stack Developer building enterprise solutions. 2.5M+ users impacted through Status, Arbiter, and more. Specializing in AI, automation, and community management.",
  keywords: ["Joaquin Ross", "Full-Stack Developer", "TypeScript", "React", "Node.js", "Enterprise Software", "AI Engineer", "Data Manager"],
  authors: [{ name: "Joaquin Ross" }],
  metadataBase: new URL('https://nyrrine.github.io/portfolio'),
  icons: {
    icon: [
      { url: '/portfolio/nyrrineicon.png?v=1', type: 'image/png' },
      { url: '/portfolio/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/portfolio/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/portfolio/nyrrineicon.png?v=1',
    apple: [
      { url: '/portfolio/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: "Joaquin Ross - Full-Stack Developer & AI Engineer",
    description: "19-year-old Full-Stack Developer building enterprise solutions. 2.5M+ users impacted. Specializing in AI, automation, and scalable systems.",
    type: "website",
    url: 'https://nyrrine.github.io/portfolio',
    siteName: 'Joaquin Ross Portfolio',
    images: [
      {
        url: 'https://nyrrine.github.io/portfolio/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Joaquin Ross Portfolio - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joaquin Ross - Full-Stack Developer & AI Engineer',
    description: '19-year-old Full-Stack Developer building enterprise solutions. 2.5M+ users impacted.',
    images: ['https://nyrrine.github.io/portfolio/og-preview.png'],
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
      <head>
        <link rel="icon" href="/portfolio/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/portfolio/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/portfolio/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/portfolio/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/portfolio/nyrrineicon.png" />
        <meta property="og:title" content="Joaquin Ross - Full-Stack Developer & AI Engineer" />
        <meta property="og:description" content="19-year-old Full-Stack Developer building enterprise solutions. 2.5M+ users impacted. Specializing in AI, automation, and scalable systems." />
        <meta property="og:image" content="https://nyrrine.github.io/portfolio/og-preview.png" />
        <meta property="og:url" content="https://nyrrine.github.io/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Joaquin Ross Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joaquin Ross - Full-Stack Developer & AI Engineer" />
        <meta name="twitter:description" content="19-year-old Full-Stack Developer building enterprise solutions. 2.5M+ users impacted." />
        <meta name="twitter:image" content="https://nyrrine.github.io/portfolio/og-preview.png" />
      </head>
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
