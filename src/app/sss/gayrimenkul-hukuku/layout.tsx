import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gayrimenkul Hukuku SSS | Av. Işıl Bengisu Akpınar',
  description: 'Emlak alım-satımı, kira sözleşmeleri, tapu işlemleri, tahliye davası konularında sıkça sorulan sorular ve detaylı cevaplar.',
  keywords: ['gayrimenkul hukuku sss', 'emlak alım satım', 'kira sözleşmesi', 'tapu iptali', 'tahliye davası', 'kat mülkiyeti', 'imar durumu'],
  openGraph: {
    title: 'Gayrimenkul Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'Emlak alım-satımı, kira sözleşmeleri ve tapu işlemleri hakkında en sık sorulan soruları yanıtladık.',
    url: 'https://akpinarhukuk.av.tr/sss/gayrimenkul-hukuku',
    type: 'website',
  },
  twitter: {
    title: 'Gayrimenkul Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'Emlak alım-satımı, kira sözleşmeleri ve tapu işlemleri hakkında en sık sorulan soruları yanıtladık.',
  },
  alternates: {
    canonical: 'https://akpinarhukuk.av.tr/sss/gayrimenkul-hukuku',
  },
};

export default function GayrimenkulSSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
