'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", span: "col-span-1 md:col-span-2 row-span-1 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1544830209-1c9cd1817769?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.7)', scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }

    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%'
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={headerRef} className="text-center mb-16 space-y-4">
          <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Galeri Kegiatan Kami</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Momen <span className="text-amber-500">Berharga</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Senyum kebahagiaan mereka adalah pendorong semangat kami untuk terus melanjutkan misi kebaikan ini.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 md:gap-6 h-[600px]">
          {images.map((img, idx) => (
            <div key={idx} className={`${img.span} relative group overflow-hidden rounded-3xl bg-gray-200`}>
              <img
                src={img.src}
                alt={`Galeri Kegiatan ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/30 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
