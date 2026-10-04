'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

function AnimatedNumber({ n, suffix = '' }: { n: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const start = 0;
    const end = n;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (ref.current) ref.current.textContent = Math.round(start + eased * (end - start)) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, n, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function AboutBento() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative"
      style={{ background: '#EDF4F4', borderTop: '1px solid rgba(13,148,136,0.12)' }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-12"
        >
          <span className="text-sm" style={{ color: '#0D9488' }}>✦</span>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#0D9488' }}>Better Digital Journeys.</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Heading + image */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[0.92] mb-12"
              style={{ fontFamily: 'var(--font-jakarta), sans-serif', color: '#0B2B2B' }}
            >
              MY IMPACT<br />
              THROUGH <span style={{ color: 'rgba(11,43,43,0.25)' }}>USER</span><br />
              <span style={{ color: 'rgba(11,43,43,0.25)' }}>EXPERIENCE</span>
            </motion.h2>

            {/* Portrait image — glass frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-[280px] h-[340px] overflow-hidden group"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=600&auto=format&fit=crop"
                alt="Vishal Khanapara - Full Stack Developer Building Scalable Digital Products"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
                decoding="async"
              />
              {/* Glass shine overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)' }}
              />
            </motion.div>
          </div>

          {/* Right: bio + stats */}
          <div className="flex flex-col justify-between h-full pt-0 lg:pt-20">

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <p className="text-xs md:text-sm font-medium text-[#0B2B2B]/90 leading-relaxed max-w-xs">
                Hi, I'm Vishal Khanapara, a Full Stack Developer. My objective is to continuously learn and implement my skills to drive growth, innovation, and all-around progress in every project I build.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="flex flex-col gap-0">

              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-6 items-start py-10"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="w-36 shrink-0">
                  <span
                    className="text-6xl font-black text-[#0B2B2B] tracking-tighter"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    <AnimatedNumber n={12} suffix="+" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#0B2B2B]/30 text-xs">✦</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0B2B2B]">Projects Completed</span>
                  </div>
                  <p className="text-xs text-[#0B2B2B]/80 leading-relaxed max-w-[200px]">
                    Successfully completed projects across web and mobile platforms.
                  </p>
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-6 items-start py-10"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="w-36 shrink-0">
                  <span
                    className="text-6xl font-black text-[#0B2B2B] tracking-tighter"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    <AnimatedNumber n={11} suffix="+" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#0B2B2B]/30 text-xs">✦</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0B2B2B]">Core Technologies</span>
                  </div>
                  <p className="text-xs text-[#0B2B2B]/80 leading-relaxed max-w-[200px]">
                    Proficient in PHP, JavaScript, MERN stack, Laravel, C, C++, and database management.
                  </p>
                </div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-6 items-start py-10"
              >
                <div className="w-36 shrink-0">
                  <span
                    className="text-6xl font-black text-[#0B2B2B] tracking-tighter"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    <AnimatedNumber n={4} suffix="+" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#0B2B2B]/30 text-xs">✦</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0B2B2B]">Years Experience</span>
                  </div>
                  <p className="text-xs text-[#0B2B2B]/80 leading-relaxed max-w-[200px]">
                    Building robust web platforms and API solutions with dedication.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
