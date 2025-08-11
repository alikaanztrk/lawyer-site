'use client';

import Link from 'next/link';
import { Scale, User, Building, Briefcase, Home, Heart, Gavel, ArrowRight, Shield, FileText, DollarSign, Calculator, Users, Stethoscope, Car, Brain, Landmark, CreditCard } from 'lucide-react';
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
  filetext: FileText,
  dollarsign: DollarSign,
  calculator: Calculator,
  users: Users,
  stethoscope: Stethoscope,
  car: Car,
  brain: Brain,
  landmark: Landmark,
  creditcard: CreditCard,
};

const services = [
  {
    id: 'sigorta-hukuku',
    title: 'Sigorta Hukuku',
    description: 'Sigorta sözleşmeleri, hasar ve tazminat davalarında uzman hizmet',
    icon: 'shield' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'ceza-hukuku',
    title: 'Ceza Hukuku',
    description: 'Ceza davalarında uzman hukuki danışmanlık ve temsil hizmetleri',
    icon: 'scales' as keyof typeof iconMap,
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
    id: 'icra-iflas-hukuku',
    title: 'İcra ve İflas Hukuku',
    description: 'Alacak takibi, haciz işlemleri ve iflas süreçlerinde uzman hizmet',
    icon: 'gavel' as keyof typeof iconMap,
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
    id: 'miras-hukuku',
    title: 'Miras Hukuku',
    description: 'Miras davaları, vasiyet işlemleri ve miras paylaşımı',
    icon: 'filetext' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'saglik-hukuku',
    title: 'Sağlık Hukuku',
    description: 'Tıbbi malpraktis, hasta hakları ve sağlık hizmetleri hukuku',
    icon: 'stethoscope' as keyof typeof iconMap,
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
    id: 'kira-hukuku',
    title: 'Kira Hukuku',
    description: 'Kira sözleşmeleri, tahliye davaları ve kira artışı anlaşmazlıkları',
    icon: 'car' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'kisiler-hukuku',
    title: 'Kişiler Hukuku',
    description: 'Kişilik hakları, nüfus işlemleri ve kişi varlığının korunması',
    icon: 'user' as keyof typeof iconMap,
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
  {
    id: 'esya-hukuku',
    title: 'Eşya Hukuku',
    description: 'Mülkiyet hakları, taşınır ve taşınmaz mal hakları',
    icon: 'dollarsign' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'borclar-hukuku',
    title: 'Borçlar Hukuku',
    description: 'Sözleşme hukuku, sorumluluk hukuku ve borç ilişkileri',
    icon: 'calculator' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'tuketici-hukuku',
    title: 'Tüketici Hukuku',
    description: 'Tüketici hakları, ayıplı mal ve tüketici mahkemesi davaları',
    icon: 'creditcard' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'idare-hukuku',
    title: 'İdare Hukuku',
    description: 'İdari davalar, kamu hizmetleri ve idari işlemler',
    icon: 'landmark' as keyof typeof iconMap,
    color: 'bg-slate-600',
    hoverColor: 'hover:bg-slate-700',
  },
  {
    id: 'fikri-sinai-haklar',
    title: 'Fikri ve Sınai Haklar Hukuku',
    description: 'Patent, marka, telif hakları ve fikri mülkiyet koruması',
    icon: 'brain' as keyof typeof iconMap,
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link
                  href={`/hizmetlerimiz/${service.id}`}
                  className="block bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200"
                >
                  <div className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.color} ${service.hoverColor} transition-all duration-300 mb-4 group-hover:scale-110 group-hover:rotate-3`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-slate-700 font-medium group-hover:text-slate-900 text-sm">
                      <span>Detaylı Bilgi</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

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