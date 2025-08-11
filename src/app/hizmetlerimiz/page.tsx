'use client';

import Link from 'next/link';
import { Scale, User, Building, Briefcase, Home, Heart, Gavel, ArrowRight, CheckCircle, Shield, FileText, DollarSign, Stethoscope, Key, Users, Zap, Book, ShoppingCart, Settings } from 'lucide-react';
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

const services = [
  {
    id: 'sigorta-hukuku',
    title: 'Sigorta Hukuku',
    description: 'Sigorta sözleşmeleri, tazminat talepleri ve sigorta uyuşmazlıklarında uzman hizmet.',
    icon: 'shield',
    features: [
      'Sigorta tazminat davaları',
      'Kasko ve trafik sigortası',
      'Hayat sigortası işlemleri',
      'Sağlık sigortası uyuşmazlıkları'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'icra-iflas-hukuku',
    title: 'İcra ve İflas Hukuku',
    description: 'Alacak takibi, haciz işlemleri ve iflas süreçlerinde uzman hizmet.',
    icon: 'gavel',
    features: [
      'İcra takibi başlatma ve takip',
      'Haciz işlemlerine itiraz',
      'İflas davası açma',
      'Konkordato süreçleri'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'ceza-hukuku',
    title: 'Ceza Hukuku',
    description: 'Ceza davalarında müvekkillerimizin haklarını korumak ve adil yargılanma süreçlerini sağlamak.',
    icon: 'scales',
    features: [
      'Ceza soruşturmaları ve kovuşturmaları',
      'Ağır Ceza Mahkemesi davaları',
      'Asliye Ceza Mahkemesi davaları',
      'İnfaz hukuku ve denetimli serbestlik'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'is-hukuku',
    title: 'İş Hukuku',
    description: 'İşçi ve işveren arasındaki ilişkilerden doğan uyuşmazlıkların çözümü.',
    icon: 'briefcase',
    features: [
      'İşçi alacakları davaları',
      'İşe iade davaları',
      'İş kazası tazminat davaları',
      'İş sözleşmesi hazırlama'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'ticaret-hukuku',
    title: 'Ticaret Hukuku',
    description: 'Şirketler hukuku, ticari sözleşmeler ve ticari uyuşmazlıkların çözümü.',
    icon: 'building',
    features: [
      'Şirket kuruluşu ve ana sözleşme',
      'Ticari sözleşme hazırlama',
      'Haksız rekabet davaları',
      'Marka ve patent hukuku'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'miras-hukuku',
    title: 'Miras Hukuku',
    description: 'Miras davalarında ve miras paylaşımlarında profesyonel hukuki destek.',
    icon: 'fileText',
    features: [
      'Miras reddi işlemleri',
      'Mirasçılık belgesi',
      'Vasiyetname düzenleme',
      'Miras paylaşım davaları'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'saglik-hukuku',
    title: 'Sağlık Hukuku',
    description: 'Tıbbi malpraktis, hasta hakları ve sağlık hizmetleri hukukunda uzman çözümler.',
    icon: 'stethoscope',
    features: [
      'Tıbbi malpraktis davaları',
      'Hasta hakları ihlalleri',
      'Sağlık kuruluşu danışmanlığı',
      'Medikal rapor değerlendirme'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'gayrimenkul-hukuku',
    title: 'Gayrimenkul Hukuku',
    description: 'Gayrimenkul alım-satım, kiralama, tapu işlemleri ve imar hukuku.',
    icon: 'home',
    features: [
      'Tapu ve kadastro davaları',
      'Gayrimenkul sözleşmeleri',
      'Tahliye davaları',
      'İmar hukuku danışmanlığı'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'kira-hukuku',
    title: 'Kira Hukuku',
    description: 'Kira sözleşmeleri, tahliye işlemleri ve kiracı-ev sahibi uyuşmazlıkları.',
    icon: 'key',
    features: [
      'Kira sözleşmesi hazırlama',
      'Kira artışı davaları',
      'Tahliye davaları',
      'Kiracı hakları savunması'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'kisiler-hukuku',
    title: 'Kişiler Hukuku',
    description: 'Kişilik hakları, nüfus işlemleri ve kişisel verilerin korunması.',
    icon: 'user',
    features: [
      'Kişilik hakları davaları',
      'İsim değişikliği işlemleri',
      'KVKK uyumluluk danışmanlığı',
      'Kişisel veri ihlalleri'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'aile-hukuku',
    title: 'Aile Hukuku',
    description: 'Boşanma, nafaka, velayet ve aile içi hukuki süreçlerde profesyonel destek.',
    icon: 'heart',
    features: [
      'Boşanma davaları',
      'Nafaka davaları',
      'Velayet ve görüşme hakkı',
      'Mal rejimi tasfiyesi'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'esya-hukuku',
    title: 'Eşya Hukuku',
    description: 'Taşınır ve taşınmaz mal varlığı hakları konusunda uzman hukuki destek.',
    icon: 'zap',
    features: [
      'Mülkiyet hakları davaları',
      'İrtifak hakkı tesisi',
      'Rehin ve ipotekler',
      'Zilyetlik korunması'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'borclar-hukuku',
    title: 'Borçlar Hukuku',
    description: 'Sözleşme hukuku, tazminat davaları ve borç-alacak ilişkileri.',
    icon: 'dollarSign',
    features: [
      'Sözleşme ihlali davaları',
      'Tazminat talepleri',
      'Alacak takibi',
      'Sözleşme hazırlama'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'tuketici-hukuku',
    title: 'Tüketici Hukuku',
    description: 'Tüketici hakları, ayıplı mal ve hizmet uyuşmazlıklarında uzman çözümler.',
    icon: 'shoppingCart',
    features: [
      'Ayıplı mal/hizmet davaları',
      'Tüketici mahkemesi süreçleri',
      'Kredi kartı uyuşmazlıkları',
      'Cayma hakkı işlemleri'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'idare-hukuku',
    title: 'İdare Hukuku',
    description: 'İdari işlemler, kamu yönetimi ve idari yargı süreçlerinde hukuki destek.',
    icon: 'settings',
    features: [
      'İdari dava açma',
      'İdari işlem iptali',
      'Kamu personel hukuku',
      'İmar planı itirazları'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'fikri-sinai-haklar',
    title: 'Fikri ve Sınai Haklar Hukuku',
    description: 'Marka, patent, telif hakları ve fikri mülkiyet korunması.',
    icon: 'book',
    features: [
      'Marka tescil işlemleri',
      'Patent başvuruları',
      'Telif hakları korunması',
      'Fikri mülkiyet ihlalleri'
    ],
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
];

export default function HizmetlerimizPage() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Hukuki Hizmetlerimiz
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Geniş uzmanlık alanlarımızda müvekkillerimize en kaliteli hukuki hizmetleri sunuyoruz. 
            Her alanda deneyimli ve uzman yaklaşımımızla yanınızdayız.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link
                  href={`/hizmetlerimiz/${service.id}`}
                  className="block bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200"
                >
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} ${service.hoverColor} transition-all duration-300 mb-6 group-hover:scale-110 group-hover:rotate-3`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-slate-700 font-medium group-hover:text-slate-900">
                      <span>Detaylı Bilgi</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>



        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center bg-slate-50 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Hukuki Durumunuz Hakkında Konuşalım
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Hangi alanda olursa olsun, hukuki sorununuza en uygun çözümü birlikte bulalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/iletisim"
                className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Randevu Al
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+902121234567"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-800 font-bold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200"
              >
                Hemen Ara: +90 212 123 45 67
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}