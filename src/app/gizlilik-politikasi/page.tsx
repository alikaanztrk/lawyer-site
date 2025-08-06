import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Av. Işıl Bengisu Akpınar',
  description: 'Web sitemizi kullanırken kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgiler.',
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gizlilik Politikası
          </h1>
          <p className="text-lg text-gray-600">
            Kişisel verilerinizin korunması bizim için önemlidir
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-sm text-gray-600 mb-0">
              <strong>Son Güncellenme:</strong> 01 Ocak 2024
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Giriş</h2>
            <p className="text-gray-700 leading-relaxed">
              Bu Gizlilik Politikası, Av. Işıl Bengisu Akpınar Hukuk Bürosu olarak, web sitemizi ziyaret ettiğinizde 
              veya hizmetlerimizi kullandığınızda kişisel verilerinizi nasıl topladığımız, kullandığımız, 
              sakladığımız ve koruduğumuz hakkında bilgi vermektedir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Toplanan Bilgiler</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Doğrudan Topladığımız Bilgiler</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>İletişim formları aracılığıyla paylaştığınız ad, soyad, e-posta adresi, telefon numarası</li>
              <li>Randevu talep formlarında belirttiğiniz bilgiler</li>
              <li>Hukuki danışma taleplerinizde yer alan durum açıklamaları</li>
              <li>Müvekkil olduğunuz durumda sözleşme ve dava süreçlerindeki bilgiler</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Otomatik Toplanan Bilgiler</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>IP adresi ve coğrafi konum bilgileri</li>
              <li>Tarayıcı türü ve sürümü</li>
              <li>Ziyaret edilen sayfalar ve kalınan süre</li>
              <li>Çerez verileri</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Bilgilerin Kullanım Amaçları</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hukuki danışmanlık ve avukatlık hizmetlerinin sunulması</li>
              <li>İletişim taleplerinin yanıtlanması</li>
              <li>Randevu planlaması ve takibi</li>
              <li>Hizmet kalitesinin iyileştirilmesi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Web sitesi performansının analiz edilmesi</li>
              <li>Güvenlik önlemlerinin alınması</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Çerezler (Cookies)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Çerez Türleri</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Zorunlu Çerezler:</strong> Web sitesinin temel işlevleri için gerekli</li>
              <li><strong>Analitik Çerezler:</strong> Site performansının analizi için</li>
              <li><strong>İşlevsel Çerezler:</strong> Tercihlerinizin hatırlanması için</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Çerez Yönetimi</h3>
            <p className="text-gray-700 leading-relaxed">
              Tarayıcınızın ayarlarından çerezleri yönetebilir, silebilir veya engelleyebilirsiniz. 
              Ancak bazı çerezleri engellemek web sitesinin bazı işlevlerini etkileyebilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Bilgi Paylaşımı</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel bilgilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Açık rızanızın bulunması durumunda</li>
              <li>Hukuki yükümlülüklerimizi yerine getirmek için</li>
              <li>Mahkeme kararı veya resmi talep durumunda</li>
              <li>Hizmet sağlayıcılarımızla (sunucu, analitik hizmetler) sınırlı paylaşım</li>
              <li>Dava süreçlerinde gerekli profesyonel paylaşımlar</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Veri Güvenliği</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel verilerinizin güvenliği için aşağıdaki önlemleri alırız:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>SSL şifreleme teknolojisi kullanımı</li>
              <li>Güvenli sunucu altyapısı</li>
              <li>Düzenli güvenlik güncellemeleri</li>
              <li>Erişim kontrolü ve yetkilendirme sistemleri</li>
              <li>Düzenli veri yedekleme</li>
              <li>Personel eğitimleri ve gizlilik sözleşmeleri</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Veri Saklama Süreleri</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel verilerinizi yalnızca gerekli olduğu süre boyunca saklarız. 
              Avukatlık Kanunu uyarınca müvekkil dosyaları minimum 10 yıl, 
              web sitesi analitik verileri maksimum 2 yıl, 
              iletişim form verileri 1 yıl süreyle saklanmaktadır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Haklarınız</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel verileriniz konusunda aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hangi kişisel verilerinizin işlendiğini öğrenme</li>
              <li>Kişisel verilerinizin düzeltilmesini isteme</li>
              <li>Kişisel verilerinizin silinmesini isteme</li>
              <li>Veri işlenmesine itiraz etme</li>
              <li>Verilerinizin başka yere aktarılmasını isteme</li>
              <li>Otomatik karar verme süreçlerine itiraz etme</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Üçüncü Taraf Hizmetleri</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Web sitemizde kullandığımız üçüncü taraf hizmetleri:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Google Analytics:</strong> Web sitesi trafiği analizi</li>
              <li><strong>Google Maps:</strong> Harita ve konum hizmetleri</li>
              <li><strong>reCAPTCHA:</strong> Spam koruması</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Bu hizmetlerin kendi gizlilik politikaları bulunmaktadır ve bu politikalar bizim 
              sorumluluğumuz altında değildir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Değişiklikler</h2>
            <p className="text-gray-700 leading-relaxed">
              Bu Gizlilik Politikası&apos;nda yapacağımız önemli değişiklikleri web sitemizde 
              duyurarak bildiririz. Politika değişikliklerini düzenli olarak kontrol etmenizi öneririz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. İletişim</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gizlilik Politikası ile ilgili sorularınız için:
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