import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d12" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kanchanflow.com"),
  title: {
    default: "KanchanFlow | Manufacturing CRM & Shop-Floor Sales Pipeline",
    template: "%s | KanchanFlow Manufacturing CRM",
  },
  description:
    "KanchanFlow is the precision manufacturing CRM engineered for custom machine shops, sheet metal fabricators, and OEM suppliers. Accelerate quote-to-order, synchronize multi-level BOMs, track machine loads, and automate WhatsApp dispatch notifications.",
  keywords: [
    "Manufacturing CRM",
    "Shop-Floor Sales Pipeline",
    "Quote-to-Order Software",
    "Multi-level BOM Software",
    "CNC Job Shop CRM",
    "Sheet Metal Fabrication ERP CRM",
    "KanchanFlow",
    "WhatsApp Dispatch Proof",
    "Manufacturing Estimation Software",
  ],
  authors: [{ name: "KanchanFlow Systems" }],
  creator: "KanchanFlow",
  publisher: "KanchanFlow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kanchanflow.com",
    title: "KanchanFlow | Manufacturing CRM & Shop-Floor Sales Pipeline",
    description:
      "Precision estimation, multi-level BOM costing, shop-floor pipeline visibility, and automated customer updates for manufacturing leaders.",
    siteName: "KanchanFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "KanchanFlow | Manufacturing CRM & Shop-Floor Sales Pipeline",
    description:
      "Eliminate quote bottlenecks and spreadsheet chaos. Fast, B2B-credible manufacturing CRM.",
    creator: "@kanchanflow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakartaSans.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
