import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";
import CookieConsent from "./_components/cookie-consent";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? "http://localhost:3000"),
  title: "Amigo Sports - The Social Sports Network | Invest in Athletes",
  description: "Invest in the promise of tomorrow. Buy shares in professional athletes and earn dividends from their success. Join the Social Sports Network.",
  keywords: ["sports investing", "athlete shares", "sports trading platform", "invest in athletes", "sports stock trading"],
  authors: [{ name: "Amigo Sports" }],
  openGraph: {
    title: "Amigo Sports - The Social Sports Network",
    description: "Invest in professional athletes and earn dividends from their success. Trade shares 24/7.",
    url: "/",
    siteName: "Amigo Sports",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amigo Sports - The Social Sports Network",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amigo Sports - The Social Sports Network",
    description: "Invest in professional athletes and earn dividends from their success.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
