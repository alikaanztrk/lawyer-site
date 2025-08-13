'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft, Users, Percent, FileText, Crown } from 'lucide-react';
import { FAQSchema } from '@/components/seo/StructuredData';

const faqData = [
  {
    question: "Saklı pay nedir ve kimler saklı paylıdır?",
    answer: "Saklı pay, kanunun belirli mirasçılara ayırdığı, mirasbırakının tasarruf edemeyeceği miras payıdır. Saklı paylılar; altsoy (çocuklar, torunlar), üstsoy (anne-baba) ve eştir. Altsoyun saklı payı miras payının yarısı, eşin saklı payı ise miras payının dörtte biridir."
  },
  {
    question: "Vasiyetname nasıl yazılır?",
    answer: "Vasiyetname, mirasbırakının son iradelerini bildirdiği belgedir. El yazısı, resmi veya sözlü vasiyetname olmak üzere üç türü vardır. El yazısı vasiyetname en başından sonuna kadar mirasbırakının kendi eliyle yazılmalı, tarih atılmalı ve imzalanmalıdır."
  },
  {
    question: "Miras payları nasıl hesaplanır?",
    answer: "Miras payları yakınlık derecesine göre belirlenir. Eş ve çocuklar varsa eş 1/4, çocuklar 3/4 alır. Sadece eş varsa eş 1/2 alır. Çocuk yoksa eş ve anne-baba varsa eş 1/2, anne-baba 1/2 alır. Her durumda saklı pay kuralları geçerlidir."
  },
  {
    question: "Miras reddi nasıl yapılır?",
    answer: "Miras reddi, mirasçının mirası kabul etmek istememesi halinde yapılan işlemdir. Mirasbırakının ölümünü öğrendiği tarihten itibaren 3 ay içinde mahkemeye veya nüfus müdürlüğüne başvurarak red beyanında bulunmalıdır. Red, geçmişe etkili olup, mirasçı hiç mirasçı olmamış gibi kabul edilir."
  },
  {
    question: "Mirasın tenkisi ne demektir?",
    answer: "Mirasın tenkisi, mirasbırakının yaptığı kazandırmaların saklı payı ihlal etmesi halinde bu kazandırmaların azaltılmasıdır. Saklı paylı mirasçılar, saklı paylarını tamamlamak için tenkis davası açabilirler. Tenkis, önce vasiyetlerden, sonra sağlararası kazandırmalardan yapılır."
  },
  {
    question: "Mirastan mahrum bırakma nasıl olur?",
    answer: "Mirastan mahrum bırakma, mirasçının ağır bir kusuru nedeniyle mirasçılık sıfatının elinden alınmasıdır. Mirasbırakına karşı suç işleme, şiddet uygulama, bakım yükümlülüğünü yerine getirmeme gibi nedenlerle yapılabilir. Vasiyetnamede açıkça belirtilmelidir."
  },
  {
    question: "Miras sözleşmesi nedir?",
    answer: "Miras sözleşmesi, mirasbırakan ile mirasçı arasında yapılan ve mirasbırakının ölümüyle birlikte hüküm ifade eden sözleşmedir. Noter huzurunda ve iki tanık önünde yapılmalıdır. Mirasbırakan tek taraflı olarak bozamaz, her iki tarafın anlaşması gerekir."
  },
  {
    question: "Mirasın paylaşımı nasıl yapılır?",
    answer: "Miras paylaşımı, mirasçıların anlaşmasıyla veya mahkeme kararıyla yapılır. Önce borçlar ödenir, sonra net miras mirasçılar arasında paylaştırılır. Taşınmazlar satılabileceği gibi, mirasçılardan birine verilip fark parası ödenebilir. Anlaşma olmazsa taksim davası açılır."
  },
  {
    question: "Evlilik birliği malları miras payına dahil midir?",
    answer: "Evlilik birliği malları önce eşler arasında paylaştırılır, sonra ölen eşin payı mirasçılarına geçer. Edinilmiş mallara katılma rejiminde, ölen eşin edinilmiş mallarının yarısı sağ kalan eşe verilir, diğer yarısı miras kütlesine dahil edilir."
  },
  {
    question: "Miras vergisi oranları nedir?",
    answer: "Miras vergisi, mirasçıların aldığı miras payı üzerinden hesaplanır. Eş ve çocuklar için %1-10, anne-baba için %8-20, kardeşler için %20-30, diğer mirasçılar için %30-40 oranında artan oranlı vergi uygulanır. Her mirasçı için belirli muafiyet tutarları vardır."
  }
];

export default function MirasSSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FAQSchema 
        faqs={faqData}
        pageTitle="Miras Hukuku Sıkça Sorulan Sorular"
        category="Miras Hukuku"
      />
      
      <div className="py-24 bg-gradient-to-br from-purple-50 to-white min-h-screen">
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
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
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
            <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Miras Hukuku SSS
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Miras paylaşımı, vasiyetname düzenleme ve saklı pay hakları hakkında en sık sorulan 
              soruları yanıtladık. Miras süreçleri hakkında bilgi alın.
            </p>
          </motion.div>

          {/* Hızlı İstatistikler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 text-center">
              <Percent className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">1/2</div>
              <div className="text-sm text-slate-600">Altsoyun Saklı Payı</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 text-center">
              <FileText className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">3 Ay</div>
              <div className="text-sm text-slate-600">Miras Red Süresi</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 text-center">
              <Crown className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">1/4</div>
              <div className="text-sm text-slate-600">Eşin Saklı Payı</div>
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
                  className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-purple-600" />
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
                        <div className="px-6 pb-6 pt-2 text-slate-700 leading-relaxed border-t border-purple-100">
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
              Miras Süreçlerinde Uzman Desteği
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Miras hukuku karmaşık prosedürler içerir. Haklarınızı korumak ve doğru süreçleri 
              takip etmek için deneyimli avukatımızdan destek alın.
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
