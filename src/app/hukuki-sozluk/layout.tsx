import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hukuki Terimler Sözlüğü | Av. Işıl Bengisu Akpınar',
  description: 'Hukuki jargonu anlamanıza yardımcı olmak için önemli hukuki terimleri alfabetik sırayla düzenledik. Arama yaparak istediğiniz terimi bulabilirsiniz.',
  keywords: ['hukuki terimler', 'hukuk sözlüğü', 'yasal terimler', 'avukat sözlük', 'hukuki kelimeler', 'mülteci tazminat', 'beraat nedir'],
  openGraph: {
    title: 'Hukuki Terimler Sözlüğü | Av. Işıl Bengisu Akpınar',
    description: 'Hukuki jargonu anlamanıza yardımcı olmak için önemli hukuki terimleri alfabetik sırayla düzenledik.',
    url: 'https://akpinarhukuk.av.tr/hukuki-sozluk',
    type: 'website',
  },
  twitter: {
    title: 'Hukuki Terimler Sözlüğü | Av. Işıl Bengisu Akpınar',
    description: 'Hukuki jargonu anlamanıza yardımcı olmak için önemli hukuki terimleri alfabetik sırayla düzenledik.',
  },
  alternates: {
    canonical: 'https://akpinarhukuk.av.tr/hukuki-sozluk',
  },
};

export default function SozlukLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
