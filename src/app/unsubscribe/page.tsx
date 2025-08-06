'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function UnsubscribeContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setError('Geçersiz abonelik çıkma linki');
      setIsLoading(false);
      return;
    }

    // Otomatik abonelik çıkma
    const unsubscribe = async () => {
      try {
        const response = await fetch(`/api/newsletter?token=${token}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          setError('Abonelik çıkma işlemi başarısız');
        }
      } catch {
        setError('Bir hata oluştu');
      } finally {
        setIsLoading(false);
      }
    };

    unsubscribe();
  }, [token]);

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {isLoading ? (
            <div className="bg-slate-50 rounded-2xl p-12">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Mail className="w-8 h-8 text-slate-400" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-4">
                Abonelik İptal Ediliyor...
              </h1>
              <p className="text-slate-600">
                Lütfen bekleyin, işleminiz gerçekleştiriliyor.
              </p>
            </div>
          ) : isSuccess ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                Abonelik İptal Edildi
              </h1>
              <p className="text-slate-600 mb-8">
                E-posta listemizden başarıyla çıkarıldınız. Artık bizden e-posta almayacaksınız.
              </p>
              
              <div className="bg-white p-6 rounded-xl border border-green-200 mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Geri bildiriminiz önemli
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Neden abonelikten çıktığınızı öğrenebilir miyiz?
                </p>
                <div className="space-y-2 text-left">
                  <label className="flex items-center">
                    <input type="radio" name="reason" className="mr-2" />
                    <span className="text-sm text-slate-600">Çok fazla e-posta alıyorum</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="reason" className="mr-2" />
                    <span className="text-sm text-slate-600">İçerik ilgimi çekmiyor</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="reason" className="mr-2" />
                    <span className="text-sm text-slate-600">Artık hukuki bilgiye ihtiyacım yok</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="reason" className="mr-2" />
                    <span className="text-sm text-slate-600">Diğer</span>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <Link 
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Blog&apos;a Dön
                </Link>
                <div>
                  <p className="text-slate-500 text-sm">
                    Tekrar abone olmak isterseniz, 
                    <Link href="/blog" className="text-slate-700 hover:text-slate-900 font-medium">
                      blog sayfamızı
                    </Link> ziyaret edebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-12">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-4">
                Bir Hata Oluştu
              </h1>
              <p className="text-slate-600 mb-8">
                {error || 'Abonelik çıkma işlemi gerçekleştirilemedi.'}
              </p>
              
              <div className="space-y-4">
                <Link 
                  href="/iletisim"
                  className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors"
                >
                  İletişime Geç
                </Link>
                <div>
                  <p className="text-slate-500 text-sm">
                    Sorun devam ederse, lütfen bizimle iletişime geçin: 
                    <a href="mailto:info@av.tr" className="text-slate-700 hover:text-slate-900 font-medium ml-1">
                      info@av.tr
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
        <p className="mt-4 text-slate-600">Yükleniyor...</p>
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <UnsubscribeContent />
    </Suspense>
  );
}