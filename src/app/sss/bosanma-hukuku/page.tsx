'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft, Heart, Clock, Scale, Users } from 'lucide-react';
import { FAQSchema } from '@/components/seo/StructuredData';

const faqData = [
  {
    question: "Anlaşmalı boşanma davası ne kadar sürer?",
    answer: "Anlaşmalı boşanma davaları, mahkemelerin iş yoğunluğuna ve adli tatil gibi faktörlere bağlı olarak değişmekle birlikte, genellikle 1 ila 3 ay arasında sonuçlanmaktadır. Sürecin en önemli unsuru, tarafların her konuda anlaştığı bir protokolün mahkemeye sunulmasıdır. Eğer belgeler eksiksiz ve protokol detaylı hazırlanmışsa, süreç daha hızlı ilerleyebilir."
  },
  {
    question: "Nafaka neye göre belirlenir?",
    answer: "Nafaka miktarının belirlenmesinde mahkeme birçok faktörü göz önünde bulundurur. Bunların başında; tarafların sosyal ve ekonomik durumları, çalışma güçleri, yaşam standartları, varsa müşterek çocukların yaşı ve eğitim giderleri gibi ihtiyaçları gelir. Ayrıca tarafların boşanmadaki kusur oranları da nafaka türünün belirlenmesinde (yoksulluk veya iştirak nafakası) etkili olabilir."
  },
  {
    question: "Mal paylaşımı nasıl yapılır?",
    answer: "Türkiye'de yasal mal rejimi, 'edinilmiş mallara katılma' rejimidir. Bu kurala göre, evlilik birliği içinde, eşlerin çalışarak veya birikimleriyle elde ettikleri tüm mal varlığı (maaş, ev, araba, bankadaki para vb.) 'edinilmiş mal' sayılır ve boşanma durumunda, kural olarak, yarı yarıya paylaşılır. Kişisel mallar (miras, evlilik öncesi mallar, manevi tazminat vb.) paylaşıma dahil edilmez."
  },
  {
    question: "Çekişmeli boşanma davası nasıl işler?",
    answer: "Çekişmeli boşanma davası, eşlerden birinin boşanmayı kabul etmediği veya boşanma şartları konusunda anlaşamadıkları durumlarda açılır. Bu süreçte mahkeme, öncelikle bir sulh teşebbüsünde bulunur. Sulh sağlanamazsa, tanık dinleme, bilirkişi raporu alma gibi delil toplama aşamaları gerçekleştirilir. Bu nedenle çekişmeli boşanma davaları 6 ay ile 2 yıl arasında sürebilir."
  },
  {
    question: "Çocukların velayeti nasıl belirlenir?",
    answer: "Velayet kararında çocuğun yüksek yararı esas alınır. Mahkeme; çocuğun yaşı, anne ve babanın maddi ve manevi durumu, çocukla kurduğu ilişki, çocuğun eğitim ihtiyaçları gibi faktörleri değerlendirir. 12 yaşını doldurmuş çocukların görüşü de alınır. Kural olarak küçük yaştaki çocuklar anneye verilirken, her dosya kendi özelinde değerlendirilir."
  },
  {
    question: "Boşanma davası açmak için hangi belgeler gerekir?",
    answer: "Boşanma davası için temel belgeler şunlardır: Evlilik cüzdanı, tarafların nüfus kayıt örnekleri, varsa çocukların nüfus kayıt örnekleri, gelir belgeleri (maaş bordrosu, SGK hizmet dökümü), malvarlığı beyanı, varsa şiddet belgeleri (sağlık raporu, tutanak vb.). Dava türüne göre ek belgeler de talep edilebilir."
  },
  {
    question: "Manevi tazminat ne zaman talep edilebilir?",
    answer: "Manevi tazminat, boşanmaya sebep olan olaylarda kusursuz olan tarafça talep edilebilir. Aldatılma, şiddet görmek, sürekli hakaret ve aşağılama gibi durumlar manevi tazminat sebebi sayılır. Tazminat miktarı, kusurlu tarafın ekonomik durumu, kusursuz tarafın uğradığı manevi zarar ve toplumsal konum gibi faktörlere göre belirlenir."
  },
  {
    question: "Boşanma sonrası soyadı nasıl olur?",
    answer: "Kadın, boşanma sonrası dilerse kızlık soyadına dönebilir veya evlilik soyadını kullanmaya devam edebilir. Bu tercih tamamen kendisine aittir. Eğer kızlık soyadına dönmek istiyorsa, bunu boşanma davası sırasında belirtmesi yeterlidir. Sonradan da nüfus müdürlüğüne başvurarak değişiklik yapabilir."
  },
  {
    question: "Evlilik birliği giderlerine katılma nafakası nedir?",
    answer: "Evlilik birliği giderlerine katılma nafakası (iştirak nafakası), evlilik sırasında ev giderlerine katkıda bulunmayan eşten, diğer eşin talep etmesi halinde alınan nafaka türüdür. Bu nafaka, sadece evliliğin devam ettiği dönem için değil, boşanma sonrası da belirli şartlarda talep edilebilir."
  },
  {
    question: "Tek taraflı boşanma mümkün mü?",
    answer: "Evet, belirli durumlarda tek taraflı boşanma mümkündür. Eşin 1 yıldan fazla süreyle haber alınamayacak şekilde terki, akıl hastalığı, ağır suç işlemesi gibi yasal boşanma sebeplerinin varlığında, karşı taraf katılmasa bile boşanma davası açılabilir ve kazanılabilir."
  },
  {
    question: "Yabancı ülkede yapılan evlilik nasıl boşanır?",
    answer: "Yabancı ülkede yapılmış evlilikler için Türkiye'de boşanma davası açılabilir. Öncelikle evlilik cüzdanının Türkiye'de tescil edilmesi gerekir. Tescil işlemi, ilgili ülkenin konsolosluğu ve Dışişleri Bakanlığı aracılığıyla yapılır. Tescil sonrası normal boşanma davası süreci işletilir."
  },
  {
    question: "Erken evlilik nasıl feshedilebilir?",
    answer: "18 yaşından küçükken yapılan evlilikler, kişi ergin olduktan sonra 6 ay içinde fesih davası açarak geçersiz kılınabilir. Bu durumda evlilik, hiç olmamış sayılır ve mal paylaşımı gibi sonuçları doğmaz. Ancak bu süre geçtikten sonra fesih hakkı düşer."
  },
  {
    question: "Boşanma sırasında aile konutu kime kalır?",
    answer: "Aile konutu, öncelikle çocukların yararı gözetilerek, velayeti kendisine verilen tarafa bırakılır. Eğer çocuk yoksa veya çocuklar ergin ise, konutun mülkiyeti kimde ise genellikle o tarafta kalır. Ancak mahkeme, ekonomik durumları da değerlendirerek farklı karar verebilir."
  },
  {
    question: "Boşanma davası sırasında eşimin mallarına el koyabilir miyim?",
    answer: "Doğrudan el koyamazsınız, ancak mahkemeden ihtiyati tedbir kararı alarak eşinizin mallarını satmasını veya devretmesini engelleyebilirsiniz. Bu tedbir, özellikle mal paylaşımında hakkınızın korunması için önemlidir. Tedbir kararı için makul bir gerekçe sunmanız gerekir."
  },
  {
    question: "Boşandıktan sonra nafaka ne kadar süre ödenir?",
    answer: "Yoksulluk nafakası, muhtaç durumda olan eski eşin yeniden evlenmesi veya taraflardan birinin ölümü halinde son bulur. İştirak nafakası ise evlilik süresinin yarısı kadar ödenir. Örneğin 10 yıllık evlilik için en fazla 5 yıl iştirak nafakası ödenebilir."
  }
];

