'use client';

import { motion } from 'framer-motion';

export default function HakkimizdaPage() {
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
            Hakkımızda
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Profesyonel hukuki danışmanlık ve güvenilir çözümler sunan, 
            İstanbul merkezli uzman hukuk bürosu.
          </p>
        </motion.div>

        {/* Hukuk Bürosu Tanıtımı */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-12 mb-24"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Akpınar Hukuk Bürosu
            </h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed text-center">
            <span className="font-semibold text-slate-800"> Akpınar Hukuk Bürosu, </span>  hukukun üstünlüğü ilkesini temel alarak, müvekkillerine kapsamlı, güvenilir ve çözüm odaklı hukuki hizmetler sunmaktadır.
             Kuruluşundan bu yana dürüstlük, şeffaflık ve profesyonellik değerlerinden ödün vermeden faaliyet gösteren büromuz,
             her müvekkilinin hukuki süreçlerini titizlikle ve etkin bir şekilde yürütmeyi hedefler.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed text-center mt-6">
            Bu doğrultuda, büromuz analitik yaklaşımı ve stratejik planlamayı modern çalışma yöntemleriyle bütünleştirerek; mevzuat değişikliklerini, yargı içtihatlarını ve teknolojik gelişmeleri yakından takip eder. 
            Böylece, her dosyaya özgü güncel ve yenilikçi çözümler sunarak, müvekkillerimizin hak ve menfaatlerini en etkin şekilde korumayı amaçlar.
              <span className="font-semibold text-slate-800">  </span>
              
            </p>
            
          
            <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Misyonumuz
            </h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto"></div>
            <p className="text-lg text-slate-700 leading-relaxed text-center">
            Hukukun evrensel ilkelerine bağlı kalarak, müvekkillerin hak ve menfaatlerini en yüksek düzeyde korumak; her aşamada etkin, şeffaf ve sonuç odaklı hukuki hizmet sunmak.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}