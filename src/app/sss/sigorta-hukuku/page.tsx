'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft, Shield, Umbrella, AlertTriangle, Clock } from 'lucide-react';
import { FAQSchema } from '@/components/seo/StructuredData';

const faqData = [
  {
    question: "Sigorta şirketi tazminat ödemeyi reddederse ne yapılır?",
    answer: "Sigorta şirketinin tazminat ödemeyi reddetmesi halinde önce red gerekçesi öğrenilmelidir. Gerekçe haksızsa, sigorta şirketine itiraz edilir. İtiraz sonucu olumsuzsa, sigortacılık tahkim komisyonuna başvuru yapılabilir veya mahkemede dava açılabilir. Dava açma süresi 2 yıldır."
  },
  {
    question: "Trafik sigortası ne zaman tazminat öder?",
    answer: "Trafik sigortası, motorlu araç kazalarında üçüncü şahıslara verilen zararları karşılar. Kaza trafik kazası niteliğinde olmalı ve zarar üçüncü şahıslara verilmiş olmalıdır. Araç sahibi, sürücü ve araçta bulunanlar üçüncü şahıs sayılmaz. Maddi ve manevi tazminat taleplerini kapsar."
  },
  {
    question: "Kasko sigortası hangi durumlarda ödemez?",
    answer: "Kasko sigortası, kasıtlı zarar verme, alkollü araç kullanma, ehliyetsiz sürücülük, trafik tescili olmayan araç kullanma, doğal afetler (ayrıca teminata alınmamışsa) durumlarında ödemez. Ayrıca sigorta primlerinin ödenmemesi halinde de teminat geçersizdir."
  },
  {
    question: "Hayat sigortasında intihar durumu nasıl değerlendirilir?",
    answer: "Hayat sigortasında intihar, poliçenin başlangıcından itibaren 2 yıl içinde gerçekleşirse tazminat ödenmez. 2 yıl sonraki intihar durumlarında ise tam tazminat ödenir. Ancak sigortalının başvuru sırasında intihar niyetini gizlemesi halinde bu süre aranmaz."
  },
  {
    question: "Sağlık sigortasında önceden var olan hastalıklar kapsamda mıdır?",
    answer: "Sağlık sigortasında önceden var olan hastalıklar genellikle kapsam dışıdır. Ancak sigortalının hastalığını beyan etmesi ve sigorta şirketinin kabul etmesi halinde teminat verilebilir. Hastalığın gizlenmesi halinde sözleşme geçersiz olur ve hiçbir tazminat ödenmez."
  },
  {
    question: "Yangın sigortasında eksper raporu neden önemlidir?",
    answer: "Eksper raporu, yangın sigortasında zarar miktarını tespit eden resmi belgedir. Sigorta şirketi bu rapora göre tazminat miktarını belirler. Eksper raporu objektif olmalı, zarar doğru tespit edilmelidir. Rapordaki tespitin yanlış olduğu düşünülürse bilirkişi incelemesi talep edilebilir."
  }
];

export default function SigortaSSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FAQSchema 
        faqs={faqData}
        pageTitle="Sigorta Hukuku Sıkça Sorulan Sorular"
        category="Sigorta Hukuku"
      />
      
      <div className="py-24 bg-gradient-to-br from-teal-50 to-white min-h-screen">
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
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
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
            <div className="inline-flex items-center justify-center p-4 bg-teal-100 rounded-full mb-6">
              <Shield className="w-8 h-8 text-teal-600" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Sigorta Hukuku SSS
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Sigorta tazminatları, poliçe şartları ve sigorta şirketi uyuşmazlıkları hakkında 
              en sık sorulan soruları yanıtladık. Sigorta haklarınız hakkında bilgi alın.
            </p>
          </motion.div>

          {/* Hızlı İstatistikler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100 text-center">
              <Umbrella className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">2 Yıl</div>
              <div className="text-sm text-slate-600">Tazminat Dava Süresi</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100 text-center">
              <AlertTriangle className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">30 Gün</div>
              <div className="text-sm text-slate-600">Hasar İhbar Süresi</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100 text-center">
              <Clock className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">30 Gün</div>
              <div className="text-sm text-slate-600">Tazminat Ödeme Süresi</div>
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
                  className="bg-white rounded-2xl shadow-sm border border-teal-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-teal-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-teal-600" />
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
                        <div className="px-6 pb-6 pt-2 text-slate-700 leading-relaxed border-t border-teal-100">
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
              Sigorta Tazminat Süreçlerinde Destek
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Sigorta şirketleri ile yaşanan uyuşmazlıklar karmaşık süreçler içerir. Haklarınızı 
              korumak için deneyimli sigorta hukuku avukatımızdan destek alın.
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
