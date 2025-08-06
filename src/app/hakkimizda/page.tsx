'use client';

import Image from 'next/image';
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
            Profesyonel hukuki danışmanlık ve güvenilir çözümler sunan, 
            İstanbul merkezli uzman hukuk bürosu.
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
              <div className="w-48 h-48 mx-auto rounded-full mb-8 overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/images/db6a08605d87ee01c65b32daff2ad111.jpg"
                  alt="Av. Işıl Bengisu Akpınar Profil Fotoğrafı"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-3">Av. Işıl Bengisu Akpınar</h2>
                <p className="text-slate-200">Hukuk Bürosu Kurucusu</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">
              Deneyim ve Uzmanlık
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                              2019 yılından bu yana hukuk alanında aktif olarak çalışmakta olan Av. Işıl Bengisu Akpınar, 
              Galatasaray Üniversitesi Hukuk Fakültesi mezunu olup, 5 yılı aşkın deneyimi ile 
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

        {/* Hukuk Bürosu Tanıtımı */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-12 mb-24"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Akpınar Hukuk Bürosu
            </h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              Akpınar Hukuk Bürosu, müvekkillerine etkin, güvenilir ve çözüm odaklı hukuki hizmet sunmayı ilke edinmiş bir hukuk bürosudur. 
              Gerçek ve tüzel kişilere, danışmanlık ve dava süreçlerinde profesyonel destek sağlamaktadır. 
            </p>
            <p className="text-lg text-slate-700 leading-relaxed text-center mt-6">
              Hukukun üstünlüğü ve adalet anlayışı çerçevesinde faaliyet gösteren büromuz; 
              <span className="font-semibold text-slate-800"> sigorta hukuku, ceza hukuku, icra ve iflas hukuku, tüketici hukuku, aile hukuku, şirketler hukuku, iş hukuku</span> başta olmak üzere 
              farklı hukuk alanlarında, güncel bilgi ve deneyime dayalı titiz bir yaklaşımla çözüm üretmeyi amaçlamaktadır.
            </p>
            
            <div className="flex justify-center mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <Scale className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p className="text-sm text-slate-600 font-medium text-center">
                  Adalet ve Hakkaniyet
                </p>
              </div>
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
                <p className="text-slate-600">Koç Üniversitesi Sosyal Bilimler Enstitüsü - 2021</p>
              </motion.div>
              <motion.div 
                whileHover={{ x: 4 }}
                className="border-l-4 border-slate-300 pl-8 py-4 bg-slate-50 rounded-r-2xl"
              >
                <h4 className="font-bold text-slate-900 text-lg">Hukuk Lisans</h4>
                <p className="text-slate-600">Galatasaray Üniversitesi Hukuk Fakültesi - 2019</p>
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

        {/* Başarı İstatistikleri */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-slate-900 text-white py-20 rounded-3xl mb-20"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Başarı İstatistikleri
              </h2>
              <p className="text-xl text-slate-300">
                Müvekkillerimize sunduğumuz hizmetlerin sonuçları
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  xxx
                </div>
                <div className="text-lg text-slate-300">
                  Başarılı Dava
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  90%
                </div>
                <div className="text-lg text-slate-300">
                  Başarı Oranı
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  150+
                </div>
                <div className="text-lg text-slate-300">
                  Mutlu Müvekkil
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  45+
                </div>
                <div className="text-lg text-slate-300">
                  Aktif Dava
                </div>
              </div>
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
              'Sigorta Hukuku',
              'Ceza Hukuku',
              'İş Hukuku',
              'İcra ve İflas Hukuku',
              'Ticaret Hukuku',
              'Miras Hukuku',
              'Sağlık Hukuku',
              'Gayrimenkul Hukuku',
              'Kira Hukuku',
              'Kişiler Hukuku',
              'Aile Hukuku',
              'Eşya Hukuku',
              'Borçlar Hukuku',
              'Tüketici Hukuku',
              'İdare Hukuku',
              'Fikri ve Sinai Haklar Hukuku'
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