import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import { LocalBusinessSchema } from '@/components/seo/StructuredData';

export default function Home() {
  return (
    <>
      <LocalBusinessSchema
        name="Av. Işıl Bengisu Akpınar Hukuk Bürosu"
        description="İstanbul Kadıköy merkezli deneyimli avukat. Ceza, medeni, ticaret ve aile hukuku alanlarında uzman hukuki danışmanlık ve dava takip hizmetleri."
        url="https://akpinarhukuk.av.tr"
        telephone="+90 507 112 98 98"
        email="info@akpinarhukuk.av.tr"
        priceRange="₺₺"
        areaServed="İstanbul"
        address={{
          streetAddress: "Koşuyolu Mh, Salih Omurtak Sk, No:79A",
          addressLocality: "Kadıköy",
          addressRegion: "İstanbul",
          postalCode: "34718",
          addressCountry: "TR"
        }}
        openingHours={[
          "Monday:09:00-18:00",
          "Tuesday:09:00-18:00", 
          "Wednesday:09:00-18:00",
          "Thursday:09:00-18:00",
          "Friday:09:00-18:00",
          "Saturday:Closed",
          "Sunday:Closed"
        ]}
      />
      <HeroSection />
      <ServicesSection />
    </>
  );
}
