'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft, FileText, Building2, TrendingUp, Handshake } from 'lucide-react';
import { FAQSchema } from '@/components/seo/StructuredData';

const faqData = [
  {
    question: "Limited şirket nasıl kurulur?",
    answer: "Limited şirket kurmak için en az 1 ortak ve minimum 10.000 TL sermaye gerekir. Ticaret sicili müdürlüğüne başvuru yapılır, şirket sözleşmesi noter huzurunda düzenlenir. Sermayenin en az %25'i kuruluşta ödenmelidir. Kuruluş sonrası vergi dairesi ve SGK'ya kayıt zorunludur."
  },
  {
    question: "Anonim şirket ve limited şirket arasındaki farklar nelerdir?",
    answer: "Anonim şirkette minimum sermaye 50.000 TL, limited şirkette 10.000 TL'dir. AS'de ortaklar hisse senedi, Ltd'de pay sahibidir. AS'de pay devri daha kolaydır. AS daha fazla formaliteye tabidir ve denetim kurulu zorunluluğu vardır. Her ikisi de ortakların sorumluluğunu sermaye ile sınırlar."
  },
  {
    question: "Ticari sözleşmelerde hangi hususlara dikkat edilmelidir?",
    answer: "Ticari sözleşmelerde tarafların unvan ve adres bilgileri, sözleşme konusu, bedel, ifa yeri ve zamanı, gecikme faizi, cezai şart hükümleri açık olmalıdır. Mücbir sebep, ifa güçlüğü, uyuşmazlık çözümü gibi özel durumlar düzenlenmelidir. Sözleşme öncesi kredi araştırması yapılmalıdır."
  },
  {
    question: "Şirket ortaklarının sorumlulukları nelerdir?",
    answer: "Limited ve anonim şirketlerde ortaklar sermaye taahhütleri ile sınırlı sorumludurlar. Ancak sermaye taahhüdünü ifa etmeme, şirket perdesinin kaldırılması, organları vasıtasıyla şirkete zarar verme durumlarında kişisel sorumlulukları doğabilir. Yönetici ortaklar için özen yükümlülüğü vardır."
  },
  {
    question: "Ticaret unvanı nasıl korunur?",
    answer: "Ticaret unvanı, ticaret sicilinde tescil ile korunur. Tescil edilen unvan, aynı veya benzer ticaret alanında başkaları tarafından kullanamaz. Unvan ihlali halinde, haksız rekabet davası açılabilir, tecil ve tazminat talep edilebilir. Marka tescili ek koruma sağlar."
  },
  {
    question: "Konkordato nedir ve nasıl uygulanır?",
    answer: "Konkordato, borçlunun alacaklıları ile anlaşarak borçlarını yeniden yapılandırmasıdır. Geçici mühlet ve kesin mühlet olmak üzere iki aşamadan oluşur. Borçlu, borçlarının %51'ini ödeyebileceğini ispat etmeli ve alacaklıların çoğunluğunun onayını almalıdır."
  },
  {
    question: "Haksız rekabet ne zaman söz konusudur?",
    answer: "Haksız rekabet, dürüstlük kurallarına aykırı davranışlarla gerçekleşir. Yanıltıcı reklamlar, ticari sır çalma, taklit ürünler, dampingli satış, müşteri çelme takma gibi davranışlar haksız rekabettir. Zarar gören, tecil, men ve tazminat davası açabilir."
  },
  {
    question: "Şirket tasfiyesi nasıl yapılır?",
    answer: "Şirket tasfiyesi, şirketin feshi kararı sonrası mallarının paraya çevrilip borçların ödenmesi sürecidir. Tasfiye memuru atanır, alacaklılara ilan yapılır, mallar satılır, borçlar ödenir. Kalan varlık ortaklara paylarına göre dağıtılır. Tasfiye sonrası şirket sicilden silinir."
  },
  {
    question: "Franchise sözleşmesi nedir?",
    answer: "Franchise, franchisor'un marka, know-how ve iş sistemini franchisee'ye belirli bedel karşılığında kullandırmasıdır. Sözleşmede bölge, süre, bedel, eğitim, destek hizmetleri belirlenir. Franchisee bağımsız işletmeci olarak hareket eder ancak franchisor'un standartlarına uymalıdır."
  },
  {
    question: "Ticari defterlerin hukuki değeri nedir?",
    answer: "Ticari defterler, usulüne uygun tutulduğunda delil niteliği taşır. Tacirler arası uyuşmazlıklarda ispat aracı olarak kullanılabilir. Defterlerde değişiklik, silinti yapılamaz, sayfa koparılamaz. VUK ve TTK hükümlerine uygun tutulması gerekir."
  },
  {
    question: "Ticari temsilci nedir?",
    answer: "Ticari temsilci, başka bir tacir adına ve hesabına sürekli olarak ticari işlemler yapan kişidir. Temsil yetkisi yazılı olmalı, kapsam ve sınırları belirtilmelidir. Temsilci, temsil yetkisi dâhilinde yaptığı işlemlerden temsil edilen sorumludur."
  },
  {
    question: "İflas erteleme başvurusu nasıl yapılır?",
    answer: "İflas erteleme, geçici mali güçlük yaşayan şirketlerin iflastan korunması için başvurdukları yoldur. Şirketin mali durumunu düzeltebileceğine dair plan sunulmalı, alacaklıların çoğunluğunun onayı alınmalıdır. En fazla 1 yıl süre verilir ve sadece bir kez başvurulabilir."
  },
  {
    question: "Bayilik sözleşmesinin özellikleri nelerdir?",
    answer: "Bayilik sözleşmesi, bayi ile tedarikçi arasında yapılan sürekli borç ilişkisidir. Bölge münhasırlığı, minimum satış kotası, reklam desteği, eğitim yükümlülükleri düzenlenir. Sözleşme süresiz ise, ihbar sürelerine uyarak feshedilebilir. Fesih halinde gayretkeşlik tazminatı talep edilebilir."
  },
  {
    question: "Ticari kredi sözleşmelerinde dikkat edilecek hususlar nelerdir?",
    answer: "Ticari kredilerde faiz oranı, komisyonlar, erken ödeme koşulları, teminatlar açık olmalıdır. BDDK limitlerini aşan faiz tatbik edilemez. Kredi kullanım koşulları, geri ödeme planı detaylandırılmalıdır. Kefalet ve rehin gibi teminatların kapsamı belirlenmelidir."
  }
];

