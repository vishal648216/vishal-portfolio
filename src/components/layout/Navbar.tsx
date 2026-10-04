'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Service', 'Work', 'Contact'];

  return (
    <>
      {/* ── Navbar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled
            ? 'rgba(237,244,244,0.90)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(13,148,136,0.12)' : 'none',
          transition: 'background 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center"
            data-hover
          >
            <img
              src="/logo.png"
              alt="Vishal Khanapara - Full Stack & MERN Developer Logo"
              className={`h-20 w-auto object-contain transition-all duration-300 ${!scrolled ? 'brightness-0' : ''}`}
              loading="eager"
            />
          </a>

          {/* Center Links removed as per user request */}

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-[5px] items-end group cursor-none"
            data-hover
          >
            <span className="block w-7 h-[1.5px] transition-all group-hover:w-8" style={{ background: '#0B2B2B' }} />
            <span className="block w-4 h-[1.5px] transition-all group-hover:w-8" style={{ background: '#0B2B2B' }} />
          </button>
        </div>
      </motion.nav>

      {/* ── Full Screen Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex"
            style={{ background: '#0B2B2B' }}
            data-nav-menu
          >
            {/* Left half */}
            <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col justify-between p-12 md:p-16 lg:p-20"
              style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex justify-end items-start">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white/50 hover:text-white text-3xl leading-none cursor-none transition-colors"
                  data-hover
                >
                  ×
                </button>
              </div>

              <nav className="flex flex-col gap-4 my-auto">
                {links.map((l, i) => (
                  <motion.a
                    key={l}
                    href={`#${l.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center gap-4 cursor-none"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                    data-hover
                  >
                    <span className="text-[#0D9488]/40 text-xs tabular-nums">0{i + 1}</span>
                    <span className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white/20 group-hover:text-[#0D9488] transition-colors duration-300 tracking-tight leading-none">
                      {l}
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Right half */}
            <div className="hidden md:flex w-[40%] lg:w-[35%] flex-col justify-center py-16 lg:py-20 pl-8 md:pl-10 lg:pl-12 pr-12 lg:pr-16 gap-10"
              style={{ background: 'rgba(13,148,136,0.06)' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-white/25 text-[10px] uppercase tracking-widest mb-2">Contact Phone</p>
                <a href="tel:+918141594182" className="text-white text-2xl font-bold" data-hover>
                  (+91) 814 159 4182
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
              >
                <p className="text-white/25 text-[10px] uppercase tracking-widest mb-2">Contact Mail</p>
                <a href="mailto:khanaparavishal.28@gmail.com" className="text-white text-2xl font-bold" data-hover>
                  khanaparavishal.28@gmail.com
                </a>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
