# 📖 Rumah Literasi Tambaksogra
**Laporan Proyek & Dokumentasi Pengembangan**

Repositori ini memuat *source code* untuk *landing page* utama **Rumah Literasi Tambaksogra**.

---

## 🚀 Project Progress
Proyek ini baru saja menyelesaikan fase **UI/UX Development** (Tahap 1). Hal-hal yang telah berhasil diimplementasikan:
- [x] Instalasi *project* dengan lingkungan **Next.js 16+ (App Router)**.
- [x] Implementasi **Tailwind CSS** untuk desain sistem (Warna utama: `emerald-600`, `amber-400`).
- [x] Pembuatan UI Komponen Modular (Reusable).
- [x] Integrasi **GSAP & ScrollTrigger** untuk animasi interaktif (Parallax, Scroll Reveal, Stagger Slide-Up).
- [x] Pembuatan responsivitas penuh (Mobile, Tablet, Desktop).


---

## 📂 Struktur Direktori Proyek
Berikut adalah peta struktur utama proyek yang akan mempermudah navigasi pada repositori:

```text
rumah-literasi/
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Styling global Tailwind & CSS reset
│   ├── layout.tsx          # Konfigurasi HTML root & Metadata Dasar SEO
│   └── page.tsx            # Halaman utama (Import seluruh seksi landing page)
├── components/             # Kumpulan komponen modular (UI)
│   ├── About.tsx           # Seksi misi dan tentang yayasan
│   ├── Community.tsx       # Jadwal agenda komunitas (lokasi & tanggal)
│   ├── Gallery.tsx         # Kumpulan foto aset Yayasan (Grid styling)
│   ├── Hero.tsx            # Judul utama berserta CTA & Parallax background
│   ├── Impact.tsx          # Penghitung statistik pencapaian nirlaba
│   ├── Programs.tsx        # Detail program kerja (card view)
│   └── Stories.tsx         # Testimoni relawan
├── public/                 # File aset statis lokal (images, icons)
├── eslint.config.mjs       # Aturan standard Linter
├── next.config.ts          # Konfigurasi compiler Next.js / Turbopack
├── package.json            # Daftar dependencies utama (GSAP, Lucide, dll)
├── postcss.config.mjs      # Proses compilasi Tailwind
├── tailwind.config.ts      # (Jika ada) kustomisasi palet warna Tailwind
└── tsconfig.json           # Atur TypeScript strict typing
```

---

## ⚙️ Dependencies
* **Next.js (App Router)** - Framework React untuk web modern & SEO.
* **Tailwind CSS** - Styling secara instan melalui utilitas class.
* **GSAP & GSAP ScrollTrigger** - Library kelas industri untuk menangani interaksi web yang mulus.
* **Lucide-React** - Penggunaan ikon minimalis & vektor elegan.

---

## 💻 To Run

1. **Clone repository ini**
   ```bash
   git clone https://github.com/USERNAME/URL-REPO.git
   ```
2. **Masuk ke folder proyek**
   ```bash
   cd rumah-literasi
   ```
3. **Pemasangan dependencies (Library)**
   ```bash
   npm install
   ```
4. **Mulai server pengembangan** (Bisa dilihat di `http://localhost:3000`)
   ```bash
   npm run dev
   ```
5. **(Lanjutan) Melakukan Build Production**
   ```bash
   npm run build
   ```

*adaddada*
