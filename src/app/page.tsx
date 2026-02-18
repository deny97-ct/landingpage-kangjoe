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
      
      {/* 1. NAV - Menu Baru "Inovasi SMK" */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/5 backdrop-blur-2xl sticky top-0 z-[100]">
        <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent italic">
          KangJOE.
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
          <a href="#services" className="hover:text-white transition-colors">Layanan</a>
          <a href="#trends" className="hover:text-white transition-colors text-blue-400 font-black">INOVASI SMK 2026</a>
          <a href="#smk" className="hover:text-white transition-colors">Program</a>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-black hover:bg-blue-500 hover:text-white transition-all">
          KONTAK
        </button>
      </nav>

      {/* 2. HERO */}
      <section className="relative px-6 pt-24 pb-16 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-full max-w-4xl bg-blue-600/10 blur-[120px]" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
            INOVASI <span className="text-blue-500 text-glow">DIGITAL</span>
          </h1>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg italic mb-10">
            "Menjembatani Inovasi Penjual ke Hati Konsumen melalui Teknologi dan Strategi."
          </p>
        </motion.div>
      </section>

      {/* 3. SECTION 5 TREN (Kita pindahkan ke atas agar pasti terlihat) */}
      <section id="trends" className="px-6 py-16 max-w-7xl mx-auto bg-white/[0.02] rounded-[3rem] border border-white/5 my-10">
        <div className="mb-10 text-center md:text-left px-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic mb-4 uppercase">
            5 Tren Inovatif <span className="text-blue-500">SMK 2026</span>
          </h2>
          <p className="text-zinc-500 font-medium">Kurikulum masa depan eksklusif di KangJOE Digital Hub.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { t: "AI Marketing", d: "Prompt Engineering & Content AI.", i: <Bot/>, c: "border-blue-500/30" },
            { t: "Live Commerce", d: "Streaming & Tech Sales.", i: <TrendingUp/>, c: "border-violet-500/30" },
            { t: "Low-Code Dev", d: "AppSheet & Automasi Bisnis.", i: <Zap/>, c: "border-orange-500/30" },
            { t: "Motion Video", d: "Produksi Video Viral TikTok.", i: <Video/>, c: "border-pink-500/30" },
            { t: "Cloud Tech", d: "Security & Deployment.", i: <ShieldCheck/>, c: "border-emerald-500/30" }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-[2rem] border ${item.c} bg-zinc-900/50 transition-all group shadow-xl`}
            >
              <div className="mb-6 text-white group-hover:text-blue-400 transition-colors">{item.i}</div>
              <h4 className="font-black text-sm mb-2 uppercase tracking-tight text-white">{item.t}</h4>
              <p className="text-[10px] text-zinc-500 leading-relaxed uppercase font-bold">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES */}
      <section id="services" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
          <div className="md:col-span-2 bg-zinc-900/60 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-end relative overflow-hidden group hover:border-blue-500/50 transition-all">
            <Code2 className="absolute top-10 right-10 text-blue-500/10 group-hover:scale-110 transition-transform" size={120} />
            <h3 className="text-4xl font-black italic mb-2">SOFTWARE HOUSE</h3>
            <p className="text-zinc-400 leading-relaxed">Pakar Laravel, Next.js & Google Apps Script untuk solusi bisnis Anda.</p>
          </div>
          <div className="bg-zinc-900/60 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between hover:border-violet-500/50 transition-all">
            <Megaphone className="text-violet-500" size={40} />
            <div>
              <h3 className="text-2xl font-black italic mb-2 leading-none uppercase">Digital Marketing</h3>
              <p className="text-zinc-500 text-sm italic">Strategi pemasaran berbasis data untuk konversi maksimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="px-6 py-12 text-center text-zinc-700 text-[10px] tracking-[0.4em] uppercase border-t border-white/5">
        © 2026 KANGJOE DIGITAL HUB • MAJALENGKA
      </footer>
    </div>
  );
}
