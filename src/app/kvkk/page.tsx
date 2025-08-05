import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | Av. Mehmet Özkan',
  description: 'Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesi hakkında aydınlatma metni.',
};

export default function KVKKPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-lg text-gray-600">
            Kişisel Verilerin Korunması Kanunu Kapsamında Aydınlatma Metni
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-sm text-gray-600 mb-0">
              <strong>Son Güncellenme:</strong> 01 Ocak 2024
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Veri Sorumlusu</h2>
            <p className="text-gray-700 leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, kişisel verileriniz; 
              veri sorumlusu olarak <strong>Av. Mehmet Özkan Hukuk Bürosu</strong> (Nişantaşı Mahallesi, 
              Teşvikiye Caddesi No: 123/4, Şişli/İstanbul) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Kişisel Verilerin İşlenme Amacı</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel verileriniz aşağıdaki amaçlar doğrultusunda işlenmektedir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hukuki danışmanlık ve müvekkil temsil hizmetlerinin sunulması</li>
              <li>İletişim ve bilgilendirme faaliyetlerinin yürütülmesi</li>
              <li>Randevu planlama ve takip işlemlerinin gerçekleştirilmesi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Müvekkil memnuniyetinin ölçülmesi ve hizmet kalitesinin artırılması</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. İşlenen Kişisel Veri Türleri</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aşağıdaki kişisel veri kategorileri işlenmektedir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Kimlik Verileri:</strong> Ad, soyad, T.C. kimlik numarası</li>
              <li><strong>İletişim Verileri:</strong> Telefon numarası, e-posta adresi, adres bilgileri</li>
              <li><strong>Müvekkil Verileri:</strong> Dava konusu, hukuki durum, belge ve evraklar</li>
              <li><strong>Finansal Veriler:</strong> Ödeme bilgileri, fatura adresi</li>
              <li><strong>Teknik Veriler:</strong> IP adresi, çerez verileri (web sitesi kullanımı)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kişisel Verilerin İşlenme Hukuki Sebepleri</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel verileriniz KVKK&apos;nın 5. maddesinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Açık rızanızın bulunması</li>
              <li>Bir sözleşmenin kurulması veya ifası için gerekli olması</li>
              <li>Hukuki yükümlülüğün yerine getirilmesi</li>
              <li>Meşru menfaatimizin bulunması</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kişisel Verilerin Paylaşılması</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel verileriniz aşağıdaki durumlar ve kişiler ile paylaşılabilir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Mahkemeler, savcılıklar ve diğer adli merciler</li>
              <li>Baro ve meslek kuruluşları</li>
              <li>İş ortağı avukatlar ve hukuk büroları (gerekli hallerde)</li>
              <li>Bilişim alt yapı hizmeti aldığımız firmalar</li>
              <li>Yasal yükümlülükler kapsamında kamu kurum ve kuruluşları</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kişisel Verilerin Saklama Süresi</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve/veya ilgili mevzuatta 
              öngörülen süreler boyunca saklanacaktır. Avukatlık Kanunu ve ilgili mevzuat uyarınca, 
              müvekkil dosyaları en az 10 yıl süreyle saklanmaktadır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Kişisel Veri Sahibinin Hakları</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              KVKK&apos;nın 11. maddesi uyarınca sahip olduğunuz haklar:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
              <li>Kişisel verilerin düzeltilmesi, silinmesi veya yok edilmesi halinde bu işlemlerin, 
                  kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle 
                  kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde 
                  zararın giderilmesini talep etme</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Başvuru Yöntemi</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle başvuruda bulunabilirsiniz:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li><strong>E-posta:</strong> info@av.tr</li>
                <li><strong>Posta:</strong> Nişantaşı Mahallesi, Teşvikiye Caddesi No: 123/4, Şişli/İstanbul</li>
                <li><strong>Telefon:</strong> +90 212 123 45 67</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Başvurularınız en geç 30 gün içinde yanıtlanacaktır. Başvurularda istenecek bilgiler; 
              ad, soyad, T.C. kimlik numarası, iletişim bilgileri ve talep konusu olacaktır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. İletişim</h2>
            <p className="text-gray-700 leading-relaxed">
              KVKK kapsamındaki sorularınız için <strong>info@av.tr</strong> e-posta adresinden 
              veya <strong>+90 212 123 45 67</strong> telefon numarasından bizimle iletişime geçebilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}