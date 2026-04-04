'use client';
import { useEffect, useRef } from 'react';
import { BookHeart, Globe2, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(imageRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="tentang-kami" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div ref={imageRef} className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1544830209-1c9cd1817769?q=80&w=1000&auto=format&fit=crop" 
                alt="Anak-anak belajar membaca" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/20 inline-flex items-center gap-4">
                  <div className="bg-amber-400 p-3 rounded-full text-emerald-950">
                    <BookHeart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Misi Kami</h4>
                    <p className="text-xs md:text-sm text-gray-600 font-medium">Buku untuk setiap anak</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-600/20 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div ref={contentRef} className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Tentang Kami</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Membuka Jendela Dunia Melalui <span className="text-emerald-600">Literasi</span>
              </h3>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Yayasan Literasi Indonesia didirikan dengan satu keyakinan sederhana: setiap anak, di manapun mereka berada, berhak mendapatkan akses ke buku dan pendidikan yang berkualitas. Kami percaya bahwa membaca adalah fondasi utama bagi kemajuan sebuah bangsa.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Globe2 className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Menjangkau Pelosok</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Mendistribusikan buku dan materi belajar ke daerah terpencil di Indonesia.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Pemberdayaan Komunitas</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Membangun taman bacaan dan membina relawan lokal secara berkelanjutan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
