import React from 'react';
import { motion } from 'framer-motion'; // Untuk animasi profesional
import { Code, Megaphone, Smartphone, ArrowRight } from 'lucide-react'; // Ikon modern

const LandingPageKangJOE = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-blue-500/30">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
          KangJOE
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
          <a href="#partnership" className="hover:text-white transition">SMK Program</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-sm font-semibold transition">
          Contact Us
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative px-8 pt-20 pb-32 flex flex-col items-center text-center">
        {/* Glow Effect */}
        <div className="absolute top-0 -z-10 h-[400px] w-full bg-blue-500/10 blur-[120px] rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-medium mb-6 inline-block">
            Digital Solution & Creative Marketing Hub
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Menjembatani <span className="text-blue-500">Inovasi</span> <br />
            ke Hati <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">Konsumen</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-10">
            Kami mengintegrasikan teknologi perangkat lunak mutakhir dengan strategi pemasaran yang presisi untuk mengakselerasi bisnis Anda.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 transition">
              Mulai Proyek <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/5 transition">
              Lihat Portofolio
            </button>
          </div>
        </motion.div>
      </section>

      {/* SERVICES PREVIEW (The "Bridge") */}
      <section id="services" className="px-8 py-20 bg-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Code className="text-blue-400" />}
            title="Software House"
            desc="Pengembangan aplikasi berbasis Laravel, Next.js, hingga otomasi Apps Script yang handal."
          />
          <ServiceCard 
            icon={<Megaphone className="text-violet-400" />}
            title="Digital Marketing"
            desc="Strategi pemasaran data-driven untuk meningkatkan konversi dan loyalitas brand."
          />
          <ServiceCard 
            icon={<Smartphone className="text-fuchsia-400" />}
            title="Tech Incubator"
            desc="Wadah praktik industri bagi talenta terbaik SMK Majalengka di bawah naungan Yayasan."
          />
        </div>
      </section>

    </div>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-2xl border border-white/10 bg-[#121214] hover:border-blue-500/50 transition-all group">
    <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-zinc-400 leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

export default LandingPageKangJOE;
