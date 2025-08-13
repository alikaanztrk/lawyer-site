'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft, Scale, Gavel, Timer, AlertCircle } from 'lucide-react';
import { FAQSchema } from '@/components/seo/StructuredData';

const faqData = [
  {
    question: "İcra takibi nasıl başlatılır?",
    answer: "İcra takibi, alacaklının borçlunun bulunduğu yer icra müdürlüğüne başvurarak başlatılır. Ödeme emri talep dilekçesi verilir, borç miktarı ve dayanak belge belirtilir. İcra müdürlüğü borçluya ödeme emri gönderir. Borçlu 7 gün içinde ödeme yapmazsa takip devam eder."
  },
  {
    question: "İcra takibine itiraz nasıl yapılır?",
    answer: "İcra takibine itiraz, ödeme emrinin tebliğinden itibaren 7 gün içinde yapılmalıdır. İtiraz dilekçesi icra müdürlüğüne verilir, gerekçe belirtilir. İtiraz üzerine takip durur. Alacaklı itirazın kaldırılması için mahkemeye başvurabilir veya icrayı bekletmeli takip yapabilir."
  },
  {
    question: "Haciz işlemi nasıl gerçekleşir?",
    answer: "Haciz, borçlunun mallarına el konulması işlemidir. İcra müdürü veya icra müdür yardımcısı haciz işlemini yapar. Önce para ve altın, sonra menkul mallar, en son gayrimenkul haciz edilir. Hacizde sıra cetveli tutulur, alacaklılar sıraya göre alacaklarını alır."
  },
  {
    question: "İflas davası ne zaman açılır?",
    answer: "İflas davası, borçlunun borcunu ödeyememesi halinde açılır. Tacir olan borçlu için 3 adet protesto çekmeyi, ödeme emrine rağmen ödeme yapmamayı, malvarlığını gizlemeyi gerektirir. Tacir olmayan borçlu için sadece borcunu ödeyememesi yeterlidir."
  },
  {
    question: "İcrada satış işlemi nasıl yapılır?",
    answer: "Haciz edilen mallar 30 gün sonra satışa çıkarılır. Önce açık arttırma yapılır, muhammen bedelin %50'sini bulan teklif yoksa 15 gün sonra ikinci arttırma yapılır. İkinci arttırmada da satış gerçekleşmezse mal alacaklıya muhammen bedelin %50'si karşılığında verilebilir."
  },
  {
    question: "İcra inkar davası nedir?",
    answer: "İcra inkar davası, icra takibine konu alacağın varlığını inkar eden borçlunun açtığı davadır. Borçlu, alacağın olmadığını, ödediğini veya zamanaşımına uğradığını iddia edebilir. Dava açılırsa icra takibi durur, mahkeme kararına göre takip devam eder veya son bulur."
  },
  {
    question: "Menfi tespit davası ne demektir?",
    answer: "Menfi tespit davası, borçlunun alacaklıya karşı 'borcum yoktur' diyerek açtığı davadır. İcra takibi başlatılmadan önce açılabilir. Dava devam ederken aynı alacak için icra takibi başlatılamaz. Mahkeme borcun varlığını tespit ederse, alacaklı icra takibi başlatabilir."
  },
  {
    question: "İcra harç ve masrafları kim öder?",
    answer: "İcra harç ve masrafları kural olarak borçlu tarafından ödenir. İcra harcı, alacak miktarının binde 19.2'sidir. Ayrıca tebligat, haciz, satış masrafları da borçluya aittir. Borçlu ödemezse alacaklı öder, bu masraflar da borçludan tahsil edilir."
  },
  {
    question: "İcra takibinde zamanaşımı nasıl uygulanır?",
    answer: "İcra takibinde zamanaşımı, alacağın türüne göre değişir. Genel alacaklar 10 yıl, ticari alacaklar 5 yıl, işçi alacakları 5 yıl, kira bedeli 5 yıldır. İcra takibi başlatılması zamanaşımını keser. Borçlu zamanaşımını def'i olarak ileri sürmelidir."
  }
];

export default function IcraIflasSSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FAQSchema 
        faqs={faqData}
        pageTitle="İcra İflas Hukuku Sıkça Sorulan Sorular"
        category="İcra İflas Hukuku"
      />
      
      <div className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen">
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
              className="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors"
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
            <div className="inline-flex items-center justify-center p-4 bg-gray-100 rounded-full mb-6">
              <Scale className="w-8 h-8 text-gray-600" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              İcra İflas Hukuku SSS
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Alacak tahsili, icra takibi ve iflas süreçleri hakkında en sık sorulan soruları 
              yanıtladık. İcra hukuku süreçleri hakkında bilgi alın.
            </p>
          </motion.div>

          {/* Hızlı İstatistikler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <Timer className="w-8 h-8 text-gray-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">7 Gün</div>
              <div className="text-sm text-slate-600">Ödeme Emri Süresi</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <Gavel className="w-8 h-8 text-gray-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">30 Gün</div>
              <div className="text-sm text-slate-600">Haciz Sonrası Satış</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <AlertCircle className="w-8 h-8 text-gray-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">10 Yıl</div>
              <div className="text-sm text-slate-600">Genel Zamanaşımı</div>
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
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-600" />
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
                        <div className="px-6 pb-6 pt-2 text-slate-700 leading-relaxed border-t border-gray-100">
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
              Alacak Tahsili Süreçlerinde Uzman Desteği
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              İcra ve iflas süreçleri teknik bilgi gerektirir. Alacağınızı güvenli şekilde 
              tahsil etmek için deneyimli icra hukuku avukatımızdan destek alın.
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
