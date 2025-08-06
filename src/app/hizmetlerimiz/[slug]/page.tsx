'use client';

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Phone, Mail, Calendar, Scale, User, Building, Briefcase, Home, Heart, Gavel, Shield, FileText, DollarSign, Stethoscope, Key, Users, Zap, Book, ShoppingCart, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  scales: Scale,
  user: User,
  building: Building,
  briefcase: Briefcase,
  home: Home,
  heart: Heart,
  gavel: Gavel,
  shield: Shield,
  fileText: FileText,
  dollarSign: DollarSign,
  stethoscope: Stethoscope,
  key: Key,
  users: Users,
  zap: Zap,
  book: Book,
  shoppingCart: ShoppingCart,
  settings: Settings,
};

const servicesData = {
  'sigorta-hukuku': {
    title: 'Sigorta Hukuku',
    icon: 'shield',
    description: 'Sigorta sözleşmeleri, tazminat talepleri ve sigorta uyuşmazlıklarında müvekkillerimize kapsamlı hukuki destek sunuyoruz.',
    color: 'bg-emerald-600',
    services: [
      'Sigorta tazminat davaları',
      'Kasko ve trafik sigortası uyuşmazlıkları',
      'Hayat sigortası işlemleri',
      'Sağlık sigortası ihtilafları',
      'Sigorta sözleşmesi inceleme',
      'Sigorta şirketi ile müzakere',
      'Ekspertiz raporu değerlendirme'
    ],
    process: [
      'Sigorta dosyasının incelenmesi',
      'Tazminat hakkının belirlenmesi',
      'Ekspertiz sürecinin takibi',
      'Sigorta şirketi ile görüşme',
      'Dava açma ve takip süreci'
    ],
    consultation: 'Sigorta tazminat haklarınızın korunması için uzman desteği alın.'
  },
  'ceza-hukuku': {
    title: 'Ceza Hukuku',
    icon: 'scales',
    description: 'Ceza davalarında müvekkillerimizin haklarını korumak ve adil yargılanma süreçlerini sağlamak için kapsamlı hukuki destek sunuyoruz.',
    color: 'bg-red-600',
    services: [
      'Ceza soruşturmaları ve kovuşturmaları',
      'Ağır Ceza Mahkemesi davaları',
      'Asliye Ceza Mahkemesi davaları',
      'İnfaz hukuku ve denetimli serbestlik',
      'Suç duyurusu ve şikayet dilekçesi hazırlanması',
      'Beraat ve ceza indirimi talepleri',
      'Temyiz başvuruları'
    ],
    process: [
      'İlk görüşme ve dosya değerlendirmesi',
      'Savunma stratejisi belirleme',
      'Delil toplama ve inceleme',
      'Mahkeme sürecinde temsil',
      'Karar sonrası işlemler'
    ],
    consultation: 'Ceza hukuku alanında karşılaştığınız her türlü sorun için deneyimli ekibimizle iletişime geçebilirsiniz.'
  },
  'medeni-hukuk': {
    title: 'Medeni Hukuk',
    icon: 'user',
    description: 'Kişiler hukuku, aile hukuku, miras hukuku ve eşya hukuku gibi medeni hukukun geniş yelpazesinde hukuki danışmanlık ve dava takibi hizmetleri sunuyoruz.',
    color: 'bg-blue-600',
    services: [
      'Tapu iptali ve tescil davaları',
      'Mirasçılık belgesi ve mirasın reddi',
      'Vasiyetname düzenlenmesi',
      'Tazminat davaları',
      'Sözleşmeler hukuku',
      'Kişilik hakları ihlali davaları',
      'Ecrimisil davaları'
    ],
    process: [
      'Hukuki durumun analizi',
      'Gerekli belgelerin toplanması',
      'Dava stratejisinin belirlenmesi',
      'Mahkeme süreci takibi',
      'İcra ve sonuç takibi'
    ],
    consultation: 'Medeni hukuk alanındaki tüm sorularınız için uzman hukuki danışmanlık alabilirsiniz.'
  },
  'ticaret-hukuku': {
    title: 'Ticaret Hukuku',
    icon: 'building',
    description: 'Şirketler hukuku, ticari sözleşmeler, haksız rekabet davaları ve ticari uyuşmazlıkların çözümünde şirketlere ve bireylere hukuki destek sağlıyoruz.',
    color: 'bg-purple-600',
    services: [
      'Şirket kuruluşu ve ana sözleşme hazırlanması',
      'Ticari sözleşmelerin hazırlanması ve incelenmesi',
      'Haksız rekabet davaları',
      'Marka ve patent hukuku',
      'Ticari alacakların tahsili',
      'Şirket birleşme ve devir işlemleri',
      'Ticaret hukuku danışmanlığı'
    ],
    process: [
      'İş gereksinimlerinin analizi',
      'Hukuki çerçevenin belirlenmesi',
      'Sözleşme ve belge hazırlığı',
      'Onay ve tescil işlemleri',
      'Devam eden hukuki destek'
    ],
    consultation: 'Ticari faaliyetlerinizde karşılaştığınız hukuki konularda profesyonel destek alın.'
  },
  'is-hukuku': {
    title: 'İş Hukuku',
    icon: 'briefcase',
    description: 'İşçi ve işveren arasındaki ilişkilerden doğan uyuşmazlıkların çözümünde, iş sözleşmelerinin hazırlanmasında ve iş hukuku davalarında profesyonel hizmet sunuyoruz.',
    color: 'bg-green-600',
    services: [
      'İşçi alacakları davaları (kıdem, ihbar, fazla mesai)',
      'İşe iade davaları',
      'İş kazası ve meslek hastalığı davaları',
      'Sendika hukuku',
      'İş sözleşmelerinin hazırlanması',
      'İş yerinde mobbing davaları',
      'İşten çıkış süreçleri'
    ],
    process: [
      'İş ilişkisinin değerlendirilmesi',
      'Hak ve yükümlülüklerin belirlenmesi',
      'Dava açma gerekliliklerinin incelenmesi',
      'Mahkeme süreci yönetimi',
      'Alacakların tahsil edilmesi'
    ],
    consultation: 'İş hayatında karşılaştığınız sorunlar için deneyimli iş hukuku uzmanlarımızdan destek alın.'
  },
  'gayrimenkul-hukuku': {
    title: 'Gayrimenkul Hukuku',
    icon: 'home',
    description: 'Gayrimenkul alım-satım, kiralama, tapu işlemleri, imar hukuku ve kentsel dönüşüm gibi konularda hukuki danışmanlık ve dava takibi hizmetleri veriyoruz.',
    color: 'bg-orange-600',
    services: [
      'Tapu ve kadastro davaları',
      'İpotek ve rehin işlemleri',
      'Kira sözleşmeleri ve tahliye davaları',
      'Ortaklığın giderilmesi davaları',
      'İmar hukuku ve ruhsatlandırma',
      'Kentsel dönüşüm süreçleri',
      'Gayrimenkul değerleme davaları'
    ],
    process: [
      'Tapu ve kadastro durumunun incelenmesi',
      'Hukuki risklerin belirlenmesi',
      'Sözleşme hazırlama ve inceleme',
      'Resmi işlemlerin takibi',
      'Mülkiyet haklarının korunması'
    ],
    consultation: 'Gayrimenkul yatırımlarınızda ve işlemlerinizde hukuki güvence için bizimle iletişime geçin.'
  },
  'aile-hukuku': {
    title: 'Aile Hukuku',
    icon: 'heart',
    description: 'Boşanma davaları, nafaka, velayet, mal paylaşımı ve aile içi şiddet gibi hassas konularda müvekkillerimize duyarlı ve etkili hukuki destek sağlıyoruz.',
    color: 'bg-pink-600',
    services: [
      'Anlaşmalı ve çekişmeli boşanma davaları',
      'Nafaka ve tazminat davaları',
      'Velayet ve kişisel ilişki kurulması',
      'Mal rejimi tasfiyesi davaları',
      'Evlat edinme ve soybağı davaları',
      'Aile içi şiddet koruma talepleri',
      'Nişan ve evlilik sözleşmeleri'
    ],
    process: [
      'Aile durumunun değerlendirilmesi',
      'Çocukların menfaatlerinin korunması',
      'Anlaşmalı çözüm arayışları',
      'Dava sürecinin yönetimi',
      'Karar sonrası takip işlemleri'
    ],
    consultation: 'Aile hukuku konularında hassas ve profesyonel yaklaşımla yanınızdayız.'
  },
  'miras-hukuku': {
    title: 'Miras Hukuku',
    icon: 'fileText',
    description: 'Miras davalarında ve miras paylaşımlarında müvekkillerimize kapsamlı hukuki destek sağlıyoruz.',
    color: 'bg-amber-600',
    services: [
      'Miras reddi işlemleri',
      'Mirasçılık belgesi alınması',
      'Vasiyetname düzenleme ve iptali',
      'Miras paylaşım davaları',
      'Saklı pay davaları',
      'Mirastan mal kaçırma davaları',
      'Veraset ilam davaları'
    ],
    process: [
      'Miras durumunun tespiti',
      'Mirasçıların belirlenmesi',
      'Miras mallarının enventerin çıkarılması',
      'Hukuki işlemlerin gerçekleştirilmesi',
      'Paylaşım ve teslim süreçleri'
    ],
    consultation: 'Miras haklarınızın korunması ve paylaşım süreçlerinde uzman desteği alın.'
  },
  'saglik-hukuku': {
    title: 'Sağlık Hukuku',
    icon: 'stethoscope',
    description: 'Tıbbi malpraktis, hasta hakları ve sağlık hizmetleri hukukunda uzman çözümler sunuyoruz.',
    color: 'bg-teal-600',
    services: [
      'Tıbbi malpraktis davaları',
      'Hasta hakları ihlalleri',
      'Sağlık kuruluşu hukuki danışmanlığı',
      'Medikal rapor değerlendirme',
      'Hekim sorumluluk davaları',
      'Sağlık sigortası uyuşmazlıkları',
      'Rıza belgesi ve aydınlatma sorunları'
    ],
    process: [
      'Tıbbi olayın değerlendirilmesi',
      'Uzman hekim görüşü alınması',
      'Malpraktis tespiti ve delil toplama',
      'Tazminat tutarının hesaplanması',
      'Dava açma ve takip süreci'
    ],
    consultation: 'Sağlık hizmetleri ile ilgili yaşadığınız mağduriyetlerde hukuki destek alın.'
  },
  'kira-hukuku': {
    title: 'Kira Hukuku',
    icon: 'key',
    description: 'Kira sözleşmeleri, tahliye işlemleri ve kiracı-ev sahibi uyuşmazlıklarında uzman hizmet veriyoruz.',
    color: 'bg-indigo-600',
    services: [
      'Kira sözleşmesi hazırlama ve inceleme',
      'Kira artışı davaları',
      'Tahliye davaları',
      'Kiracı hakları savunması',
      'Ecrimisil davaları',
      'Kira güvencesi işlemleri',
      'Kiralık tapu harç problemi'
    ],
    process: [
      'Kira durumunun analizi',
      'Sözleşme şartlarının incelenmesi',
      'Hak ve yükümlülüklerin belirlenmesi',
      'Dava stratejisinin oluşturulması',
      'Mahkeme sürecinin takibi'
    ],
    consultation: 'Kira ile ilgili tüm hukuki sorunlarınızda deneyimli ekibimizden destek alın.'
  },
  'kisiler-hukuku': {
    title: 'Kişiler Hukuku',
    icon: 'user',
    description: 'Kişilik hakları, nüfus işlemleri ve kişisel verilerin korunması konularında hukuki destek sunuyoruz.',
    color: 'bg-blue-600',
    services: [
      'Kişilik hakları ihlali davaları',
      'İsim ve soyadı değişikliği',
      'KVKK uyumluluk danışmanlığı',
      'Kişisel veri ihlalleri',
      'Manevi tazminat davaları',
      'Nüfus kayıt düzeltme',
      'Cinsiyet değişikliği işlemleri'
    ],
    process: [
      'Kişilik hakkı ihlalinin tespiti',
      'Hukuki gerekçelerin hazırlanması',
      'Gerekli belgelerin toplanması',
      'Dava açma ve takip süreçleri',
      'Tazminat ve düzeltme talepleri'
    ],
    consultation: 'Kişilik haklarınızın korunması için uzman hukuki danışmanlık alın.'
  },
  'esya-hukuku': {
    title: 'Eşya Hukuku',
    icon: 'zap',
    description: 'Taşınır ve taşınmaz mal varlığı hakları konusunda uzman hukuki destek sağlıyoruz.',
    color: 'bg-yellow-600',
    services: [
      'Mülkiyet hakları davaları',
      'İrtifak hakkı tesisi ve iptali',
      'Rehin ve ipotek işlemleri',
      'Zilyetlik korunması davaları',
      'Taşınmaz malın aynı tesisi',
      'Sınır tespit davaları',
      'Müşterek mülkiyet paylaşımı'
    ],
    process: [
      'Mülkiyet durumunun tespiti',
      'Tapu ve kadastro incelemesi',
      'Hukuki durumun analizi',
      'Dava stratejisinin belirlenmesi',
      'İcra ve sonuç takibi'
    ],
    consultation: 'Mülkiyet haklarınızın korunması için profesyonel hukuki destek alın.'
  },
  'borclar-hukuku': {
    title: 'Borçlar Hukuku',
    icon: 'dollarSign',
    description: 'Sözleşme hukuku, tazminat davaları ve borç-alacak ilişkilerinde uzman çözümler sunuyoruz.',
    color: 'bg-rose-600',
    services: [
      'Sözleşme ihlali davaları',
      'Tazminat talepleri',
      'Alacak takibi ve tahsili',
      'Sözleşme hazırlama ve inceleme',
      'Vekalet sözleşmeleri',
      'Sebepsiz zenginleşme davaları',
      'Haksız fiil davaları'
    ],
    process: [
      'Sözleşme şartlarının incelenmesi',
      'İhlal durumunun tespiti',
      'Zarar hesaplaması',
      'Müzakere ve sulh arayışları',
      'Dava açma ve takip süreci'
    ],
    consultation: 'Sözleşme ve borç-alacak ilişkilerinizde hukuki güvence için bizimle iletişime geçin.'
  },
  'tuketici-hukuku': {
    title: 'Tüketici Hukuku',
    icon: 'shoppingCart',
    description: 'Tüketici hakları, ayıplı mal ve hizmet uyuşmazlıklarında uzman çözümler sağlıyoruz.',
    color: 'bg-cyan-600',
    services: [
      'Ayıplı mal ve hizmet davaları',
      'Tüketici mahkemesi süreçleri',
      'Kredi kartı uyuşmazlıkları',
      'Cayma hakkı işlemleri',
      'Tüketici kredisi sorunları',
      'Garanti ve servis problemleri',
      'Online alışveriş sorunları'
    ],
    process: [
      'Tüketici hakkının değerlendirilmesi',
      'Delil ve belgelerin toplanması',
      'Tüketici hakem heyeti başvurusu',
      'Mahkeme sürecinin takibi',
      'Tazminat ve iade işlemleri'
    ],
    consultation: 'Tüketici haklarınızın korunması için uzman hukuki destek alın.'
  },
  'idare-hukuku': {
    title: 'İdare Hukuku',
    icon: 'settings',
    description: 'İdari işlemler, kamu yönetimi ve idari yargı süreçlerinde hukuki destek sunuyoruz.',
    color: 'bg-slate-600',
    services: [
      'İdari dava açma',
      'İdari işlem iptali',
      'Kamu personel hukuku',
      'İmar planı itirazları',
      'İdari para cezalarına itiraz',
      'Kamu ihalesi uyuşmazlıkları',
      'Disiplin cezalarına itiraz'
    ],
    process: [
      'İdari işlemin hukuka uygunluğunun incelenmesi',
      'Dava açma süresinin belirlenmesi',
      'İdari yargıya başvuru',
      'Duruşma sürecinin takibi',
      'Kararın icra edilmesi'
    ],
    consultation: 'İdari işlemler konusunda hukuki haklarınızı öğrenin ve koruyun.'
  },
  'fikri-sinai-haklar': {
    title: 'Fikri ve Sınai Haklar Hukuku',
    icon: 'book',
    description: 'Marka, patent, telif hakları ve fikri mülkiyet korunması konularında uzman hizmet veriyoruz.',
    color: 'bg-violet-600',
    services: [
      'Marka tescil işlemleri',
      'Patent başvuruları',
      'Telif hakları korunması',
      'Fikri mülkiyet ihlalleri',
      'Domain adı uyuşmazlıkları',
      'Lisans sözleşmeleri',
      'Haksız rekabet davaları'
    ],
    process: [
      'Fikri mülkiyet araştırması',
      'Tescil başvurusu hazırlığı',
      'Patent ve Marka Kurumu işlemleri',
      'İhlal durumlarının tespiti',
      'Hukuki koruma sağlanması'
    ],
    consultation: 'Fikri mülkiyet haklarınızın korunması için uzman desteği alın.'
  },
  'icra-iflas-hukuku': {
    title: 'İcra İflas Hukuku',
    icon: 'gavel',
    description: 'Alacakların tahsili, icra takipleri, haciz işlemleri ve iflas süreçlerinde müvekkillerimize hızlı ve etkin çözümler sunuyoruz.',
    color: 'bg-slate-600',
    services: [
      'İcra takibi başlatma ve takip',
      'Haciz işlemleri ve satış',
      'İtirazın iptali ve kaldırılması davaları',
      'İflas ve konkordato süreçleri',
      'Menfi tespit ve istirdat davaları',
      'Alacak-verecek hesap davaları',
      'İcra inkar tazminatı davaları'
    ],
    process: [
      'Alacağın ve borçlunun tespiti',
      'İcra takibi başlatılması',
      'Haciz ve satış işlemlerinin takibi',
      'İtirazların değerlendirilmesi',
      'Alacağın tahsil edilmesi'
    ],
    consultation: 'Alacaklarınızın tahsili konusunda etkili ve hızlı çözümler için bizimle iletişime geçin.'
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug as keyof typeof servicesData];
  
  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

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
            href="/hizmetlerimiz"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Hizmetlere Geri Dön
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${service.color} mb-6`}>
            <IconComponent className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            {service.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Sunduğumuz Hizmetler
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.services.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Çalışma Sürecimiz
              </h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all"
                  >
                    <div className={`flex items-center justify-center w-8 h-8 ${service.color} text-white rounded-full mr-4 mt-1 text-sm font-bold`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-slate-700 leading-relaxed">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-slate-900 text-white p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6">
                Hemen Danışmanlık Alın
              </h3>
              <p className="text-slate-300 mb-8">
                {service.consultation}
              </p>
              <div className="space-y-4">
                <motion.a
                  href="tel:+902121234567"
                  className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Hemen Arayın</div>
                    <div className="text-sm text-slate-300">+90 212 123 45 67</div>
                  </div>
                </motion.a>
                <motion.a
                  href="mailto:info@av.tr"
                  className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">E-posta Gönderin</div>
                    <div className="text-sm text-slate-300">info@av.tr</div>
                  </div>
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/iletisim"
                    className="flex items-center justify-center p-4 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-colors font-medium"
                  >
                    <Calendar className="w-5 h-5 mr-3" />
                    Randevu Talep Et
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Other Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-slate-50 p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Diğer Hizmetlerimiz
              </h3>
              <div className="space-y-3">
                {Object.entries(servicesData)
                  .filter(([slug]) => slug !== params.slug)
                  .slice(0, 6)
                  .map(([slug, data]) => (
                    <Link
                      key={slug}
                      href={`/hizmetlerimiz/${slug}`}
                      className="block text-slate-600 hover:text-slate-900 transition-colors py-2 border-b border-slate-200 last:border-0"
                    >
                      {data.title}
                    </Link>
                  ))}
              </div>
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium mt-4"
              >
                Tüm Hizmetleri Gör
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}