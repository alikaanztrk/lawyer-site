import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HelpCircle, Users, Scale, Briefcase, Home, Heart, FileText, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular | Av. Işıl Bengisu Akpınar',
  description: 'Hukuki süreçler hakkında aklınıza takılan soruları yanıtlıyoruz. Boşanma, ceza, iş hukuku ve daha fazlası hakkında bilgi alın.',
  keywords: ['sss', 'sıkça sorulan sorular', 'hukuki sorular', 'avukat sorular', 'boşanma soruları', 'ceza hukuku', 'iş hukuku'],
};

const faqCategories = [
  {
    id: 'bosanma-hukuku',
    title: 'Boşanma Hukuku',
    description: 'Boşanma süreci, nafaka, mal paylaşımı ve velayet konularında sorularınız',
    icon: Heart,
    color: 'bg-red-50 border-red-200 hover:bg-red-100',
    iconColor: 'text-red-600',
    questionsCount: '15+ Soru'
  },
  {
    id: 'ceza-hukuku', 
    title: 'Ceza Hukuku',
    description: 'Ceza davası süreci, savunma hakları ve cezai yaptırımlar hakkında',
    icon: Scale,
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600',
    questionsCount: '12+ Soru'
  },
  {
    id: 'is-hukuku',
    title: 'İş Hukuku', 
    description: 'İş sözleşmeleri, işten çıkarma, mobbing ve işçi hakları konularında',
    icon: Briefcase,
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
    iconColor: 'text-green-600',
    questionsCount: '18+ Soru'
  },
  {
    id: 'miras-hukuku',
    title: 'Miras Hukuku',
    description: 'Miras paylaşımı, vasiyetname ve saklı pay konularında sorularınız',
    icon: Users,
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100', 
    iconColor: 'text-purple-600',
    questionsCount: '10+ Soru'
  },
  {
    id: 'gayrimenkul-hukuku',
    title: 'Gayrimenkul Hukuku',
    description: 'Emlak alım-satım, kira sözleşmeleri ve tapu işlemleri hakkında',
    icon: Home,
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
    iconColor: 'text-orange-600', 
    questionsCount: '8+ Soru'
  },
  {
    id: 'ticaret-hukuku',
    title: 'Ticaret Hukuku',
    description: 'Şirket kuruluşu, ticari sözleşmeler ve ticari uyuşmazlıklar konularında',
    icon: FileText,
    color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
    iconColor: 'text-indigo-600',
    questionsCount: '14+ Soru'
  },
  {
    id: 'sigorta-hukuku',
    title: 'Sigorta Hukuku',
    description: 'Sigorta tazminatları, red durumları ve sigorta sözleşmeleri hakkında',
    icon: Shield,
    color: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
    iconColor: 'text-teal-600',
    questionsCount: '6+ Soru'
  },
  {
    id: 'icra-iflas',
    title: 'İcra İflas Hukuku', 
    description: 'Alacak tahsili, icra takibi ve iflas süreçleri konularında',
    icon: Scale,
    color: 'bg-gray-50 border-gray-200 hover:bg-gray-100',
    iconColor: 'text-gray-600',
    questionsCount: '9+ Soru'
  }
];

export default function SSSSayfasi() {
  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Aklınıza Takılan Sorular
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hukuki süreçler karmaşık görünebilir. Size en sık sorulan soruları kategorilere ayırdık. 
            Aradığınız cevabı bulamazsanız, <Link href="/iletisim" className="text-blue-600 hover:underline font-medium">
            bizimle iletişime geçebilirsiniz.</Link>
          </p>
        </motion.div>

        {/* SSS Kategorileri Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {faqCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 10
                }}
                className="transform-gpu"
                style={{ perspective: 1000 }}
              >
                <Link href={`/sss/${category.id}`}>
                  <div className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${category.color} hover:shadow-lg`}>
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 ${category.iconColor} bg-white/80`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {category.title}
                      </h3>
                      
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="inline-flex items-center text-xs font-medium text-slate-500 bg-white/60 px-3 py-1 rounded-full">
                        {category.questionsCount}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Hızlı Yardım Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Aradığınız Cevabı Bulamadınız mı?
          </h2>
          
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Her hukuki durum kendine özgüdür. Kişisel durumunuza özel danışmanlık için 
            bizimle iletişime geçin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors"
              >
                İletişime Geçin
              </motion.button>
            </Link>
            
            <Link href="/randevu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400 transition-colors border-2 border-blue-400"
              >
                Randevu Alın
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
