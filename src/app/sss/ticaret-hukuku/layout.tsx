import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ticaret Hukuku SSS | Av. Işıl Bengisu Akpınar',
  description: 'Şirket kuruluşu, ticari sözleşmeler, konkordato, iflas erteleme, haksız rekabet konularında sıkça sorulan sorular ve detaylı cevaplar.',
  keywords: ['ticaret hukuku sss', 'şirket kuruluş', 'limited şirket', 'anonim şirket', 'ticari sözleşme', 'konkordato', 'haksız rekabet'],
  openGraph: {
    title: 'Ticaret Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'Şirket kuruluşu, ticari sözleşmeler ve ticari uyuşmazlıklar hakkında en sık sorulan soruları yanıtladık.',
    url: 'https://akpinarhukuk.av.tr/sss/ticaret-hukuku',
    type: 'website',
  },
  twitter: {
    title: 'Ticaret Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'Şirket kuruluşu, ticari sözleşmeler ve ticari uyuşmazlıklar hakkında en sık sorulan soruları yanıtladık.',
  },
  alternates: {
    canonical: 'https://akpinarhukuk.av.tr/sss/ticaret-hukuku',
  },
};

export default function TicaretSSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
