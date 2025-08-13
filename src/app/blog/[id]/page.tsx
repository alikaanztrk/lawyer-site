'use client';

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// Blog verilerini buraya dahil ediyoruz (gerçek uygulamada API'den gelecek)
const blogPosts = {
  1: {
    id: 1,
    title: 'Ceza Davası Açma Süreci: Adım Adım Rehber',
    excerpt: 'Ceza davası açma sürecinde dikkat edilmesi gereken önemli noktalar ve yasal prosedürler hakkında detaylı bilgi.',
    content: `
      <h2>Ceza Davası Nedir?</h2>
      <p>Ceza davası, bir suç işlendiği iddiasıyla suçlanan kişi hakkında ceza mahkemelerinde açılan davalardır. Bu süreç, hem mağdur hem de sanık için kritik öneme sahiptir.</p>
      
      <h2>Ceza Davası Açma Süreci</h2>
      <h3>1. Suç Duyurusu ve Şikayet</h3>
      <p>Ceza davası süreci genellikle suç duyurusu veya şikayet ile başlar. Mağdur veya suçtan haberdar olan herhangi bir kişi, cumhuriyet savcılığına başvurarak suç duyurusunda bulunabilir.</p>
      
      <h3>2. Soruşturma Aşaması</h3>
      <p>Cumhuriyet savcılığı, gelen ihbar veya şikayet üzerine soruşturma başlatır. Bu aşamada:</p>
      <ul>
        <li>Deliller toplanır</li>
        <li>Tanık ifadeleri alınır</li>
        <li>Bilirkişi raporları hazırlanır</li>
        <li>Şüphelinin ifadesi alınır</li>
      </ul>
      
      <h3>3. İddianame Hazırlanması</h3>
      <p>Yeterli delil bulunması durumunda cumhuriyet savcısı iddianame hazırlar ve mahkemeye gönderir.</p>
      
      <h2>Avukat Tutmanın Önemi</h2>
      <p>Ceza davalarında profesyonel hukuki destek almak kritik öneme sahiptir. Deneyimli bir ceza avukatı:</p>
      <ul>
        <li>Dosyayı detaylı inceler</li>
        <li>Savunma stratejisi belirler</li>
        <li>Hukuki haklarınızı korur</li>
        <li>Mahkeme sürecinde temsil eder</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Ceza davası süreci karmaşık ve uzun bir süreçtir. Bu süreçte doğru hukuki yönlendirme almak, hem adil yargılanma hakkınızı kullanmanız hem de en iyi sonuca ulaşmanız için elzemdir.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2025-03-15',
    readTime: '8 dk',
    category: 'Ceza Hukuku',
    tags: ['ceza davası', 'hukuki süreç', 'dava açma']
  },
  2: {
    id: 2,
    title: 'Boşanma Davası Nasıl Açılır? Gerekli Belgeler',
    excerpt: 'Boşanma davası açmak için gerekli belgeler, süreç ve dikkat edilmesi gereken hukuki detaylar.',
    content: `
      <h2>Boşanma Davası Nedir?</h2>
      <p>Boşanma davası, evlilik birliğinin sona erdirilmesi için aile mahkemelerine yapılan başvurudur. Bu süreç, hem eşlerin hem de varsa çocukların geleceğini etkileyen önemli bir hukuki süreçtir.</p>
      
      <h2>Boşanma Türleri</h2>
      <h3>1. Anlaşmalı Boşanma</h3>
      <p>Eşlerin boşanma konusunda anlaştığı ve tüm konularda mutabakata vardığı boşanma türüdür.</p>
      
      <h3>2. Çekişmeli Boşanma</h3>
      <p>Eşlerden birinin boşanmayı kabul etmediği veya boşanma şartları konusunda anlaşamadıkları durumlarda açılan davalardır.</p>
      
      <h2>Gerekli Belgeler</h2>
      <ul>
        <li>Evlilik cüzdanı</li>
        <li>Nüfus kayıt örneği</li>
        <li>Çocuk varsa nüfus kayıt örnekleri</li>
        <li>Gelir belgesi</li>
        <li>Malvarlığı beyanı</li>
        <li>Dava dilekçesi</li>
      </ul>
      
      <h2>Boşanma Sürecinde Dikkat Edilecekler</h2>
      <p>Boşanma süreci sadece evliliğin sona ermesi değil, aynı zamanda mal paylaşımı, nafaka, velayet gibi önemli konuları da içerir. Bu konularda doğru kararlar alabilmek için uzman hukuki destek almak gereklidir.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2025-02-28',
    readTime: '6 dk',
    category: 'Aile Hukuku',
    tags: ['boşanma', 'aile hukuku', 'dava süreci']
  },
  3: {
    id: 3,
    title: 'İş Yerinde Mobbing: Hukuki Haklarınız',
    excerpt: 'İş yerinde mobbing yaşayanların hukuki hakları ve başvuru yolları hakkında bilmeniz gerekenler.',
    content: `
      <h2>Mobbing Nedir?</h2>
      <p>Mobbing, iş yerinde sistematik olarak uygulanan psikolojik taciz, zorbalık ve dışlama davranışlarıdır. Bu davranışlar çalışanın iş performansını, ruh sağlığını ve yaşam kalitesini olumsuz etkiler.</p>
      
      <h2>Mobbing Türleri</h2>
      <ul>
        <li>Dikey mobbing (üst-alt ilişkisi)</li>
        <li>Yatay mobbing (eşit seviyedeki çalışanlar arası)</li>
        <li>Stratejik mobbing (işten çıkarma amaçlı)</li>
      </ul>
      
      <h2>Hukuki Haklarınız</h2>
      <p>İş yerinde mobbing yaşayan çalışanların başvurabileceği hukuki yollar:</p>
      <ul>
        <li>İş mahkemesinde tazminat davası açma</li>
        <li>Ceza mahkemesinde şikayette bulunma</li>
        <li>İş Teftiş Kuruluna başvuru</li>
        <li>İnsan Hakları Kurumuna başvuru</li>
      </ul>
      
      <h2>Delil Toplama</h2>
      <p>Mobbing davalarında delil toplama kritik önemdedir. E-postalar, mesajlar, tanık ifadeleri ve tıbbi raporlar önemli delillerdir.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2025-01-20',
    readTime: '7 dk',
    category: 'İş Hukuku',
    tags: ['mobbing', 'iş hukuku', 'çalışan hakları']
  },
  4: {
    id: 4,
    title: 'Gayrimenkul Alım Satım Sözleşmesi Nelere Dikkat Etmeli',
    excerpt: 'Gayrimenkul alım satım işlemlerinde dikkat edilmesi gereken hukuki noktalar ve güvenli alışveriş.',
    content: `
      <h2>Gayrimenkul Alım Satımında Dikkat Edilecek Noktalar</h2>
      <p>Gayrimenkul yatırımı büyük bir karardır ve doğru adımlar atılmazsa ciddi sorunlar yaşanabilir.</p>
      
      <h2>Ön İnceleme</h2>
      <ul>
        <li>Tapu siciline kayıtlı bilgilerin kontrol edilmesi</li>
        <li>İmar durumunun araştırılması</li>
        <li>Borç ve rehin durumunun tespiti</li>
        <li>Yapı kullanma izni kontrolü</li>
      </ul>
      
      <h2>Sözleşme Aşaması</h2>
      <p>Alım satım sözleşmesinde bulunması gereken temel unsurlar:</p>
      <ul>
        <li>Tarafların kimlik bilgileri</li>
        <li>Gayrimenkulün tanımı ve özellikleri</li>
        <li>Satış bedeli ve ödeme şekli</li>
        <li>Teslim tarihi ve şartları</li>
        <li>Cayma koşulları</li>
      </ul>
      
      <h2>Tapu Devri</h2>
      <p>Tapu devir işleminde gerekli belgeler ve prosedürler hakkında detaylı bilgi.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2025-01-08',
    readTime: '5 dk',
    category: 'Gayrimenkul Hukuku',
    tags: ['gayrimenkul', 'alım satım', 'sözleşme']
  },
  5: {
    id: 5,
    title: 'Miras Hukuku Rehberi: Mirasçılık ve Vasiyetname',
    excerpt: 'Miras hukuku kapsamında mirasçılık hakları, vasiyetname düzenleme ve miras paylaşımı.',
    content: `
      <h2>Miras Hukuku Temelleri</h2>
      <p>Miras hukuku, kişinin ölümüyle birlikte mal varlığının mirasçılara geçişini düzenleyen hukuk dalıdır.</p>
      
      <h2>Yasal Mirasçılar</h2>
      <p>Türk Medeni Kanunu'na göre yasal mirasçılar:</p>
      <ol>
        <li>Altsoy (çocuklar, torunlar)</li>
        <li>Ana-baba ve kardeşler</li>
        <li>Büyük ana-baba</li>
        <li>Eş</li>
      </ol>
      
      <h2>Vasiyetname</h2>
      <p>Vasiyetname türleri ve geçerlilik şartları:</p>
      <ul>
        <li>El yazısı vasiyetname</li>
        <li>Resmi vasiyetname</li>
        <li>Sözlü vasiyetname</li>
      </ul>
      
      <h2>Saklı Pay</h2>
      <p>Belirli mirasçıların hukuki olarak korunan asgari miras payları ve saklı pay davalarının açılması.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2025-02-14',
    readTime: '9 dk',
    category: 'Medeni Hukuk',
    tags: ['miras', 'vasiyetname', 'mirasçılık']
  },
  6: {
    id: 6,
    title: 'Şirket Kuruluş Sürecinde Hukuki Adımlar',
    excerpt: 'Şirket kuruluş sürecinde atılması gereken hukuki adımlar ve gerekli belgeler hakkında rehber.',
    content: `
      <h2>Şirket Türleri</h2>
      <p>Türkiye'de kurulabilecek temel şirket türleri ve özellikleri.</p>
      
      <h2>Anonim Şirket</h2>
      <ul>
        <li>Minimum sermaye: 50.000 TL</li>
        <li>Pay senetleri ile temsil edilir</li>
        <li>Ortaklar sadece sermaye payları ile sorumlu</li>
      </ul>
      
      <h2>Limited Şirket</h2>
      <ul>
        <li>Minimum sermaye: 10.000 TL</li>
        <li>Esas sözleşme ile kurulur</li>
        <li>Daha esnek yönetim yapısı</li>
      </ul>
      
      <h2>Kuruluş Aşamaları</h2>
      <ol>
        <li>Esas sözleşme hazırlanması</li>
        <li>Sermayenin yatırılması</li>
        <li>Ticaret sicili tescili</li>
        <li>Vergi dairesine bildirim</li>
      </ol>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2025-01-30',
    readTime: '6 dk',
    category: 'Ticaret Hukuku',
    tags: ['şirket kuruluşu', 'ticaret hukuku', 'girişimcilik']
  },
  7: {
    id: 7,
    title: 'Sigorta Tazminatı Nasıl Alınır? Red Durumunda Ne Yapmalı?',
    excerpt: 'Sigorta şirketlerinden tazminat alma süreci, red durumlarında hukuki haklarınız ve başvuru yolları.',
    content: `
      <h2>Sigorta Tazminat Süreci</h2>
      <p>Sigorta tazminatı alma sürecinde izlenmesi gereken adımlar ve dikkat edilecek noktalar.</p>
      
      <h2>Hasar Bildirimi</h2>
      <ul>
        <li>Hasarın derhal bildirilmesi</li>
        <li>Gerekli belgelerin toplanması</li>
        <li>Ekspertiz raporu hazırlanması</li>
      </ul>
      
      <h2>Tazminat Reddi Durumları</h2>
      <p>Sigorta şirketinin tazminatı reddedebileceği yasal durumlar:</p>
      <ul>
        <li>Kasıtlı hasar</li>
        <li>Prim borcunun bulunması</li>
        <li>Bildirim süresinin aşılması</li>
        <li>Sözleşme şartlarına aykırılık</li>
      </ul>
      
      <h2>Hukuki Başvuru Yolları</h2>
      <p>Tazminat reddedildiğinde başvurulabilecek yollar ve dava süreci.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2025-03-10',
    readTime: '7 dk',
    category: 'Sigorta Hukuku',
    tags: ['sigorta', 'tazminat', 'red durumu']
  },
  8: {
    id: 8,
    title: 'İcra Takibi Başlatma: Alacağınızı Tahsil Etme Yolları',
    excerpt: 'Alacaklıların icra takibi başlatma süreci, gerekli belgeler ve takip edilecek adımlar.',
    content: `
      <h2>İcra Takibi Nedir?</h2>
      <p>İcra takibi, alacaklıların borçlularından alacaklarını tahsil etmek için başvurdukları yasal süreçtir.</p>
      
      <h2>İcra Takibi Türleri</h2>
      <ul>
        <li>Genel haciz yolu ile takip</li>
        <li>İlamlı icra takibi</li>
        <li>Kambiyo senetlerine özgü takip</li>
      </ul>
      
      <h2>Takip Süreci</h2>
      <ol>
        <li>İcra dairesine başvuru</li>
        <li>Ödeme emrinin gönderilmesi</li>
        <li>İtiraz süresi (7 gün)</li>
        <li>Haciz işlemlerinin başlatılması</li>
        <li>Satış ve tahsilat</li>
      </ol>
      
      <h2>Gerekli Belgeler</h2>
      <p>İcra takibi için gerekli belgeler ve hazırlık süreci.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2025-02-05',
    readTime: '6 dk',
    category: 'İcra İflas Hukuku',
    tags: ['icra takibi', 'alacak tahsili', 'borç']
  },
  9: {
    id: 9,
    title: 'Kira Artışı Davaları: Kiracı ve Ev Sahibi Hakları',
    excerpt: 'Kira artışı uyuşmazlıklarında tarafların hakları, yasal oranlar ve dava süreçleri.',
    content: `
      <h2>Kira Artışı Kuralları</h2>
      <p>Kira artışı konusunda kiracı ve ev sahibinin hakları Türk Borçlar Kanunu ile düzenlenmiştir.</p>
      
      <h2>Yasal Artış Oranları</h2>
      <ul>
        <li>TÜFE oranına göre artış (yıllık)</li>
        <li>Sözleşmede belirlenen oranlar</li>
        <li>Anlaşmalı artış oranları</li>
      </ul>
      
      <h2>Kira Artışı Davası</h2>
      <p>Kira artışı konusunda anlaşmazlık durumunda dava açma süreci:</p>
      <ol>
        <li>Müzakere aşaması</li>
        <li>Sulh arayışları</li>
        <li>Mahkemeye başvuru</li>
        <li>Bilirkişi incelemesi</li>
      </ol>
      
      <h2>Kiracı ve Ev Sahibi Hakları</h2>
      <p>Tarafların hakları ve yükümlülükleri detaylı olarak açıklanmaktadır.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2025-01-15',
    readTime: '5 dk',
    category: 'Kira Hukuku',
    tags: ['kira artışı', 'kiracı hakları', 'ev sahibi']
  },
  10: {
    id: 10,
    title: 'Tüketici Hakları: Ayıplı Mal ve Hizmet Durumunda Ne Yapmalı?',
    excerpt: 'Satın aldığınız mal veya hizmette sorun yaşadığınızda tüketici haklarınız ve başvuru yolları.',
    content: `
      <h2>Tüketici Hakları Nelerdir?</h2>
      <p>Tüketici Kanunu kapsamında tüketicilere tanınan temel haklar ve koruma mekanizmaları.</p>
      
      <h2>Ayıplı Mal Durumunda Yapılacaklar</h2>
      <ul>
        <li>Ücretsiz onarım talep etme</li>
        <li>Ayıpsız mal ile değişim</li>
        <li>Bedel indirimi</li>
        <li>Sözleşmeden dönme</li>
      </ul>
      
      <h2>Başvuru Mercileri</h2>
      <p>Tüketici sorunları için başvuru yolları:</p>
      <ul>
        <li>Tüketici Hakem Heyetleri</li>
        <li>Tüketici Mahkemeleri</li>
        <li>Ticaret Bakanlığı</li>
        <li>Tüketici Birlikleri</li>
      </ul>
      
      <h2>Zamanaşımı Süreleri</h2>
      <p>Tüketici haklarının kullanılması için önemli süreler ve dikkat edilecek noktalar.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2025-03-01',
    readTime: '6 dk',
    category: 'Tüketici Hukuku',
    tags: ['tüketici hakları', 'ayıplı mal', 'şikayet']
  },
  11: {
    id: 11,
    title: 'KVKK ve Kişisel Verilerin Korunması: Haklarınızı Bilin',
    excerpt: 'Kişisel Verilerin Korunması Kanunu kapsamında sahip olduğunuz haklar ve ihlal durumunda yapılacaklar.',
    content: `
      <h2>KVKK Nedir?</h2>
      <p>Kişisel Verilerin Korunması Kanunu, kişisel verilerin işlenmesi ve korunması ile ilgili temel düzenlemelerdir.</p>
      
      <h2>Kişisel Veri Sahibinin Hakları</h2>
      <ul>
        <li>Bilgilendirilme hakkı</li>
        <li>Verilere erişim hakkı</li>
        <li>Düzeltme hakkı</li>
        <li>Silme hakkı</li>
        <li>İtiraz hakkı</li>
      </ul>
      
      <h2>Veri İhlali Durumunda Yapılacaklar</h2>
      <ol>
        <li>Veri sorumlusuna başvuru</li>
        <li>Kişisel Verileri Koruma Kuruluna şikayet</li>
        <li>Tazminat davası açma</li>
      </ol>
      
      <h2>Açık Rıza</h2>
      <p>Kişisel veri işleme için gerekli açık rıza şartları ve özellikleri.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2025-02-20',
    readTime: '8 dk',
    category: 'Kişiler Hukuku',
    tags: ['KVKK', 'kişisel veri', 'gizlilik']
  },
  12: {
    id: 12,
    title: 'Marka Tescili ve Fikri Mülkiyet Hakları',
    excerpt: 'Marka tescil süreci, fikri mülkiyet haklarının korunması ve ihlal durumlarında yapılacaklar.',
    content: `
      <h2>Marka Tescili Nedir?</h2>
      <p>Marka tescili, bir işaretin marka olarak hukuki koruma altına alınması sürecidir.</p>
      
      <h2>Tescil Süreci</h2>
      <ol>
        <li>Marka araştırması</li>
        <li>Başvuru dilekçesi hazırlanması</li>
        <li>Türk Patent ve Marka Kurumuna başvuru</li>
        <li>İnceleme süreci</li>
        <li>Yayın ve itiraz süreci</li>
        <li>Tescil belgesi alınması</li>
      </ol>
      
      <h2>Fikri Mülkiyet İhlalleri</h2>
      <p>Marka ve patent ihlalleri durumunda başvuru yolları:</p>
      <ul>
        <li>İhtarname gönderilmesi</li>
        <li>Hukuki dava açılması</li>
        <li>Cezai müeyyideler</li>
        <li>Tazminat talepleri</li>
      </ul>
      
      <h2>Koruma Süreleri</h2>
      <p>Marka ve patent koruma süreleri ile yenileme işlemleri.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2025-01-25',
    readTime: '7 dk',
    category: 'Fikri Mülkiyet',
    tags: ['marka tescili', 'patent', 'fikri mülkiyet']
  }
};

