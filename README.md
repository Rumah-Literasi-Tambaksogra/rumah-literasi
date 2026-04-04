# 📖 Yayasan Literasi Indonesia (Rumah Literasi)
**Laporan Proyek & Dokumentasi Pengembangan**

Repositori ini memuat *source code* untuk *landing page* utama **Yayasan Literasi Indonesia**. Website ini dirancang sangat modern, responsif, interaktif, dan berstandar nirlaba internasional.

---

## 🚀 Perkembangan Proyek Saat Ini (Project Progress)
Proyek ini baru saja menyelesaikan fase **UI/UX Development** (Tahap 1). Hal-hal yang telah berhasil diimplementasikan:
- [x] Instalasi *project* dengan lingkungan **Next.js 16+ (App Router)**.
- [x] Implementasi **Tailwind CSS** untuk desain sistem (Warna utama: `emerald-600`, `amber-400`).
- [x] Pembuatan UI Komponen Modular (Reusable).
- [x] Integrasi **GSAP & ScrollTrigger** untuk animasi interaktif (Parallax, Scroll Reveal, Stagger Slide-Up).
- [x] Pembuatan responsivitas penuh (Mobile, Tablet, Desktop).
- [x] Memiliki widget chat (ChatBot) simulasi untuk interaksi pengguna.

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
│   ├── ChatWidget.tsx      # Widget AI Chat di pojok kanan bawah
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

## ⚙️ Dependencies Utama
* **Next.js (App Router)** - Framework React untuk web modern & SEO.
* **Tailwind CSS** - Styling secara instan melalui utilitas class.
* **GSAP & GSAP ScrollTrigger** - Library kelas industri untuk menangani interaksi web yang mulus.
* **Lucide-React** - Penggunaan ikon minimalis & vektor elegan.

---

## 📋 Apa yang Perlu Disiapkan Selanjutnya? (Next Steps)
Sebelum proyek ini di-*deploy* ke ranah publik (*production*) atau dilanjutkan untuk skalabilitas, berikut "Pekerjaan Rumah" yang harus segera Anda selesaikan:

### 1. Migrasi Aset Asli Media (Asset Readiness)
Gambar-gambar saat ini mengandalkan *placeholder* dari `Unsplash.com`. Anda perlu:
-  Mengumpulkan foto/dokumentasi asli dari Yayasan Literasi.
-  Simpan gambar asli di *folder* `/public` dan hubungkan `src`-nya di setiap _component_ (`About`, `Gallery`, `Community`, dll). Pemanfaatan `<Image>` dari `next/image` amat disarankan demi minimasi *loading time*.

### 2. Integrasi Backend Backend/API Integrities
Saat ini tombol "Donasi", "Gabung Relawan", serta pengumpulan Formulir masih bersifat statis (belum memiliki backend).
- Siapkan *Payment Gateway* lokal (seperti Midtrans/Xendit) untuk menerima tautan donasi otomatis.
- Buatkan halaman `/gabung` untuk pendataan calon relawan, hubungkan dengan *Database* (seperti Supabase, Firebase, atau sekadar Google Forms API).

### 3. Pengolahan Logika Chatbot (`ChatWidget.tsx`)
- Respon Chat Widget masih berupa **teks tiruan statis dengan setTimeout**.
- Integrasikan dengan OpenAI API / Anthropic untuk membuat balasan dinamis atau tuju balasan otomatis menuju Admin perwakilan Telegram/WhatsApp.

### 4. SEO & Copywriting Final
- Ganti/sunting struktur nama pengurus Yayasan, teks legalitas, dan nomor kontak di bagian *Footer*.
- Tambahkan SEO *Opengraph* & *Meta description* mendetail di `app/page.tsx` atau `app/layout.tsx`.

---

## 💻 Cara Menjalankan Proyek di Lingkungan Lokal
Jika pengguna lain melakukan clone repository ini, jalankan instruksi ini:

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

*Ditulis dan dirancang khusus untuk memfasilitasi kebutuhan administrasi dan kemajuan IT Yayasan Literasi Indonesia.* 📗✨
