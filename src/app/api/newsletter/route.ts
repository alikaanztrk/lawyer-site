import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const subscribersFile = join(process.cwd(), 'data', 'subscribers.json');

// Veritabanı helper fonksiyonları
function getSubscribers() {
  try {
    if (!existsSync(subscribersFile)) {
      // Klasör yoksa oluştur
      const dataDir = join(process.cwd(), 'data');
      if (!existsSync(dataDir)) {
        mkdirSync(dataDir, { recursive: true });
      }
      writeFileSync(subscribersFile, JSON.stringify({ subscribers: [] }, null, 2));
      return { subscribers: [] };
    }
    const data = readFileSync(subscribersFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Subscribers okuma hatası:', error);
    return { subscribers: [] };
  }
}

function saveSubscribers(data: { subscribers: Array<{ id: string; email: string; isActive: boolean; [key: string]: unknown }> }) {
  try {
    writeFileSync(subscribersFile, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Subscribers kaydetme hatası:', error);
    return false;
  }
}

function generateUnsubscribeToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, consent, source } = body;

    // Validation
    if (!email || !consent) {
      return NextResponse.json(
        { error: 'E-posta adresi ve KVKK onayı gerekli' },
        { status: 400 }
      );
    }

    // E-posta format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi girin' },
        { status: 400 }
      );
    }

    // Mevcut subscribers'ı getir
    const data = getSubscribers();
    
    // Zaten abone olup olmadığını kontrol et
    const existingSubscriber = data.subscribers.find((sub: { email: string; isActive: boolean; [key: string]: unknown }) => sub.email === email);
    if (existingSubscriber && existingSubscriber.isActive) {
      return NextResponse.json(
        { error: 'Bu e-posta adresi zaten kayıtlı' },
        { status: 409 }
      );
    }

    // Yeni subscriber oluştur
    const newSubscriber = {
      id: Date.now().toString(),
      email,
      subscribedAt: new Date().toISOString(),
      isActive: true,
      source: source || 'unknown',
      kvkkConsent: true,
      unsubscribeToken: generateUnsubscribeToken(),
      preferences: {
        categories: [],
        frequency: 'weekly'
      }
    };

    // Eğer daha önce abone olmuş ama çıkmışsa, tekrar aktif et
    if (existingSubscriber) {
      existingSubscriber.isActive = true;
      existingSubscriber.subscribedAt = new Date().toISOString();
      existingSubscriber.unsubscribeToken = generateUnsubscribeToken();
    } else {
      data.subscribers.push(newSubscriber);
    }

    // Kaydet
    const saved = saveSubscribers(data);
    if (!saved) {
      throw new Error('Veriler kaydedilemedi');
    }

    // Resend client'ı burada initialize et
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Hoşgeldin e-postası gönder
    const welcomeHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #1e3a8a, #3b82f6);
              color: white;
              padding: 30px 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f8fafc;
              padding: 30px;
              border-radius: 0 0 10px 10px;
              border: 1px solid #e2e8f0;
            }
            .welcome-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              text-align: center;
              margin: 20px 0;
              border-left: 4px solid #10b981;
            }
            .features {
              display: grid;
              gap: 15px;
              margin: 20px 0;
            }
            .feature {
              background: white;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #f59e0b;
            }
            .unsubscribe {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #e2e8f0;
              text-align: center;
              color: #64748b;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🎉 Hoşgeldiniz!</h1>
            <p>Akpınar Hukuk Bürosu Newsletter</p>
          </div>
          
          <div class="content">
            <div class="welcome-box">
              <h2>Hukuki Güncellemeler Listemize Katıldınız!</h2>
              <p>Sayın abone, hukuki güncellemeler ve blog yazılarımızdan haberdar olmak için listemize katıldığınız için teşekkür ederiz.</p>
            </div>
            
            <h3>Ne Bekleyebilirsiniz?</h3>
            <div class="features">
              <div class="feature">
                <strong>📰 Haftalık Newsletter:</strong> En önemli hukuki gelişmeler ve blog yazılarımız
              </div>
              <div class="feature">
                <strong>⚖️ Uzman Görüşler:</strong> Güncel hukuki konularda profesyonel değerlendirmeler
              </div>
              <div class="feature">
                <strong>💡 Hukuki İpuçları:</strong> Günlük hayatta karşılaşabileceğiniz hukuki durumlar
              </div>
              <div class="feature">
                <strong>🎯 Özel İçerikler:</strong> Sadece abonelerimize özel makale ve rehberler
              </div>
            </div>

            <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">💬 Ücretsiz Hukuki Danışma</h3>
              <p>İlk görüşmeniz ücretsizdir. Hukuki sorularınız için bize ulaşabilirsiniz:</p>
              <p>
                📞 <strong>Telefon:</strong> +90 212 123 45 67<br>
                📧 <strong>E-posta:</strong> info@av.tr<br>
                🌐 <strong>Web:</strong> <a href="https://av.tr">av.tr</a>
              </p>
            </div>

            <div class="unsubscribe">
              <p>Bu e-postayı almak istemiyorsanız, <a href="${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe?token=${existingSubscriber?.unsubscribeToken || newSubscriber.unsubscribeToken}">buraya tıklayarak</a> abonelikten çıkabilirsiniz.</p>
              <p><small>Bu e-posta KVKK kapsamında açık rızanızla gönderilmiştir.</small></p>
            </div>
          </div>
        </body>
      </html>
    `;

    await resend.emails.send({
      from: 'Akpınar Hukuk Bürosu <newsletter@av.tr>',
      to: [email],
      subject: '🎉 Hoşgeldiniz - Akpınar Hukuk Bürosu Newsletter',
      html: welcomeHtml,
    });

    // Admin bilgilendirme e-postası
    const adminHtml = `
      <h2>📧 Yeni Newsletter Abonesi</h2>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Kaynak:</strong> ${source}</p>
      <p><strong>Tarih:</strong> ${new Date().toLocaleString('tr-TR')}</p>
      <p><strong>Toplam Abone:</strong> ${data.subscribers.filter((s: { isActive: boolean }) => s.isActive).length}</p>
    `;

    await resend.emails.send({
      from: 'Newsletter Sistemi <system@av.tr>',
      to: ['info@av.tr'],
      subject: '📧 Yeni Newsletter Abonesi',
      html: adminHtml,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Başarıyla abone oldunuz! E-postanızı kontrol edin.',
      subscriberCount: data.subscribers.filter((s: { isActive: boolean }) => s.isActive).length
    });

  } catch (error) {
    console.error('Newsletter kayıt hatası:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}

// Abonelik çıkma endpoint'i
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    if (!token && !email) {
      return NextResponse.json(
        { error: 'Token veya e-posta gerekli' },
        { status: 400 }
      );
    }

    const data = getSubscribers();
    const subscriberIndex = data.subscribers.findIndex((sub: { unsubscribeToken?: string; email: string; [key: string]: unknown }) => 
      (token && sub.unsubscribeToken === token) || 
      (email && sub.email === email)
    );

    if (subscriberIndex === -1) {
      return NextResponse.json(
        { error: 'Abone bulunamadı' },
        { status: 404 }
      );
    }

    // Aboneliği pasif et (tamamen silme)
    data.subscribers[subscriberIndex].isActive = false;
    data.subscribers[subscriberIndex].unsubscribedAt = new Date().toISOString();

    saveSubscribers(data);

    return NextResponse.json({ 
      success: true, 
      message: 'Abonelikten başarıyla çıkıldı.' 
    });

  } catch (error) {
    console.error('Abonelik çıkma hatası:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu.' },
      { status: 500 }
    );
  }
}