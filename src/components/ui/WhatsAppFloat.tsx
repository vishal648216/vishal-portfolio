'use client';

import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/918141594182"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-[9999] flex items-center justify-center w-14 h-14 rounded-full shadow-2xl cursor-none"
      style={{ background: '#25D366' }}
      data-hover
      aria-label="Chat on WhatsApp"
    >
      {/* Ping ring animation */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ background: '#25D366' }}
      />
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
      >
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.4 31.6l7.9-2.1c2.3 1.3 4.9 2 7.7 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.5 0-4.9-.7-7-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C3.6 21 2.9 18.6 2.9 16 2.9 8.8 8.8 2.9 16 2.9S29.1 8.8 29.1 16 23.2 28.9 16 28.9zm8.5-10.9c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2s-1.2 1.5-1.4 1.8c-.3.3-.5.4-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-.9.2-.2.5-.5.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.8-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.8s1.6 4.4 1.8 4.7c.2.3 3.2 4.9 7.7 6.8 1.1.5 1.9.7 2.6.9 1.1.3 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.5z" />
      </svg>
    </motion.a>
  );
}
