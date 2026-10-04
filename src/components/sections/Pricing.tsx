'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [tab, setTab] = useState<'monthly' | 'project'>('monthly');

  const price = tab === 'monthly' ? '$200' : '$300';
  const period = tab === 'monthly' ? '/Month' : '/Project';

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 relative"
      style={{ background: '#0B2B2B', borderTop: '1px solid rgba(13,148,136,0.15)' }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="text-sm" style={{ color: '#0D9488' }}>✦</span>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#0D9488' }}>Pricing</span>
        </motion.div>

        {/* Heading + Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[0.9] text-white"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            SIMPLE PLANS<br />
            <span className="text-white/25">FOR EVERY NEED</span>
          </motion.h2>

          {/* Toggle */}
          <div
            className="flex items-center p-1"
            style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
          >
            <button
              onClick={() => setTab('monthly')}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors"
              style={{
                background: tab === 'monthly' ? 'rgba(255,255,255,0.10)' : 'transparent',
                color: tab === 'monthly' ? '#fff' : 'rgba(255,255,255,0.3)',
                border: tab === 'monthly' ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
              }}
              data-hover
            >
              Monthly
            </button>
            <button
              onClick={() => setTab('project')}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors"
              style={{
                background: tab === 'project' ? 'rgba(255,255,255,0.10)' : 'transparent',
                color: tab === 'project' ? '#fff' : 'rgba(255,255,255,0.3)',
                border: tab === 'project' ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
              }}
              data-hover
            >
              Project Based
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-4">

          {/* Left card: Package info — glass */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col justify-between md:w-[320px] shrink-0 p-8"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div>
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-8 text-[#0B2B2B]/30"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                Complete Package
              </span>
              <h3
                className="text-2xl font-black text-white"
                style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
              >
                BASIC DESIGN PACKAGE
              </h3>
            </div>

            {/* Specs */}
            <div className="flex flex-col gap-0 mt-12">
              {[
                { icon: '◷', label: 'Delivery Time', value: '2-3 Weeks' },
                { icon: '↺', label: 'Revisions', value: 'Up to 2' },
                { icon: '◻', label: 'File Format', value: 'Figma' },
              ].map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span className="flex items-center gap-3 text-xs text-white/25 uppercase tracking-wider">
                    <span>{spec.icon}</span>
                    {spec.label}
                  </span>
                  <span className="text-sm font-bold text-[#0B2B2B]/70">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right card: Price + features — glass */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1 flex flex-col md:flex-row p-8 gap-10"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Left: Price + CTA */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-8 text-[#0B2B2B]/30"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  One-Time Payment
                </span>
                <motion.div
                  key={price}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-baseline gap-2"
                >
                  <span
                    className="text-7xl md:text-8xl font-black text-white tracking-tighter"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {price}
                  </span>
                  <span className="text-[#0B2B2B]/30 text-sm font-medium">{period}</span>
                </motion.div>
              </div>

              {/* Guarantee */}
              <div className="mt-10">
                <div className="text-[#0B2B2B]/40 mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-[#0B2B2B]/70 uppercase tracking-wider mb-2">Satisfaction Guarantee</h4>
                <p className="text-xs text-[#0B2B2B]/30 leading-relaxed max-w-xs mb-6">
                  We are committed to delivering high-quality design work that meets your expectations.
                </p>
                <button
                  className="w-full flex items-center justify-between px-5 py-4 font-bold text-sm uppercase tracking-wider text-white transition-all cursor-none group"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = '#ffffff';
                    (e.currentTarget as HTMLElement).style.color = '#050505';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  }}
                  data-hover
                >
                  <span>Get Started</span>
                  <span
                    className="w-6 h-6 flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.15)' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M7 7h10v10"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch" style={{ background: 'rgba(255,255,255,0.06)' }} />

            {/* Features list */}
            <div className="flex-1 flex flex-col justify-center gap-4">
              {[
                'Homepage + up to 2 inner pages',
                'Starter Design System',
                'Basic Website Setup',
                'Initial Analysis',
                'Basic SEO Setup',
                '1 Month Support',
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                  <span className="text-sm text-[#0B2B2B]/50 font-medium">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
