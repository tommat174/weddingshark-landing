import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://weddingshark.co";
const title = "WeddingShark — The vendor CRM for couples";
const description =
  "Track every photographer, florist, and venue from first email to signed contract. One inbox, every wedding vendor.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "wedding planning",
    "wedding vendors",
    "vendor CRM",
    "wedding inbox",
    "wedding app",
    "WeddingShark",
  ],
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "WeddingShark",
    type: "website",
    images: [
      {
        url: "/logo-mark.png",
        width: 512,
        height: 512,
        alt: "WeddingShark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo-mark.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans bg-ws-canvas text-ws-fg antialiased">
        {children}
      </body>
    </html>
  );
}
