'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Calendar } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <motion.header 
      style={{ y: headerY, opacity: headerOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-slate-200/50' 
          : 'bg-white shadow-md'
      }`}
    >
      {/* Top Bar */}
      <motion.div 
        className={`bg-slate-900/95 text-white transition-all duration-300 ${
          isScrolled ? 'py-1' : 'py-2'
        }`}
        style={{ 
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          background: isScrolled ? 'rgba(15, 23, 42, 0.9)' : 'rgb(15, 23, 42)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <motion.a 
                href="tel:+902121234567" 
                className="flex items-center space-x-1 hover:text-slate-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Phone size={14} />
                <span>+90 212 123 45 67</span>
              </motion.a>
              <motion.a 
                href="mailto:info@av.tr" 
                className="flex items-center space-x-1 hover:text-slate-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Mail size={14} />
                <span>info@av.tr</span>
              </motion.a>
            </div>
            <div className="hidden md:block">
              <span>Profesyonel Hukuki Danışmanlık</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-slate-900">
                              <span className="text-slate-600">Av.</span> Işıl Bengisu Akpınar
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateX: 5,
                  rotateY: 5,
                  z: 10
                }}
                style={{ perspective: 1000 }}
              >
                <Link
                  href={item.href}
                  className="text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 hover:drop-shadow-lg"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/randevu"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg flex items-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Randevu Al
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-slate-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/randevu"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors text-center flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Randevu Al
              </Link>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}