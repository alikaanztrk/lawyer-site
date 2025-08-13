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
  title: "Av. Işıl Bengisu Akpınar | Hukuk Bürosu - İstanbul Kadıköy",
  description: "İstanbul Kadıköy'de 5+ yıl deneyimli avukat. Ceza, medeni, ticaret ve aile hukuku alanlarında uzman hukuki danışmanlık. 7/24 destek, ilk görüşme ücretsiz. ⚖️",
  keywords: ["avukat", "hukuk bürosu", "İstanbul avukat", "Kadıköy avukat", "ceza avukatı", "boşanma avukatı", "ticaret hukuku", "hukuki danışmanlık", "avukat randevu", "İstanbul hukuk bürosu"],
  authors: [{ name: "Av. Işıl Bengisu Akpınar" }],
  creator: "Av. Işıl Bengisu Akpınar",
  publisher: "Işıl Bengisu Akpınar Hukuk Bürosu",
  applicationName: "Av. Işıl Bengisu Akpınar Hukuk Bürosu",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Legal Services",
  classification: "Business",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://akpinarhukuk.av.tr',
    title: 'Av. Işıl Bengisu Akpınar | Hukuk Bürosu - İstanbul Kadıköy',
    description: 'İstanbul Kadıköy\'de 5+ yıl deneyimli avukat. Ceza, medeni, ticaret ve aile hukuku alanlarında uzman hukuki danışmanlık. 7/24 destek, ilk görüşme ücretsiz.',
    siteName: 'Av. Işıl Bengisu Akpınar Hukuk Bürosu',
    images: [
      {
        url: 'https://akpinarhukuk.av.tr/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Av. Işıl Bengisu Akpınar Hukuk Bürosu - İstanbul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Av. Işıl Bengisu Akpınar | Hukuk Bürosu - İstanbul Kadıköy',
    description: 'İstanbul Kadıköy\'de 5+ yıl deneyimli avukat. Ceza, medeni, ticaret ve aile hukuku alanlarında uzman hukuki danışmanlık. 7/24 destek.',
    images: ['https://akpinarhukuk.av.tr/images/og-image.jpg'],
    creator: '@av_isilbengisuakpinar',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: 'https://akpinarhukuk.av.tr',
    languages: {
      'tr': 'https://akpinarhukuk.av.tr',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
