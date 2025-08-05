import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yasal Uyarı | Av. Mehmet Özkan',
  description: 'Web sitesi kullanım şartları, sorumluluklar ve yasal uyarılar hakkında önemli bilgiler.',
};

export default function YasalUyariPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Yasal Uyarı
          </h1>
          <p className="text-lg text-gray-600">
            Web sitesi kullanım şartları ve yasal sorumluluklar
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-sm text-gray-600 mb-0">
              <strong>Son Güncellenme:</strong> 01 Ocak 2024
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Site Sahibi ve İletişim Bilgileri</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Site Sahibi:</strong> Av. Mehmet Özkan</li>
                <li><strong>Ticari Unvan:</strong> Mehmet Özkan Hukuk Bürosu</li>
                <li><strong>Adres:</strong> Nişantaşı Mahallesi, Teşvikiye Caddesi No: 123/4, Şişli/İstanbul</li>
                <li><strong>Telefon:</strong> +90 212 123 45 67</li>
                <li><strong>E-posta:</strong> info@av.tr</li>
                <li><strong>Baro Kayıt No:</strong> İstanbul Barosu - 12345</li>
                <li><strong>Vergi Numarası:</strong> 1234567890</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Web Sitesinin Amacı</h2>
            <p className="text-gray-700 leading-relaxed">
              Bu web sitesi, Av. Mehmet Özkan&apos;ın sunduğu avukatlık hizmetleri hakkında bilgi vermek, 
              hukuki danışmanlık talepleri almak ve müvekkiller ile iletişimi sağlamak amacıyla oluşturulmuştur. 
              Site üzerinden verilen bilgiler genel nitelikte olup, özel durumlar için mutlaka birebir görüşme yapılmalıdır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. İçerik ve Bilgi Sorumlulukları</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 İçerik Doğruluğu</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Web sitesinde yer alan tüm bilgiler genel bilgilendirme amaçlıdır. Hukuki bilgiler güncel 
              mevzuata göre hazırlanmış olmasına rağmen, yasal değişiklikler nedeniyle güncelliğini 
              yitirebilir. Kesin hukuki görüş için mutlaka uzman görüşü alınmalıdır.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Hukuki Tavsiye</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu web sitesindeki bilgiler, özel durumunuz için hukuki tavsiye niteliği taşımaz. 
              Her hukuki durum kendine özgüdür ve uzman bir avukatla birebir görüşme yapılması gereklidir.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Güncellik</h3>
            <p className="text-gray-700 leading-relaxed">
              Site içeriğini düzenli olarak güncellemeye çalışsak da, tüm bilgilerin her zaman 
              güncel olduğunu garanti edemeyiz. Önemli kararlardan önce güncel bilgi alınması önerilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kullanım Şartları</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Uygun Kullanım</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Site yalnızca yasal amaçlar için kullanılmalıdır</li>
              <li>Zararlı yazılım, virüs veya zararlı kod yüklenmemelidir</li>
              <li>Site güvenliği ihlal edilmemelidir</li>
              <li>Telif hakları ve fikri mülkiyet hakları korunmalıdır</li>
              <li>Spam veya istenmeyen içerik gönderilmemelidir</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Yasak Faaliyetler</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Site üzerinden yasa dışı faaliyet yürütmek</li>
              <li>Başkalarının haklarını ihlal etmek</li>
              <li>Yanıltıcı veya yanlış bilgi paylaşmak</li>
              <li>Site altyapısına zarar verecek eylemlerde bulunmak</li>
              <li>Ticari amaçlı spam göndermek</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Telif Hakları ve Fikri Mülkiyet</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu web sitesinin tüm içeriği (metin, görsel, tasarım, logo, kod) telif hakları ile korunmaktadır:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Site içeriği izin alınmadan kopyalanamaz, çoğaltılamaz</li>
              <li>Ticari amaçlı kullanım yasaktır</li>
              <li>Kaynak gösterilerek alıntı yapılabilir</li>
              <li>Logo ve marka unsurları özel izin gerektirir</li>
              <li>Üçüncü taraf içerikler kendi sahiplerinin telif hakkındadır</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sorumluluk Reddi</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Genel Sorumluluk</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Web sitesi &quot;olduğu gibi&quot; sunulmaktadır. Site kullanımından doğabilecek doğrudan 
              veya dolaylı zararlardan sorumlu değiliz. Bu zararlar şunları içerir ancak bunlarla sınırlı değildir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Bilgi kaybı veya veri hasarı</li>
              <li>İş kaybı veya gelir kaybı</li>
              <li>Sistem arızaları</li>
              <li>Üçüncü taraf bağlantılarından kaynaklanan sorunlar</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Teknik Sorunlar</h3>
            <p className="text-gray-700 leading-relaxed">
              Site erişilebilirliği, teknik hatalar, kesintiler veya güncellemeler sırasında 
              oluşabilecek problemlerden sorumlu değiliz. Site bakım, güncelleme veya teknik 
              nedenlerle geçici olarak erişilemeyebilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Üçüncü Taraf Bağlantıları</h2>
            <p className="text-gray-700 leading-relaxed">
              Web sitemizde yer alan dış bağlantılar sadece bilgilendirme amaçlıdır. Bu sitelerin 
              içeriği, gizlilik politikaları veya güvenliği konusunda sorumlu değiliz. 
              Dış bağlantıları kendi riskinizle ziyaret edersiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Veri ve Gizlilik</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel verilerinizin işlenmesi hakkında detaylı bilgi için 
              <a href="/gizlilik-politikasi" className="text-blue-600 hover:underline"> Gizlilik Politikası</a> ve 
              <a href="/kvkk" className="text-blue-600 hover:underline"> KVKK Aydınlatma Metni</a>&apos;ni inceleyiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Değişiklikler</h2>
            <p className="text-gray-700 leading-relaxed">
              Bu yasal uyarı ve kullanım şartları herhangi bir zamanda güncellenebilir. 
              Önemli değişiklikler web sitesinde duyurulacaktır. Site kullanımınızla 
              güncel şartları kabul etmiş sayılırsınız.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Uygulanacak Hukuk ve Yetki</h2>
            <p className="text-gray-700 leading-relaxed">
              Bu yasal uyarı Türkiye Cumhuriyeti hukukuna tabidir. Web sitesi kullanımından 
              doğabilecek uyuşmazlıklarda İstanbul mahkemeleri ve icra müdürlükleri yetkilidir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. İletişim</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu yasal uyarı ile ilgili sorularınız için:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li><strong>E-posta:</strong> info@av.tr</li>
                <li><strong>Telefon:</strong> +90 212 123 45 67</li>
                <li><strong>Adres:</strong> Nişantaşı Mahallesi, Teşvikiye Caddesi No: 123/4, Şişli/İstanbul</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}