const relatedPosts = [
  { id: 7, title: 'Sigorta Tazminatı Nasıl Alınır?', category: 'Sigorta Hukuku' },
  { id: 8, title: 'İcra Takibi Başlatma', category: 'İcra İflas Hukuku' },
  { id: 9, title: 'Kira Artışı Davaları', category: 'Kira Hukuku' },
  { id: 10, title: 'Tüketici Hakları', category: 'Tüketici Hukuku' },
  { id: 11, title: 'KVKK ve Kişisel Verilerin Korunması', category: 'Kişiler Hukuku' },
  { id: 12, title: 'Marka Tescili ve Fikri Mülkiyet', category: 'Fikri Mülkiyet' }
];

export default function BlogDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const post = blogPosts[parseInt(id) as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Blog&apos;a Geri Dön
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Article Header */}
            <motion.header 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                  <Tag className="w-3 h-3 mr-1" />
                  {post.category}
                </span>
                <div className="flex items-center text-slate-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              {/* Meta Information */}
              <div className="flex items-center justify-between py-6 border-t border-b border-slate-200">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-slate-600">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('tr-TR')}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.header>

            {/* Article Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-slate-200"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 bg-slate-50 rounded-3xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Hukuki Desteğe İhtiyacınız mı Var?
              </h3>
              <p className="text-slate-600 mb-6">
                Bu konuda profesyonel hukuki danışmanlık almak için bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
                  >
                    Ücretsiz Danışmanlık
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="tel:+905071129898"
                    className="inline-flex items-center px-6 py-3 bg-white text-slate-700 font-semibold rounded-full hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    Hemen Ara
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Author Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-50 p-6 rounded-3xl"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Yazar Hakkında</h3>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4 flex items-center justify-center">
                  <User className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{post.author}</h4>
                  <p className="text-sm text-slate-600">Kurucu Avukat</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
               
              </p>
            </motion.div>

            {/* Related Posts */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white border border-slate-200 p-6 rounded-3xl"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-6">İlgili Yazılar</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="block p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <h4 className="font-medium text-slate-900 mb-2 leading-snug">
                      {relatedPost.title}
                    </h4>
                    <span className="text-sm text-slate-600">{relatedPost.category}</span>
                  </Link>
                ))}
              </div>
            </motion.div>


          </aside>
        </div>
      </div>
    </div>
  );
}