'use client';
import { useEffect, useRef } from 'react';
import { BookOpen, Library, GraduationCap, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const programs = [
    {
      title: "Kelas Membaca",
      description: "Program bimbingan belajar gratis untuk anak-anak prasejahtera agar lancar membaca dan menulis dasar.",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Donasi Buku",
      description: "Pengumpulan dan penyaluran buku bacaan berkualitas untuk perpustakaan jalanan dan taman baca masyarakat.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-amber-50 text-amber-500",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Workshop Literasi",
      description: "Pelatihan mendongeng, creative writing, dan pengelolaan perpustakaan untuk relawan dan guru lokal.",
      icon: <Library className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }

    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="program" className="py-24 bg-gray-50 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Program Kami</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Bagaimana Kami <span className="text-amber-500">Bekerja</span>
          </h3>
          <p className="text-lg text-gray-600">
            Aksi nyata kami terbagi dalam tiga pilar utama untuk mempercepat pemberantasan buta huruf dan menumbuhkan rasa cinta pada buku.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8 relative flex-grow flex flex-col">
                <div className={`absolute -top-10 right-8 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${program.color} bg-white ring-4 ring-white`}>
                  {program.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 mt-4">{program.title}</h4>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {program.description}
                </p>
                <a href="#gabung" className="inline-flex items-center gap-2 mt-8 text-emerald-600 font-bold hover:text-emerald-700 transition-colors group/link w-fit">
                  Dukung Program Ini
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
