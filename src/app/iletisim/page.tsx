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
                    <a href="tel:+905071129898" className="text-slate-600 hover:text-slate-900 transition-colors">
                      +90 507 112 98 98
                    </a>
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
                    <a href="mailto:info@akpinarhukuk.av.tr" className="text-slate-600 hover:text-slate-900 transition-colors">
                      info@akpinarhukuk.av.tr
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
                      href="https://wa.me/905071129898" 
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
                      Koşuyolu Mahallesi
                      Salih Omurtak Sokak, No:79A<br />
                      Kadıköy/İstanbul
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
                <p>Cumartesi: Kapalı</p>
                <p>Pazar: Kapalı</p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-300">
                  <span className="text-slate-100 font-medium">Acil Durumlar:</span><br />
                  7/24 ulaşılabilir: +90 507 112 98 98
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
                  className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white placeholder-slate-500"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  placeholder="Telefon Numaranız"
                  className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white placeholder-slate-500"
                />
              </div>

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="E-posta Adresiniz"
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white placeholder-slate-500"
              />

              <motion.select 
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white"
              >
                <option value="" className="text-slate-500">Hukuk Alanı Seçiniz</option>
                <option value="sigorta" className="text-slate-900">Sigorta Hukuku</option>
                <option value="ceza" className="text-slate-900">Ceza Hukuku</option>
                <option value="is" className="text-slate-900">İş Hukuku</option>
                <option value="ticaret" className="text-slate-900">Ticaret Hukuku</option>
                <option value="miras" className="text-slate-900">Miras Hukuku</option>
                <option value="saglik" className="text-slate-900">Sağlık Hukuku</option>
                <option value="gayrimenkul" className="text-slate-900">Gayrimenkul Hukuku</option>
                <option value="kira" className="text-slate-900">Kira Hukuku</option>
                <option value="kisiler" className="text-slate-900">Kişiler Hukuku</option>
                <option value="aile" className="text-slate-900">Aile Hukuku</option>
                <option value="esya" className="text-slate-900">Eşya Hukuku</option>
                <option value="borclar" className="text-slate-900">Borçlar Hukuku</option>
                <option value="tuketici" className="text-slate-900">Tüketici Hukuku</option>
                <option value="idare" className="text-slate-900">İdare Hukuku</option>
                <option value="fikri" className="text-slate-900">Fikri ve Sınai Haklar Hukuku</option>
                <option value="icra" className="text-slate-900">İcra İflas Hukuku</option>
              </motion.select>

              <motion.select 
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-slate-900 bg-white"
              >
                <option value="" className="text-slate-500">Aciliyet Durumu</option>
                <option value="acil" className="text-slate-900">Acil (24 saat içinde)</option>
                <option value="normal" className="text-slate-900">Normal (3-5 gün içinde)</option>
                <option value="bilgi" className="text-slate-900">Sadece Bilgi Almak İstiyorum</option>
              </motion.select>

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Durumunuzu detaylı bir şekilde açıklayın..."
                rows={5}
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all resize-none text-slate-900 bg-white placeholder-slate-500"
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
                    href="tel:+905071129898"
                    className="flex-1 bg-blue-50 text-blue-700 py-3 px-4 rounded-lg font-medium hover:bg-blue-100 transition-colors text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Hemen Ara
                  </motion.a>
                  <motion.a
                    href="https://wa.me/905071129898"
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
                  Koşuyolu Mahallesi Salih Omurtak Sokak, No:79A<br />
                  Kadıköy/İstanbul
                </p>
              </div>
              
              <div className="text-center lg:text-left">
                <h4 className="font-semibold text-slate-900 mb-2">Ulaşım</h4>
                <p className="text-slate-600 text-sm">
                  • Metro <br />
                  • Otobüs<br />
                  • Özel araç park imkanı mevcut
                </p>
              </div>

              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="text-center lg:text-left"
              >
                <a
                  href="https://www.google.com/maps/dir//Koşuyolu+Mh,+Salih+Omurtak+Sk,+No:79A,+34718+Kadıköy/İstanbul"
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
              <div className="rounded-2xl overflow-hidden shadow-lg h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7867467498904!2d29.03429157674725!3d41.0080405713506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab976d2041afd%3A0x2db9c19996887258!2zQXYuIEnFn8SxbCBCZW5naXN1IEFrcMSxbmFyIEh1a3VrIELDvHJvc3U!5e0!3m2!1str!2str!4v1755082699795!5m2!1str!2str" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Av. Işıl Bengisu Akpınar Hukuk Bürosu Konum"
                />
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  );
}