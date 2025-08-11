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
  keywords: ["Joaquin Ross", "Full-Stack Developer", "TypeScript", "React", "Node.js", "Enterprise Software"],
  authors: [{ name: "Joaquin Ross" }],
  openGraph: {
    title: "Joaquin Ross - Full-Stack Developer",
    description: "19-year-old Full-Stack Developer building enterprise solutions. 1M+ users impacted.",
    type: "website",
  },
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
