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
    <div className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- NAV --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/5 backdrop-blur-2xl sticky top-0 z-[100]">
        <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent italic">
          KangJOE.
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
          <a href="#services" className="hover:text-white transition-colors">Layanan</a>
          <a href="#trends" className="hover:text-white transition-colors text-blue-400">Tren SMK 2026</a>
          <a href="#smk" className="hover:text-white transition-colors">Program</a>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-black hover:bg-blue-500 hover:text-white transition-all">
          KONTAK
        </button>
      </nav>

      {/* --- HERO --- */}
      <section className="relative px-6 pt-24 pb-20 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-full max-w-4xl bg-blue-600/10 blur-[120px]" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            INOVASI <span className="text-blue-500">DIGITAL</span> <br />
            UNTUK <span className="text-zinc-500">MAJALENGKA</span>
          </h1>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg italic mb-10">
            "Menjembatani Inovasi Penjual ke Hati Konsumen melalui Teknologi dan Strategi."
          </p>
        </motion.div>
      </section>

      {/* --- 5 TREN INOVATIF SMK (SECTION BARU) --- */}
      <section id="trends" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic mb-4 uppercase">
            5 Tren Inovatif <span className="text-blue-500">SMK 2026</span>
          </h2>
          <p className="text-zinc-500 font-medium">Kurikulum masa depan yang hanya ada di KangJOE Digital Hub.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { t: "AI Marketing", d: "Prompt Engineering & Content AI.", i: <Bot/>, c: "border-blue-500/30" },
            { t: "Live Commerce", d: "Streaming & Tech Sales.", i: <TrendingUp/>, c: "border-violet-500/30" },
            { t: "Low-Code Dev", d: "AppSheet & Automasi Bisnis.", i: <Zap/>, c: "border-orange-500/30" },
            { t: "Motion Video", d: "Produksi Video Viral TikTok.", i: <Video/>, c: "border-pink-500/30" },
            { t: "Cloud Tech", d: "Security & Deployment.", i: <ShieldCheck/>, c: "border-emerald-500/30" }
          ].map((item, idx) => (
            <div key={idx} className={`p-8 rounded-[2rem] border ${item.c} bg-zinc-900/50 hover:bg-zinc-800 transition-all group`}>
              <div className="mb-6 text-white group-hover:scale-110 transition-transform">{item.i}</div>
              <h4 className="font-black text-sm mb-2 uppercase tracking-tight">{item.t}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES (BENTO LIGHT) --- */}
      <section id="services" className="px-6 py-20 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[400px]">
          <div className="md:col-span-2 bg-blue-600/10 border border-blue-500/20 rounded-[2.5rem] p-10 flex flex-col justify-end relative overflow-hidden">
            <Code2 className="absolute top-10 right-10 text-blue-500/20" size={120} />
            <h3 className="text-4xl font-black italic mb-2">SOFTWARE HOUSE</h3>
            <p className="text-zinc-400">Laravel, Next.js & Google Apps Script Specialist.</p>
          </div>
          <div className="bg-zinc-900/80 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between">
            <Megaphone className="text-violet-500" size={40} />
            <div>
              <h3 className="text-2xl font-black italic mb-2 leading-none">DIGITAL MARKETING</h3>
              <p className="text-zinc-500 text-sm italic">Data-Driven Strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROGRAM SMK --- */}
      <section id="smk" className="px-6 py-20 bg-blue-600 border-y border-white/10 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center text-center md:text-left">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic uppercase leading-none">
            Pusat Inkubasi <br/>Talenta Digital.
          </h2>
          <div className="bg-black/20 p-8 rounded-[2rem] backdrop-blur-md">
            <p className="font-bold text-xl mb-6 italic">Gabung Program Magang 3, 5, atau 6 Bulan.</p>
            <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-black hover:scale-105 transition-all uppercase tracking-widest">
              HUBUNGI KAMI
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="px-6 py-12 text-center text-zinc-600 text-[10px] tracking-[0.3em] uppercase">
        © 2026 KANGJOE DIGITAL HUB • MAJALENGKA
      </footer>
    </div>
  );
}
