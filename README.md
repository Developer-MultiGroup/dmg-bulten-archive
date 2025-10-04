# MultiGroup'dan Yazılar

MultiGroup'un yazılarını toparladığımız basit bir blog arşivi platformu.

## 🚀 Özellikler

- **Contentful Entegrasyonu**: Tüm içerikler Contentful CMS'den çekiliyor
- **Responsive Tasarım**: Mobil ve desktop uyumlu
- **Arama ve Filtreleme**: Yazıları kategori ve metin bazında filtreleme
- **Modern UI**: Tailwind CSS ile temiz ve modern arayüz
- **SSR Desteği**: Server-side rendering ile dinamik içerik

## 🛠️ Teknolojiler

- **Astro** - Web framework
- **Tailwind CSS** - Styling
- **Contentful** - CMS
- **TypeScript** - Type safety
- **Vercel** - Deployment

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd dmg-bulten-archive
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Environment değişkenlerini ayarlayın:
```bash
# .env dosyası oluşturun
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## 🚀 Deployment

### Vercel ile Deploy

1. Vercel CLI'yi yükleyin:
```bash
npm i -g vercel
```

2. Projeyi deploy edin:
```bash
vercel --prod
```

3. Environment değişkenlerini Vercel dashboard'da ayarlayın:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`

### Diğer Platformlar

- **Netlify**: `npm run build` komutu ile build alın
- **Railway/Render**: Otomatik Astro SSR desteği

## 📝 İçerik Yönetimi

Tüm içerikler Contentful CMS üzerinden yönetiliyor:

- **Content Type**: `dmgBulten`
- **Alanlar**: title, slug, description, writers, body, date, cover, category
- **Lokale**: Türkçe (tr-TR)

## 🔧 Geliştirme

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

## 📁 Proje Yapısı

```
src/
├── components/     # Reusable components
├── layouts/        # Page layouts
├── lib/           # Utilities (Contentful client)
├── pages/         # Pages and routes
├── styles/        # Global styles
└── types/         # TypeScript type definitions
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.