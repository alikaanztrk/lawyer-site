'use client';

import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'Ceza Davası Açma Süreci: Adım Adım Rehber',
    excerpt: 'Ceza davası açma sürecinde dikkat edilmesi gereken önemli noktalar ve yasal prosedürler hakkında detaylı bilgi.',
    content: 'Ceza davası açma süreci hakkında kapsamlı rehber...',
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2024-01-15',
    readTime: '8 dk',
    category: 'Ceza Hukuku',
    tags: ['ceza davası', 'hukuki süreç', 'dava açma'],
    featured: true
  },
  {
    id: 2,
    title: 'Boşanma Davası Nasıl Açılır? Gerekli Belgeler',
    excerpt: 'Boşanma davası açmak için gerekli belgeler, süreç ve dikkat edilmesi gereken hukuki detaylar.',
    content: 'Boşanma davası sürecinde bilinmesi gerekenler...',
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2024-01-10',
    readTime: '6 dk',
    category: 'Aile Hukuku',
    tags: ['boşanma', 'aile hukuku', 'dava süreci']
  },
  {
    id: 3,
    title: 'İş Yerinde Mobbing: Hukuki Haklarınız',
    excerpt: 'İş yerinde mobbing yaşayanların hukuki hakları ve başvuru yolları hakkında bilmeniz gerekenler.',
    content: 'İş yerinde mobbing durumunda atılacak adımlar...',
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2024-01-05',
    readTime: '7 dk',
    category: 'İş Hukuku',
    tags: ['mobbing', 'iş hukuku', 'çalışan hakları']
  },
  {
    id: 4,
    title: 'Gayrimenkul Alım Satım Sözleşmesi Nelere Dikkat Etmeli',
    excerpt: 'Gayrimenkul alım satım işlemlerinde dikkat edilmesi gereken hukuki noktalar ve güvenli alışveriş.',
    content: 'Gayrimenkul alım satım sözleşmelerinde dikkat edilecek noktalar...',
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2023-12-28',
    readTime: '5 dk',
    category: 'Gayrimenkul Hukuku',
    tags: ['gayrimenkul', 'alım satım', 'sözleşme']
  },
  {
    id: 5,
    title: 'Miras Hukuku Rehberi: Mirasçılık ve Vasiyetname',
    excerpt: 'Miras hukuku kapsamında mirasçılık hakları, vasiyetname düzenleme ve miras paylaşımı.',
    content: 'Miras hukuku ve mirasçılık hakları hakkında detaylar...',
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2023-12-20',
    readTime: '9 dk',
    category: 'Medeni Hukuk',
    tags: ['miras', 'vasiyetname', 'mirasçılık']
  },
  {
    id: 6,
    title: 'Şirket Kuruluş Sürecinde Hukuki Adımlar',
    excerpt: 'Şirket kuruluş sürecinde atılması gereken hukuki adımlar ve gerekli belgeler hakkında rehber.',
    content: 'Şirket kuruluş sürecindeki hukuki gereklilikler...',
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2023-12-15',
    readTime: '6 dk',
    category: 'Ticaret Hukuku',
    tags: ['şirket kuruluşu', 'ticaret hukuku', 'girişimcilik']
  },
  {
    id: 7,
    title: 'Sigorta Tazminatı Nasıl Alınır? Red Durumunda Ne Yapmalı?',
    excerpt: 'Sigorta şirketlerinden tazminat alma süreci, red durumlarında hukuki haklarınız ve başvuru yolları.',
    content: 'Sigorta tazminatı alma süreçleri ve hukuki yollar...',
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2024-01-20',
    readTime: '7 dk',
    category: 'Sigorta Hukuku',
    tags: ['sigorta', 'tazminat', 'red durumu']
  },
  {
    id: 8,
    title: 'İcra Takibi Başlatma: Alacağınızı Tahsil Etme Yolları',
    excerpt: 'Alacaklıların icra takibi başlatma süreci, gerekli belgeler ve takip edilecek adımlar.',
    content: 'İcra takibi ve alacak tahsili süreçleri...',
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2024-01-12',
    readTime: '6 dk',
    category: 'İcra İflas Hukuku',
    tags: ['icra takibi', 'alacak tahsili', 'borç']
  },
  {
    id: 9,
    title: 'Kira Artışı Davaları: Kiracı ve Ev Sahibi Hakları',
    excerpt: 'Kira artışı uyuşmazlıklarında tarafların hakları, yasal oranlar ve dava süreçleri.',
    content: 'Kira artışı davalarında bilinmesi gerekenler...',
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2024-01-08',
    readTime: '5 dk',
    category: 'Kira Hukuku',
    tags: ['kira artışı', 'kiracı hakları', 'ev sahibi']
  },
  {
    id: 10,
    title: 'Tüketici Hakları: Ayıplı Mal ve Hizmet Durumunda Ne Yapmalı?',
    excerpt: 'Satın aldığınız mal veya hizmette sorun yaşadığınızda tüketici haklarınız ve başvuru yolları.',
    content: 'Tüketici hakları ve şikayet süreçleri...',
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2024-01-03',
    readTime: '6 dk',
    category: 'Tüketici Hukuku',
    tags: ['tüketici hakları', 'ayıplı mal', 'şikayet']
  },
  {
    id: 11,
    title: 'KVKK ve Kişisel Verilerin Korunması: Haklarınızı Bilin',
    excerpt: 'Kişisel Verilerin Korunması Kanunu kapsamında sahip olduğunuz haklar ve ihlal durumunda yapılacaklar.',
    content: 'KVKK hakları ve kişisel veri korunması...',
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2023-12-25',
    readTime: '8 dk',
    category: 'Kişiler Hukuku',
    tags: ['KVKK', 'kişisel veri', 'gizlilik']
  },
  {
    id: 12,
    title: 'Marka Tescili ve Fikri Mülkiyet Hakları',
    excerpt: 'Marka tescil süreci, fikri mülkiyet haklarının korunması ve ihlal durumlarında yapılacaklar.',
    content: 'Marka tescili ve fikri mülkiyet korunması...',
    author: 'Av. Işıl Bengisu Akpınar',
    date: '2023-12-18',
    readTime: '7 dk',
    category: 'Fikri Mülkiyet',
    tags: ['marka tescili', 'patent', 'fikri mülkiyet']
  }
];

