import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular | Av. Işıl Bengisu Akpınar',
  description: 'Hukuki süreçler hakkında aklınıza takılan soruları yanıtlıyoruz. Boşanma, ceza, iş hukuku ve daha fazlası hakkında bilgi alın.',
  keywords: ['sss', 'sıkça sorulan sorular', 'hukuki sorular', 'avukat sorular', 'boşanma soruları', 'ceza hukuku', 'iş hukuku'],
  openGraph: {
    title: 'Sıkça Sorulan Sorular | Av. Işıl Bengisu Akpınar',
    description: 'Hukuki süreçler hakkında aklınıza takılan soruları yanıtlıyoruz. Boşanma, ceza, iş hukuku ve daha fazlası hakkında bilgi alın.',
    url: 'https://akpinarhukuk.av.tr/sikca-sorulan-sorular',
    type: 'website',
  },
  twitter: {
    title: 'Sıkça Sorulan Sorular | Av. Işıl Bengisu Akpınar',
    description: 'Hukuki süreçler hakkında aklınıza takılan soruları yanıtlıyoruz. Boşanma, ceza, iş hukuku ve daha fazlası hakkında bilgi alın.',
  },
  alternates: {
    canonical: 'https://akpinarhukuk.av.tr/sikca-sorulan-sorular',
  },
};

export default function SSSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
