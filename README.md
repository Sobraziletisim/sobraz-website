# Sobraz web sitesi

Astro ile üretilen statik site. Azure Static Web Apps üzerinde barınır; iletişim formu `api/` klasöründeki Azure Function ile çalışır.

## Geliştirme

```
npm install
npm run dev      # http://localhost:4321
npm run build    # çıktı: dist/
```

## İçerik ekleme

| Ne | Nerede |
|---|---|
| Proje / vaka çalışması | `src/content/isler/` içine `_ornek-proje.md` şablonundan yeni bir dosya. Müşteri adı isteğe bağlıdır; boş bırakılırsa yalnızca sektör görünür |
| Haber / basın bülteni | `src/content/haberler/` içine `_ornek-haber.md` şablonundan yeni bir dosya |
| Ödüller, açık pozisyonlar | `src/data/site.ts` içindeki `oduller` ve `pozisyonlar` listeleri |
| Hizmet metinleri, süreç, değerler | `src/data/site.ts` |
| Telefon, adres, e-posta | `src/data/site.ts` içindeki `site` nesnesi |

"_" ile başlayan dosyalar şablondur ve sitede yayınlanmaz. İşlerimiz ve Haberler menüleri, içerik eklenene kadar otomatik olarak gizli kalır.

## Yayına alma (Azure)

1. Azure'da **Static Web App** (Standard plan) oluşturun, kaynak olarak bu GitHub reposunu seçin.
2. Repo ayarlarında `AZURE_STATIC_WEB_APPS_API_TOKEN` secret'ını tanımlayın (Azure bunu otomatik de ekleyebilir).
3. İletişim formu için bir **Azure Communication Services** kaynağı ve Email domaini oluşturun, `sobraz.com` alan adını doğrulayın.
4. Static Web App > Environment variables:
   - `ACS_CONNECTION_STRING`
   - `MAIL_FROM` (ör. `DoNotReply@sobraz.com`)
   - `MAIL_TO` (formların gideceği adres)
5. Özel alan adı olarak `sobraz.com` ve `www.sobraz.com` ekleyin. DNS değiştirirken mevcut MX kayıtlarına dokunmayın.

`main` dalına yapılan her push siteyi otomatik yayınlar; her pull request için ayrı bir önizleme adresi oluşur.

## Güvenlik

- Sunucu tarafında çalışan tek kod iletişim formudur; veritabanı ve yönetim paneli yoktur.
- Güvenlik başlıkları (CSP, HSTS vb.) `public/staticwebapp.config.json` içindedir.
- Dışarıdan script, font veya takip kodu yüklenmez. Analitik eklenecekse CSP güncellenmelidir.
