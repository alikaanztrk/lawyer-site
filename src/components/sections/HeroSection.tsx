'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Calendar, Shield, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-24">
      {/* Arka Plan Resmi */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/newbackground.jpg"
          alt="İstanbul Skyline"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* 3D Overlay Efektleri */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-900/25 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/30"></div>
        {/* Animated Particles - Sabit pozisyonlar kullanılıyor */}
        <div className="absolute inset-0">
          {[
            { left: '15%', top: '20%', delay: 0 },
            { left: '85%', top: '35%', delay: 0.3 },
            { left: '45%', top: '15%', delay: 0.6 },
            { left: '75%', top: '60%', delay: 0.9 },
            { left: '25%', top: '70%', delay: 1.2 },
            { left: '90%', top: '25%', delay: 1.5 },
            { left: '10%', top: '80%', delay: 1.8 },
            { left: '60%', top: '45%', delay: 0.2 },
            { left: '35%', top: '90%', delay: 0.5 },
            { left: '80%', top: '10%', delay: 0.8 },
            { left: '50%', top: '75%', delay: 1.1 },
            { left: '20%', top: '40%', delay: 1.4 },
            { left: '70%', top: '85%', delay: 1.7 },
            { left: '40%', top: '30%', delay: 0.1 },
            { left: '95%', top: '50%', delay: 0.4 },
            { left: '5%', top: '65%', delay: 0.7 },
            { left: '65%', top: '20%', delay: 1.0 },
            { left: '30%', top: '55%', delay: 1.3 },
            { left: '85%', top: '75%', delay: 1.6 },
            { left: '55%', top: '35%', delay: 1.9 }
          ].map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Ana İçerik */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium shadow-lg"
              style={{ transform: 'perspective(1000px)' }}
            >
              <Shield className="w-4 h-4 mr-2" />
              Uzman Hukuki Danışmanlık • İstanbul
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold leading-tight text-white tracking-tight"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                transform: 'perspective(1000px)',
              }}
            >
              <span className="text-white">Hukuki Haklarınızı</span>
              <br />
              <span className="text-white"> Profesyonelce </span>
              <br />
              <span className="text-white">Koruyoruz</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto backdrop-blur-sm"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
            >
              İstanbul merkezli deneyimli avukat olarak, ceza hukukundan aile hukukuna kadar 
              geniş bir yelpazede profesyonel hukuki danışmanlık ve dava takip hizmetleri sunuyoruz.
            </motion.p>
          </motion.div>

          {/* CTA Butonları */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/randevu">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{ transform: 'perspective(1000px)' }}
              >
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-xl border-0">
                  <Calendar className="w-5 h-5 mr-2" />
                  Randevu Talep Et
                </Button>
              </motion.div>
            </Link>
            <a href="tel:+905071129898">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{ transform: 'perspective(1000px)' }}
              >
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 rounded-full transition-all duration-300 shadow-xl">
                  <Phone className="w-5 h-5 mr-2" />
                  +90 507 112 98 98
                </Button>
              </motion.div>
            </a>
          </motion.div>


        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotateX: [0, 10, 0]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-white/70 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            style={{ transform: 'perspective(1000px)' }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}