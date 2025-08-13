'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft, Home, MapPin, FileText, Key } from 'lucide-react';
import { FAQSchema } from '@/components/seo/StructuredData';

const faqData = [
  {
    question: "Tapu iptali davası ne zaman açılır?",
    answer: "Tapu iptali davası, tapunun hukuka aykırı olarak düzenlendiği durumlarda açılır. Sahte belge kullanımı, hileli işlemler, yetkisiz kişilerce yapılan satışlar gibi hallerde tapu iptal edilebilir. Dava, 10 yıllık zamanaşımı süresine tabidir."
  },
  {
    question: "Satış sözleşmesinde hangi bilgiler bulunmalıdır?",
    answer: "Gayrimenkul satış sözleşmesinde tarafların kimlik bilgileri, gayrimenkulün adresi ve özellikleri, satış bedeli, ödeme şekli, teslim tarihi, vergi ve harç yükümlülükleri açıkça belirtilmelidir. Noter huzurunda düzenlenmesi önerilir."
  },
  {
    question: "Kira sözleşmesi nasıl feshedilir?",
    answer: "Kira sözleşmesi, süresinin bitiminde, haklı nedenle veya bildirimli olarak feshedilebilir. Kiracı 1 ay, kiraya veren konut için 3 ay, işyeri için 6 ay önceden ihbar vermelidir. Haklı neden feshi için ağır kusur veya sözleşme ihlali gerekir."
  },
  {
    question: "Kira artışı nasıl uygulanır?",
    answer: "Kira artışı, konut kiralarında yıllık TÜFE oranını geçemez. İşyeri kiralarında ise taraflar serbestçe belirleyebilir. Artış oranı sözleşmede belirlenmemişse, TÜFE oranı uygulanır. Artış, kira yılının başından itibaren geçerlidir."
  },
  {
    question: "Kat mülkiyeti kurulumu nasıl yapılır?",
    answer: "Kat mülkiyeti, ana gayrimenkul sahibinin talebiyle tapu müdürlüğünde kurulur. Proje ve kat irtifakı planı, yapı kullanma izni, kat mülkiyeti krokisi gibi belgeler gereklidir. Kurulan kat mülkiyetinde her kat bağımsız gayrimenkul sayılır."
  },
  {
    question: "Tahliye davası süreci nasıl işler?",
    answer: "Tahliye davası, kiracının sözleşme süresinin bitiminde veya haklı nedenle gayrimenkuli terk etmemesi halinde açılır. Dava süreci 6 ay-1 yıl sürebilir. Mahkeme kararı ile kiracıya süre verilir, bu süre içinde çıkmazsa icra yoluyla tahliye edilir."
  },
  {
    question: "Gayrimenkul alım-satımında hangi vergiler ödenir?",
    answer: "Gayrimenkul alım-satımında KDV (%1-18), tapu harcı (%4), emlak vergisi (yıllık), çevre ve temizlik vergisi ödenir. Ayrıca satıcı için gelir vergisi veya KDV, alıcı için tapu işlem masrafları vardır. Değerler takdir komisyonu tarafından belirlenir."
  },
  {
    question: "İmar durumu nasıl öğrenilir?",
    answer: "İmar durumu, belediyenin imar müdürlüğünden imar durum belgesi alınarak öğrenilir. Bu belgede parselin imar planındaki durumu, yapı koşulları, kat sayısı sınırı gibi bilgiler yer alır. Gayrimenkul alım-satımından önce mutlaka kontrol edilmelidir."
  }
];

export default function GayrimenkulSSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FAQSchema 
        faqs={faqData}
        pageTitle="Gayrimenkul Hukuku Sıkça Sorulan Sorular"
        category="Gayrimenkul Hukuku"
      />
      
      <div className="py-24 bg-gradient-to-br from-orange-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/sikca-sorulan-sorular"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tüm SSS Kategorileri
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-4 bg-orange-100 rounded-full mb-6">
              <Home className="w-8 h-8 text-orange-600" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Gayrimenkul Hukuku SSS
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Emlak alım-satımı, kira sözleşmeleri ve tapu işlemleri hakkında en sık sorulan 
              soruları yanıtladık. Gayrimenkul süreçleri hakkında bilgi alın.
            </p>
          </motion.div>

          {/* Hızlı İstatistikler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 text-center">
              <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">10 Yıl</div>
              <div className="text-sm text-slate-600">Tapu İptali Zamanaşımı</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 text-center">
              <FileText className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">%4</div>
              <div className="text-sm text-slate-600">Tapu Harç Oranı</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 text-center">
              <Key className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">TÜFE</div>
              <div className="text-sm text-slate-600">Kira Artış Oranı</div>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-orange-600" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-slate-700 leading-relaxed border-t border-orange-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Gayrimenkul İşlemlerinizde Uzman Desteği
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Emlak alım-satımı ve kira sözleşmeleri hukuki riskler içerebilir. Güvenli 
              işlemler için deneyimli gayrimenkul avukatımızdan destek alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Hemen Danışın
                </motion.button>
              </Link>
              <Link href="/randevu">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-50 transition-colors border border-slate-300"
                >
                  Randevu Alın
                </motion.button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
