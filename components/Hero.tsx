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
    <section ref={containerRef} className="relative overflow-hidden bg-emerald-600 text-white min-h-[90vh] flex items-center pt-24 pb-12">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
      
      {/* Blur Blobs */}
      <div ref={blob1Ref} className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-400/30 blur-3xl"></div>
      <div ref={blob2Ref} className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-amber-400/20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-emerald-50 text-sm font-semibold tracking-wide backdrop-blur-sm">
              <BookOpen className="w-4 h-4 text-amber-300" /> Yayasan Literasi Indonesia
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Membangun Budaya Literasi untuk <span className="text-amber-400 underline decoration-amber-400/30 underline-offset-8">Masa Depan</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50/90 max-w-2xl mx-auto leading-relaxed font-light">
            Bersama kita tingkatkan minat baca dan akses pendidikan di Indonesia
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
            <a href="#gabung" className="group px-8 py-4 w-full sm:w-auto bg-amber-400 text-emerald-950 font-bold rounded-full hover:bg-amber-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
              Gabung Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#program" className="px-8 py-4 w-full sm:w-auto bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center text-lg">
              Pelajari Program
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration using SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.82,201.27,117.81,241.1,114.47,281.33,103.85,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
