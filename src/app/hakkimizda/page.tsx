'use client';

import Image from 'next/image';
import { Scale, Calendar, MapPin, Phone } from 'lucide-react';
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

        {/* 3D Animasyonlu Adalet Terazisi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative py-32 mb-24 overflow-hidden"
        >
          {/* Arka Plan Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl"></div>
          
          {/* Işık Efektleri */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            {/* Başlık */}
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Adalet ve Hakkaniyet
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto"
            >
              Her davada adaletin tecellisi için çalışıyor, hukukun üstünlüğüne olan inancımızla hareket ediyoruz
            </motion.p>

            {/* 3D Terazi Animasyonu */}
            <div className="relative flex justify-center items-center h-80">
              {/* Terazi Ana Gövdesi */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Terazi Direği */}
                <motion.div 
                  animate={{ 
                    rotateY: [0, 10, -10, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-3 h-48 bg-gradient-to-b from-amber-400 to-amber-600 mx-auto rounded-full shadow-2xl"
                  style={{
                    boxShadow: '0 0 30px rgba(251, 191, 36, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.2)'
                  }}
                ></motion.div>

                {/* Terazi Çubuğu */}
                <motion.div 
                  animate={{ 
                    rotate: [0, -2, 2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-12 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-full shadow-lg"
                  style={{
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)'
                  }}
                ></motion.div>

                {/* Sol Kefe */}
                <motion.div 
                  animate={{ 
                    y: [0, -8, -4, 0],
                    rotate: [0, -1, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-16 -left-24 w-20 h-16"
                >
                  {/* Kefe Çanakları */}
                  <div className="w-20 h-4 bg-gradient-to-b from-slate-300 to-slate-500 rounded-full shadow-xl"></div>
                  <div className="w-16 h-12 bg-gradient-to-b from-slate-400 to-slate-600 rounded-b-full mx-auto shadow-inner"
                       style={{
                         boxShadow: 'inset 0 -4px 8px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.2)'
                       }}
                  ></div>
                  {/* Zincir */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-amber-500 -translate-y-8"></div>
                </motion.div>

                {/* Sağ Kefe */}
                <motion.div 
                  animate={{ 
                    y: [0, -4, -8, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-16 -right-24 w-20 h-16"
                >
                  {/* Kefe Çanakları */}
                  <div className="w-20 h-4 bg-gradient-to-b from-slate-300 to-slate-500 rounded-full shadow-xl"></div>
                  <div className="w-16 h-12 bg-gradient-to-b from-slate-400 to-slate-600 rounded-b-full mx-auto shadow-inner"
                       style={{
                         boxShadow: 'inset 0 -4px 8px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.2)'
                       }}
                  ></div>
                  {/* Zincir */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-amber-500 -translate-y-8"></div>
                </motion.div>

                {/* Terazi Tabanı */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-amber-500 to-amber-700 rounded-full shadow-2xl"
                  style={{
                    boxShadow: '0 0 25px rgba(251, 191, 36, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.1)'
                  }}
                ></motion.div>
              </motion.div>

              {/* Işık Parçacıkları */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [-20, -60],
                    x: [0, (i % 2 === 0 ? 20 : -20)]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut"
                  }}
                  className="absolute w-2 h-2 bg-amber-400 rounded-full"
                  style={{
                    left: `${45 + (i * 2)}%`,
                    top: '60%',
                    boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)'
                  }}
                ></motion.div>
              ))}
            </div>

            {/* Alt Yazı */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <p className="text-lg text-slate-400 italic">
                &ldquo;Adalet, güçlünün zayıfa karşı sorumluluğudur&rdquo;
              </p>
            </motion.div>
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