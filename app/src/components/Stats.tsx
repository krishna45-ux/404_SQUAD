export const Stats = () => {
  const stats = [
    { value: '42+', label: 'Projects Shipped', note: 'Across product, brand, and platform work' },
    { value: '15', label: 'Core Specialists', note: 'Design, frontend, backend, and systems thinking' },
    { value: '99%', label: 'Client Retention', note: 'Built on clarity, delivery, and iteration speed' },
    { value: '7d', label: 'Prototype Velocity', note: 'Fast turnarounds for early validation and demos' },
  ];

  return (
    <section className="py-16 md:py-24 relative z-10 border-y border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 text-left reveal">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`glass-card rounded-3xl p-6 md:p-7 cursor-hover-target group stagger-${(index % 4) + 1}`}>
              <p className="font-display text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-3 group-hover:scale-105 transition-transform origin-left">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-200 font-medium mb-3">{stat.label}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
