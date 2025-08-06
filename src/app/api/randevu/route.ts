import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Resend API key'i environment variable'dan al
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ad, telefon, email, hukukAlani, tarih, saat, gorusmeTuru, durum, aciliyet, kvkk } = body;

    // Form verilerini doğrula
    if (!ad || !telefon || !email || !hukukAlani || !tarih || !saat || !gorusmeTuru || !durum) {
      return NextResponse.json(
        { error: 'Gerekli alanlar eksik' },
        { status: 400 }
      );
    }

    // Hukuk alanı mapping
    const hukukAlanlari: { [key: string]: string } = {
      'sigorta': 'Sigorta Hukuku',
      'ceza': 'Ceza Hukuku',
      'is': 'İş Hukuku',
      'ticaret': 'Ticaret Hukuku',
      'miras': 'Miras Hukuku',
      'saglik': 'Sağlık Hukuku',
      'gayrimenkul': 'Gayrimenkul Hukuku',
      'kira': 'Kira Hukuku',
      'kisiler': 'Kişiler Hukuku',
      'aile': 'Aile Hukuku',
      'esya': 'Eşya Hukuku',
      'borclar': 'Borçlar Hukuku',
      'tuketici': 'Tüketici Hukuku',
      'idare': 'İdare Hukuku',
      'fikri': 'Fikri ve Sınai Haklar Hukuku',
      'icra': 'İcra İflas Hukuku'
    };

    // Görüşme türü mapping
    const gorusmeTurleri: { [key: string]: string } = {
      'yuz-yuze': 'Yüz Yüze Görüşme (Ofiste)',
      'video': 'Video Görüşme (Online)',
      'telefon': 'Telefon Görüşmesi'
    };

    // Aciliyet mapping
    const aciliyetDurumlari: { [key: string]: string } = {
      'cok-acil': 'Çok Acil (24 saat içinde)',
      'acil': 'Acil (2-3 gün içinde)',
      'normal': 'Normal (1 hafta içinde)',
      '': 'Belirtilmemiş'
    };

    // E-posta HTML içeriği
    const emailHtml = `
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
              padding: 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f8fafc;
              padding: 30px;
              border-radius: 0 0 10px 10px;
              border: 1px solid #e2e8f0;
            }
            .info-grid {
              display: grid;
              gap: 15px;
              margin: 20px 0;
            }
            .info-item {
              background: white;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #3b82f6;
            }
            .label {
              font-weight: bold;
              color: #1e3a8a;
              margin-bottom: 5px;
            }
            .urgent {
              background: #fef2f2;
              border-left-color: #ef4444;
            }
            .durum-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              border: 1px solid #e2e8f0;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🏛️ Yeni Randevu Talebi</h1>
            <p>Akpınar Hukuk Bürosu</p>
          </div>
          
          <div class="content">
            <h2>Müvekkil Bilgileri</h2>
            
            <div class="info-grid">
              <div class="info-item">
                <div class="label">👤 Ad Soyad:</div>
                <div>${ad}</div>
              </div>
              
              <div class="info-item">
                <div class="label">📞 Telefon:</div>
                <div>${telefon}</div>
              </div>
              
              <div class="info-item">
                <div class="label">📧 E-posta:</div>
                <div>${email}</div>
              </div>
              
              <div class="info-item">
                <div class="label">⚖️ Hukuk Alanı:</div>
                <div>${hukukAlanlari[hukukAlani] || hukukAlani}</div>
              </div>
            </div>

            <h2>Randevu Detayları</h2>
            
            <div class="info-grid">
              <div class="info-item">
                <div class="label">📅 Tarih:</div>
                <div>${new Date(tarih).toLocaleDateString('tr-TR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</div>
              </div>
              
              <div class="info-item">
                <div class="label">🕐 Saat:</div>
                <div>${saat}</div>
              </div>
              
              <div class="info-item">
                <div class="label">💻 Görüşme Türü:</div>
                <div>${gorusmeTurleri[gorusmeTuru] || gorusmeTuru}</div>
              </div>
              
              <div class="info-item ${aciliyet === 'cok-acil' ? 'urgent' : ''}">
                <div class="label">⚡ Aciliyet:</div>
                <div>${aciliyetDurumlari[aciliyet || '']}</div>
              </div>
            </div>

            <h2>Durum Açıklaması</h2>
            <div class="durum-box">
              <div class="label">📝 Hukuki Durum:</div>
              <div style="white-space: pre-wrap;">${durum}</div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center; color: #64748b;">
              <p><strong>Gönderim Zamanı:</strong> ${new Date().toLocaleString('tr-TR')}</p>
              <p><small>Bu e-posta av.tr randevu sisteminden otomatik olarak gönderilmiştir.</small></p>
            </div>
          </div>
        </body>
      </html>
    `;

    // E-posta gönder
    const data = await resend.emails.send({
      from: 'Randevu Sistemi <randevu@av.tr>',
      to: ['alikaan.ozturk@outlook.com'], // Buraya gerçek e-posta adresinizi yazın
      subject: `🏛️ Yeni Randevu Talebi - ${ad} (${hukukAlanlari[hukukAlani]})`,
      html: emailHtml,
    });

    // Müvekkile otomatik yanıt gönder
    const confirmationHtml = `
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
              padding: 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f8fafc;
              padding: 30px;
              border-radius: 0 0 10px 10px;
              border: 1px solid #e2e8f0;
            }
            .success-box {
              background: #f0fdf4;
              border: 1px solid #22c55e;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              text-align: center;
            }
            .contact-info {
              background: white;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✅ Randevu Talebiniz Alındı</h1>
            <p>Akpınar Hukuk Bürosu</p>
          </div>
          
          <div class="content">
            <div class="success-box">
              <h2>Sayın ${ad},</h2>
              <p>Randevu talebiniz başarıyla alınmıştır. 24 saat içinde size dönüş yapacağız.</p>
            </div>
            
            <h3>Randevu Detaylarınız:</h3>
            <ul>
              <li><strong>Tarih:</strong> ${new Date(tarih).toLocaleDateString('tr-TR')}</li>
              <li><strong>Saat:</strong> ${saat}</li>
              <li><strong>Hukuk Alanı:</strong> ${hukukAlanlari[hukukAlani]}</li>
              <li><strong>Görüşme Türü:</strong> ${gorusmeTurleri[gorusmeTuru]}</li>
            </ul>
            
            <div class="contact-info">
              <h3>Acil durumlar için:</h3>
              <p>📞 <strong>Telefon:</strong> +90 212 123 45 67</p>
              <p>📱 <strong>WhatsApp:</strong> +90 533 123 45 67</p>
              <p>📧 <strong>E-posta:</strong> info@av.tr</p>
            </div>
            
            <p><small>Bu e-posta otomatik olarak gönderilmiştir. Lütfen yanıtlamayın.</small></p>
          </div>
        </body>
      </html>
    `;

    // Müvekkile onay e-postası gönder
    await resend.emails.send({
      from: 'Akpınar Hukuk Bürosu <noreply@av.tr>',
      to: [email],
      subject: '✅ Randevu Talebiniz Alındı - Akpınar Hukuk Bürosu',
      html: confirmationHtml,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Randevu talebi başarıyla gönderildi',
      data: data 
    });

  } catch (error) {
    console.error('Randevu e-posta gönderme hatası:', error);
    return NextResponse.json(
      { error: 'E-posta gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}