'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const impacts = [
    { value: "10.000+", label: "Anak Terjangkau", suffix: "Mendapat akses buku berkualitas" },
    { value: "50+", label: "Komunitas", suffix: "Binaan di seluruh Indonesia" },
    { value: "100+", label: "Relawan", suffix: "Aktif mengajar dan membagikan buku" },
    { value: "25.000+", label: "Buku", suffix: "Didonasikan ke daerah pelosok" }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (textRef.current) {
      gsap.fromTo(textRef.current.children,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)', scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }

    if (statsRef.current) {
      gsap.fromTo(statsRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%'
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="dampak" className="py-24 bg-emerald-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="impact-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#impact-pattern)" />
        </svg>
      </div>

      <div className="absolute -left-48 -top-48 w-96 h-96 bg-amber-400/20 rounded-full blur-[100px]"></div>
      <div className="absolute -right-48 -bottom-48 w-96 h-96 bg-emerald-300/30 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div ref={textRef} className="text-center text-white mb-16 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-emerald-200 font-bold tracking-wider uppercase text-sm">Dampak Nyata</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Bersama Membawa <span className="text-amber-400">Perubahan</span>
          </h3>
          <p className="text-emerald-50 text-lg opacity-90">
            Dukungan Anda telah membantu kami menyebarkan semangat membaca ke ribuan anak Indonesia.
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <div className="text-4xl md:text-5xl font-black text-amber-400 mb-2">{impact.value}</div>
              <div className="text-xl font-bold text-white mb-3">{impact.label}</div>
              <div className="h-px bg-emerald-400/50 w-12 mx-auto mb-3"></div>
              <p className="text-sm text-emerald-100/80">{impact.suffix}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
