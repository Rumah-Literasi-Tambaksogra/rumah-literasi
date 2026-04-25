'use client';
import { useEffect, useRef } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

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

    // Content slide up stagger
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
        <div ref={contentRef} className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Jelajahi Ribuan Buku dengan <span className="text-amber-400 underline decoration-amber-400/30 underline-offset-8">Pencarian Pintar</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50/90 max-w-2xl mx-auto leading-relaxed font-light">
            Didukung teknologi AI terbaru, Rumah Literasi Tambaksogra membantu siswa menemukan inspirasi melalui pencarian pintar
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-12">
            <a href="#" target="_blank" className="group px-8 py-4 w-full sm:w-auto bg-amber-400 text-emerald-950 font-bold rounded-full hover:bg-amber-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
              Coba Pencarian Pintar
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
