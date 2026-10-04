'use client';

import { motion } from 'framer-motion';

const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "PHP", 
  "Laravel", "CodeIgniter", "MySQL", "MongoDB", 
  "Express", "Node.js", "C", "C++", "HTML5", "CSS3", 
  "Tailwind CSS", "Framer Motion", "Docker", "Server Management"
];

// Duplicate the array to create a seamless infinite loop
const marqueeItems = [...technologies, ...technologies, ...technologies];

export default function TechStack() {
  return (
    <section className="py-12 border-y border-border/50 overflow-hidden bg-background/50 relative z-10">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust speed here
          }}
          className="flex whitespace-nowrap gap-12 px-6 items-center"
        >
          {marqueeItems.map((tech, index) => (
            <div 
              key={index} 
              className="text-2xl md:text-4xl font-bold text-muted-foreground/30 uppercase tracking-widest hover:text-primary transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
