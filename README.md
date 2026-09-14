# Tuncay Yaylalı - Kişisel Portföy Web Sitesi

Bu proje, **Tuncay Yaylalı**'nın kişisel portföy web sitesinin kaynak kodlarını içerir. 

Site; **24 yıllık Çevre Mühendisliği ve bilimsel modelleme tecrübesinin** üzerine inşa edilen **Modern Veri Mühendisliği, Kubernetes, Bulut Çözümleri ve Data Lakehouse** mimarilerini yansıtacak şekilde özel olarak tasarlanmıştır.

---

## 🌟 Öne Çıkan Özellikler

- **100% Ücretsiz Hosting:** GitHub Pages altyapısı sayesinde ömür boyu 0 TL barındırma maliyeti.
- **Çift Dil Desteği (EN / TR):** Tek tıkla İngilizce ve Türkçe içerik geçişi.
- **Karanlık / Aydınlık Mod:** Sistem tercihini tanıyan ve localStorage ile kullanıcının seçimini hatırlayan modern tema desteği.
- **Çift Kademeli Kariyer Çizelgesi:** IT & Veri Mühendisliği (2022 - Günümüz) ve Çevre Mühendisliği & Yöneticilik (1998 - 2022) sekmeli görünümü.
- **Gerçek Proje & GitHub Entegrasyonu:** `lakehouse`, `UnityCatalog`, `grafana_with_ldap`, `superset_with_keycloak_and_ldap` repoları ve vaka analizleri.
- **Doğrudan CV İndirme:** `assets/docs/Tuncay_Yaylali_CV.pdf` üzerinden tek tıkla özgeçmiş indirme.
- **Hızlı İletişim & Panoya Kopyalama:** E-posta adresini tek tıkla kopyalayan bildirim sistemi.

---

## 📁 Dosya ve Dizin Yapısı

```text
PersonalSite/
├── index.html                  # Ana sayfa ve tüm bölümler
├── assets/
│   ├── css/
│   │   └── style.css           # Özel animasyonlar, fontlar ve cam efekti (glassmorphism)
│   ├── js/
│   │   └── main.js             # Dil/Tema geçişleri, filtreleme, sekmeler ve kopyalama
│   ├── images/
│   │   └── profile.jpg         # Profil fotoğrafı
│   └── docs/
│       └── Tuncay_Yaylali_CV.pdf # İndirilebilir güncel CV
└── README.md                   # Proje dokümantasyonu
```

---

## 🚀 GitHub Pages Üzerinde Yayına Alma (Canlıya Çıkış Adımları)

Sitenizi `https://tuncayyaylali.github.io` adresinde canlıya almak için aşağıdaki adımları sırayla izleyin:

### 1. Yerel Git Deposunu Başlatın ve Dosyaları Ekleyin
Bulunduğunuz `PersonalSite` klasöründe bir terminal (PowerShell) açarak çalıştırın:

```powershell
git init
git add .
git commit -m "feat: initial release of personal portfolio website"
git branch -M main
```

### 2. GitHub Üzerinde Yeni Bir Repository Oluşturun
1. [github.com/new](https://github.com/new) adresine gidin.
2. Repository name olarak **`tuncayyaylali.github.io`** yazın.
   *(Not: Repository adını tam olarak `kullanici-adiniz.github.io` yaptığınızda siteniz doğrudan bu ana adreste yayınlanır).*
3. **Public** seçin ve "Create repository" butonuna tıklayın.

### 3. Kodları GitHub'a Gönderin
```powershell
git remote add origin https://github.com/tuncayyaylali/tuncayyaylali.github.io.git
git push -u origin main
```

### 4. GitHub Pages'i Aktif Edin (Genellikle Otomatiktir)
* Depo adı `tuncayyaylali.github.io` olduğunda GitHub Pages otomatik aktif olur.
* Kontrol etmek için: Deponuzun **Settings** -> **Pages** sekmesine gidin.
* *Branch* kısmında `main` ve `/ (root)` seçili olduğunu teyit edin.
* 1-2 dakika içinde siteniz **`https://tuncayyaylali.github.io`** adresinde dünya çapında yayına girecektir!

---

## 🌐 İleride Özel Alan Adı Bağlamak İsterseniz (`tuncayyaylali.com`)

Eğer ileride kendi alan adınızı kullanmak isterseniz hiçbir ücret ödemeden:
1. Deponuzun kök dizinine `CNAME` adında bir dosya oluşturup içine `www.tuncayyaylali.com` yazmanız,
2. Alan adı sağlayıcınızdan (Domain Registrar) DNS CNAME kaydını `tuncayyaylali.github.io` adresine yönlendirmeniz yeterlidir.

