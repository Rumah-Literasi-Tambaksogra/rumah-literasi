import type { Metadata } from 'next';
import { BookOpen, Heart } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Impact from '../components/Impact';
import Community from '../components/Community';
import Gallery from '../components/Gallery';
import Stories from '../components/Stories';

export const metadata: Metadata = {
  title: 'Membangun Budaya Literasi | Yayasan Literasi Indonesia',
  description: 'Bersama kita tingkatkan minat baca dan akses pendidikan di Indonesia. Bergabunglah dengan kami untuk membangun budaya literasi masa depan.',
};

export default function LiteracyLandingPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-amber-200 selection:text-emerald-900 bg-gray-50">
      {/* Navbar Section */}
      <nav className="absolute top-0 left-0 right-0 z-50 text-white p-6">
        <div className="container mx-auto max-w-7xl flex justify-between items-center bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 shadow-sm animate-fade-in-down">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <BookOpen className="w-6 h-6 text-amber-400" />
            <span>Rumah Literasi</span>
          </div>
          <div className="hidden lg:flex gap-8 text-sm font-semibold text-emerald-50 ml-auto">
            <a href="#tentang-kami" className="hover:text-amber-400 transition-colors">Tentang Kami</a>
            <a href="#program" className="hover:text-amber-400 transition-colors">Program</a>
            <a href="#dampak" className="hover:text-amber-400 transition-colors">Dampak</a>
            <a href="#komunitas" className="hover:text-amber-400 transition-colors">Komunitas</a>
          </div>
        </div>
      </nav>

      {/* Separated Components */}
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Community />
      <Gallery />
      <Stories />

      {/* CTA Section */}
      <section id="gabung" className="py-32 relative bg-emerald-900 overflow-hidden cta-section">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-emerald-600/50 to-amber-500/50 rounded-full blur-[150px] -z-10"></div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl border border-emerald-700/50 relative overflow-hidden box-cta">
            {/* Decorative inner elements */}
            <div className="absolute -top-24 -right-24 p-8 opacity-5 rotate-12">
              <Heart className="w-96 h-96 text-white" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Kitalah Perubahan <br className="hidden md:block" /> yang Mereka Tunggu
              </h2>
              <p className="text-xl md:text-2xl text-emerald-100/90 leading-relaxed max-w-2xl mx-auto font-light">
                Satu buku, satu rupiah, atau satu jam waktu Anda dapat mengubah jalan hidup seorang anak selamanya. Mari berkolaborasi.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                <button className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold rounded-full shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                  <Heart className="w-6 h-6 fill-emerald-950" />
                  Donasi Sekarang
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-emerald-400 hover:bg-emerald-800 text-white hover:text-white font-bold rounded-full transition-all duration-300 hover:-translate-y-1 text-lg">
                  Gabung Relawan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-200/60 py-16">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-white">
            <BookOpen className="text-amber-400 w-8 h-8" />
            <span className="text-2xl tracking-tight font-black">Rumah Literasi Tambaksogra</span>
          </div>
          <ul className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-emerald-200">
            <li><a href="#tentang-kami" className="hover:text-amber-400 transition-colors">Tentang Kami</a></li>
            <li><a href="#program" className="hover:text-amber-400 transition-colors">Program</a></li>
            <li><a href="#dampak" className="hover:text-amber-400 transition-colors">Dampak</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Privasi & Syarat</a></li>
          </ul>
          <p className="text-sm font-medium">© 2026 Rumah Literasi Tambaksogra.<br className="md:hidden" /> Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </main>
  );
}
