'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for touch/mobile - don't render cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId: number;
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    const updateCursor = () => {
      // Lerp ring for smooth trailing effect
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      rafId = requestAnimationFrame(updateCursor);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const el = e.target as HTMLElement;
      if (!el) return;

      // Hero / nav color logic
      const overHero = el.closest('#home') !== null;
      const overNavbar = el.closest('nav') !== null;
      const overMenu = el.closest('[data-nav-menu]') !== null;
      const onDark = overHero || (overNavbar && window.scrollY <= 30) || overMenu;
      const color = onDark ? '#ffffff' : '#0D9488';
      if (dotRef.current) dotRef.current.style.background = color;
      if (ringRef.current) ringRef.current.style.borderColor = color;
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const hovering = el.closest('a, button, [data-hover]') !== null;
      if (ringRef.current) {
        ringRef.current.style.width = hovering ? '48px' : '32px';
        ringRef.current.style.height = hovering ? '48px' : '32px';
        ringRef.current.style.opacity = hovering ? '0.7' : '0.35';
      }
    };

    rafId = requestAnimationFrame(updateCursor);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <>
      {/* Small dot - no React re-renders, pure DOM */}
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-1.5 h-1.5 rounded-full z-[9999] pointer-events-none"
        style={{ background: '#0D9488', willChange: 'transform' }}
      />
      {/* Large ring */}
      <div
        ref={ringRef}
        className="hidden md:block fixed top-0 left-0 rounded-full z-[9998] pointer-events-none transition-[width,height,opacity] duration-200"
        style={{
          width: '32px',
          height: '32px',
          border: '1.5px solid #0D9488',
          opacity: 0.35,
          willChange: 'transform',
        }}
      />
    </>
  );
}
