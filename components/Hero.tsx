'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  // === State & Logic untuk Image Slider ===
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/images/murid-murid rumah literasi bersama pengajar.jpg',
    '/images/kegiatan-siswa-rumah-baca-01.png', 
    '/images/kegiatan-siswa-rumah-baca-02.png',
    '/images/kegiatan-siswa-rumah-baca-03.png',
  ];

  useEffect(() => {
    // Mengganti gambar setiap 4 detik (4000 ms)
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);
  // ========================================

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for blobs
    gsap.to(blob1Ref.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(blob2Ref.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Content slide up stagger (Khusus bagian teks)
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-emerald-600 text-white min-h-screen flex items-center pt-32 pb-12">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>

      {/* Blur Blobs */}
      <div ref={blob1Ref} className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-400/30 blur-3xl"></div>
      <div ref={blob2Ref} className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-amber-400/20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* GRID LAYOUT: Dibagi 2 Kolom di Desktop */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* SISI KIRI: TEKS */}
          <div ref={contentRef} className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Jelajahi Ribuan Buku dengan <br className="hidden lg:block"/>
              <span className="text-amber-400 underline decoration-amber-400/30 underline-offset-8">Pencarian Pintar</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Didukung teknologi AI terbaru, Rumah Literasi Tambaksogra membantu siswa menemukan inspirasi melalui pencarian pintar
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-8">
              <a href="#" target="_blank" className="group px-8 py-4 w-full sm:w-auto bg-amber-400 text-emerald-950 font-bold rounded-full hover:bg-amber-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                Coba Pencarian Pintar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* SISI KANAN: SLIDER GAMBAR */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl order-1 lg:order-2 border-4 border-white/10">
            {heroImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Hero visual ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
}