'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft, Scale, Clock, Shield, Users } from 'lucide-react';
import { FAQSchema } from '@/components/seo/StructuredData';

const faqData = [
  {
    question: "Ceza davası süreci nasıl işler?",
    answer: "Ceza davası, soruşturma ve kovuşturma olmak üzere iki aşamadan oluşur. Soruşturma aşamasında Cumhuriyet Savcılığı delil toplar ve iddianame hazırlar. Kovuşturma aşamasında ise mahkeme yargılamayı yürütür. Bu süreçte sanığın müdafi hakkı, susma hakkı ve diğer savunma hakları vardır."
  },
  {
    question: "Gözaltı süresi ne kadar olabilir?",
    answer: "Gözaltı süresi normal suçlarda en fazla 24 saat, toplu suçlarda en fazla 4 gündür. Terör suçlarında ise bu süre 7 güne kadar uzayabilir. Bu süreler içinde kişi serbest bırakılmalı, tutuklanmalı veya adli kontrol kararı verilmelidir."
  },
  {
    question: "Beraat kararı ne demektir?",
    answer: "Beraat, sanığın suçsuzluğuna karar verilmesidir. Mahkeme, sanığın suçu işlemediğine, eylemin suç oluşturmadığına veya yeterli delil bulunmadığına kanaat getirdiğinde beraat kararı verir. Beraat kararı kesinleştikten sonra, aynı fiil için tekrar dava açılamaz."
  },
  {
    question: "Tutuklama şartları nelerdir?",
    answer: "Tutuklama kararı verilebilmesi için kuvvetli suç şüphesi, kaçma şüphesi, delilleri karartma şüphesi veya aynı suçu tekrar işleme tehlikesi bulunmalıdır. Ayrıca tutuklamanın ölçülü olması, yani başka tedbirlerle amaçlanılan sonuca ulaşılamaması gerekir."
  },
  {
    question: "Müdafi hakkı nedir?",
    answer: "Müdafi hakkı, sanığın kendini savunabilmek için avukat yardımı alma hakkıdır. Bu hak, soruşturmanın başından itibaren kullanılabilir. Ekonomik durumu müsait olmayan sanıklara baro tarafından avukat atanır. Müdafi, sanıkla görüşme, dosyayı inceleme ve duruşmalara katılma hakkına sahiptir."
  },
  {
    question: "Dava zamanaşımı ne kadar?",
    answer: "Dava zamanaşımı süresi, suçun ağırlığına göre değişir. Hafif cezayı gerektiren suçlarda 8 yıl, ağır cezayı gerektiren suçlarda 15-20 yıl, müebbet hapis cezasını gerektiren suçlarda 30 yıldır. Bazı suçlarda (soykırım gibi) zamanaşımı işlemez."
  },
  {
    question: "Hükmün açıklanmasının geri bırakılması nedir?",
    answer: "HAGB, sanık hakkında mahkumiyet kararı verilen ancak ceza infaz edilmeyen bir kurumdur. 2 yıla kadar hapis veya adli para cezası gerektiren suçlarda, sanığın daha önce kasıtlı suç işlememiş olması halinde uygulanabilir. Denetim süresi boyunca yeni suç işlenmezse, hüküm ortadan kalkar."
  },
  {
    question: "Uzlaştırma müessesesi nedir?",
    answer: "Uzlaştırma, mağdur ile sanığın aralarındaki uyuşmazlığı üçüncü bir kişinin (uzlaştırıcının) yardımıyla çözmeye çalıştıkları bir yöntemdir. Bazı suçlarda (kasten yaralama, mala zarar verme gibi) zorunlu, bazılarında ise isteğe bağlıdır. Uzlaştırma gerçekleşirse, dava düşer."
  },
  {
    question: "Ceza indirimi nasıl uygulanır?",
    answer: "Ceza indirimi sebepleri; etkin pişmanlık, iyi hal, yaş küçüklüğü, tahrik altında suç işleme gibi durumlardır. İndirim oranları, sebebe göre değişir. Örneğin etkin pişmanlıkta 1/3, iyi hal halinde 1/6 oranında indirim yapılabilir. Birden fazla indirim sebebi varsa, art arda uygulanır."
  },
  {
    question: "Mağdur hakları nelerdir?",
    answer: "Mağdur, şikayette bulunma, müdahil olma, vekil tayin etme, bilgilendirilme, korunma talep etme haklarına sahiptir. Ayrıca maddi ve manevi tazminat talep edebilir. Cinsel saldırı gibi özel hayatın gizliliğini ihlal eden suçlarda, kapalı duruşma talep edilebilir."
  },
  {
    question: "Temyiz süreci nasıl işler?",
    answer: "Temyiz, mahkeme kararlarının Yargıtay'da incelenmesi için yapılan başvurudur. Karar tebliğinden itibaren 7 gün içinde temyiz edilmelidir. Yargıtay, kararı hukuka uygunluk açısından inceler. Bozma kararı verirse, dosya aynı mahkemeye geri gönderilir."
  },
  {
    question: "Şartlı salıverilme şartları nelerdir?",
    answer: "Şartlı salıverilme için cezanın belirli bir kısmının çekilmiş olması gerekir. Bu oran, genellikle cezanın 2/3'üdür. Hükümlünün iyi halinin olması, topluma kazandırılma programlarına katılması ve mağdura tazminat ödemesi gibi şartlar da aranır."
  }
];

export default function CezaSSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FAQSchema 
        faqs={faqData}
        pageTitle="Ceza Hukuku Sıkça Sorulan Sorular"
        category="Ceza Hukuku"
      />
      
      <div className="py-24 bg-gradient-to-br from-blue-50 to-white min-h-screen">
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
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
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
            <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6">
              <Scale className="w-8 h-8 text-blue-600" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Ceza Hukuku SSS
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ceza davası süreçleri hakkında en sık sorulan soruları yanıtladık. Savunma haklarınız 
              ve yargısal süreçler hakkında bilgi alın.
            </p>
          </motion.div>

          {/* Hızlı İstatistikler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">24 Saat</div>
              <div className="text-sm text-slate-600">Maksimum Gözaltı Süresi</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">Müdafi Hakkı</div>
              <div className="text-sm text-slate-600">İlk Andan İtibaren</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">7 Gün</div>
              <div className="text-sm text-slate-600">Temyiz Süresi</div>
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
                  className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-blue-600" />
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
                        <div className="px-6 pb-6 pt-2 text-slate-700 leading-relaxed border-t border-blue-100">
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
              Ceza Davası Sürecinizde Destek Alın
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Her ceza davası farklı özellikler taşır. Savunma stratejinizi belirlemek ve 
              haklarınızı korumak için deneyimli ceza avukatımızdan destek alın.
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
