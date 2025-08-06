'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock, Calendar } from 'lucide-react';

export default function IletisimPage() {
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
            İletişim
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hukuki durumunuz hakkında görüş almak için bizimle iletişime geçin. 
            Size en uygun çözümü birlikte bulalım.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* İletişim Bilgileri */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                İletişim Kanalları
              </h2>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100"
                >
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Telefon</h4>
                    <a href="tel:+902121234567" className="text-slate-600 hover:text-slate-900 transition-colors">
                      +90 212 123 45 67
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Acil: +90 533 123 45 67
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100"
                >
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">E-posta</h4>
                    <a href="mailto:info@av.tr" className="text-slate-600 hover:text-slate-900 transition-colors">
                      info@av.tr
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      24 saat içinde yanıt
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-4 p-6 bg-green-50 rounded-2xl shadow-sm hover:shadow-md transition-all border border-green-100"
                >
                  <div className="bg-green-100 p-3 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">WhatsApp</h4>
                    <a 
                      href="https://wa.me/905331234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors font-medium"
                    >
                      Hızlı Mesaj Gönder
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Anında yanıt
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100"
                >
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Adres</h4>
                    <p className="text-slate-600">
                      Nişantaşı Mahallesi<br />
                      Teşvikiye Caddesi No: 123/4<br />
                      Şişli/İstanbul
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900 text-white p-8 rounded-2xl"
            >
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Çalışma Saatleri
              </h4>
              <div className="space-y-2 text-slate-300">
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                <p>Cumartesi: 09:00 - 14:00</p>
                <p>Pazar: Kapalı</p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-300">
                  <span className="text-slate-100 font-medium">Acil Durumlar:</span><br />
                  7/24 ulaşılabilir: +90 533 123 45 67
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Hızlı İletişim Formu
            </h3>
            <p className="text-slate-600 mb-8">
              Formu doldurun, size en kısa sürede dönüş yapalım. Tüm görüşmeler gizlidir.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  placeholder="Telefon Numaranız"
                  className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                />
              </div>

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="E-posta Adresiniz"
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
              />

              <motion.select 
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
              >
                <option value="">Hukuk Alanı Seçiniz</option>
                <option value="ceza">Ceza Hukuku</option>
                <option value="medeni">Medeni Hukuk</option>
                <option value="ticaret">Ticaret Hukuku</option>
                <option value="is">İş Hukuku</option>
                <option value="aile">Aile Hukuku</option>
                <option value="gayrimenkul">Gayrimenkul Hukuku</option>
                <option value="icra">İcra İflas Hukuku</option>
              </motion.select>

              <motion.select 
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
              >
                <option value="">Aciliyet Durumu</option>
                <option value="acil">Acil (24 saat içinde)</option>
                <option value="normal">Normal (3-5 gün içinde)</option>
                <option value="bilgi">Sadece Bilgi Almak İstiyorum</option>
              </motion.select>

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Durumunuzu detaylı bir şekilde açıklayın..."
                rows={5}
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all resize-none"
              />

              <div className="flex items-start space-x-3">
                <input type="checkbox" id="contact-kvkk" className="mt-1" />
                <label htmlFor="contact-kvkk" className="text-sm text-slate-600">
                  <a href="/kvkk" className="text-slate-700 hover:underline">
                    KVKK kapsamında
                  </a> kişisel verilerimin işlenmesine onay veriyorum. Gönderdiğim bilgilerin gizli tutulacağını kabul ediyorum.
                </label>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button 
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Mesajı Gönder
                </button>
              </motion.div>

              <div className="text-center">
                <p className="text-sm text-slate-500">
                  Veya hızlı görüşme için
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-3">
                  <motion.a
                    href="tel:+902121234567"
                    className="flex-1 bg-blue-50 text-blue-700 py-3 px-4 rounded-lg font-medium hover:bg-blue-100 transition-colors text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Hemen Ara
                  </motion.a>
                  <motion.a
                    href="https://wa.me/905331234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-50 text-green-700 py-3 px-4 rounded-lg font-medium hover:bg-green-100 transition-colors text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    WhatsApp
                  </motion.a>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Harita ve Adres */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-slate-50 rounded-3xl p-8 lg:p-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Ofis Konumumuz
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Av. Işıl Bengisu Akpınar Hukuk Bürosu
                </h3>
                <p className="text-slate-600">
                  Nişantaşı Mahallesi<br />
                  Teşvikiye Caddesi No: 123/4<br />
                  34367 Şişli/İstanbul
                </p>
              </div>
              
              <div className="text-center lg:text-left">
                <h4 className="font-semibold text-slate-900 mb-2">Ulaşım</h4>
                <p className="text-slate-600 text-sm">
                  • Metro: Osmanbey (5 dk yürüme)<br />
                  • Otobüs: Teşvikiye durağı<br />
                  • Özel araç park imkanı mevcut
                </p>
              </div>

              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="text-center lg:text-left"
              >
                <a
                  href="https://www.google.com/maps/dir//Nişantaşı,+Teşvikiye+Cd.+No:123,+34367+Şişli/İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Yol Tarifi Al
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-slate-200 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p>Interaktif harita entegrasyonu</p>
                  <p className="text-sm">Google Maps API ile geliştirilecek</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Randevu Bölümü */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <Calendar className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-6">
            Randevu Alın, Hukuki Sorunlarınızı Çözün
          </h2>
          <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto">
            İlk görüşme ücretsizdir. Durumunuzu değerlendirip, size en uygun hukuki çözümü sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+902121234567"
              className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Hemen Ara
            </motion.a>
            <motion.a
              href="https://wa.me/905331234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Randevu
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}