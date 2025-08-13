'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft, Briefcase, Clock, DollarSign, Users } from 'lucide-react';
import { FAQSchema } from '@/components/seo/StructuredData';

const faqData = [
  {
    question: "İş sözleşmesi nasıl feshedilir?",
    answer: "İş sözleşmesi haklı nedenle derhal veya bildirimsiz, ya da bildirimli olarak feshedilebilir. Haklı neden feshi için ağır ahlaki bozukluk, güven sarsıcı davranış gibi sebepler aranır. Bildirimli fesihte ise ihbar süreleri uygulanır ve kıdem tazminatı ödenir."
  },
  {
    question: "Kıdem tazminatı ne zaman ödenir?",
    answer: "Kıdem tazminatı, en az 1 yıl çalışmış işçinin iş sözleşmesinin belirli sebeplerle sona ermesi halinde ödenir. İşçinin feshi, işverenin haksız feshi, emeklilik, askerlik, evlilik (kadın işçi için) gibi durumlarda ödenir. Her tam yıl için 30 günlük ücret tutarındadır."
  },
  {
    question: "İhbar tazminatı nedir?",
    answer: "İhbar tazminatı, belirsiz süreli iş sözleşmesinin feshinde ihbar süresi tanınmadığında ödenen tazminattır. İhbar süreleri çalışma süresine göre değişir: 6 ay-1.5 yıl arası 2 hafta, 1.5-3 yıl arası 4 hafta, 3 yıldan fazla ise 6 hafta süre tanınmalıdır."
  },
  {
    question: "Mobbing nedir ve nasıl kanıtlanır?",
    answer: "Mobbing, işyerinde sistematik olarak yapılan psikolojik tacizdir. Dışlama, aşağılama, aşırı iş yükü verme gibi davranışları içerir. Kanıtlanması için yazılı belgeler, tanık ifadeleri, ses-görüntü kayıtları, tıbbi raporlar kullanılabilir. Mobbing nedeniyle iş sözleşmesi feshedilebilir ve tazminat talep edilebilir."
  },
  {
    question: "Fazla mesai ücreti nasıl hesaplanır?",
    answer: "Fazla mesai, günlük 11 saati aşan çalışmalardır. İlk 2 saat için %25, sonraki saatler için %50 zamlı ücret ödenir. Haftalık 45 saati aşan çalışmalar da fazla mesai sayılır. Çalışanın rızası ve yazılı anlaşma gereklidir."
  },
  {
    question: "İş kazası durumunda haklar nelerdir?",
    answer: "İş kazası halinde tedavi masrafları SGK tarafından karşılanır. Geçici iş göremezlik döneminde günlük geçici iş göremezlik ödeneği alınır. Kalıcı iş göremezlik varsa sürekli iş göremezlik geliri bağlanır. Ayrıca işverenden manevi tazminat da talep edilebilir."
  },
  {
    question: "Sendikal haklar nelerdir?",
    answer: "İşçiler sendikaya üye olma, sendika kurma ve sendika faaliyetlerine katılma hakkına sahiptir. İşveren, sendika üyeliği nedeniyle işçiyi ayrımcılığa tabi tutamaz, işten çıkaramaz. Sendikalar, toplu iş sözleşmesi yapma, grev hakkını kullanma yetkisine sahiptir."
  },
  {
    question: "Hamilelik nedeniyle işten çıkarma yasak mıdır?",
    answer: "Hamilelik ve doğum izni nedeniyle kadın işçi işten çıkarılamaz. Hamilelik izni öncesi ve sonrası toplam 16 hafta koruma süresi vardır. Bu süre içinde fesih yapılamaz. Yapılırsa fesih geçersizdir ve işe iade davası açılabilir."
  },
  {
    question: "Yıllık izin hakları nelerdir?",
    answer: "İşçi yılda en az 14 iş günü ücretli izin hakkına sahiptir. 1-5 yıl arası çalışanlara 14 gün, 5-15 yıl arası 20 gün, 15 yıl üzeri 26 gün izin verilir. İzin kullandırılmazsa parasal karşılığı ödenir. İzin devredilmez ve zamanaşımına uğrar."
  },
  {
    question: "İşe iade davası nedir?",
    answer: "30 ve üzeri işçi çalıştıran işyerlerinde en az 6 ay çalışmış işçilerin geçerli nedensiz feshi halinde açılan davadır. İşçi fesih tarihinden itibaren 1 ay içinde başvurmalıdır. Mahkeme feshi haksız bulursa, işçi işe iade edilir ve ara dönem ücretleri ödenir."
  },
  {
    question: "Çalışma koşulları değişikliği nasıl yapılır?",
    answer: "Esaslı çalışma koşullarının değiştirilmesi için işçinin yazılı onayı gerekir. İşçi 6 iş günü içinde cevap vermezse kabul etmiş sayılır. Değişikliği kabul etmeyen işçi işten çıkarılabilir, ancak bu durumda kıdem ve ihbar tazminatı ödenir."
  },
  {
    question: "Gece çalışması ve ek ücret hakları nelerdir?",
    answer: "Gece çalışması (20:00-06:00 arası) için %50 zamlı ücret ödenir. Gece çalışan kadın işçiler için özel koruyucu tedbirler alınmalıdır. Sürekli gece çalışanlar 6 ayda bir ücretsiz sağlık kontrolünden geçirilmelidir."
  },
  {
    question: "İş güvenliği konusunda işveren yükümlülükleri nelerdir?",
    answer: "İşveren, işçilerin iş sağlığı ve güvenliğini sağlamakla yükümlüdür. Risk değerlendirmesi yapmalı, koruyucu donanım sağlamalı, eğitim vermelidir. İş güvenliği uzmanı ve işyeri hekimi görevlendirmelidir. Bu yükümlülükleri yerine getirmemesi cezai ve hukuki sorumluluk doğurur."
  },
  {
    question: "Bordro eksiklikleri nasıl talep edilir?",
    answer: "Eksik ödenen ücretler için işçi dava açabilir. Fazla mesai, ikramiye, prim gibi alacaklar da bu kapsamdadır. İş sözleşmesi devam ederken bu talepler 5 yılda, sona erdikten sonra 1 yılda zamanaşımına uğrar. Delil olarak bordro, mesai kayıtları, tanık beyanları kullanılabilir."
  },
  {
    question: "İşsizlik maaşı alma koşulları nelerdir?",
    answer: "İşsizlik maaşı alabilmek için son 3 yılda en az 600 gün prim ödemiş olmak, kendi isteğiyle işten ayrılmamış olmak ve İŞKUR'a başvurmak gerekir. Maaş süresi prim ödeme gün sayısına göre belirlenir. Aktif iş arayışı şartını yerine getirmek zorunludur."
  },
  {
    question: "Rekabet yasağı sözleşmesi geçerli midir?",
    answer: "Rekabet yasağı sözleşmesi, işçinin özel bilgi sahibi olduğu hallerde ve yazılı olarak yapılırsa geçerlidir. En fazla 2 yıl süreli olabilir. İşveren bunun karşılığında tazminat ödemek zorundadır. Yasağın ihlali halinde cezai şart da kararlaştırılabilir."
  },
  {
    question: "Part-time çalışanların hakları nelerdir?",
    answer: "Part-time işçiler, tam zamanlı işçilerle aynı haklara sahiptir ancak çalışma süreleri oranında ücret alırlar. Kıdem, ihbar tazminatı, izin hakları orantılı olarak hesaplanır. Sosyal güvenlik primleri ve diğer yan haklar da çalışma süresine göre belirlenir."
  },
  {
    question: "İş yerinde ayrımcılık yasak mıdır?",
    answer: "İş ilişkisinde cinsiyet, ırk, renk, yaş, medeni hal, hamilelik, din, siyasi görüş nedeniyle ayrımcılık yasaktır. Eşit işe eşit ücret ilkesi geçerlidir. Ayrımcılığa uğrayan işçi 3 aylık ücret tutarında tazminat talep edebilir. Ayrımcılık nedeniyle fesih de geçersiz sayılır."
  }
];

