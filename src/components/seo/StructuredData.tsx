'use client';

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  email: string;
  url: string;
  openingHours: string[];
  priceRange: string;
  areaServed: string;
}

export function LocalBusinessSchema(props: LocalBusinessSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": props.name,
    "description": props.description,
    "url": props.url,
    "telephone": props.telephone,
    "email": props.email,
    "priceRange": props.priceRange,
    "areaServed": {
      "@type": "City",
      "name": props.areaServed
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": props.address.streetAddress,
      "addressLocality": props.address.addressLocality,
      "addressRegion": props.address.addressRegion,
      "postalCode": props.address.postalCode,
      "addressCountry": props.address.addressCountry
    },
    "openingHoursSpecification": props.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(':')[0],
      "opens": hours.split(':')[1]?.split('-')[0],
      "closes": hours.split(':')[1]?.split('-')[1]
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hukuki Hizmetler",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceza Hukuku",
            "description": "Ceza davalarında savunma ve müdafaa hizmetleri"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Aile Hukuku",
            "description": "Boşanma, velayet, nafaka davalarında hukuki destek"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Ticaret Hukuku",
            "description": "Şirket kuruluşu, ticari uyuşmazlıklar ve sözleşmeler"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "İş Hukuku", 
            "description": "İş sözleşmeleri, işten çıkarma, mobbing davalarında hukuki destek"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Av. Işıl Bengisu Akpınar",
      "jobTitle": "Kurucu Avukat",
      "description": "5+ yıl deneyimli, ceza ve medeni hukuk uzmanı"
    },
    "sameAs": [
      "https://linkedin.com/in/avukat-isil-bengisu-akpinar",
      "https://instagram.com/avukat.isilbengisuakpinar"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  url: string;
  imageUrl?: string;
}

export function ArticleSchema(props: ArticleSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": props.title,
    "description": props.description,
    "author": {
      "@type": "Person",
      "name": props.author,
      "jobTitle": "Avukat",
      "worksFor": {
        "@type": "LegalService",
        "name": "Av. Işıl Bengisu Akpınar Hukuk Bürosu"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Av. Işıl Bengisu Akpınar Hukuk Bürosu",
             "url": "https://akpinarhukuk.av.tr"
    },
    "datePublished": props.datePublished,
    "dateModified": props.dateModified,
    "url": props.url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": props.url
    },
         "image": props.imageUrl || "https://akpinarhukuk.av.tr/images/og-image.jpg"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: {
    question: string;
    answer: string;
  }[];
  pageTitle: string;
  category: string;
}

export function FAQSchema(props: FAQSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": props.pageTitle,
    "description": `${props.category} alanında sıkça sorulan sorular ve cevapları`,
    "mainEntity": props.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
