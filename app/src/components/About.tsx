export const About = () => {
  const pillars = [
    {
      title: 'Sharp Product Thinking',
      description: 'We simplify messy ideas into flows, screens, and systems people can understand quickly.',
    },
    {
      title: 'Intentional Visual Design',
      description: 'Every layout, contrast choice, and motion cue is treated as part of the product experience.',
    },
    {
      title: 'Build-Ready Execution',
      description: 'Design decisions are made with development realities, performance, and scale in mind.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative z-10 border-t border-white/5 bg-gradient-to-b from-[#050505] to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl tracking-tight font-semibold text-white mb-8">
            We don&apos;t just build software. <br className="hidden md:block" />We engineer ecosystems.
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12">
            404SQUAD is a compact product team blending design, frontend craft, and engineering strategy. We build interfaces that feel expressive without becoming noisy, and technical foundations that stay strong as products evolve.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className={`glass-card rounded-3xl p-6 md:p-8 reveal stagger-${index + 1}`}>
              <p className="text-xs uppercase tracking-[0.24em] text-indigo-200/80 mb-4">0{index + 1}</p>
              <h3 className="font-display text-2xl text-white mb-3">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