export default function IsSSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FAQSchema 
        faqs={faqData}
        pageTitle="İş Hukuku Sıkça Sorulan Sorular"
        category="İş Hukuku"
      />
      
      <div className="py-24 bg-gradient-to-br from-green-50 to-white min-h-screen">
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
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
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
            <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-6">
              <Briefcase className="w-8 h-8 text-green-600" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              İş Hukuku SSS
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              İş hayatında karşılaşabileceğiniz sorunlar hakkında en sık sorulan soruları yanıtladık. 
              İşçi hakları ve işveren yükümlülükleri hakkında bilgi alın.
            </p>
          </motion.div>

          {/* Hızlı İstatistikler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 text-center">
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">45 Saat</div>
              <div className="text-sm text-slate-600">Haftalık Azami Çalışma</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 text-center">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">30 Gün</div>
              <div className="text-sm text-slate-600">Yıllık Kıdem Tutarı</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 text-center">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">14 Gün</div>
              <div className="text-sm text-slate-600">Asgari Yıllık İzin</div>
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
                  className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-green-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-green-600" />
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
                        <div className="px-6 pb-6 pt-2 text-slate-700 leading-relaxed border-t border-green-100">
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
              İş Hayatında Yaşadığınız Sorunlarda Destek Alın
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              İşçi hakları karmaşık bir konudur. Haklarınızı korumak ve doğru yolu izlemek için 
              deneyimli iş hukuku avukatımızdan destek alın.
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
