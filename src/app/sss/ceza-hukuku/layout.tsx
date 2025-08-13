import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ceza Hukuku SSS | Av. Işıl Bengisu Akpınar',
  description: 'Ceza davası süreci, gözaltı hakları, beraat, tutuklama şartları konularında sıkça sorulan sorular ve detaylı cevaplar.',
  keywords: ['ceza hukuku sss', 'ceza davası', 'gözaltı hakları', 'beraat nedir', 'tutuklama şartları', 'müdafi hakkı', 'savunma hakları'],
  openGraph: {
    title: 'Ceza Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'Ceza davası süreçleri hakkında en sık sorulan soruları yanıtladık. Savunma haklarınız ve yargısal süreçler hakkında bilgi alın.',
    url: 'https://akpinarhukuk.av.tr/sss/ceza-hukuku',
    type: 'website',
  },
  twitter: {
    title: 'Ceza Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'Ceza davası süreçleri hakkında en sık sorulan soruları yanıtladık.',
  },
  alternates: {
    canonical: 'https://akpinarhukuk.av.tr/sss/ceza-hukuku',
  },
};

export default function CezaSSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
