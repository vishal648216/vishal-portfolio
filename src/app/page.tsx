import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import BrandsTicker from '@/components/sections/BrandsTicker';

// Lazy load below-the-fold sections — they load only when needed
const AboutBento = dynamic(() => import('@/components/sections/AboutBento'), { ssr: true });
const Services   = dynamic(() => import('@/components/sections/Services'),   { ssr: true });
const Projects   = dynamic(() => import('@/components/sections/Projects'),   { ssr: true });
const Contact    = dynamic(() => import('@/components/sections/Contact'),    { ssr: true });
const WhatsAppFloat = dynamic(() => import('@/components/ui/WhatsAppFloat'));

export default function Home() {
  return (
    <main>
      {/* Critical above-the-fold — loaded synchronously */}
      <Hero />
      <BrandsTicker />

      {/* Below-the-fold — lazy loaded */}
      <AboutBento />
      <Services />
      <Projects />
      <Contact />
      <WhatsAppFloat />
    </main>
  );
}
