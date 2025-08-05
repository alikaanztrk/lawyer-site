'use client';

import Link from 'next/link';
import { Scale, User, Building, Briefcase, Home, Heart, Gavel, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  scales: Scale,
  user: User,
  building: Building,
  briefcase: Briefcase,
  home: Home,
  heart: Heart,
  gavel: Gavel,
};

const services = [
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
    color: 'bg-red-600',
    hoverColor: 'hover:bg-red-700',
  },
  {
    id: 'medeni-hukuk',
    title: 'Medeni Hukuk',
    description: 'Kişiler hukuku, aile hukuku, miras hukuku ve eşya hukuku alanlarında uzman hizmet.',
    icon: 'user',
    features: [
      'Tapu iptali ve tescil davaları',
      'Mirasçılık belgesi işlemleri',
      'Vasiyetname düzenlenmesi',
      'Tazminat davaları'
    ],
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
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
    color: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
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
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
  },
  {
    id: 'gayrimenkul-hukuku',
    title: 'Gayrimenkul Hukuku',
    description: 'Gayrimenkul alım-satım, kiralama, tapu işlemleri ve imar hukuku.',
    icon: 'home',
    features: [
      'Tapu ve kadastro davaları',
      'Kira sözleşmeleri',
      'Tahliye davaları',
      'İmar hukuku danışmanlığı'
    ],
    color: 'bg-orange-600',
    hoverColor: 'hover:bg-orange-700',
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
    color: 'bg-pink-600',
    hoverColor: 'hover:bg-pink-700',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
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

        {/* İcra İflas - Special Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white mb-20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:flex-1 mb-8 lg:mb-0">
              <div className="flex items-center mb-6">
                <motion.div 
                  whileHover={{ rotate: 10 }}
                  className="bg-white/10 p-4 rounded-2xl mr-4 backdrop-blur-sm"
                >
                  <Gavel className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold">İcra İflas Hukuku</h3>
              </div>
              <p className="text-slate-200 text-lg mb-6 leading-relaxed">
                Alacak takibi, haciz işlemleri ve iflas süreçlerinde uzman hizmet. 
                Hızlı ve etkili çözümlerle alacaklarınızı tahsil edin.
              </p>
              <ul className="text-slate-200 space-y-3">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-green-400" />İcra takibi başlatma ve takip</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-green-400" />Haciz işlemlerine itiraz</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-green-400" />İflas davası açma</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-green-400" />Konkordato süreçleri</li>
              </ul>
            </div>
            <div className="lg:ml-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/hizmetlerimiz/icra-iflas-hukuku"
                  className="inline-flex items-center px-8 py-4 bg-white text-slate-800 font-bold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Detaylı Bilgi
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

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
                Ücretsiz Danışmanlık
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