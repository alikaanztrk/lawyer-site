import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
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
  title: "Av. Işıl Bengisu Akpınar | Hukuk Bürosu - İstanbul",
  description: "İstanbul merkezli deneyimli avukat. Ceza, medeni, ticaret ve aile hukuku alanlarında uzman hukuki danışmanlık ve dava takip hizmetleri. Ücretsiz ilk görüşme.",
  keywords: ["avukat", "hukuk bürosu", "İstanbul avukat", "ceza avukatı", "boşanma avukatı", "ticaret hukuku", "hukuki danışmanlık"],
  authors: [{ name: "Av. Işıl Bengisu Akpınar" }],
  creator: "Av. Işıl Bengisu Akpınar",
  publisher: "Işıl Bengisu Akpınar Hukuk Bürosu",
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
    title: 'Av. Işıl Bengisu Akpınar | Hukuk Bürosu - İstanbul',
    description: 'İstanbul merkezli deneyimli avukat. Ceza, medeni, ticaret ve aile hukuku alanlarında uzman hukuki danışmanlık ve dava takip hizmetleri.',
    siteName: 'Av. Işıl Bengisu Akpınar Hukuk Bürosu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Av. Işıl Bengisu Akpınar | Hukuk Bürosu - İstanbul',
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YYCPF830CS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YYCPF830CS');
          `}
        </Script>
      </head>
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
