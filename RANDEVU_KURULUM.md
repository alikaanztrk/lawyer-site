# 📧 Randevu E-posta Sistemi Kurulumu

## Gerekli Kurulum Adımları

### 1. Resend Hesabı Oluşturma
1. [Resend.com](https://resend.com) adresine gidin
2. Ücretsiz hesap oluşturun
3. Domain doğrulama yapın (av.tr domainini ekleyin)
4. API key oluşturun

### 2. Environment Variables Ayarlama

Proje ana dizinine `.env.local` dosyası oluşturun:

```bash
# .env.local dosyası
RESEND_API_KEY=re_123456789_your_actual_api_key_here
```

### 3. E-posta Adresi Ayarlama

`src/app/api/randevu/route.ts` dosyasında:

```typescript
// 54. satırda bu adresi kendi e-posta adresinizle değiştirin:
to: ['your-email@av.tr'], // Buraya gerçek e-posta adresinizi yazın
```

### 4. Domain Ayarları

Resend'de domain doğrulaması için:

1. Resend dashboard'da domain ekleyin (av.tr)
2. DNS kayıtlarını domain yöneticinize ekleyin
3. SPF, DKIM kayıtlarını ayarlayın

## Nasıl Çalışır?

### Randevu Sistemi Akışı:

1. **Müvekkil formu doldurur** → Randevu bilgileri
2. **Form gönderilir** → API endpoint'e POST request
3. **İki e-posta gönderilir**:
   - ✅ Size: Detaylı randevu bilgileri
   - ✅ Müvekkile: Onay e-postası

### E-posta İçerikleri:

**Size Gelen E-posta:**
- 👤 Müvekkil bilgileri (ad, telefon, e-posta)
- ⚖️ Hukuk alanı
- 📅 Randevu tarihi ve saati
- 💻 Görüşme türü (yüz yüze, online, telefon)
- ⚡ Aciliyet durumu
- 📝 Hukuki durum açıklaması

**Müvekkile Giden E-posta:**
- ✅ Randevu alındı onayı
- 📋 Randevu özeti
- 📞 Acil durum iletişim bilgileri

## Test Etme

1. Geliştirme ortamında test edin:
```bash
npm run dev
```

2. `/randevu` sayfasına gidin
3. Formu doldurun ve gönderin
4. E-posta kutunuzu kontrol edin

## Güvenlik Notları

- ✅ KVKK onayı zorunlu
- ✅ Form validasyonu mevcut
- ✅ Rate limiting önerilir (production için)
- ✅ .env.local dosyasını .gitignore'a ekleyin

## Alternatif E-posta Servisleri

Resend yerine:
- SendGrid
- Mailgun  
- AWS SES
- NodeMailer + SMTP

## Sorun Giderme

**E-posta gitmiyor:**
1. API key'i kontrol edin
2. Domain doğrulama yapıldığından emin olun
3. Console log'ları kontrol edin
4. Resend dashboard'da delivery status bakın

**Form gönderi­lmiyor:**
1. Network tab'da API çağrısını kontrol edin
2. Server log'larına bakın
3. Form validasyonu kontrolü

## İletişim

Sorun yaşarsanız:
- API response'ları console'da kontrol edin
- Resend documentation'ına bakın
- Error handling'i geliştirin