export default function BosanmaSSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FAQSchema 
        faqs={faqData}
        pageTitle="Boşanma Hukuku Sıkça Sorulan Sorular"
        category="Boşanma Hukuku"
      />
      
      <div className="py-24 bg-gradient-to-br from-red-50 to-white min-h-screen">
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
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
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
            <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Boşanma Hukuku SSS
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Boşanma süreci hakkında en sık sorulan soruları yanıtladık. Kişisel durumunuza 
              özel danışmanlık için bizimle iletişime geçebilirsiniz.
            </p>
          </motion.div>

          {/* Hızlı İstatistikler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 text-center">
              <Clock className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">1-3 Ay</div>
              <div className="text-sm text-slate-600">Anlaşmalı Boşanma Süresi</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 text-center">
              <Scale className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">%50</div>
              <div className="text-sm text-slate-600">Edinilmiş Mal Payı</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 text-center">
              <Users className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">Çocuk Yararı</div>
              <div className="text-sm text-slate-600">Velayet Temel İlkesi</div>
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
                  className="bg-white rounded-2xl shadow-sm border border-red-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-red-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-red-600" />
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
                        <div className="px-6 pb-6 pt-2 text-slate-700 leading-relaxed border-t border-red-100">
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
              Kişisel Durumunuza Özel Danışmanlık
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Her boşanma davası kendine özgüdür. Durumunuza en uygun stratejiyi belirlemek için 
              deneyimli avukatımızdan destek alın.
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
