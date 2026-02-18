"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Megaphone, Users, ArrowRight, CheckCircle2, 
  Instagram, Linkedin, Rocket, Zap, Cpu, Globe, 
  Layers, Bot, Video, ShieldCheck, TrendingUp 
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      {/* --- NAVIGASI --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/5 backdrop-blur-2xl sticky top-0 z-[100]">
        <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent italic">
          KangJOE<span className="text-white">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
          <a href="#services" className="hover:text-white transition-colors">Layanan</a>
          <a href="#trends" className="hover:text-white transition-colors text-blue-400 font-black italic underline underline-offset-8">Tren SMK 2026</a>
          <a href="#smk" className="hover:text-white transition-colors">Program</a>
        </div>
        <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-black hover:bg-blue-600 hover:text-white transition-all shadow-lg shadow-white/5">
          HUBUNGI KAMI
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative px-6 pt-24 pb-16 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-full max-w-4xl bg-blue-600/10 blur-[120px] opacity-60" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8">
            <Zap size={12} className="fill-current" /> Leading Digital Innovation in Majalengka
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white italic uppercase">
            Inovasi <span className="text-blue-500">Digital</span> <br />
            Masa <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent underline decoration-white/10">Depan</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl mb-12 italic leading-relaxed font-light">
            "Menjembatani Inovasi Penjual ke Hati Konsumen melalui Teknologi dan Strategi."
          </p>
        </motion.div>
      </section>

      {/* --- SECTION: 5 TREN INOVATIF SMK (UPDATE TERBARU) --- */}
      <section id="trends" className="px-6 py-20 max-w-7xl mx-auto border-t border-white/5 bg-white/[0.01]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 italic uppercase">
              5 Tren Inovatif <br/><span className="text-blue-500">Talenta SMK 2026</span>
            </h2>
            <p className="text-zinc-500 font-medium">Kurikulum eksklusif KangJOE untuk mencetak tenaga ahli siap industri digital.</p>
          </div>
          <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-blue-400 text-xs font-black uppercase tracking-widest">
            Future-Ready Hub
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { t: "AI Marketing", d: "Prompt Engineering & Content AI Strategy.", i: <Bot size={28}/>, c: "from-blue-500/20" },
            { t: "Live Commerce", d: "Sistem Streaming & Konversi Penjualan.", i: <TrendingUp size={28}/>, c: "from-violet-500/20" },
            { t: "Low-Code Dev", d: "Automasi AppSheet & Google Apps Script.", i: <Zap size={28}/>, c: "from-orange-500/20" },
            { t: "Motion Video", d: "Viral Content Production untuk TikTok/Reels.", i: <Video size={28}/>, c: "from-fuchsia-500/20" },
            { t: "Cloud Tech", d: "Serverless Deployment & Cybersecurity.", i: <ShieldCheck size={28}/>, c: "from-emerald-500/20" }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[2.5rem] border border-white/5 bg-gradient-to-b ${item.c} to-zinc-900/40 flex flex-col gap-6 group hover:border-white/20 transition-all duration-500 shadow-2xl`}
            >
              <div className="p-3 bg-black/40 w-fit rounded-2xl text-white group-hover:scale-110 transition-transform">{item.i}</div>
              <div>
                <h4 className="font-black text-white mb-2 uppercase tracking-tighter leading-none">{item.t}</h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-bold uppercase tracking-tight">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="services" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          
          {/* Card 1: Software House */}
          <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[3rem] border border-white/10 bg-zinc-900/40 p-12 flex flex-col justify-end">
            <div className="absolute top-10 right-10 p-5 bg-blue-500/10 rounded-3xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-700">
              <Code2 size={40} />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-4 italic uppercase">Software House</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Spesialis <span className="text-white">Laravel, Next.js,</span> & <span className="text-white font-medium">AppSheet</span> untuk sistem bisnis skala besar.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Marketing */}
          <motion.div whileHover={{ scale: 0.99 }} className="md:row-span-2 relative group overflow-hidden rounded-[3rem] border border-white/10 bg-zinc-900/40 p-10 flex flex-col justify-between">
            <div className="p-4 bg-violet-500/10 rounded-2xl text-violet-400 w-fit group-hover:bg-violet-500 group-hover:text-white transition-all duration-700">
              <Megaphone size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4 italic uppercase leading-none">Digital Marketing</h3>
              <p className="text-zinc-400 text-sm">Strategi periklanan data-driven & optimasi konversi pasar.</p>
            </div>
          </motion.div>

          {/* Card 3: Tech Stack */}
          <div className="relative rounded-[3rem] border border-white/10 bg-zinc-900/40 p-8 flex flex-col justify-between">
            <div className="text-blue-400"><Layers size={24}/></div>
            <div>
              <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3">Core Technology</h4>
              <div className="flex flex-wrap gap-1 text-[9px] font-mono font-bold text-blue-300 uppercase">
                <span className="px-2 py-1 bg-white/5 rounded-md">Next.js 15</span>
                <span className="px-2 py-1 bg-white/5 rounded-md">Laravel</span>
              </div>
            </div>
          </div>

          {/* Card 4: Internship */}
          <div className="relative rounded-[3rem] border border-blue-500/30 bg-blue-600/10 p-8 flex flex-col justify-center text-center">
            <div className="text-blue-400 font-black text-4xl mb-1 italic">3 | 5 | 6</div>
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-black leading-tight">Bulan Durasi Magang</p>
          </div>

        </div>
      </section>

      {/* --- PROGRAM SMK --- */}
      <section id="smk" className="px-6 py-24 bg-blue-600 border-y border-white/10 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-7xl font-black mb-8 italic uppercase leading-[0.85]">
              Pusat Inkubasi <br/><span className="text-black/30">Talenta Digital.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {['Praktek Laravel', 'Ads Strategist', 'Content AI Specialist', 'Cloud Security'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-black uppercase text-xs tracking-widest">
                  <CheckCircle2 size={20} className="text-white fill-white/10" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-black/20 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-white/10 text-center">
             <Cpu size={56} className="mx-auto mb-8 text-white/50 animate-pulse" />
             <h3 className="text-2xl font-black mb-8 uppercase tracking-widest leading-none italic">Inkubasi SMK Majalengka</h3>
             <button className="w-full bg-white text-blue-600 py-5 rounded-3xl font-black hover:scale-[1.02] transition-all uppercase tracking-[0.2em] shadow-2xl">
               UNDUH PROPOSAL MOU
             </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="px-6 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-3xl font-black tracking-tighter italic text-white uppercase">KangJOE.</div>
          <div className="flex gap-6">
             <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-colors"><Instagram size={20}/></a>
             <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-colors"><Linkedin size={20}/></a>
             <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-colors"><Globe size={20}/></a>
          </div>
          <div className="text-zinc-600 text-[9px] tracking-[0.4em] uppercase font-bold text-center md:text-right leading-relaxed">
            © 2026 KANGJOE HUB • Majalengka Innovation Center <br/>
            Sinergi Teknologi Yayasan Citra Telematika
          </div>
        </div>
      </footer>
    </div>
  );
}
