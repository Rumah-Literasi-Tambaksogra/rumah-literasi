'use client';

import { useState, useEffect } from 'react';
import { Heart, MapPin, Phone, Mail, Globe } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Impact from '../components/Impact';
import Community from '../components/Community';
import Gallery from '../components/Gallery';
import Stories from '../components/Stories';

export default function LiteracyLandingPage() {
  // === State & Logic untuk Navbar Scroll Effect ===
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Sembunyikan jika scroll ke bawah lebih dari 50px, munculkan jika scroll ke atas
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  // ===============================================

  return (
    <main className="min-h-screen font-sans selection:bg-amber-200 selection:text-emerald-900 bg-gray-50">
      
      {/* Navbar Section (Style ala Rockstar Games) */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isNavVisible ? 'translate-y-0' : '-translate-y-full'
        } bg-black/40 backdrop-blur-md border-b border-white/10`}
      >
        <div className="w-full px-6 py-4 flex justify-between items-center relative">
          
          {/* KIRI: Logo Saja */}
          <div className="flex-shrink-0 z-10">
            <img src="/logo-crop.png" alt="Logo" className="w-9 h-9 object-contain" />
          </div>

          {/* TENGAH: Menu Navigasi (Absolute agar persis di tengah seperti Rockstar) */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-white tracking-widest uppercase absolute left-1/2 -translate-x-1/2">
            <a href="#tentang-kami" className="hover:text-amber-400 transition-colors">Tentang Kami</a>
            <a href="#program" className="hover:text-amber-400 transition-colors">Program</a>
            <a href="#dampak" className="hover:text-amber-400 transition-colors">Dampak</a>
            <a href="#komunitas" className="hover:text-amber-400 transition-colors">Komunitas</a>
          </div>

          {/* KANAN: Tombol "AI Pintar" */}
          <div className="flex-shrink-0 z-10 hidden sm:block">
            <a 
              href="#" 
              className="px-6 py-2 text-sm font-bold text-white uppercase tracking-wider border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              AI Pintar
            </a>
          </div>

        </div>
      </nav>

      {/* Separated Components */}
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Community />
      <Gallery />
      <Stories />

      {/* CTA Section */}
      <section id="gabung" className="py-32 relative bg-emerald-900 overflow-hidden cta-section">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-emerald-600/50 to-amber-500/50 rounded-full blur-[150px] -z-10"></div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl border border-emerald-700/50 relative overflow-hidden box-cta">
            {/* Decorative inner elements */}
            <div className="absolute -top-24 -right-24 p-8 opacity-5 rotate-12">
              <Heart className="w-96 h-96 text-white" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Kitalah Perubahan <br className="hidden md:block" /> yang Mereka Tunggu
              </h2>
              <p className="text-xl md:text-2xl text-emerald-100/90 leading-relaxed max-w-2xl mx-auto font-light">
                Satu buku, satu rupiah, atau satu jam waktu Anda dapat mengubah jalan hidup seorang anak selamanya. Mari berkolaborasi.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                <button className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold rounded-full shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                  <Heart className="w-6 h-6 fill-emerald-950" />
                  Donasi Sekarang
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-emerald-400 hover:bg-emerald-800 text-white hover:text-white font-bold rounded-full transition-all duration-300 hover:-translate-y-1 text-lg">
                  Gabung Relawan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-200/80 py-20 border-t border-emerald-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            
            {/* Kolom 1: Logo & Deskripsi Singkat */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <img src="/logo-crop.png" alt="Logo Rumah Literasi Tambaksogra" className="w-12 h-12 object-contain" />
                <span className="text-2xl tracking-tight font-black leading-tight">
                  Rumah Literasi <br /> Tambaksogra
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Wadah kolaborasi untuk meningkatkan literasi dan kualitas pendidikan anak-anak di lingkungan Tambaksogra.
              </p>
            </div>

            {/* Kolom 2: Hubungi Kami */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-xl">Hubungi Kami</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Jl. Sunan Ampel Desa Tambaksogra RT 3 RW 1 Kec. Sumbang, Kab. Banyumas, Jawa Tengah</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>0812-XXXX-XXXX</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>kontak@tambaksogra.org</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-amber-400" />
                  <span>www.tambaksogra.org</span>
                </li>
              </ul>
            </div>

            {/* Kolom 3: Navigasi & Profil */}
            <div className="flex flex-col space-y-12">
              <div>
                <h4 className="text-white font-bold text-xl mb-6">Tentang Kami</h4>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Home</a></li>
                  <li><a href="#program" className="hover:text-amber-400 transition-colors">Program</a></li>
                  <li><a href="#tentang-kami" className="hover:text-amber-400 transition-colors">Tentang</a></li>
                  <li><a href="#dampak" className="hover:text-amber-400 transition-colors">Dampak</a></li>
                  <li><a href="#komunitas" className="hover:text-amber-400 transition-colors">Komunitas</a></li>
                  <li><a href="#gabung" className="hover:text-amber-400 transition-colors">Donasi</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-xl mb-4">Profil Lembaga</h4>
                <div className="inline-flex p-3 bg-emerald-500 rounded-xl text-white hover:bg-emerald-400 transition-all cursor-pointer shadow-lg">
                  <img src="/logo-crop.png" alt="Ikon Profil Rumah Literasi Tambaksogra" className="w-6 h-6 object-contain" />
                </div>
              </div>
            </div>

          </div>

          {/* Garis Pemisah & Copyright */}
          <div className="mt-16 pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
            <p>© 2026 Rumah Literasi Tambaksogra. Hak Cipta Dilindungi.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-400">Kebijakan Privasi</a>
              <a href="#" className="hover:text-amber-400">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}