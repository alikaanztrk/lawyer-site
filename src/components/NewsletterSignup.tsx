'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, Loader, Bell } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'sidebar' | 'inline' | 'footer';
  title?: string;
  description?: string;
}

export default function NewsletterSignup({ 
  variant = 'inline',
  title = 'Hukuki Güncellemeler',
  description = 'Yeni blog yazılarımızdan ve hukuki gelişmelerden haberdar olmak için e-posta listemize katılın.'
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          consent,
          source: variant
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setConsent(false);
      } else {
        throw new Error('Abonelik işlemi başarısız');
      }
    } catch (err) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
      console.error('Newsletter signup error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Sidebar variant (blog sayfası için)
  if (variant === 'sidebar') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-50 rounded-2xl p-6 sticky top-8"
      >
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-3">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-sm text-slate-600">{description}</p>
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-green-700 text-sm font-medium">
              Başarıyla abone oldunuz! E-postanızı kontrol edin.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent text-slate-900"
                required
              />
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="newsletter-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1"
                required
              />
              <label htmlFor="newsletter-consent" className="text-xs text-slate-600">
                KVKK kapsamında e-posta adresimin hukuki güncellemeler için işlenmesine onay veriyorum.
              </label>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !consent}
              className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold disabled:bg-slate-400 hover:bg-slate-800 transition-colors flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                  Abone Olunuyor...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Abone Ol
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    );
  }

  // Footer variant
  if (variant === 'footer') {
    return (
      <div className="bg-slate-800 rounded-xl p-6">
        <div className="flex items-center mb-3">
          <Mail className="w-5 h-5 text-amber-400 mr-2" />
          <h4 className="text-lg font-semibold text-white">{title}</h4>
        </div>
        <p className="text-gray-300 text-sm mb-4">{description}</p>

        {isSubmitted ? (
          <div className="bg-green-600 rounded-lg p-3 text-center">
            <CheckCircle className="w-5 h-5 text-white mx-auto mb-1" />
            <p className="text-white text-sm font-medium">Başarıyla abone oldunuz!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                className="flex-1 px-3 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting || !consent}
                className="bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold disabled:bg-slate-600 hover:bg-amber-700 transition-colors"
              >
                {isSubmitting ? <Loader className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="footer-newsletter-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1"
                required
              />
              <label htmlFor="footer-newsletter-consent" className="text-xs text-gray-300">
                KVKK kapsamında e-posta güncellemeleri için onay veriyorum.
              </label>
            </div>

            {error && (
              <div className="bg-red-600 text-white px-3 py-2 rounded-lg text-sm">
                {error}
              </div>
            )}
          </form>
        )}
      </div>
    );
  }

  // Inline variant (blog yazısının sonunda)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center"
    >
      <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <Mail className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-300 mb-6 max-w-md mx-auto">{description}</p>

      {isSubmitted ? (
        <div className="bg-green-600 rounded-xl p-6">
          <CheckCircle className="w-8 h-8 text-white mx-auto mb-3" />
          <h4 className="text-xl font-bold text-white mb-2">Hoşgeldiniz!</h4>
          <p className="text-green-100">E-posta adresinize onay maili gönderdik. Lütfen kontrol edin.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 border border-slate-600 bg-white/10 text-white placeholder-slate-300 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting || !consent}
              className="bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold disabled:bg-slate-600 hover:bg-amber-600 transition-colors flex items-center"
            >
              {isSubmitting ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="flex items-start space-x-2 text-left">
            <input
              type="checkbox"
              id="inline-newsletter-consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1"
              required
            />
            <label htmlFor="inline-newsletter-consent" className="text-sm text-slate-300">
              KVKK kapsamında e-posta adresimin hukuki güncellemeler ve blog yazıları için işlenmesine onay veriyorum.
            </label>
          </div>

          {error && (
            <div className="bg-red-600 text-white px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}
        </form>
      )}
    </motion.div>
  );
}