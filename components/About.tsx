'use client';
import { useEffect, useRef } from 'react';
import { BookHeart, Globe2, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(imageRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="tentang-kami" className="py-24 bg-white overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div ref={imageRef} className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="/images/murid-murid rumah literasi bersama pengajar.jpg"
                alt="Murid-murid Rumah Literasi Bersama Pengajar"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent"></div>
              
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
                Rumah Literasi <span className="text-emerald-600">Tambaksogra</span>
              </h3>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Rumah Literasi Tambaksogra didirikan dengan satu keyakinan sederhana: setiap anak, di manapun mereka berada, berhak mendapatkan akses ke buku dan pendidikan yang berkualitas. Kami percaya bahwa membaca adalah fondasi utama bagi kemajuan sebuah bangsa.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Globe2 className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Visi Kami</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Berisi visi dari Rumah Literasi Tambaksogra.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Misi Kami</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Berisi misi dari Rumah Literasi Tambaksogra.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
