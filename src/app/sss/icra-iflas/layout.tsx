import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İcra İflas Hukuku SSS | Av. Işıl Bengisu Akpınar',
  description: 'Alacak tahsili, icra takibi, haciz işlemi, iflas davası konularında sıkça sorulan sorular ve detaylı cevaplar.',
  keywords: ['icra iflas sss', 'alacak tahsili', 'icra takibi', 'haciz işlemi', 'iflas davası', 'ödeme emri', 'icra inkar davası'],
  openGraph: {
    title: 'İcra İflas Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'Alacak tahsili, icra takibi ve iflas süreçleri hakkında en sık sorulan soruları yanıtladık.',
    url: 'https://akpinarhukuk.av.tr/sss/icra-iflas',
    type: 'website',
  },
  twitter: {
    title: 'İcra İflas Hukuku SSS | Av. Işıl Bengisu Akpınar',
    description: 'Alacak tahsili, icra takibi ve iflas süreçleri hakkında en sık sorulan soruları yanıtladık.',
  },
  alternates: {
    canonical: 'https://akpinarhukuk.av.tr/sss/icra-iflas',
  },
};

export default function IcraIflasSSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
