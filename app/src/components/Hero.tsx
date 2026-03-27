import { Icon } from '@iconify/react';

export const Hero = () => {
  const proofPoints = [
    'Premium-first product visuals',
    'Responsive design across devices',
    'Fast prototype-to-launch cycles',
  ];

  return (
    <section className="min-h-screen flex overflow-hidden pt-20 pb-10 relative items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse-slow pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal active">
        <div className="inline-block mb-8 md:mb-10 px-6 py-2 rounded-full border text-xs font-medium animate-float backdrop-blur-md bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10 transition-colors cursor-hover-target">
          <span className="font-mono tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            Building products with clarity and edge
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-semibold leading-[0.95] mb-6 tracking-tighter">
          <span className="block text-white">Designing bold</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300">
            digital experiences
          </span>
        </h1>

        <p className="font-sans text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed text-zinc-300 font-light stagger-1">
          404SQUAD helps teams turn ambitious ideas into websites and product interfaces that feel polished, fast, and unmistakably intentional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 stagger-2 mb-10 md:mb-12">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-color-animated animate-gradient-shift sm:w-auto flex gap-2 text-sm font-medium w-full rounded-full pt-4 pr-8 pb-4 pl-8 items-center justify-center text-white cursor-hover-target"
          >
            Explore Our Work <Icon icon="solar:arrow-right-linear" width="24" height="24" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="sm:w-auto w-full rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium px-8 py-4 text-white transition-colors cursor-hover-target"
          >
            Start a Project
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto stagger-3">
          {proofPoints.map((point) => (
            <div key={point} className="glass-card rounded-2xl px-4 py-4 text-sm text-zinc-300">
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
