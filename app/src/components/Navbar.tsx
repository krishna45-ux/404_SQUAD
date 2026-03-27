import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 ${scrolled ? 'pt-4' : 'pt-6'}`}>
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center rounded-full transition-all duration-500 border ${
          scrolled ? 'bg-black/60 border-white/10 backdrop-blur-xl py-3 px-6 shadow-2xl' : 'border-transparent'
        }`}
      >
        <a href="#" className="font-display font-semibold tracking-tighter text-white text-lg flex items-center gap-2 group cursor-hover-target">
          <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform"></span>
          404SQUAD
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-zinc-400">
          {navItems.slice(0, 3).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollTo(item.id, e)}
              className="hover:text-white transition-colors cursor-hover-target"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => scrollTo('contact', e)} className="px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors cursor-hover-target">
            Start Project
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl cursor-hover-target"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <Icon icon={menuOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'} width="22" height="22" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-3 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <div className="p-3 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollTo(item.id, e)}
                className="px-4 py-4 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-2xl transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
