import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ number: '', reason: '', timeSlot: '' });

  useEffect(() => {
    if (!isModalOpen) {
      document.body.classList.remove('modal-open');
      return;
    }

    document.body.classList.add('modal-open');

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const contactLinks = [
    { label: 'Email Us', href: 'mailto:k955776758@gmail.com', icon: 'solar:letter-linear', primary: true },
  ];

  const handleBookCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'book-call',
          ...formData
        }).toString()
      });
      
      if (response.ok) {
        setIsModalOpen(false);
        setFormData({ number: '', reason: '', timeSlot: '' });
        alert('Thank you! We received your request and will be in touch soon.');
      } else {
        alert('There was a problem submitting your request. Please email us directly.');
      }
    } catch (error) {
       alert('There was a problem submitting your request. Please email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-24 md:py-32 relative z-10 text-center flex flex-col items-center justify-center">
        <div className="reveal max-w-3xl px-4">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200/70 mb-5">Let&apos;s build something memorable</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to turn an idea into a sharper product?</h2>
          <p className="text-zinc-300 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need a portfolio site, a product landing page, or a more polished end-to-end interface, we can help shape the concept and ship it with care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${link.primary ? 'btn-color-animated animate-gradient-shift text-white' : 'border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white'} flex gap-2 text-sm font-medium w-full sm:w-auto rounded-full pt-4 pr-8 pb-4 pl-8 items-center justify-center mx-auto cursor-hover-target transition-colors`}
              >
                {link.label} <Icon icon={link.icon} width="20" height="20" />
              </a>
            ))}
            <button
              onClick={handleBookCallClick}
              className="border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white flex gap-2 text-sm font-medium w-full sm:w-auto rounded-full pt-4 pr-8 pb-4 pl-8 items-center justify-center mx-auto cursor-hover-target transition-colors"
            >
              Book a Call <Icon icon="solar:calendar-linear" width="20" height="20" />
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 md:py-16 text-center relative z-10 border-t bg-[#020202] border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span className="font-display text-lg tracking-tight text-white">404SQUAD</span>
          </div>
          <p className="text-sm text-zinc-500 max-w-xl">
            Built for teams that want a stronger first impression and a smoother product experience.
          </p>
          <p className="text-xs font-mono tracking-[0.28em] uppercase text-zinc-600">(C) 404SQUAD INITIALIZED</p>
        </div>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="glass-card w-full max-w-md p-6 rounded-2xl relative border border-white/10 bg-[#0a0a0a]/90">
            <button
               // @ts-ignore
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              <Icon icon="solar:close-circle-linear" width="24" height="24" />
            </button>
            <h3 className="text-xl font-display font-semibold text-white mb-4">Book a Call</h3>
            <form onSubmit={handleSubmit} name="book-call" data-netlify="true" netlify-honeypot="bot-field" className="flex flex-col gap-4 text-left">
              <input type="hidden" name="form-name" value="book-call" />
              <div className="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Reason for Booking</label>
                <textarea
                  required
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-indigo-500 transition-colors min-h-[80px]"
                  placeholder="E.g., Discuss a new project"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Preferred Time Slot</label>
                <select
                  required
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="" disabled>Select a time slot</option>
                  <option value="4pm to 5pm">4 PM to 5 PM</option>
                  <option value="7pm to 9pm">7 PM to 9 PM</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-color-animated animate-gradient-shift text-white font-medium rounded-lg px-4 py-3 mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Request'} <Icon icon="solar:arrow-right-linear" width="20" height="20" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
