import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Libre_Franklin, Public_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MobileCtaBar from "@/components/mobile-cta-bar";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-libre-franklin",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Vitrier à Québec | Thermos, douches et verre sur mesure | Vitrerie LB9",
    template: "%s | Vitrerie LB9",
  },
  description:
    "Vitrerie LB9 réalise vos travaux de verre résidentiels et commerciaux à Québec : remplacement de thermos, douches, garde-corps, portes commerciales et miroirs sur mesure.",
  icons: {
    icon: "/images/favicon-64.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    siteName: SITE.name,
    images: ["/images/og-vitrerie-lb9.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" className={`${libreFranklin.variable} ${publicSans.variable} ${spaceMono.variable}`}>
      <body className="pb-14 sm:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