const categories = [
  'Tümü',
  'Ceza Hukuku',
  'Aile Hukuku',
  'İş Hukuku',
  'Gayrimenkul Hukuku',
  'Medeni Hukuk',
  'Ticaret Hukuku',
  'Sigorta Hukuku',
  'İcra İflas Hukuku',
  'Kira Hukuku',
  'Tüketici Hukuku',
  'Kişiler Hukuku',
  'Fikri Mülkiyet'
];

export default function BlogPage() {
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
            Hukuk Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hukuki konularda güncel bilgiler, pratik rehberler ve uzman görüşleri. 
            Hukuki haklarınızı öğrenin, bilinçli kararlar alın.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                index === 0 
                  ? 'bg-slate-900 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white mb-16"
          >
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:flex-1">
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Öne Çıkan Yazı
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-200 text-lg mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-slate-300 mb-8">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('tr-TR')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-lg"
                  >
                    Devamını Oku
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              </div>
              <div className="lg:w-80 lg:ml-12 mt-8 lg:mt-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Kategori</span>
                      <span className="bg-white/20 px-2 py-1 rounded">{post.category}</span>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="bg-white/10 px-2 py-1 rounded text-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 overflow-hidden"
            >
              <div className="p-8">
                {/* Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                    <Tag className="w-3 h-3 mr-1" />
                    {post.category}
                  </span>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('tr-TR')}
                  </div>
                </div>

                {/* Read More */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-slate-700 font-medium group-hover:text-slate-900 transition-colors"
                >
                  Devamını Oku
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>


      </div>
    </div>
  );
}