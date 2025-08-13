'use client';

import { Metadata } from 'next';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Filter } from 'lucide-react';

const hukukiTerimler = [
  // A Harfi
  {
    terim: "Adli Tıp",
    tanimı: "Tıp bilgisinin hukuki olaylara uygulanması dalıdır. Suç olaylarında ölüm nedeni, yaralama şekli gibi konularda bilirkişi raporu hazırlanır.",
    kategori: "Ceza Hukuku",
    harf: "A"
  },
  {
    terim: "Alacak",
    tanimı: "Bir kimsenin başka bir kimseden para veya başka bir şey isteme hakkıdır. Borçlunun borçluya karşı sahip olduğu haktır.",
    kategori: "Borçlar Hukuku", 
    harf: "A"
  },
  {
    terim: "Anlaşmalı Boşanma",
    tanimı: "Eşlerin boşanma ve boşanmanın sonuçları konusunda anlaştıkları boşanma türüdür. Mahkeme sadece anlaşmanın geçerliliğini kontrol eder.",
    kategori: "Aile Hukuku",
    harf: "A"
  },

  // B Harfi  
  {
    terim: "Beraat",
    tanimı: "Sanığın suçsuzluğuna karar verilmesidir. Mahkeme, sanığın suçu işlemediğine kanaat getirdiğinde beraat kararı verir.",
    kategori: "Ceza Hukuku",
    harf: "B"
  },
  {
    terim: "Bilirkişi",
    tanimı: "Mahkemenin sahip olmadığı teknik bilgi gereken konularda görüş bildiren uzman kişilerdir. Tıp, mühendislik, muhasebe gibi alanlarda görev alırlar.",
    kategori: "Usul Hukuku",
    harf: "B"
  },

  // C Harfi
  {
    terim: "Ceza Muhakemesi",
    tanimı: "Suç işlendiği iddiasıyla başlayan ve mahkeme kararıyla sonuçlanan yargılama sürecidir. Soruşturma ve kovuşturma aşamalarından oluşur.",
    kategori: "Ceza Hukuku", 
    harf: "C"
  },

  // D Harfi
  {
    terim: "Dava",
    tanimı: "Bir hakkın korunması veya bir uyuşmazlığın çözülmesi için mahkemeye başvurulmasıdır. Hukuk davası ve ceza davası olarak ikiye ayrılır.",
    kategori: "Usul Hukuku",
    harf: "D"
  },
  {
    terim: "Delil",
    tanimı: "Mahkemede ispat edilen olayları kanıtlamaya yarayan araçlardır. Tanık, belge, bilirkişi raporu, keşif gibi türleri vardır.",
    kategori: "Usul Hukuku",
    harf: "D"
  },

  // E Harfi
  {
    terim: "Edinilmiş Mal",
    tanimı: "Evlilik birliği süresince eşlerin çalışarak veya birikimleriyle elde ettikleri mallardır. Boşanma durumunda yarı yarıya paylaşılır.",
    kategori: "Aile Hukuku",
    harf: "E"
  },
  {
    terim: "Emsal Karar",
    tanimı: "Yargıtay'ın aynı konularda daha önce verdiği kararlarıdır. Alt derece mahkemeleri için yol gösterici nitelik taşır.",
    kategori: "Usul Hukuku",
    harf: "E"
  },

  // F Harfi
  {
    terim: "Fesih",
    tanimı: "Bir sözleşmenin geçmişe etkili olarak sona erdirilmesidir. Sözleşme hiç yapılmamış gibi sonuç doğurur.",
    kategori: "Borçlar Hukuku",
    harf: "F"
  },

  // G Harfi
  {
    terim: "Gıyabi Karar",
    tanimı: "Taraflardan birinin mahkemeye gelmemesi halinde verilen karardır. Yokluğunda karar verilen taraf, belirli süre içinde itiraz edebilir.",
    kategori: "Usul Hukuku",
    harf: "G"
  },

  // H Harfi
  {
    terim: "Haciz",
    tanimı: "Borçlunun mallarına el konularak satışa çıkarılması işlemidir. İcra müdürlüğü tarafından gerçekleştirilir.",
    kategori: "İcra İflas Hukuku",
    harf: "H"
  },
  {
    terim: "Hukuki Dinlenilme Hakkı",
    tanimı: "Her kimsenin kendisini ilgilendiren konularda görüşünü açıklayabilme hakkıdır. Adil yargılanma hakkının temel unsurlarından biridir.",
    kategori: "Anayasa Hukuku",
    harf: "H"
  },

  // İ Harfi
  {
    terim: "İbraname",
    tanimı: "Bir borcun veya hakkın tamamen veya kısmen ortadan kaldırıldığına dair düzenlenmiş yazılı belgedir. Özellikle iş hukukunda dikkatli olunmalıdır.",
    kategori: "İş Hukuku",
    harf: "İ"
  },
  {
    terim: "İhtiyati Tedbir",
    tanimı: "Dava devam ederken hakkın korunması için mahkeme tarafından verilen geçici koruma kararıdır. Örneğin malların satışının engellenmesi.",
    kategori: "Usul Hukuku",
    harf: "İ"
  },
  {
    terim: "İstinaf",
    tanimı: "İlk derece mahkemesi kararının hem maddi hem hukuki açıdan Bölge Adliye Mahkemesi'nde yeniden incelenmesidir.",
    kategori: "Usul Hukuku", 
    harf: "İ"
  },

  // K Harfi
  {
    terim: "Kabahat",
    tanimı: "Suçtan daha hafif fiillerdir. Para cezası ile cezalandırılır ve sabıka kaydı oluşturmaz. Trafik ihlalleri örnek verilebilir.",
    kategori: "Ceza Hukuku",
    harf: "K"
  },
  {
    terim: "Kesin Hüküm",
    tanimı: "Artık itiraz edilemeyen, değiştirilemez hale gelmiş mahkeme kararıdır. Aynı konu hakkında tekrar dava açılamaz.",
    kategori: "Usul Hukuku",
    harf: "K"
  },

  // M Harfi
  {
    terim: "Manevi Tazminat",
    tanimı: "Kişinin onur, şeref ve saygınlığının zedelenmesi durumunda talep edilen para cezasıdır. Maddi zarar olmasa da istenebilir.",
    kategori: "Borçlar Hukuku",
    harf: "M"
  },
  {
    terim: "Müdafi",
    tanimı: "Sanığın ceza davasında hukuki yardım alan avukatıdır. Zorunlu müdafilik hallerde mahkeme tarafından atanır.",
    kategori: "Ceza Hukuku",
    harf: "M"
  },

  // N Harfi
  {
    terim: "Nafaka",
    tanimı: "Eşin veya çocuğun geçimi için ödenen paradır. Yoksulluk nafakası ve iştirak nafakası olmak üzere iki türü vardır.",
    kategori: "Aile Hukuku",
    harf: "N"
  },

  // S Harfi
  {
    terim: "Saklı Pay",
    tanimı: "Belirli mirasçıların hukuk tarafından korunan asgari miras paylarıdır. Bu paydan mahrum bırakılamazlar.",
    kategori: "Miras Hukuku",
    harf: "S"
  },
  {
    terim: "Sulh",
    tanimı: "Tarafların uyuşmazlığı mahkeme dışında çözmesidir. Mahkeme tarafından onaylanan sulh, kesin hüküm gibi sonuç doğurur.",
    kategori: "Usul Hukuku",
    harf: "S"
  },

  // T Harfi
  {
    terim: "Temyiz",
    tanimı: "İstinaf mahkemesi kararının sadece hukuka uygunluk açısından Yargıtay'da denetlenmesidir. Deliller yeniden incelenmez.",
    kategori: "Usul Hukuku",
    harf: "T"
  },
  {
    terim: "Tazminat",
    tanimı: "Bir kimsenin uğradığı zarar nedeniyle talep ettiği karşılıktır. Maddi ve manevi tazminat olmak üzere iki türü vardır.",
    kategori: "Borçlar Hukuku",
    harf: "T"
  },

  // V Harfi
  {
    terim: "Velayet",
    tanimı: "Anne ve babanın küçük çocukları üzerindeki hak ve yetkilerinin tümüdür. Boşanma durumunda mahkeme tarafından belirlenir.",
    kategori: "Aile Hukuku",
    harf: "V"
  },
  {
    terim: "Vekalet",
    tanimı: "Bir kimsenin başka bir kimseye hukuki işlem yapma yetkisi vermesidir. Avukatlık da bir vekalet türüdür.",
    kategori: "Borçlar Hukuku",
    harf: "V"
  },

  // Z Harfi
  {
    terim: "Zamanaşımı",
    tanimı: "Belirli sürenin geçmesiyle bir hakkın kullanılamaz hale gelmesidir. Her hak türü için farklı süreler belirlenmiştir.",
    kategori: "Medeni Hukuk",
    harf: "Z"
  }
];

