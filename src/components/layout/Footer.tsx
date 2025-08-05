import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Firma Bilgileri */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-amber-400">Av.</span> Işıl Akpınar
            </div>
            <p className="text-gray-300 mb-4">
              15 yılı aşkın deneyimi ile müvekkillerine en kaliteli hukuki hizmetleri sunan deneyimli avukat.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li><Link href="/hizmetlerimiz/ceza-hukuku" className="text-gray-300 hover:text-amber-400 transition-colors">Ceza Hukuku</Link></li>
              <li><Link href="/hizmetlerimiz/medeni-hukuk" className="text-gray-300 hover:text-amber-400 transition-colors">Medeni Hukuk</Link></li>
              <li><Link href="/hizmetlerimiz/ticaret-hukuku" className="text-gray-300 hover:text-amber-400 transition-colors">Ticaret Hukuku</Link></li>
              <li><Link href="/hizmetlerimiz/is-hukuku" className="text-gray-300 hover:text-amber-400 transition-colors">İş Hukuku</Link></li>
              <li><Link href="/hizmetlerimiz/aile-hukuku" className="text-gray-300 hover:text-amber-400 transition-colors">Aile Hukuku</Link></li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Nişantaşı Mahallesi, Teşvikiye Caddesi No: 123/4<br />
                  Şişli/İstanbul
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <a href="tel:+902121234567" className="text-gray-300 hover:text-amber-400 transition-colors">
                  +90 212 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <a href="mailto:info@av.tr" className="text-gray-300 hover:text-amber-400 transition-colors">
                  info@av.tr
                </a>
              </div>
            </div>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Çalışma Saatleri</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-amber-400" />
                <div className="text-gray-300 text-sm">
                  <div>Pazartesi - Cuma: 09:00 - 18:00</div>
                  <div>Cumartesi: 09:00 - 14:00</div>
                  <div>Pazar: Kapalı</div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-amber-600 rounded-lg">
              <p className="text-white text-sm font-medium">
                7/24 Acil Durum Hattı
              </p>
              <a href="tel:+905331234567" className="text-white font-semibold">
                +90 533 123 45 67
              </a>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © 2024 Av. Işıl Akpınar Hukuk Bürosu. Tüm hakları saklıdır.
              Made By Ali Kaan Öztürk
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/gizlilik-politikasi" className="text-gray-300 hover:text-amber-400 text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kvkk" className="text-gray-300 hover:text-amber-400 text-sm transition-colors">
                KVKK
              </Link>
              <Link href="/yasal-uyari" className="text-gray-300 hover:text-amber-400 text-sm transition-colors">
                Yasal Uyarı
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}