'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe', title: 'Marketing Director',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop',
    text: '"The designer created a clean and intuitive design that perfectly matched our brand identity. The entire process was smooth and professional."',
  },
  {
    name: 'Sophia Taylor', title: 'Director',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop',
    text: '"Excellent communication, fast delivery, and outstanding attention to detail. Highly recommended for any UI/UX project."',
  },
  {
    name: 'Daniel Smith', title: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop',
    text: '"The final design improved our user engagement and gave our platform a premium, modern feel. Attention to detail was perfect."',
  },
  {
    name: 'Olivia Harris', title: 'Manager',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop',
    text: '"Working with the designer was an amazing experience. They transformed our ideas into a polished and functional product design."',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 relative"
      style={{ background: '#EDF4F4', borderTop: '1px solid rgba(13,148,136,0.12)' }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="text-[#0B2B2B]/30 text-sm">✦</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B2B2B]/30">Designs Clients Love</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[0.9] text-[#0B2B2B]"
              style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
            >
              WHAT MY<br />
              <span className="text-[#0B2B2B]/25">CLIENTS SAY</span>
            </motion.h2>
          </div>
        </div>

        {/* Cards — horizontal scroll */}
        <div className="md:hidden flex items-center gap-2 mb-4 text-[#0B2B2B]/30 text-[10px] uppercase tracking-widest font-bold">
          Swipe to view more <span className="text-[#0B2B2B]/50">→</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[340px] p-7 snap-start flex flex-col gap-5 group cursor-none"
              style={{
                background: 'rgba(255,255,255,0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(11,43,43,0.08)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(11,43,43,0.18)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(11,43,43,0.03)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(11,43,43,0.08)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
              data-hover
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 overflow-hidden flex-shrink-0"
                  style={{ border: '1px solid rgba(11,43,43,0.12)' }}
                >
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0B2B2B]">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#0B2B2B]/60">{t.title}</p>
                </div>
                <div className="ml-auto text-[#0B2B2B]/30 text-2xl leading-none">+</div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 text-[#0B2B2B]/70 text-sm">
                {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
              </div>

              {/* Text */}
              <p className="text-sm text-[#0B2B2B]/80 leading-relaxed flex-1 italic">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
