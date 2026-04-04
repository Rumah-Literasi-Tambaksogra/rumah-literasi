'use client';
import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Stories() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Relawan Pengajar - Papua",
      text: "Melihat binar mata mereka saat pertama kali dapat mengeja kata dengan lancar adalah penghargaan terbesar bagi saya. Buku telah membuka cakrawala baru untuk mereka.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Siti Aminah",
      role: "Koordinator Taman Baca - NTT",
      text: "Awalnya kami hanya punya 50 buku sumbangan. Kini, berkat donasi Yayasan Literasi, kami mengelola ribuan buku dan anak-anak desa setiap sore berkumpul di sini.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }

    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%'
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50 rounded-l-full -z-10 opacity-50 hidden md:block"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={headerRef} className="text-center mb-16 space-y-4">
          <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Cerita Relawan</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Suara dari <span className="text-amber-500">Garis Depan</span>
          </h3>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-emerald-100 rotate-180" />
              <div className="flex items-center gap-4 mb-8">
                <img src={testi.image} alt={testi.name} className="w-16 h-16 rounded-full object-cover ring-4 ring-emerald-50" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testi.name}</h4>
                  <p className="text-amber-500 text-sm font-semibold">{testi.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed italic z-10 relative">
                "{testi.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
