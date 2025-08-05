'use client';

import Link from 'next/link';
import { Scale, User, Building, Briefcase, Home, Heart, Gavel, ArrowRight } from 'lucide-react';
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
    description: 'Ceza davalarında uzman hukuki danışmanlık ve temsil hizmetleri',
    icon: 'scales' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'medeni-hukuk',
    title: 'Medeni Hukuk',
    description: 'Kişisel haklar, aile hukuku ve miras davalarında uzman hizmet',
    icon: 'user' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'ticaret-hukuku',
    title: 'Ticaret Hukuku',
    description: 'Şirket kuruluşu, ticari anlaşmazlıklar ve ticaret hukuku danışmanlığı',
    icon: 'building' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'is-hukuku',
    title: 'İş Hukuku',
    description: 'İşçi ve işveren hakları, iş kazaları ve istihdam hukuku',
    icon: 'briefcase' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'gayrimenkul-hukuku',
    title: 'Gayrimenkul Hukuku',
    description: 'Tapu işlemleri, emlak alım-satımı ve gayrimenkul anlaşmazlıkları',
    icon: 'home' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'aile-hukuku',
    title: 'Aile Hukuku',
    description: 'Boşanma, velayet, nafaka ve aile içi anlaşmazlıklar',
    icon: 'heart' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Hukuki Hizmetlerimiz
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Geniş uzmanlık alanlarımızda, müvekkillerimize en kaliteli hukuki hizmetleri sunuyoruz. 
            Her alanda deneyimli ve uzman yaklaşımımızla yanınızdayız.
          </p>
        </motion.div>

        {/* Hizmetler Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link
                  href={`/hizmetlerimiz/${service.id}`}
                  className="block bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200"
                >
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} ${service.hoverColor} transition-all duration-300 mb-6 group-hover:scale-110 group-hover:rotate-3`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
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

        {/* İcra İflas Hukuku - Özel Kart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white mb-16"
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
                <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-3"></span>İcra takibi başlatma ve takip</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-3"></span>Haciz işlemlerine itiraz</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-3"></span>İflas davası açma</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-3"></span>Konkordato süreçleri</li>
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

        {/* Alt Bilgi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-600 mb-8 text-lg">
            Listelenen alanlar dışında bir hukuki sorununuz mu var?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Bizimle İletişime Geçin
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}