'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    projectType: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in Name, Email and Message.");
      return;
    }
    setStatus('loading');
    try {
      const response = await fetch("https://formsubmit.co/ajax/khanaparavishal.28@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          "Mobile": formData.mobile,
          "Project Type": formData.projectType,
          Message: formData.message
        })
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', mobile: '', projectType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative"
      style={{ background: '#EDF4F4', borderTop: '1px solid rgba(13,148,136,0.12)' }}
    >


      {/* Contact form */}
      <div className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left: Heading */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="text-[#0B2B2B]/30 text-sm">✦</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B2B2B]/30">Get In Touch</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-10 text-[#0B2B2B]"
                style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
              >
                LET&apos;S CREATE<br />
                <span className="text-[#0B2B2B]/25">TOGETHER</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-sm text-[#0B2B2B]/75 leading-relaxed max-w-xs"
              >
                Ready to start a project? Let&apos;s talk about your vision and bring it to life with beautiful, intentional design.
              </motion.p>
            </div>

            {/* Right: Form — glass */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {[
                  { label: 'Your Name', type: 'text', placeholder: 'Jane Smith', name: 'name', value: formData.name },
                  { label: 'Your Email', type: 'email', placeholder: 'jane@example.com', name: 'email', value: formData.email },
                  { label: 'Mobile Number', type: 'tel', placeholder: '+91 98765 43210', name: 'mobile', value: formData.mobile },
                  { label: 'Project Type', type: 'text', placeholder: 'UI/UX Design, App Design...', name: 'projectType', value: formData.projectType },
                ].map((field) => (
                  <div key={field.label} className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0B2B2B]/90">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={field.value}
                      required={field.name !== 'projectType'}
                      onChange={e => setFormData({ ...formData, [field.name]: e.target.value })}
                      className="w-full bg-transparent py-3 text-sm font-medium text-[#0B2B2B] placeholder:text-[#0B2B2B]/60 outline-none transition-colors"
                      style={{ borderBottom: '1px solid rgba(11,43,43,0.15)' }}
                      onFocus={e => (e.currentTarget.style.borderBottomColor = 'rgba(11,43,43,0.6)')}
                      onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(11,43,43,0.15)')}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#0B2B2B]/90">Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    required
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent py-3 text-sm font-medium text-[#0B2B2B] placeholder:text-[#0B2B2B]/60 outline-none transition-colors resize-none"
                    style={{ borderBottom: '1px solid rgba(11,43,43,0.15)' }}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = 'rgba(11,43,43,0.6)')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(11,43,43,0.15)')}
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex items-center gap-4 group cursor-none disabled:opacity-50"
                    data-hover
                  >
                    <span className="text-sm font-bold uppercase tracking-widest text-[#0B2B2B]/85 group-hover:text-[#0D9488] transition-colors">
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </span>
                    <span
                      className="w-10 h-10 flex items-center justify-center transition-all group-hover:bg-[#0B2B2B]"
                      style={{ background: 'rgba(11,43,43,0.05)', border: '1px solid rgba(11,43,43,0.15)' }}
                    >
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="rgba(11,43,43,0.6)" strokeWidth="2.5"
                        className="group-hover:stroke-white transition-colors"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </span>
                  </button>
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-500/10 border border-emerald-500/20"
                  >
                    ✓ Message sent successfully! Please check your email inbox to confirm FormSubmit activation (required for first submission).
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl text-sm font-semibold text-rose-800 bg-rose-500/10 border border-rose-500/20"
                  >
                    ⚠ Failed to send message. Please try again later.
                  </motion.div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
