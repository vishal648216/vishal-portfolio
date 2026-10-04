'use client';

export default function Process() {
  const steps = [
    {
      title: 'PROTOTYPING',
      description: 'Understanding user needs, goals, and project scope through research and analysis foundation.'
    },
    {
      title: 'WIRE FRAMING',
      description: 'Creating structure and layout to visualize ideas and build a strong project foundation.'
    },
    {
      title: 'UI DESIGN',
      description: 'Designing clean, modern, and engaging interfaces that enhance business usability.'
    },
    {
      title: 'IMPROVEMENT',
      description: 'Refining the design through feedback and testing to ensure the best user experience.'
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-border">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full border border-gray-400"></span>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">My Design Process</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#0B2B2B] leading-[0.9]" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
            DESIGN PROCESS<br/>
            <span className="text-[#0B2B2B]/25">THAT WORKS</span>
          </h2>
        </div>

        {/* Black Container with Grid */}
        <div className="bg-[#0B2B2B] p-8 md:p-16 flex flex-col md:flex-row justify-between gap-8 md:gap-4 w-full">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-start border-b md:border-b-0 md:border-r border-gray-800 pb-8 md:pb-0 md:pr-4 last:border-0 last:pb-0 last:pr-0">
              <div className="text-primary mb-6 text-2xl font-black">
                {/* Plus icon / Star icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
                </svg>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-black tracking-tight mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
