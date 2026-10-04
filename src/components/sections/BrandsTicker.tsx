const brands = [
  { name: 'PHP / LARAVEL', type: 'sans' },
  { name: 'React.js', type: 'italic' },
  { name: 'NODE.JS', type: 'bold' },
  { name: 'MongoDB', type: 'bold' },
  { name: 'C / C++', type: 'bold' },
  { name: 'HTML5 / CSS3', type: 'bold' },
  { name: 'Javascript', type: 'italic' },
  { name: 'EXPRESS', type: 'sans' },
  { name: 'MySQL', type: 'sans' },
  { name: 'CodeIgniter', type: 'italic' },
];

export default function BrandsTicker() {
  return (
    <section
      className="py-8 overflow-hidden"
      style={{
        background: 'rgba(13,148,136,0.02)',
        borderTop: '1px solid rgba(13,148,136,0.12)',
        borderBottom: '1px solid rgba(13,148,136,0.12)',
      }}
    >
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          align-items: center;
          gap: 4rem;
          width: max-content;
          animation: ticker 25s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex items-center gap-10">
        {/* Label */}
        <div className="shrink-0 w-32">
          <p className="text-xs font-bold text-black/70 uppercase tracking-widest leading-relaxed">
            TRUSTED BY<br />LEADING BRANDS
          </p>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-[#0B2B2B]/15 shrink-0" />

        {/* Ticker */}
        <div className="flex-1 overflow-hidden relative">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #EDF4F4, transparent)' }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #EDF4F4, transparent)' }}
          />

          <div className="ticker-track">
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0" style={{ opacity: 0.85 }}>
                <span
                  className={`text-black font-bold text-base md:text-xl tracking-tight ${b.type === 'italic' ? 'italic' : ''}`}
                >
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
