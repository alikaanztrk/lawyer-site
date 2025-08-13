'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Hukuki durumunuz hakkında görüş almak için bizimle iletişime geçin. 
            Size en uygun çözümü birlikte bulalım.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* İletişim Bilgileri */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                İletişim Kanalları
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all"
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
                  className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">E-posta</h4>
                    <a href="mailto:info@akpinarhukuk.av.tr" className="text-slate-600 hover:text-slate-900 transition-colors">
                      info@akpinarhukuk.av.tr
                    </a>
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
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white p-8 rounded-2xl"
            >
              <h4 className="text-lg font-semibold mb-3">Çalışma Saatleri</h4>
              <div className="space-y-2 text-slate-300">
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                <p>Cumartesi / Pazar: Kapalı</p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-300">
                  <span className="text-slate-100 font-medium">Danışmak için:</span><br />
                  +90 507 112 98 98
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hızlı İletişim Formu */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Hızlı İletişim
            </h3>
            <p className="text-slate-600 mb-8">
              Formu doldurun, size en kısa sürede dönüş yapalım.
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

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Durumunuzu kısaca açıklayın..."
                rows={4}
                className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all resize-none"
              />

              <div className="flex items-start space-x-3">
                <input type="checkbox" id="contact-kvkk" className="mt-1" />
                <label htmlFor="contact-kvkk" className="text-sm text-slate-600">
                  <a href="/kvkk" className="text-slate-700 hover:underline">
                    KVKK kapsamında
                  </a> kişisel verilerimin işlenmesine onay veriyorum.
                </label>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="w-full bg-slate-900 hover:bg-slate-800 py-4 rounded-xl text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Mesaj Gönder
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}