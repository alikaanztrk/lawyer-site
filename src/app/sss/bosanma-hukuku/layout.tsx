import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boşanma Hukuku SSS | Av. Işıl Bengisu Akpınar',
  description: 'Boşanma süreci, nafaka, mal paylaşımı, velayet konularında sıkça sorulan sorular ve detaylı cevaplar. Deneyimli avukatımızdan bilgi alın.',
  keywords: ['boşanma sss', 'boşanma soruları', 'nafaka hesaplama', 'mal paylaşımı', 'velayet', 'anlaşmalı boşanma', 'çekişmeli boşanma'],
  openGraph: {
    title: 'Boşanma Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'Boşanma süreci hakkında en sık sorulan soruları yanıtladık. Kişisel durumunuza özel danışmanlık için bizimle iletişime geçin.',
    url: 'https://akpinarhukuk.av.tr/sss/bosanma-hukuku',
    type: 'website',
  },
  twitter: {
    title: 'Boşanma Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'Boşanma süreci hakkında en sık sorulan soruları yanıtladık.',
  },
  alternates: {
    canonical: 'https://akpinarhukuk.av.tr/sss/bosanma-hukuku',
  },
};

export default function BosanmaSSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
