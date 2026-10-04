'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    id: '001',
    title: 'WEB & APP DEVELOPMENT',
    description: 'Building responsive, scalable web platforms and mobile applications tailored to your business needs.',
    tags: ['Web Development', 'Web Designing', 'App Developing & Designing', 'Full Stack Developer'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '002',
    title: 'BACKEND & API INTEGRATION',
    description: 'Designing robust backend architectures and seamless RESTful APIs for complex data interactions.',
    tags: ['PHP', 'Laravel', 'CodeIgniter', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '003',
    title: 'DATABASE & SERVER',
    description: 'Optimizing and managing servers with efficient database modeling and MERN stack implementations.',
    tags: ['MERN Stack', 'MySQL', 'MongoDB', 'Server Management'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="service"
      ref={ref}
      className="py-24 md:py-32 relative"
      style={{ background: '#EDF4F4', borderTop: '1px solid rgba(13,148,136,0.12)' }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="text-[#0B2B2B]/30 text-sm">✦</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B2B2B]/30">Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[0.92] text-[#0B2B2B]"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            POWERFUL<br />
            DESIGN <span className="text-[#0B2B2B]/25">SERVICES</span><br />
            <span className="text-[#0B2B2B]/25">FOR YOUR BRAND</span>
          </motion.h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="py-12 flex flex-col lg:flex-row gap-8 lg:gap-16 group cursor-none relative"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              data-hover
            >
              {/* Hover glow bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'rgba(255,255,255,0.015)',
                  backdropFilter: 'blur(4px)',
                }}
              />

              {/* ID */}
              <div className="flex items-start gap-3 w-full lg:w-28 shrink-0 relative z-10">
                <span className="text-[#0B2B2B]/20 text-sm">✦</span>
                <span className="text-sm font-bold text-[#0B2B2B]/20">{svc.id}</span>
              </div>

              {/* Title + description + tags */}
              <div className="flex-1 flex flex-col lg:flex-row gap-8 relative z-10">
                <div className="lg:w-[340px] shrink-0">
                  <h3
                    className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4 text-[#0B2B2B] group-hover:text-[#0D9488] transition-colors"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[#0B2B2B]/70 leading-relaxed mb-6 max-w-xs">
                    {svc.description}
                  </p>
                  {/* Tags — glass pills */}
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[10px] font-medium px-3 py-1.5 text-[#0B2B2B]/70"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 flex items-start justify-end">
                  <div
                    className="w-full max-w-[300px] aspect-[4/3] overflow-hidden relative"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <img
                      src={svc.image}
                      alt={`${svc.title} - Service provided by Vishal Khanapara Full Stack Developer`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform scale-100 group-hover:scale-110 transition-all duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700" />
                    {/* dot indicator */}
                    <div className="absolute bottom-3 right-3 flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                      <div className="w-1.5 h-1.5 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.3)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
        </div>
      </div>
    </section>
  );
}
