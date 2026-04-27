'use client';
import { useEffect, useRef } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Community() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);

  const activities = [
    {
      title: "Festival Membaca Desa",
      category: "Kelas Membaca",
      location: "Desa Suka Maju, Jawa Barat",
      date: "14 Mei 2026",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Pelatihan Guru Relawan",
      category: "Pelatihan",
      location: "Jakarta Selatan",
      date: "22 Mei 2026",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Bazar Buku Murah & Donasi",
      category: "Kegiatan Sosial",
      location: "Alun-alun Kota",
      date: "05 Juni 2026",
      image: "https://images.unsplash.com/photo-1524322253456-eeb2576dd20a?q=80&w=800&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }

    if (activitiesRef.current) {
      gsap.fromTo(activitiesRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', scrollTrigger: {
            trigger: activitiesRef.current,
            start: 'top 75%'
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="komunitas" className="py-24 bg-white relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Kegiatan Komunitas</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Agenda & <span className="text-amber-500">Aktivitas Kami</span>
            </h3>
            <p className="text-gray-600 text-lg">
              Ikuti berbagai kegiatan sosial, pelatihan, dan kelas membaca di berbagai daerah.
            </p>
          </div>
          <button className="px-6 py-3 bg-emerald-50 text-emerald-600 font-bold rounded-full hover:bg-emerald-100 transition-colors w-fit">
            Lihat Semua Agenda
          </button>
        </div>

        <div ref={activitiesRef} className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-6 relative">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {activity.category}
                </div>
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{activity.title}</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>{activity.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-500" />
                  <span>{activity.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
