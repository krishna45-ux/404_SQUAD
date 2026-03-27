import { Icon } from '@iconify/react';

export const Footer = () => {
  const contactLinks = [
    { label: 'Email Us', href: 'mailto:hello@404squad.dev', icon: 'solar:letter-linear', primary: true },
    { label: 'Book a Call', href: 'mailto:hello@404squad.dev?subject=Project%20Inquiry', icon: 'solar:calendar-linear', primary: false },
  ];

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
    </>
  );
};
