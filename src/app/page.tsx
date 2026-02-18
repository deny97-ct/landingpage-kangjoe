"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Megaphone, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Instagram, 
  Linkedin,
  Rocket,
  Zap,
  Layout,
  Cpu,
  Globe
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      {/* --- HEADER --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/5 backdrop-blur-2xl sticky top-0 z-[100]">
        <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
          KangJOE<span className="text-white">.</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">Layanan</a>
          <a href="#smk" className="hover:text-white transition-colors">Program SMK</a>
          <a href="#about" className="hover:text-white transition-colors">Tentang</a>
        </div>
        <button className="bg-white text-black hover:bg-zinc-200 px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 shadow-lg shadow-white/5">
          Mulai Proyek
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative px-6 pt-24 pb-32 flex flex-col items-center text-center">
        <div className="absolute top-0 -z-10 h-[600px] w-full bg-blue-600/10 blur-[150px] rounded-full opacity-50" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold mb-8">
            <Zap size={14} className="fill-current" /> Digital Solution & Creative Marketing Hub
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05] text-white">
            Menjembatani <span className="text-blue-500">Inovasi</span> <br />
            ke Hati <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">Konsumen</span>
          </h1>
          
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl mb-12 leading-relaxed font-light">
            Sinergi teknologi <span className="text-white font-medium">Software House</span> dan strategi <span className="text-white font-medium">Digital Marketing</span> untuk akselerasi bisnis masa depan.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="group relative flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-2xl shadow-blue-500/20">
              Konsultasi Gratis <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all text-zinc-300">
              Lihat Portofolio
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- BENTO GRID SERVICES --- */}
      <section id="services" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Layanan Unggulan</h2>
          <p className="text-zinc-500 italic">Ekselerasi digital tanpa batas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          
          {/* Card 1: Software House (Large) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-10 flex flex-col justify-end"
          >
            <div className="absolute top-8 right-8 p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
              <Code2 size={40} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Software House</h3>
              <p className="text-zinc-400 text-lg max-w-md">
                Pengembangan ekosistem digital kustom: Laravel, Next.js, hingga otomasi Google Apps Script yang presisi.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Card 2: Marketing (Tall) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:row-span-2 relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-10 flex flex-col justify-between"
          >
            <div className="p-4 bg-violet-500/10 rounded-2xl text-violet-400 w-fit group-hover:bg-violet-500 group-hover:text-white transition-all duration-500">
              <Megaphone size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-zinc-400">
                Strategi periklanan data-driven untuk meningkatkan konversi secara eksponensial.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Card 3: UI/UX (Small) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-8 flex items-center gap-6"
          >
            <div className="text-fuchsia-400"><Layout size={32} /></div>
            <h3 className="text-xl font-bold italic text-zinc-200">Modern UI/UX</h3>
          </motion.div>

          {/* Card 4: SMK (Wide) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-blue-600/10 p-10 flex flex-col justify-center"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-400"><Users size={32} /></div>
              <div>
                <h3 className="text-2xl font-bold italic">Tech Incubator</h3>
                <p className="text-zinc-400">Pusat praktek industri talenta SMK Majalengka.</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent" />
          </motion.div>

        </div>
      </section>

      {/* --- PROGRAM SMK --- */}
      <section id="smk" className="px-6 py-24 bg-white/[0.01] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-20 bg-blue-500 rounded-full" />
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white italic">
              Pusat Inkubasi <br/><span className="text-blue-500">Talenta Digital.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 font-light">
              Membangun jembatan antara kurikulum SMK dengan realitas industri teknologi dunia. Di bawah Yayasan Citra Telematika, kami mencetak jagoan masa depan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Praktek Laravel', 'Ads Strategist', 'DKV Kreatif', 'Cloud Network'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                  <CheckCircle2 size={18} className="text-blue-500" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative group p-8 rounded-[3rem] border border-white/5 bg-zinc-900/20 backdrop-blur-md overflow-hidden">
             <div className="relative z-10 flex flex-col items-center text-center py-10">
                <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-500">
                   <Cpu size={48} />
                </div>
                <h3 className="text-2xl font-extrabold mb-4 uppercase tracking-widest">Kolaborasi SMK</h3>
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all">
                  UNDUH PROPOSAL MOU
                </button>
             </div>
             <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="px-6 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="text-3xl font-black tracking-tighter mb-6 italic text-white">KangJOE.</div>
            <p className="text-zinc-500 leading-relaxed text-sm">
              "Menjembatani Inovasi Penjual ke Hati Konsumen melalui Teknologi dan Strategi."
            </p>
          </div>
          
          <div className="flex flex-wrap gap-12 md:gap-24">
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-colors"><Instagram size={20}/></a>
                <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-colors"><Linkedin size={20}/></a>
                <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-colors"><Globe size={20}/></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Office</h4>
              <p className="text-zinc-500 text-sm italic">Majalengka, Jawa Barat<br/>Digital Hub Yayasan Citra Telematika</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-center text-zinc-600 text-[10px] tracking-[0.2em] uppercase">
          © 2026 KangJOE Hub • Built with Next.js 15
        </div>
      </footer>
    </div>
  );
}
