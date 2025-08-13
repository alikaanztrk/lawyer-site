'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Filter, Heart, Share2, Printer, Copy, CheckCircle } from 'lucide-react';

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
  {
    terim: "Evlilik Sözleşmesi",
    tanimı: "Eşlerin evlilik öncesi veya sonrası mal rejimi ve diğer hususları düzenledikleri sözleşmedir. Noter huzurunda yapılması gerekir.",
    kategori: "Aile Hukuku",
    harf: "E"
  },

  // F Harfi
  {
    terim: "Fesih",
    tanimı: "Bir sözleşmenin geçmişe etkili olarak sona erdirilmesidir. Sözleşme hiç yapılmamış gibi sonuç doğurur.",
    kategori: "Borçlar Hukuku",
    harf: "F"
  },
  {
    terim: "Franchise",
    tanimı: "Franchisor'un ticari markasını ve know-how'ını franchisee'ye belirli bedel karşılığında kullandırmasıdır.",
    kategori: "Ticaret Hukuku",
    harf: "F"
  },

  // G Harfi
  {
    terim: "Gıyabi Karar",
    tanimı: "Taraflardan birinin mahkemeye gelmemesi halinde verilen karardır. Yokluğunda karar verilen taraf, belirli süre içinde itiraz edebilir.",
    kategori: "Usul Hukuku",
    harf: "G"
  },
  {
    terim: "Garanti",
    tanimı: "Satılan malın belirli bir süre ayıpsız kalması için satıcının verdiği güvencedir. Yasal garanti ve ticari garanti olmak üzere ikiye ayrılır.",
    kategori: "Tüketici Hukuku",
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
  {
    terim: "Kefalet",
    tanimı: "Borçlunun borcunu ödememesi halinde kefilin bu borcu ödemesini üstlenmesidir. Adi kefalet ve müteselsil kefalet türleri vardır.",
    kategori: "Borçlar Hukuku",
    harf: "K"
  },
  {
    terim: "Konkordato",
    tanimı: "Mali durumu bozulan borçlunun alacaklıları ile anlaşarak borçlarını yeniden yapılandırmasıdır.",
    kategori: "Ticaret Hukuku",
    harf: "K"
  },

  // L Harfi
  {
    terim: "Lehtar",
    tanimı: "Bir sözleşme veya tasarruftan yarar sağlayacak olan kişidir. Özellikle sigorta poliçelerinde kullanılan terimdir.",
    kategori: "Sigorta Hukuku",
    harf: "L"
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
  {
    terim: "Müteselsil Borç",
    tanimı: "Birden fazla borçlunun aynı borçtan tümüyle sorumlu olmasıdır. Alacaklı, borçluların herhangi birinden tüm borcunu isteyebilir.",
    kategori: "Borçlar Hukuku",
    harf: "M"
  },
  {
    terim: "Mobbing",
    tanimı: "İşyerinde sistematik olarak yapılan psikolojik tacizdir. Dışlama, aşağılama, iş vermeme gibi davranışları içerir.",
    kategori: "İş Hukuku",
    harf: "M"
  },

  // N Harfi
  {
    terim: "Nafaka",
    tanimı: "Eşin veya çocuğun geçimi için ödenen paradır. Yoksulluk nafakası ve iştirak nafakası olmak üzere iki türü vardır.",
    kategori: "Aile Hukuku",
    harf: "N"
  },
  {
    terim: "Noter",
    tanimı: "Kanunun gösterdiği işleri yapan, belgeleri düzenleyen ve onaylayan kamu görevlisidir. Kamu güvenini haiz belgeler düzenler.",
    kategori: "Medeni Hukuk",
    harf: "N"
  },

  // O Harfi
  {
    terim: "Ortaklık",
    tanimı: "İki veya daha fazla kişinin ortak amaç için bir araya gelerek kurdukları hukuki birlik. Adi ortaklık, ticaret şirketleri gibi türleri vardır.",
    kategori: "Ticaret Hukuku",
    harf: "O"
  },

  // P Harfi
  {
    terim: "Protesto",
    tanimı: "Ticari senet bedelinin ödenmemesi halinde yapılan resmi işlemdir. Kambiyo senedi hamilinin haklarını korur.",
    kategori: "Ticaret Hukuku",
    harf: "P"
  },
  {
    terim: "Poliçe",
    tanimı: "Sigorta sözleşmesinin yazılı belgesidir. Sigorta şirketi ile sigortalı arasındaki hakları ve yükümlülükleri içerir.",
    kategori: "Sigorta Hukuku",
    harf: "P"
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

  // R Harfi
  {
    terim: "Rücu",
    tanimı: "Bir kimsenin ödediği borcun, asıl borçludan geri istenmesidir. Kefil, borcu ödedikten sonra asıl borçluya rücu edebilir.",
    kategori: "Borçlar Hukuku",
    harf: "R"
  },
  {
    terim: "Rehin",
    tanimı: "Borcun güvence altına alınması için borçlunun veya üçüncü kişinin malını alacaklıya teminat olarak vermesidir. Taşınır ve taşınmaz rehin olmak üzere ikiye ayrılır.",
    kategori: "Eşya Hukuku",
    harf: "R"
  },

  // Ş Harfi
  {
    terim: "Şartlı Hüküm",
    tanimı: "Mahkumun belirli şartlara uyması koşuluyla cezasının ertelenmesidir. Denetim süresi boyunca suç işlenmezse, ceza infaz edilmiş sayılır.",
    kategori: "Ceza Hukuku",
    harf: "Ş"
  },
  {
    terim: "Şahitlik",
    tanimı: "Mahkemede bir olayı bizzat görmüş, duymuş kişinin tanıklık etmesidir. Şahit, gördüklerini doğru şekilde anlatmakla yükümlüdür.",
    kategori: "Usul Hukuku",
    harf: "Ş"
  },
  {
    terim: "Şirket",
    tanimı: "İki veya daha fazla kişinin ortak bir amaç için kurduğu ticari kuruluştur. Kollektif, komandit, limited, anonim şirket türleri vardır.",
    kategori: "Ticaret Hukuku",
    harf: "Ş"
  },

  // U Harfi
  {
    terim: "Usul",
    tanimı: "Mahkemelerde izlenen yargılama yöntem ve kurallarının tümüdür. Hukuk Muhakemeleri Kanunu ve Ceza Muhakemesi Kanunu usul kurallarını düzenler.",
    kategori: "Usul Hukuku",
    harf: "U"
  },
  {
    terim: "Uzlaştırma",
    tanimı: "Tarafların uyuşmazlığı mahkeme dışında çözmek için başvurdukları alternatif çözüm yöntemidir. Uzlaştırıcı tarafsız üçüncü kişidir.",
    kategori: "Alternatif Çözüm",
    harf: "U"
  },

  // Ü Harfi
  {
    terim: "Üçüncü Kişi",
    tanimı: "Bir hukuki ilişkinin tarafı olmayan, ancak bu ilişkiden etkilenebilecek kişidir. Özellikle sigorta hukukunda önemli bir kavramdır.",
    kategori: "Sigorta Hukuku",
    harf: "Ü"
  },

  // W Harfi
  {
    terim: "Workmen Compensation",
    tanimı: "İşçi tazminatı anlamında kullanılan uluslararası terimdir. İş kazası ve meslek hastalıklarında işçilere ödenen tazminatları ifade eder.",
    kategori: "İş Hukuku",
    harf: "W"
  },

  // Y Harfi
  {
    terim: "Yargı",
    tanimı: "Devletin uyuşmazlıkları çözme ve adalet dağıtma yetkisidir. Adli yargı, idari yargı ve anayasa yargısı olmak üzere üçe ayrılır.",
    kategori: "Anayasa Hukuku",
    harf: "Y"
  },
  {
    terim: "Yeminli Mali Müşavir",
    tanimı: "Muhasebe ve mali konularda mahkemelere bilirkişi raporu hazırlayan yetkili meslek mensubudur. Özellikle ticari uyuşmazlıklarda görev alır.",
    kategori: "Ticaret Hukuku",
    harf: "Y"
  },
  {
    terim: "Yasal Faiz",
    tanimı: "Kanunun belirlediği faiz oranıdır. Temerrüt faizi olarak da uygulanır. Merkez Bankası tarafından belirlenen oranlara göre hesaplanır.",
    kategori: "Borçlar Hukuku",
    harf: "Y"
  },

  // Z Harfi
  {
    terim: "Zamanaşımı",
    tanimı: "Belirli sürenin geçmesiyle bir hakkın kullanılamaz hale gelmesidir. Her hak türü için farklı süreler belirlenmiştir.",
    kategori: "Medeni Hukuk",
    harf: "Z"
  },
  {
    terim: "Zarar",
    tanimı: "Bir kimsenin hukuka aykırı fiil sonucu uğradığı maddi veya manevi kayıptır. Fiili zarar ve yoksun kalınan kazanç olmak üzere ikiye ayrılır.",
    kategori: "Borçlar Hukuku",
    harf: "Z"
  },
  {
    terim: "Zilyetlik",
    tanimı: "Bir eşyaya fiilen sahip olma ve onu kontrol etme durumudur. Malik olmadan da zilyetlik mümkündür.",
    kategori: "Eşya Hukuku",
    harf: "Z"
  }
];

// Harfleri grupluyoruz
const harfler = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'İ', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'W', 'Y', 'Z'];

export default function HukukiSozluk() {
  const [aramaMetni, setAramaMetni] = useState('');
  const [seciliHarf, setSeciliHarf] = useState<string | null>(null);
  const [seciliKategori, setSeciliKategori] = useState<string | null>(null);
  const [favoriler, setFavoriler] = useState<string[]>([]);
  const [kopyalananTerim, setKopyalananTerim] = useState<string | null>(null);

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

  // Favori ekleme/çıkarma
  const favoriyeEkle = (terim: string) => {
    if (favoriler.includes(terim)) {
      setFavoriler(favoriler.filter(f => f !== terim));
    } else {
      setFavoriler([...favoriler, terim]);
    }
  };

  // Terimi kopyala
  const terimiKopyala = (terim: string, tanim: string) => {
    const metin = `${terim}: ${tanim}`;
    navigator.clipboard.writeText(metin);
    setKopyalananTerim(terim);
    setTimeout(() => setKopyalananTerim(null), 2000);
  };

  // Yazdır
  const yazdır = () => {
    window.print();
  };

  // Paylaş
  const paylas = (terim: string, tanim: string) => {
    const metin = `${terim}: ${tanim}\n\nKaynak: Av. Işıl Bengisu Akpınar Hukuki Sözlük - https://akpinarhukuk.av.tr/hukuki-sozluk`;
    
    if (navigator.share) {
      navigator.share({
        title: terim,
        text: metin,
        url: 'https://akpinarhukuk.av.tr/hukuki-sozluk'
      });
    } else {
      // Fallback - kopyaya al
      navigator.clipboard.writeText(metin);
      setKopyalananTerim(terim);
      setTimeout(() => setKopyalananTerim(null), 2000);
    }
  };

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
            Hukuki jargonu anlamanıza yardımcı olmak için <strong>50+ hukuki terimi</strong> alfabetik sırayla düzenledik. 
            Arama yapabilir, favorilerinize ekleyebilir ve paylaşabilirsiniz.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              50+ Hukuki Terim
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              15+ Hukuk Dalı
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Gelişmiş Arama
            </div>
          </div>
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

          {/* Ekstra Filtreler ve Araçlar */}
          <div className="max-w-4xl mx-auto mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                if (favoriler.length > 0) {
                  // Sadece favorileri göster
                  setAramaMetni('');
                  setSeciliHarf(null);
                  setSeciliKategori(null);
                  // Favori filtreleme için özel durum
                } else {
                  alert('Henüz favori teriminiz bulunmuyor!');
                }
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                favoriler.length > 0 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
              disabled={favoriler.length === 0}
            >
              <Heart className="w-4 h-4" />
              Favorilerim ({favoriler.length})
            </button>
            
            <button
              onClick={yazdır}
              className="px-4 py-2 rounded-lg font-medium transition-colors bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Yazdır
            </button>
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
                        <div className="flex flex-col gap-4">
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
                          
                          {/* Aksion Butonları */}
                          <div className="flex flex-wrap gap-3 pt-3 border-t border-slate-100">
                            <button
                              onClick={() => favoriyeEkle(terim.terim)}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                favoriler.includes(terim.terim)
                                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                              }`}
                            >
                              <Heart className={`w-4 h-4 ${favoriler.includes(terim.terim) ? 'fill-current' : ''}`} />
                              {favoriler.includes(terim.terim) ? 'Favorilerde' : 'Favoriye Ekle'}
                            </button>
                            
                            <button
                              onClick={() => terimiKopyala(terim.terim, terim.tanimı)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-slate-100 text-slate-600 hover:bg-slate-200"
                            >
                              {kopyalananTerim === terim.terim ? (
                                <>
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  <span className="text-green-600">Kopyalandı</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4" />
                                  Kopyala
                                </>
                              )}
                            </button>
                            
                            <button
                              onClick={() => paylas(terim.terim, terim.tanimı)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-slate-100 text-slate-600 hover:bg-slate-200"
                            >
                              <Share2 className="w-4 h-4" />
                              Paylaş
                            </button>
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
          className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 text-center"
        >
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Aradığınız Terimi Bulamadınız mı?
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Hukuki terimlerin doğru anlaşılması önemlidir. Belirsizliğe mahal vermemek için 
            bizimle iletişime geçebilirsiniz.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            Hemen Danışın
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}
