import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Av. Işıl Bengisu Akpınar',
  description: 'Web sitemizi kullanırken kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgiler.',
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Gizlilik Politikası
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kişisel verilerinizin korunması bizim için önemlidir
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl mb-12">
            <p className="text-sm text-slate-600 mb-0 font-medium">
              <strong className="text-slate-800">Son Güncellenme:</strong> 15 Ocak 2025
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Giriş</h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              Bu Gizlilik Politikası, Av. Işıl Bengisu Akpınar Hukuk Bürosu olarak, web sitemizi ziyaret ettiğinizde 
              veya hizmetlerimizi kullandığınızda kişisel verilerinizi nasıl topladığımız, kullandığımız, 
              sakladığımız ve koruduğumuz hakkında bilgi vermektedir.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">2. Toplanan Bilgiler</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">2.1 Doğrudan Topladığımız Bilgiler</h3>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
              <ul className="list-disc pl-6 space-y-3 text-slate-700">
                <li>İletişim formları aracılığıyla paylaştığınız ad, soyad, e-posta adresi, telefon numarası</li>
                <li>Randevu talep formlarında belirttiğiniz bilgiler</li>
                <li>Hukuki danışma taleplerinizde yer alan durum açıklamaları</li>
                <li>Müvekkil olduğunuz durumda sözleşme ve dava süreçlerindeki bilgiler</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">2.2 Otomatik Toplanan Bilgiler</h3>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <ul className="list-disc pl-6 space-y-3 text-slate-700">
                <li>IP adresi ve coğrafi konum bilgileri</li>
                <li>Tarayıcı türü ve sürümü</li>
                <li>Ziyaret edilen sayfalar ve kalınan süre</li>
                <li>Çerez verileri</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">3. Bilgilerin Kullanım Amaçları</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Hukuki danışmanlık ve avukatlık hizmetlerinin sunulması</li>
              <li>İletişim taleplerinin yanıtlanması</li>
              <li>Randevu planlaması ve takibi</li>
              <li>Hizmet kalitesinin iyileştirilmesi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Web sitesi performansının analiz edilmesi</li>
              <li>Güvenlik önlemlerinin alınması</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">4. Çerezler (Cookies)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır:
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">4.1 Çerez Türleri</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
              <li><strong>Zorunlu Çerezler:</strong> Web sitesinin temel işlevleri için gerekli</li>
              <li><strong>Analitik Çerezler:</strong> Site performansının analizi için</li>
              <li><strong>İşlevsel Çerezler:</strong> Tercihlerinizin hatırlanması için</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">4.2 Çerez Yönetimi</h3>
            <p className="text-slate-700 leading-relaxed">
              Tarayıcınızın ayarlarından çerezleri yönetebilir, silebilir veya engelleyebilirsiniz. 
              Ancak bazı çerezleri engellemek web sitesinin bazı işlevlerini etkileyebilir.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">5. Bilgi Paylaşımı</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Kişisel bilgilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Açık rızanızın bulunması durumunda</li>
              <li>Hukuki yükümlülüklerimizi yerine getirmek için</li>
              <li>Mahkeme kararı veya resmi talep durumunda</li>
              <li>Hizmet sağlayıcılarımızla (sunucu, analitik hizmetler) sınırlı paylaşım</li>
              <li>Dava süreçlerinde gerekli profesyonel paylaşımlar</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">6. Veri Güvenliği</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Kişisel verilerinizin güvenliği için aşağıdaki önlemleri alırız:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>SSL şifreleme teknolojisi kullanımı</li>
              <li>Güvenli sunucu altyapısı</li>
              <li>Düzenli güvenlik güncellemeleri</li>
              <li>Erişim kontrolü ve yetkilendirme sistemleri</li>
              <li>Düzenli veri yedekleme</li>
              <li>Personel eğitimleri ve gizlilik sözleşmeleri</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">7. Veri Saklama Süreleri</h2>
            <p className="text-slate-700 leading-relaxed">
              Kişisel verilerinizi yalnızca gerekli olduğu süre boyunca saklarız. 
              Avukatlık Kanunu uyarınca müvekkil dosyaları minimum 10 yıl, 
              web sitesi analitik verileri maksimum 2 yıl, 
              iletişim form verileri 1 yıl süreyle saklanmaktadır.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">8. Haklarınız</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Kişisel verileriniz konusunda aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Hangi kişisel verilerinizin işlendiğini öğrenme</li>
              <li>Kişisel verilerinizin düzeltilmesini isteme</li>
              <li>Kişisel verilerinizin silinmesini isteme</li>
              <li>Veri işlenmesine itiraz etme</li>
              <li>Verilerinizin başka yere aktarılmasını isteme</li>
              <li>Otomatik karar verme süreçlerine itiraz etme</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">9. Üçüncü Taraf Hizmetleri</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Web sitemizde kullandığımız üçüncü taraf hizmetleri:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Google Analytics:</strong> Web sitesi trafiği analizi</li>
              <li><strong>Google Maps:</strong> Harita ve konum hizmetleri</li>
              <li><strong>reCAPTCHA:</strong> Spam koruması</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              Bu hizmetlerin kendi gizlilik politikaları bulunmaktadır ve bu politikalar bizim 
              sorumluluğumuz altında değildir.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">10. Değişiklikler</h2>
            <p className="text-slate-700 leading-relaxed">
              Bu Gizlilik Politikası&apos;nda yapacağımız önemli değişiklikleri web sitemizde 
              duyurarak bildiririz. Politika değişikliklerini düzenli olarak kontrol etmenizi öneririz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">11. İletişim</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Gizlilik Politikası ile ilgili sorularınız için:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 rounded-lg">
              <ul className="space-y-2 text-slate-700">
                <li><strong>E-posta:</strong> info@akpinarhukuk.av.tr</li>
                <li><strong>Telefon:</strong> +90 507 112 98 98</li>
                <li><strong>Adres:</strong> Koşuyolu Mh, Salih Omurtak Sk, No:79A, 34718 Kadıköy/İstanbul</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}