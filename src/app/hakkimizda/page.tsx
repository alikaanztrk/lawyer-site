'use client';

import { Scale, Award, Users, Calendar, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HakkimizdaPage() {
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
            Hakkımızda
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            15 yılı aşkın deneyimi ile müvekkillerine en kaliteli hukuki hizmetleri sunan, 
            güven veren bir avukat olarak İstanbul merkezli hizmet veriyoruz.
          </p>
        </motion.div>

        {/* Avukat Profili */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 text-white">
              <div className="w-48 h-48 mx-auto bg-white/10 rounded-full mb-8 flex items-center justify-center backdrop-blur-sm">
                <Scale className="w-24 h-24 text-white" />
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-3">Av. Işıl Akpınar</h2>
                <p className="text-slate-200">Hukuk Bürosu Kurucusu</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">
              Deneyim ve Uzmanlık
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              2008 yılından bu yana hukuk alanında aktif olarak çalışmakta olan Av. Işıl Akpınar, 
              İstanbul Üniversitesi Hukuk Fakültesi mezunu olup, 15 yılı aşkın deneyimi ile 
              müvekkillerine en kaliteli hukuki hizmetleri sunmaktadır.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Adalet ve hakkaniyet prensipleri doğrultusunda, müvekkillerimin haklarını en iyi 
              şekilde korumak ve hukuki süreçlerde onlara rehberlik etmek temel misyonumdur.
            </p>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-slate-50 rounded-2xl"
              >
                <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
                <div className="text-slate-600">Başarılı Dava</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-slate-50 rounded-2xl"
              >
                <div className="text-4xl font-bold text-slate-900 mb-2">%95</div>
                <div className="text-slate-600">Müvekkil Memnuniyeti</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Eğitim ve Sertifikalar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-24"
        >
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
              <Award className="w-8 h-8 mr-4 text-slate-600" />
              Eğitim Hayatı
            </h3>
            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 4 }}
                className="border-l-4 border-slate-300 pl-8 py-4 bg-slate-50 rounded-r-2xl"
              >
                <h4 className="font-bold text-slate-900 text-lg">Hukuk Yüksek Lisans</h4>
                <p className="text-slate-600">Marmara Üniversitesi - 2010</p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 4 }}
                className="border-l-4 border-slate-300 pl-8 py-4 bg-slate-50 rounded-r-2xl"
              >
                <h4 className="font-bold text-slate-900 text-lg">Hukuk Lisans</h4>
                <p className="text-slate-600">İstanbul Üniversitesi Hukuk Fakültesi - 2008</p>
              </motion.div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
              <Users className="w-8 h-8 mr-4 text-slate-600" />
              Sertifikalar ve Üyelikler
            </h3>
            <div className="space-y-4">
              {[
                'İstanbul Barosu Üyesi - 12345',
                'Arabuluculuk Sertifikası', 
                'İcra İflas Hukuku Sertifikası',
                'Ticaret Hukuku Uzmanlık'
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl"
                >
                  <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
                  <span className="text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Uzmanlaştığı Alanlar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Uzmanlaştığı Hukuk Alanları
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Ceza Hukuku',
              'Medeni Hukuk',
              'Ticaret Hukuku',
              'İş Hukuku',
              'Gayrimenkul Hukuku',
              'Aile Hukuku',
              'İcra İflas Hukuku'
            ].map((alan, index) => (
              <motion.div 
                key={alan}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 p-6 rounded-2xl text-center hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <span className="font-medium text-slate-700">{alan}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* İletişim Bilgileri */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            İletişim ve Ofis Bilgileri
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -4 }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm"
            >
              <MapPin className="w-12 h-12 text-slate-600 mx-auto mb-6" />
              <h4 className="font-bold text-slate-900 mb-4">Adres</h4>
              <p className="text-slate-600 leading-relaxed">
                Nişantaşı Mahallesi<br />
                Teşvikiye Caddesi No: 123/4<br />
                Şişli/İstanbul
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -4 }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm"
            >
              <Phone className="w-12 h-12 text-slate-600 mx-auto mb-6" />
              <h4 className="font-bold text-slate-900 mb-4">Telefon</h4>
              <p className="text-slate-600 mb-2">+90 212 123 45 67</p>
              <p className="text-sm text-slate-700 font-medium">
                Acil: +90 533 123 45 67
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -4 }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm"
            >
              <Calendar className="w-12 h-12 text-slate-600 mx-auto mb-6" />
              <h4 className="font-bold text-slate-900 mb-4">Çalışma Saatleri</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pazartesi - Cuma: 09:00 - 18:00<br />
                Cumartesi: 09:00 - 14:00<br />
                Pazar: Kapalı
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}