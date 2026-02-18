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
  Globe,
  Layers,
  Sparkles,
  Bot,
  Video,
  ShieldCheck,
  TrendingUp
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
          <a href="#innovation" className="hover:text-white transition-colors">Inovasi SMK</a>
          <a href="#smk" className="hover:text-white transition-colors">Program</a>
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
            <Zap size={14} className="fill-current" /> Leading Digital Innovation in Majalengka
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05] text-white italic">
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
          </div>
        </motion.div>
      </section>

      {/* --- BENTO GRID SERVICES --- */}
      <section id="services" className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          
          {/* Card 1: Software House */}
          <motion.div whileHover={{ y: -5 }} className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-10 flex flex-col justify-end">
            <div className="absolute top-8 right-8 p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
              <Code2 size={40} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 italic text-white">Software House</h3>
              <p className="text-zinc-400 text-lg">Laravel, Next.js, & Otomasi Google Apps Script.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
          </motion.div>

          {/* Card 2: Marketing */}
          <motion.div whileHover={{ y: -5 }} className="md:row-span-2 relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-8 flex flex-col justify-between">
            <div className="p-4 bg-violet-500/10 rounded-2xl text-violet-400 w-fit group-hover:bg-violet-500 group-hover:text-white transition-all duration-500">
              <Megaphone size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 italic text-white">Digital Marketing</h3>
              <p className="text-zinc-400 text-sm">Ads Driven & AI Content Strategy.</p>
            </div>
          </motion.div>

          {/* Card 3: Tech Stack */}
          <motion.div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-6 flex flex-col justify-between">
            <div className="text-blue-400"><Layers size={24}/></div>
            <div>
              <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Main Tech</h4>
              <div className="flex flex-wrap gap-1 text-[9px] font-mono text-blue-300">
                <span className="px-1.5 py-0.5 bg-blue-500/10 rounded">Next.js</span>
                <span className="px-1.5 py-0.5 bg-blue-500/10 rounded">Laravel</span>
                <span className="px-1.5 py-0.5 bg-blue-500/10 rounded">AppSheet</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Internship */}
          <motion.div className="relative group overflow-hidden rounded-[2.5rem] border border-blue-500/30 bg-blue-600/10 p-6 flex flex-col justify-center text-center">
            <div className="text-blue-400 font-black text-3xl mb-1 italic">3 | 5 | 6</div>
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Durasi Magang (Bulan)</p>
          </motion.div>
        </div>
      </section>

      {/* --- INNOVATION & TRENDS SECTION --- */}
      <section id="innovation" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 italic">5 Tren Inovatif <br/><span className="text-blue-500">Talenta SMK 2026</span></h2>
            <p className="text-zinc-500 text-lg">Eksklusif ditawarkan KangJOE untuk mempersiapkan siswa menghadapi industri digital masa depan.</p>
          </div>
          <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-zinc-400 text-sm font-medium">
            Future-Ready Curriculum
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { title: "AI-Driven Marketing", desc: "Prompt Engineering & Content AI.", icon: <Bot size={28}/>, color: "from-blue-500/20" },
            { title: "Live Commerce Tech", desc: "Sistem Live Stream & Konversi.", icon: <TrendingUp size={28}/>, color: "from-violet-500/20" },
            { title: "Low-Code Specialist", desc: "Automasi AppSheet & Apps Script.", icon: <Zap size={28}/>, color: "from-fuchsia-500/20" },
            { title: "Short-Video Motion", desc: "Viral Content Production.", icon: <Video size={28}/>, color: "from-orange-500/20" },
            { title: "Cloud Automation", desc: "Serverless Deployment & Security.", icon: <ShieldCheck size={28}/>, color: "from-emerald-500/20" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-[2rem] border border-white/5 bg-gradient-to-b ${item.color} to-zinc-900/40 flex flex-col gap-6`}
            >
              <div className="p-3 bg-white/5 w-fit rounded-xl text-white">{item.icon}</div>
              <div>
                <h4 className="font-bold text-white mb-2 leading-tight">{item.title}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROGRAM SMK --- */}
      <section id="smk" className="px-6 py-24 bg-white/[0.01] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 italic text-white leading-tight">Pusat Inkubasi <br/><span className="text-blue-500">Talenta Digital.</span></h2>
            <p className="text-zinc-400 text-lg mb-8 font-light italic leading-relaxed">"Sinergi kurikulum SMK Majalengka dengan realitas industri teknologi dunia."</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Praktek Laravel', 'Ads Strategist', 'DKV Kreatif', 'Cloud Network'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                  <CheckCircle2 size={18} className="text-blue-500" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative group p-10 rounded-[3rem] border border-white/5 bg-zinc-900/20 backdrop-blur-md text-center">
             <Cpu size={48} className="mx-auto mb-6 text-blue-500 animate-pulse" />
             <h3 className="text-2xl font-black mb-6 uppercase tracking-widest">Kolaborasi Institusi</h3>
             <button className="w-full bg-white text-black py-4 rounded-2xl font-black hover:bg-blue-500 hover:text-white transition-all shadow-xl">
               UNDUH PROPOSAL MOU
             </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="px-6 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-center md:text-left">
          <div className="max-w-sm mx-auto md:mx-0">
            <div className="text-3xl font-black tracking-tighter mb-6 italic text-white uppercase">KangJOE.</div>
            <p className="text-zinc-500 text-sm italic">"Menjembatani Inovasi Penjual ke Hati Konsumen melalui Teknologi dan Strategi."</p>
          </div>
          <div className="flex gap-4 mx-auto md:mx-0">
             <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-colors"><Instagram size={20}/></a>
             <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-colors"><Linkedin size={20}/></a>
             <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-colors"><Globe size={20}/></a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-zinc-600 text-[10px] tracking-[0.2em] uppercase">
          © 2026 KangJOE Hub • Majalengka Innovation Center
        </div>
      </footer>
    </div>
  );
}
