'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  // === State & Logic untuk Image Slider ===
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/images/murid-murid rumah literasi bersama pengajar.jpg',
    '/images/kegiatan-siswa-rumah-baca-01.png', 
    '/images/kegiatan-siswa-rumah-baca-02.png',
    '/images/kegiatan-siswa-rumah-baca-03.png',
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);
  // ========================================

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-emerald-950 overflow-hidden">
      
      {/* LAYER GAMBAR */}
      {/* Di HP: w-full (full screen) | Di Desktop: md:w-[65%] (hanya kanan) */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[65%] z-0">
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Background literasi ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1500 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* LAYER OVERLAY (Bayangan) */}
      {/* OVERLAY HP: Gelap merata (opacity 80%) di seluruh layar. Disembunyikan di desktop (md:hidden) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-emerald-950/80 md:hidden"></div>

      {/* OVERLAY DESKTOP: Warna solid di kiri, membaur ke kanan. Disembunyikan di HP (hidden md:block) */}
      <div className="absolute inset-y-0 left-0 z-10 pointer-events-none hidden md:block w-[70%] bg-gradient-to-r from-emerald-950 via-emerald-950 via-60% to-transparent"></div>


      {/* LAYER ATAS: Teks & Konten */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="grid md:grid-cols-2">
          
          {/* Kolom Kiri untuk Teks */}
          <div ref={contentRef} className="space-y-8 text-center md:text-left py-12 md:py-0">
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md">
              Cari Ratusan <br />
              Buku dengan <br />
              <span className="text-amber-400">AI Pintar</span>
            </h1>
            
            <p className="text-lg md:text-xl text-emerald-50/90 leading-relaxed font-light max-w-lg mx-auto md:mx-0 drop-shadow">
              Didukung teknologi AI terbaru, Rumah Literasi Tambaksogra membantu siswa menemukan inspirasi melalui pencarian pintar.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-6">
              <a href="#" target="_blank" className="group px-8 py-4 w-full sm:w-auto bg-amber-400 text-emerald-950 font-bold rounded-full hover:bg-amber-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                Coba Pencarian Pintar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
          
          <div className="hidden md:block"></div>

        </div>
      </div>
      
    </section>
  );
}