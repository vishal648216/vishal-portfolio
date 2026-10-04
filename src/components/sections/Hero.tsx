'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-center"
      style={{ background: '#0D9488' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      {/* Small sparkle decorations */}
      <div className="absolute top-[16%] left-[12%] md:left-[20%] text-[#0B2B2B]/30 text-xl md:text-2xl font-thin select-none pointer-events-none">+</div>
      <div className="absolute top-[18%] right-[15%] md:right-[30%] text-[#0B2B2B]/30 text-xl md:text-2xl font-thin select-none pointer-events-none">+</div>
      <div className="absolute top-[48%] left-[75%] md:left-[35%] text-white/20 text-base md:text-lg font-thin select-none pointer-events-none">×</div>
      <div className="absolute bottom-[28%] right-[10%] md:right-[15%] text-white/20 text-lg md:text-xl select-none pointer-events-none">+</div>

      {/* Giant watermark name behind */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10"
      >
        <h1
          className="text-[18vw] md:text-[16vw] font-black tracking-tighter leading-none uppercase whitespace-nowrap opacity-30 md:opacity-100"
          style={{ fontFamily: 'var(--font-jakarta), sans-serif', color: 'rgba(255,255,255,0.18)' }}
        >
          FULL STACK
        </h1>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="relative md:absolute left-6 sm:left-10 md:left-16 z-30 text-white pt-24 pb-16 md:py-0 md:top-1/2 md:-translate-y-1/2 max-w-full md:max-w-2xl"
      >
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-black leading-[0.92] tracking-tighter mb-4 md:mb-8"
          style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
        >
          CREATIVE<br />
          <span className="text-[#0B2B2B]/35">DEVELOPER</span>
        </h1>
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider leading-relaxed opacity-90 max-w-[280px] sm:max-w-xs">
          I DESIGN USER-CENTERED DIGITAL<br />
          EXPERIENCES THAT ARE SIMPLE<br />
          SMART AND IMPACTFUL
        </p>
        
        {/* Buttons */}
        <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#work"
            className="bg-[#0B2B2B] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-5 sm:px-6 py-3.5 sm:py-4 hover:bg-white hover:text-[#0B2B2B] transition-colors cursor-pointer md:cursor-none flex items-center gap-2 shadow-lg"
            data-hover
          >
            View Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-5 sm:px-6 py-3.5 sm:py-4 border border-[#0B2B2B] hover:bg-[#0B2B2B]/20 transition-colors cursor-pointer md:cursor-none"
            data-hover
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right polaroid card - only on desktop/tablet to avoid overlapping text on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        whileHover={{ rotate: 0, scale: 1.04, transition: { duration: 0.3 } }}
        className="hidden md:block absolute right-8 md:right-16 top-1/2 -translate-y-[60%] z-30 bg-white p-2 pb-8 shadow-2xl cursor-none"
        style={{ width: '140px', transform: 'rotate(2deg)' }}
        data-hover
      >
        <div className="w-full aspect-square overflow-hidden bg-[#0D9488]">
          <img
            src="https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=400&auto=format&fit=crop"
            alt="Vishal Khanapara - Creative Full Stack Design & Web Development Showcase"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="mt-3 flex items-center justify-between px-1">
          <span className="text-[10px] font-bold text-[#0B2B2B] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] inline-block" />
            ZENTIX
          </span>
          <span className="text-[10px] text-gray-400">/Design</span>
        </div>
      </motion.div>

      {/* Bottom-right Let's Talk card - hidden on small mobile to avoid overlapping WhatsApp button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="hidden sm:flex absolute bottom-12 right-8 md:right-16 z-30 bg-[#0B2B2B] p-3 shadow-2xl items-center gap-3 cursor-pointer md:cursor-none"
        style={{ minWidth: '220px' }}
        data-hover
      >
        <div className="w-12 h-12 overflow-hidden flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop"
            alt="Vishal Khanapara - Full Stack & MERN Developer Profile"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="flex-1">
          <p className="text-[10px] text-white/50 mb-0.5">Let's Talk</p>
          <p className="text-sm font-bold text-white">Vishal</p>
          <p className="text-[10px] text-white/60">Full Stack Developer</p>
        </div>
        <div className="w-7 h-7 bg-[#0D9488] flex items-center justify-center flex-shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="absolute bottom-6 left-6 sm:left-10 md:left-16 z-30 text-[#0B2B2B]/60 text-xs font-medium">
        ©2026
      </div>

      {/* Bottom giant DEVELOPER text */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden pointer-events-none select-none flex justify-start px-6 sm:px-10 md:px-16 opacity-25 md:opacity-100">
        <h2
          className="text-[16vw] md:text-[15vw] font-black tracking-tighter text-white leading-none uppercase"
          style={{ fontFamily: 'var(--font-jakarta), sans-serif', marginBottom: '-0.15em' }}
        >
          DEVELOPER
        </h2>
      </div>
    </section>
  );
}