// Harfleri grupluyoruz
const harfler = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'İ', 'K', 'M', 'N', 'S', 'T', 'V', 'Z'];

export default function HukukiSozluk() {
  const [aramaMetni, setAramaMetni] = useState('');
  const [seciliHarf, setSeciliHarf] = useState<string | null>(null);
  const [seciliKategori, setSeciliKategori] = useState<string | null>(null);

  // Benzersiz kategorileri çıkarıyoruz
  const kategoriler = useMemo(() => {
    return Array.from(new Set(hukukiTerimler.map(terim => terim.kategori)));
  }, []);

  // Filtrelenmiş terimleri hesaplıyoruz
  const filtrelenmisTerimler = useMemo(() => {
    return hukukiTerimler.filter(terim => {
      const aramaKoşulu = aramaMetni === '' || 
        terim.terim.toLowerCase().includes(aramaMetni.toLowerCase()) ||
        terim.tanimı.toLowerCase().includes(aramaMetni.toLowerCase());
      
      const harfKoşulu = seciliHarf === null || terim.harf === seciliHarf;
      const kategoriKoşulu = seciliKategori === null || terim.kategori === seciliKategori;
      
      return aramaKoşulu && harfKoşulu && kategoriKoşulu;
    });
  }, [aramaMetni, seciliHarf, seciliKategori]);

  // Harflere göre gruplandırıyoruz
  const gruplandirmisTerimler = useMemo(() => {
    const gruplar: { [key: string]: typeof hukukiTerimler } = {};
    
    filtrelenmisTerimler.forEach(terim => {
      if (!gruplar[terim.harf]) {
        gruplar[terim.harf] = [];
      }
      gruplar[terim.harf].push(terim);
    });

    // Alfabetik sıralama
    Object.keys(gruplar).forEach(harf => {
      gruplar[harf].sort((a, b) => a.terim.localeCompare(b.terim, 'tr'));
    });

    return gruplar;
  }, [filtrelenmisTerimler]);

  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Hukuki Terimler Sözlüğü
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hukuki jargonu anlamanıza yardımcı olmak için en önemli terimleri alfabetik sırayla düzenledik. 
            Arama yaparak veya harflere tıklayarak istediğiniz terimi bulabilirsiniz.
          </p>
        </motion.div>

        {/* Arama ve Filtreler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          {/* Arama Kutusu */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Hukuki terim arayın... (örn: nafaka, delil, beraat)"
                value={aramaMetni}
                onChange={(e) => setAramaMetni(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
              />
            </div>
          </div>

          {/* Harf Filtreleri */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">Alfabetik Gezinme</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSeciliHarf(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  seciliHarf === null 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Tümü
              </button>
              {harfler.map(harf => (
                <button
                  key={harf}
                  onClick={() => setSeciliHarf(harf)}
                  className={`w-12 h-12 rounded-lg font-bold transition-colors ${
                    seciliHarf === harf 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {harf}
                </button>
              ))}
            </div>
          </div>

          {/* Kategori Filtreleri */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">Hukuk Alanına Göre Filtrele</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSeciliKategori(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  seciliKategori === null 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Tüm Alanlar
              </button>
              {kategoriler.map(kategori => (
                <button
                  key={kategori}
                  onClick={() => setSeciliKategori(kategori)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                    seciliKategori === kategori 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {kategori}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sonuç Sayısı */}
        <div className="text-center mb-8">
          <p className="text-slate-600">
            <span className="font-semibold text-blue-600">{filtrelenmisTerimler.length}</span> terim bulundu
          </p>
        </div>

        {/* Terimler Listesi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          {Object.keys(gruplandirmisTerimler).length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Hiç sonuç bulunamadı</h3>
              <p className="text-slate-600">Farklı bir arama terimi deneyin veya filtreleri temizleyin.</p>
            </div>
          ) : (
            Object.keys(gruplandirmisTerimler)
              .sort()
              .map(harf => (
                <div key={harf} id={`harf-${harf}`} className="mb-12">
                  <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-blue-200 pb-2">
                    {harf} Harfi
                  </h2>
                  <div className="grid gap-6">
                    {gruplandirmisTerimler[harf].map((terim, index) => (
                      <motion.div
                        key={`${harf}-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                              {terim.terim}
                            </h3>
                            <p className="text-slate-700 leading-relaxed mb-3">
                              {terim.tanimı}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                              {terim.kategori}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Aradığınız Terimi Bulamadınız mı?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Hukuki terimlerin doğru anlaşılması önemlidir. Belirsizliğe mahal vermemek için 
            bizimle iletişime geçebilirsiniz.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors"
          >
            Uzman Görüşü Alın
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}
