'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Phone, Mail, CheckCircle, Send, Loader } from 'lucide-react';

export default function RandevuPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formData = new FormData(e.currentTarget);
      const randevuData = {
        ad: formData.get('ad'),
        telefon: formData.get('telefon'),
        email: formData.get('email'),
        hukukAlani: formData.get('hukukAlani'),
        tarih: formData.get('tarih'),
        saat: formData.get('saat'),
        gorusmeTuru: formData.get('gorusmeTuru'),
        durum: formData.get('durum'),
        aciliyet: formData.get('aciliyet'),
        kvkk: formData.get('kvkk')
      };

      const response = await fetch('/api/randevu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(randevuData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Form'u reset et
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Randevu gönderilirken bir hata oluştu');
      }
    } catch (err) {
      setError('Randevu talebiniz gönderilemedi. Lütfen tekrar deneyin.');
      console.error('Randevu gönderme hatası:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Randevu Talep Et
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hukuki sorununuz için ücretsiz ilk görüşme randevusu alın. 
            Size en uygun çözümü birlikte bulalım.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Randevu Formu */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Randevu Bilgileri
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Kişisel Bilgiler */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="ad"
                  placeholder="Adınız Soyadınız *"
                  className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white placeholder-slate-500"
                  required
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  name="telefon"
                  placeholder="Telefon Numaranız *"
                  className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white placeholder-slate-500"
                  required
                />
              </div>

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="E-posta Adresiniz *"
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white placeholder-slate-500"
                required
              />

              {/* Hukuk Alanı */}
              <motion.select 
                whileFocus={{ scale: 1.02 }}
                name="hukukAlani"
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white"
                required
              >
                <option value="" className="text-slate-900">Hukuk Alanı Seçiniz *</option>
                <option value="sigorta">Sigorta Hukuku</option>
                <option value="ceza">Ceza Hukuku</option>
                <option value="is">İş Hukuku</option>
                <option value="ticaret">Ticaret Hukuku</option>
                <option value="miras">Miras Hukuku</option>
                <option value="saglik">Sağlık Hukuku</option>
                <option value="gayrimenkul">Gayrimenkul Hukuku</option>
                <option value="kira">Kira Hukuku</option>
                <option value="kisiler">Kişiler Hukuku</option>
                <option value="aile">Aile Hukuku</option>
                <option value="esya">Eşya Hukuku</option>
                <option value="borclar">Borçlar Hukuku</option>
                <option value="tuketici">Tüketici Hukuku</option>
                <option value="idare">İdare Hukuku</option>
                <option value="fikri">Fikri ve Sınai Haklar Hukuku</option>
                <option value="icra">İcra İflas Hukuku</option>
              </motion.select>

              {/* Randevu Tarihi ve Saati */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="date"
                  name="tarih"
                  className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
                <motion.select 
                  whileFocus={{ scale: 1.02 }}
                  name="saat"
                  className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white"
                  required
                >
                  <option value="" className="text-slate-900">Saat Seçiniz *</option>
                  <option value="09:00" className="text-slate-900">09:00</option>
                  <option value="10:00" className="text-slate-900">10:00</option>
                  <option value="11:00" className="text-slate-900">11:00</option>
                  <option value="14:00" className="text-slate-900">14:00</option>
                  <option value="15:00" className="text-slate-900">15:00</option>
                  <option value="16:00" className="text-slate-900">16:00</option>
                  <option value="17:00" className="text-slate-900">17:00</option>
                </motion.select>
              </div>

              {/* Görüşme Türü */}
              <motion.select 
                whileFocus={{ scale: 1.02 }}
                name="gorusmeTuru"
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white"
                required
              >
                <option value="" className="text-slate-900">Görüşme Türü Seçiniz *</option>
                <option value="yuz-yuze" className="text-slate-900">Yüz Yüze Görüşme (Ofiste)</option>
                <option value="video" className="text-slate-900">Video Görüşme (Online)</option>
                <option value="telefon" className="text-slate-900">Telefon Görüşmesi</option>
              </motion.select>

              {/* Durum Açıklaması */}
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="durum"
                placeholder="Hukuki durumunuzu kısaca açıklayın... *"
                rows={4}
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all resize-none text-slate-900 bg-white placeholder-slate-500"
                required
              />

              {/* Aciliyet */}
              <motion.select 
                whileFocus={{ scale: 1.02 }}
                name="aciliyet"
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white"
              >
                <option value="" className="text-slate-900">Aciliyet Durumu</option>
                <option value="cok-acil" className="text-slate-900">Çok Acil (24 saat içinde)</option>
                <option value="acil" className="text-slate-900">Acil (2-3 gün içinde)</option>
                <option value="normal" className="text-slate-900">Normal (1 hafta içinde)</option>
              </motion.select>

              {/* KVKK */}
              <div className="flex items-start space-x-3">
                <input type="checkbox" id="randevu-kvkk" name="kvkk" className="mt-1" required />
                <label htmlFor="randevu-kvkk" className="text-sm text-slate-600">
                  <a href="/kvkk" className="text-slate-700 hover:underline">
                    KVKK kapsamında
                  </a> kişisel verilerimin işlenmesine onay veriyorum. *
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Randevu talebiniz başarıyla gönderildi! 24 saat içinde size dönüş yapacağız.
                </div>
              )}

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white py-4 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 mr-2 animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Randevu Talep Et
                    </>
                  )}
                </button>
              </motion.div>

              <p className="text-sm text-slate-500 text-center">
                * İşaretli alanlar zorunludur. Randevunuz 24 saat içinde onaylanacaktır.
              </p>
            </form>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Randevu Bilgileri */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-50 p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Randevu Hakkında
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 text-sm">
                    <strong>İlk görüşme ücretsizdir</strong> - Durumunuzu değerlendirip size en uygun çözümü sunarız
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 text-sm">
                    <strong>Esnek randevu saatleri</strong> - Çalışma saatlerinize uygun randevu imkanı
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 text-sm">
                    <strong>Online görüşme seçeneği</strong> - Video konferans ile uzaktan danışmanlık
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 text-sm">
                    <strong>Gizlilik garantisi</strong> - Tüm görüşmeler müvekkil gizliliği kapsamındadır
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Çalışma Saatleri */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-slate-900 text-white p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Çalışma Saatleri
              </h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex justify-between">
                  <span>Pazartesi - Cuma</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi</span>
                  <span>Kapalı</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar</span>
                  <span>Kapalı</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-sm text-slate-300">
                  <strong>Acil Durumlar:</strong><br />
                  7/24 ulaşılabilir: +90 507 112 98 98
                </p>
              </div>
            </motion.div>

            {/* Hızlı İletişim */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white border border-slate-200 p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Hızlı İletişim
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="tel:+905071129898"
                  className="flex items-center p-4 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Hemen Arayın</div>
                    <div className="text-sm">+90 507 112 98 98</div>
                  </div>
                </motion.a>
                <motion.a
                  href="mailto:info@akpinarhukuk.av.tr"
                  className="flex items-center p-4 bg-slate-50 text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">E-posta</div>
                    <div className="text-sm">info@akpinarhukuk.av.tr</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}