import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Instagram, ExternalLink, Heart } from 'lucide-react';
import NewsletterSignup from '../NewsletterSignup';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Firma Bilgileri */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Av.</span> Işıl Bengisu Akpınar
            </div>
            <p className="text-gray-300 mb-4">
              5 yılı aşkın deneyimi ile müvekkillerine en kaliteli hukuki hizmetleri sunan deneyimli avukat.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-2">
              <li><Link href="/hizmetlerimiz/sigorta-hukuku" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Sigorta Hukuku</Link></li>
              <li><Link href="/hizmetlerimiz/ceza-hukuku" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Ceza Hukuku</Link></li>
              <li><Link href="/hizmetlerimiz/is-hukuku" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">İş Hukuku</Link></li>
              <li><Link href="/hizmetlerimiz/ticaret-hukuku" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Ticaret Hukuku</Link></li>
              <li><Link href="/hizmetlerimiz/aile-hukuku" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Aile Hukuku</Link></li>
              <li><Link href="/hizmetlerimiz" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">Tüm Hizmetler →</Link></li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Phone className="w-4 h-4 mr-2 text-blue-400" />
              İletişim
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Nişantaşı Mahallesi, Teşvikiye Caddesi No: 123/4<br />
                  Şişli/İstanbul
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <a href="tel:+902121234567" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +90 212 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:info@av.tr" className="text-gray-300 hover:text-blue-400 transition-colors">
                  info@av.tr
                </a>
              </div>
            </div>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <div className="mt-6 p-4 bg-slate-800 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <Clock size={16} className="text-blue-400" />
                <span className="text-white text-sm font-medium">Çalışma Saatleri</span>
              </div>
              <div className="text-gray-300 text-xs">
                <div>Pazartesi - Cuma: 09:00 - 18:00</div>
                <div>Cumartesi: 09:00 - 14:00</div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-700">
                <p className="text-blue-400 text-xs font-medium">7/24 Acil: 
                  <a href="tel:+905331234567" className="ml-1 hover:text-blue-300">
                    +90 533 123 45 67
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          {/* Copyright ve Linkler */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              <div className="mb-2">
                © 2024 Av. Işıl Bengisu Akpınar Hukuk Bürosu. Tüm hakları saklıdır.
              </div>
              <div className="flex items-center text-gray-400">
                <span>Made with</span>
                <Heart className="w-3 h-3 mx-1 text-red-400" />
                <span>by</span>
                <a 
                  href="https://linkedin.com/in/alikaanozturk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-1 text-blue-400 hover:text-blue-300 transition-colors font-medium inline-flex items-center"
                >
                  Ali Kaan Öztürk
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Link href="/gizlilik-politikasi" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kvkk" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                KVKK
              </Link>
              <Link href="/yasal-uyari" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                Yasal Uyarı
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}