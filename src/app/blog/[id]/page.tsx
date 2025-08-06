'use client';

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// Blog verilerini buraya dahil ediyoruz (gerçek uygulamada API'den gelecek)
const blogPosts = {
  1: {
    id: 1,
    title: 'Ceza Davası Açma Süreci: Adım Adım Rehber',
    excerpt: 'Ceza davası açma sürecinde dikkat edilmesi gereken önemli noktalar ve yasal prosedürler hakkında detaylı bilgi.',
    content: `
      <h2>Ceza Davası Nedir?</h2>
      <p>Ceza davası, bir suç işlendiği iddiasıyla suçlanan kişi hakkında ceza mahkemelerinde açılan davalardır. Bu süreç, hem mağdur hem de sanık için kritik öneme sahiptir.</p>
      
      <h2>Ceza Davası Açma Süreci</h2>
      <h3>1. Suç Duyurusu ve Şikayet</h3>
      <p>Ceza davası süreci genellikle suç duyurusu veya şikayet ile başlar. Mağdur veya suçtan haberdar olan herhangi bir kişi, cumhuriyet savcılığına başvurarak suç duyurusunda bulunabilir.</p>
      
      <h3>2. Soruşturma Aşaması</h3>
      <p>Cumhuriyet savcılığı, gelen ihbar veya şikayet üzerine soruşturma başlatır. Bu aşamada:</p>
      <ul>
        <li>Deliller toplanır</li>
        <li>Tanık ifadeleri alınır</li>
        <li>Bilirkişi raporları hazırlanır</li>
        <li>Şüphelinin ifadesi alınır</li>
      </ul>
      
      <h3>3. İddianame Hazırlanması</h3>
      <p>Yeterli delil bulunması durumunda cumhuriyet savcısı iddianame hazırlar ve mahkemeye gönderir.</p>
      
      <h2>Avukat Tutmanın Önemi</h2>
      <p>Ceza davalarında profesyonel hukuki destek almak kritik öneme sahiptir. Deneyimli bir ceza avukatı:</p>
      <ul>
        <li>Dosyayı detaylı inceler</li>
        <li>Savunma stratejisi belirler</li>
        <li>Hukuki haklarınızı korur</li>
        <li>Mahkeme sürecinde temsil eder</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Ceza davası süreci karmaşık ve uzun bir süreçtir. Bu süreçte doğru hukuki yönlendirme almak, hem adil yargılanma hakkınızı kullanmanız hem de en iyi sonuca ulaşmanız için elzemdir.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2024-01-15',
    readTime: '8 dk',
    category: 'Ceza Hukuku',
    tags: ['ceza davası', 'hukuki süreç', 'dava açma']
  },
  2: {
    id: 2,
    title: 'Boşanma Davası Nasıl Açılır? Gerekli Belgeler',
    excerpt: 'Boşanma davası açmak için gerekli belgeler, süreç ve dikkat edilmesi gereken hukuki detaylar.',
    content: `
      <h2>Boşanma Davası Nedir?</h2>
      <p>Boşanma davası, evlilik birliğinin sona erdirilmesi için aile mahkemelerine yapılan başvurudur. Bu süreç, hem eşlerin hem de varsa çocukların geleceğini etkileyen önemli bir hukuki süreçtir.</p>
      
      <h2>Boşanma Türleri</h2>
      <h3>1. Anlaşmalı Boşanma</h3>
      <p>Eşlerin boşanma konusunda anlaştığı ve tüm konularda mutabakata vardığı boşanma türüdür.</p>
      
      <h3>2. Çekişmeli Boşanma</h3>
      <p>Eşlerden birinin boşanmayı kabul etmediği veya boşanma şartları konusunda anlaşamadıkları durumlarda açılan davalardır.</p>
      
      <h2>Gerekli Belgeler</h2>
      <ul>
        <li>Evlilik cüzdanı</li>
        <li>Nüfus kayıt örneği</li>
        <li>Çocuk varsa nüfus kayıt örnekleri</li>
        <li>Gelir belgesi</li>
        <li>Malvarlığı beyanı</li>
        <li>Dava dilekçesi</li>
      </ul>
      
      <h2>Boşanma Sürecinde Dikkat Edilecekler</h2>
      <p>Boşanma süreci sadece evliliğin sona ermesi değil, aynı zamanda mal paylaşımı, nafaka, velayet gibi önemli konuları da içerir. Bu konularda doğru kararlar alabilmek için uzman hukuki destek almak gereklidir.</p>
    `,
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2024-01-10',
    readTime: '6 dk',
    category: 'Aile Hukuku',
    tags: ['boşanma', 'aile hukuku', 'dava süreci']
  }
  // Diğer blog yazıları...
};

const relatedPosts = [
  { id: 3, title: 'İş Yerinde Mobbing: Hukuki Haklarınız', category: 'İş Hukuku' },
  { id: 4, title: 'Gayrimenkul Alım Satım Sözleşmesi', category: 'Gayrimenkul Hukuku' },
  { id: 5, title: 'Miras Hukuku Rehberi', category: 'Medeni Hukuk' }
];

export default function BlogDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const post = blogPosts[parseInt(id) as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Blog&apos;a Geri Dön
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Article Header */}
            <motion.header 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                  <Tag className="w-3 h-3 mr-1" />
                  {post.category}
                </span>
                <div className="flex items-center text-slate-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              {/* Meta Information */}
              <div className="flex items-center justify-between py-6 border-t border-b border-slate-200">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-slate-600">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('tr-TR')}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.header>

            {/* Article Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-slate-200"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 bg-slate-50 rounded-3xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Hukuki Desteğe İhtiyacınız mı Var?
              </h3>
              <p className="text-slate-600 mb-6">
                Bu konuda profesyonel hukuki danışmanlık almak için bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
                  >
                    Ücretsiz Danışmanlık
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="tel:+902121234567"
                    className="inline-flex items-center px-6 py-3 bg-white text-slate-700 font-semibold rounded-full hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    Hemen Ara
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Author Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-50 p-6 rounded-3xl"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Yazar Hakkında</h3>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4 flex items-center justify-center">
                  <User className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{post.author}</h4>
                  <p className="text-sm text-slate-600">Kurucu Avukat</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                15+ yıllık deneyimi ile hukuki konularda uzman görüş ve rehberlik sağlıyor.
              </p>
            </motion.div>

            {/* Related Posts */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white border border-slate-200 p-6 rounded-3xl"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-6">İlgili Yazılar</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="block p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <h4 className="font-medium text-slate-900 mb-2 leading-snug">
                      {relatedPost.title}
                    </h4>
                    <span className="text-sm text-slate-600">{relatedPost.category}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-slate-900 text-white p-6 rounded-3xl"
            >
              <h3 className="text-lg font-semibold mb-4">Güncel Kalın</h3>
              <p className="text-slate-300 text-sm mb-4">
                Hukuki gelişmeleri ve yeni yazıları e-posta ile alın.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-slate-900 py-2 rounded-lg font-medium hover:bg-slate-100 transition-colors"
                >
                  Abone Ol
                </motion.button>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}