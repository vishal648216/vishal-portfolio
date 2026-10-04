'use client';

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8 overflow-hidden relative"
      style={{ background: '#050505', borderTop: '1px solid rgba(13,148,136,0.12)' }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Top: Info + Navigation + Socials */}
        <div
          className="flex flex-col md:flex-row gap-16 md:gap-24 mb-10 pb-10"
        >

          {/* Left: Logo + Bio + Contact */}
          <div className="w-full md:w-1/3">
            <a href="#" className="flex items-center mb-4">
              <img src="/logo.png" alt="Vishal Khanapara - Full Stack & MERN Developer Official Logo" className="h-20 w-auto object-contain brightness-0 invert" loading="lazy" />
            </a>
            <p className="text-sm text-white leading-relaxed mb-8 max-w-xs">
              Focused on developing robust web applications and intuitive digital experiences that blend performance, scalability, and functionality.
            </p>
            <div className="flex flex-col gap-1">
              <a
                href="tel:+918141594182"
                className="text-sm text-white transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                data-hover
              >
                (+91) 814 159 4182
              </a>
              <a
                href="mailto:khanaparavishal.28@gmail.com"
                className="text-base font-bold text-white transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                data-hover
              >
                khanaparavishal.28@gmail.com
              </a>
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="w-full md:w-auto">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">Navigation</p>
            <div className="flex flex-col gap-3">
              {['Home', 'About', 'Service', 'Projects', 'Contact'].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-sm font-bold text-white flex justify-between gap-8 group transition-colors"
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                  data-hover
                >
                  {l}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="w-full md:w-auto flex-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">Newsletter</p>
            {/* Newsletter — glass */}
            <div
              className="flex max-w-sm overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 text-xs outline-none bg-transparent text-white placeholder:text-white/20"
              />
              <button
                className="px-4 py-3 transition-colors cursor-none"
                style={{ background: 'rgba(255,255,255,0.07)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                data-hover
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </button>
            </div>
          </div>
        </div>



        {/* Copyright */}
        <div
          className="flex justify-between items-center pt-6 mt-2"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-white">
            © 2026 Vishal Khanapara. All Rights Reserved.
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white">
            Copyright & Design By Vishal Khanapara
          </p>
        </div>
      </div>
    </footer>
  );
}
