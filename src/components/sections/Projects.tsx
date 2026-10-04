'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1, title: 'Dominant Pharma', category: '/Pharmaceutical / Healthcare Portal',
    link: 'https://dominantpharma.in/',
    image: '/projects/dominantpharma.png',
  },
  {
    id: 2, title: 'Buyer Seller Platform', category: '/B2B Marketplace / Web App',
    link: 'https://buyersellerplatform.com/',
    image: '/projects/buyerseller.png',
  },
  {
    id: 3, title: 'MTC Global Steel', category: '/Industrial / Steel Stockist',
    link: 'https://mtcglobalsteel.com/',
    image: '/projects/mtcglobalsteel.png',
  },
  {
    id: 4, title: 'Maia Homes', category: '/E-Commerce / Home Decor',
    link: 'https://maiahomes.com/',
    image: '/projects/maiahomes.png',
  },
  {
    id: 5, title: 'Mannat Rugs', category: '/E-Commerce / Designer Rugs',
    link: 'https://mannatrugs.com/',
    image: '/projects/mannatrugs.png',
  },
  {
    id: 6, title: 'Sellitfast', category: '/ReCommerce / Electronics',
    link: 'https://sellitfast.in/',
    image: '/projects/sellitfast.png',
  },
  {
    id: 7, title: 'IQ News', category: '/News & Media Portal / Web App',
    link: 'https://news.inqtube.com/en',
    image: '/projects/iqnews.png',
  },
  {
    id: 8, title: 'Weldor Digital Platform', category: '/Industrial / B2B Manufacturing',
    link: 'https://weldor-digital-platform.vercel.app/',
    image: '/projects/weldor.png',
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="work"
      ref={ref}
      className="py-24 md:py-32 relative"
      style={{ background: '#EDF4F4', borderTop: '1px solid rgba(13,148,136,0.12)' }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[#0B2B2B]/30 text-sm">✦</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B2B2B]/30">Selected Work</span>
          </div>
          <h2
            className="text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-[0.9] text-[#0B2B2B]"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            MY <span className="text-[#0B2B2B]/25">PROJECTS.</span>
          </h2>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">

          {/* Left column */}
          <div className="flex flex-col gap-8 md:gap-10">
            {projects.filter((_, i) => i % 2 === 0).map((proj, i) => (
              <a
                key={proj.id}
                href={proj.link || '#'}
                target={proj.link ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
                  className="group cursor-none relative overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  data-hover
                >
                  <div className="w-full overflow-hidden h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px]">
                    <img
                      src={proj.image}
                      alt={`${proj.title} - ${proj.category} Portfolio Project by Vishal Khanapara`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-700" />
                  </div>

                  {/* Glass info bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                    }}
                  >
                    <div>
                      <h3
                        className="text-lg font-black text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                      >
                        {proj.title}
                      </h3>
                      <span className="text-[10px] text-white/60">{proj.category}</span>
                    </div>
                    <div
                      className="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8 md:gap-10">
            {projects.filter((_, i) => i % 2 !== 0).map((proj, i) => (
              <a
                key={proj.id}
                href={proj.link || '#'}
                target={proj.link ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                  className="group cursor-none relative overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  data-hover
                >
                  <div className="w-full overflow-hidden h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px]">
                    <img
                      src={proj.image}
                      alt={`${proj.title} - ${proj.category} Portfolio Project by Vishal Khanapara`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-700" />
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                    }}
                  >
                    <div>
                      <h3
                        className="text-lg font-black text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                      >
                        {proj.title}
                      </h3>
                      <span className="text-[10px] text-white/60">{proj.category}</span>
                    </div>
                    <div
                      className="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
