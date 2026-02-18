"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Megaphone, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Github, 
  Instagram, 
  Linkedin,
  Rocket,
  Zap
} from 'lucide-react';

// Komponen Reusable untuk Card Layanan
const ServiceCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="p-8 rounded-3xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="mb-4 p-4 bg-blue-500/10 w-fit rounded-2xl text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-zinc-400 leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- HEADER / NAVIGATION --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/5 backdrop-blur-xl sticky top-0 z-[100]">
        <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
          KangJOE<span className="text-white">.</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">Layanan</a>
          <a href="#smk" className="hover:text-white transition-colors">Program SMK</a>
          <a href="#about" className="hover:text-white transition-colors">Tentang</a>
        </div>
        <button className="bg-white text-black hover:bg-zinc-200 px-6 py-2.5 rounded-full text-sm font-bold transition-transform active:scale-95">
          Mulai Proyek
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative px-6 pt-24 pb-32 flex flex-col items-center text-center">
        {/* Background Glows */}
        <div className="absolute top-0 -z-10 h-[500px] w-full bg-blue-600/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] bg-violet-600/10 blur-[100px] rounded-full opacity-30" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold mb-8 animate-pulse">
            <Zap size={14} /> Digital Solution & Creative Marketing Hub
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            Menjembatani <span className="text-blue-500">Inovasi</span> <br />
            ke Hati <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">Konsumen</span>
          </h1>
          
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl mb-12 leading-relaxed">
            Kami mengintegrasikan teknologi perangkat lunak mutakhir dengan strategi pemasaran presisi untuk mengakselerasi bisnis dan instansi Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="group relative flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/20">
              Konsultasi Gratis <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all">
              Lihat Portofolio
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="px-6 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Layanan Unggulan</h2>
              <p className="text-zinc-500">Solusi digital menyeluruh untuk membangun ekosistem bisnis yang tangguh dan menjual.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Code2}
              title="Software House"
              desc="Membangun ekosistem digital mulai dari Laravel, Next.js, hingga sistem otomatisasi Apps Script."
              delay={0.1}
            />
            <ServiceCard 
              icon={Megaphone}
              title="Digital Marketing"
              desc="Strategi pemasaran berbasis data (Ads, SEO, Content) untuk mengonversi audiens menjadi pelanggan setia."
              delay={0.2}
            />
            <ServiceCard 
              icon={Rocket}
              title="Tech Incubator"
              desc="Mengoptimalkan potensi talenta lokal Majalengka melalui proyek industri nyata di bawah naungan Yayasan."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* --- PROGRAM SMK SECTION --- */}
      <section id="smk" className="px-6 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Pusat Inkubasi <br/><span className="text-blue-500">Talenta Digital.</span></h2>
            <p className="text-zinc-400 text-lg mb-8">
              Melalui unit usaha KangJOE, kami membuka pintu lebar bagi siswa SMK di Majalengka untuk merasakan atmosfer industri sesungguhnya.
            </p>
            <div className="space-y-4">
              {['Magang Jurusan RPL, TKJ, & DKV', 'Sertifikasi Keahlian Industri', 'Pendampingan Mentor Profesional'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-medium text-zinc-200">
                  <CheckCircle2 size={20} className="text-blue-500" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 bg-gradient-to-br from-blue-500 to-violet-600 rounded-[2rem] overflow-hidden"
          >
            <div className="bg-zinc-950 rounded-[1.9rem] p-10 flex flex-col items-center text-center">
              <Users size={60} className="text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-2">Kerjasama SMK</h3>
              <p className="text-zinc-500 mb-6">Siap berkolaborasi dengan institusi pendidikan untuk mencetak generasi hebat.</p>
              <button className="w-full bg-white text-black py-4 rounded-xl font-bold">Unduh Proposal MoU</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="px-6 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs">
            <div className="text-2xl font-black tracking-tighter mb-4">KangJOE.</div>
            <p className="text-zinc-500 text-sm leading-relaxed italic">
              "Menjembatani Inovasi Penjual ke Hati Konsumen melalui Teknologi dan Strategi."
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="font-bold mb-6">Sosial Media</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Instagram size={16}/> Instagram</li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Linkedin size={16}/> LinkedIn</li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Github size={16}/> GitHub</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Kontak</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li>Majalengka, Jawa Barat</li>
                <li>hello@kangjoe.id</li>
                <li>+62 812-XXXX-XXXX</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-zinc-600 text-xs">
          © 2026 KangJOE Digital Hub. Part of Yayasan Citra Telematika.
        </div>
      </footer>
    </div>
  );
}
