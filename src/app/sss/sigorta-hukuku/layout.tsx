import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sigorta Hukuku SSS | Av. Işıl Bengisu Akpınar',
  description: 'Sigorta tazminatları, poliçe şartları, trafik sigortası, kasko, hayat sigortası konularında sıkça sorulan sorular ve detaylı cevaplar.',
  keywords: ['sigorta hukuku sss', 'sigorta tazminatı', 'trafik sigortası', 'kasko sigortası', 'hayat sigortası', 'sağlık sigortası', 'eksper raporu'],
  openGraph: {
    title: 'Sigorta Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'Sigorta tazminatları, poliçe şartları ve sigorta şirketi uyuşmazlıkları hakkında en sık sorulan soruları yanıtladık.',
    url: 'https://akpinarhukuk.av.tr/sss/sigorta-hukuku',
    type: 'website',
  },
  twitter: {
    title: 'Sigorta Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'Sigorta tazminatları, poliçe şartları ve sigorta şirketi uyuşmazlıkları hakkında en sık sorulan soruları yanıtladık.',
  },
  alternates: {
    canonical: 'https://akpinarhukuk.av.tr/sss/sigorta-hukuku',
  },
};

export default function SigortaSSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
