'use client';

import Link from 'next/link';
import { Phone, Calendar, Shield, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900 flex items-center pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Ana İçerik */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-slate-900/5 backdrop-blur-sm border border-slate-200/50 rounded-full text-slate-600 text-sm font-medium"
            >
              <Shield className="w-4 h-4 mr-2" />
              15+ Yıl Deneyim • İstanbul
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900 tracking-tight"
            >
              Hukuki Haklarınızı 
              <br />
              <span className="text-slate-600"> Profesyonelce </span>
              <br />
              Koruyoruz
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
            >
              İstanbul merkezli deneyimli avukat olarak, ceza hukukundan aile hukukuna kadar 
              geniş bir yelpazede profesyonel hukuki danışmanlık ve dava takip hizmetleri sunuyoruz.
            </motion.p>
          </motion.div>

          {/* CTA Butonları */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/randevu">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                <Calendar className="w-5 h-5 mr-2" />
                Randevu Talep Et
              </Button>
            </Link>
            <a href="tel:+902121234567">
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                +90 212 123 45 67
              </Button>
            </a>
          </motion.div>

          {/* İstatistikler */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-3 gap-8 pt-12 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">500+</div>
              <div className="text-sm text-slate-500">Başarılı Dava</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">15+</div>
              <div className="text-sm text-slate-500">Yıl Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">%95</div>
              <div className="text-sm text-slate-500">Müvekkil Memnuniyeti</div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-slate-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}