export default function TicaretSSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FAQSchema 
        faqs={faqData}
        pageTitle="Ticaret Hukuku Sıkça Sorulan Sorular"
        category="Ticaret Hukuku"
      />
      
      <div className="py-24 bg-gradient-to-br from-indigo-50 to-white min-h-screen">
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
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
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
            <div className="inline-flex items-center justify-center p-4 bg-indigo-100 rounded-full mb-6">
              <FileText className="w-8 h-8 text-indigo-600" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Ticaret Hukuku SSS
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Şirket kuruluşu, ticari sözleşmeler ve ticari uyuşmazlıklar hakkında en sık sorulan 
              soruları yanıtladık. İş dünyasındaki hukuki süreçler hakkında bilgi alın.
            </p>
          </motion.div>

          {/* Hızlı İstatistikler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100 text-center">
              <Building2 className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">10.000 TL</div>
              <div className="text-sm text-slate-600">Ltd Şti Min. Sermaye</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100 text-center">
              <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">50.000 TL</div>
              <div className="text-sm text-slate-600">A.Ş Min. Sermaye</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100 text-center">
              <Handshake className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">%25</div>
              <div className="text-sm text-slate-600">Min. Ödenecek Sermaye</div>
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
                  className="bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-indigo-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-indigo-600" />
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
                        <div className="px-6 pb-6 pt-2 text-slate-700 leading-relaxed border-t border-indigo-100">
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
              Ticari İşlemlerinizde Hukuki Güvence
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Şirket kuruluşu ve ticari sözleşmelerde hukuki riskler bulunur. İş dünyanızda 
              güvenli adımlar atmak için deneyimli ticaret hukuku avukatımızdan destek alın.
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
