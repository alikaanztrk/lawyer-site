import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İş Hukuku SSS | Av. Işıl Bengisu Akpınar',
  description: 'İş sözleşmesi feshi, kıdem tazminatı, mobbing, fazla mesai, işçi hakları konularında sıkça sorulan sorular ve detaylı cevaplar.',
  keywords: ['iş hukuku sss', 'işçi hakları', 'kıdem tazminatı', 'mobbing', 'fazla mesai', 'işe iade davası', 'iş sözleşmesi feshi'],
  openGraph: {
    title: 'İş Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'İş hayatında karşılaşabileceğiniz sorunlar hakkında en sık sorulan soruları yanıtladık. İşçi hakları ve işveren yükümlülükleri hakkında bilgi alın.',
    url: 'https://akpinarhukuk.av.tr/sss/is-hukuku',
    type: 'website',
  },
  twitter: {
    title: 'İş Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'İş hayatında karşılaşabileceğiniz sorunlar hakkında en sık sorulan soruları yanıtladık.',
  },
  alternates: {
    canonical: 'https://akpinarhukuk.av.tr/sss/is-hukuku',
  },
};

export default function IsSSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
