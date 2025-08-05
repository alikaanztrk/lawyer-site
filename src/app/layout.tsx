import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Av. Mehmet Özkan | Hukuk Bürosu - İstanbul",
  description: "İstanbul merkezli deneyimli avukat. Ceza, medeni, ticaret ve aile hukuku alanlarında uzman hukuki danışmanlık ve dava takip hizmetleri. Ücretsiz ilk görüşme.",
  keywords: ["avukat", "hukuk bürosu", "İstanbul avukat", "ceza avukatı", "boşanma avukatı", "ticaret hukuku", "hukuki danışmanlık"],
  authors: [{ name: "Av. Mehmet Özkan" }],
  creator: "Av. Mehmet Özkan",
  publisher: "Mehmet Özkan Hukuk Bürosu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://av.tr',
    title: 'Av. Mehmet Özkan | Hukuk Bürosu - İstanbul',
    description: 'İstanbul merkezli deneyimli avukat. Ceza, medeni, ticaret ve aile hukuku alanlarında uzman hukuki danışmanlık ve dava takip hizmetleri.',
    siteName: 'Av. Mehmet Özkan Hukuk Bürosu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Av. Mehmet Özkan | Hukuk Bürosu - İstanbul',
    description: 'İstanbul merkezli deneyimli avukat. Ceza, medeni, ticaret ve aile hukuku alanlarında uzman hukuki danışmanlık ve dava takip hizmetleri.',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
