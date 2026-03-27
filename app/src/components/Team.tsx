import { useEffect, useState } from 'react';
import { TEAM_MEMBERS, type TeamMember } from '../data/team';
import { Icon } from '@iconify/react';

export const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (!selectedMember) {
      document.body.classList.remove('modal-open');
      return;
    }

    document.body.classList.add('modal-open');

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedMember(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedMember]);

  const socialLinks = [
    { key: 'github', icon: 'solar:code-square-linear' },
    { key: 'linkedin', icon: 'solar:user-circle-linear' },
    { key: 'twitter', icon: 'solar:letter-linear' },
  ] as const;

  return (
    <>
      <section id="team" className="md:py-32 overflow-hidden bg-gradient-to-b from-transparent via-[#050505] to-transparent pt-20 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-20 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200/70 mb-4">Core Team</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white">The Collective</h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto text-zinc-400 leading-relaxed">
              Meet the people shaping the visual language, interface systems, and technical foundation behind the work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, index) => (
              <button
                key={member.id}
                type="button"
                onClick={() => setSelectedMember(member)}
                className={`glass-card rounded-3xl p-6 text-left group reveal stagger-${(index % 4) + 1} cursor-hover-target relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 group-hover:from-indigo-500/10 group-hover:to-cyan-500/10 transition-colors duration-500 blur-xl z-0"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full p-0.5 bg-gradient-to-br from-zinc-700 to-zinc-900 group-hover:from-indigo-500 group-hover:to-cyan-400 transition-colors duration-500 shadow-lg">
                      <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover border-4 border-[#0a0a0a] grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" referrerPolicy="no-referrer" />
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-zinc-300">
                      View
                      <Icon icon="solar:arrow-right-up-linear" width="16" height="16" />
                    </span>
                  </div>

                  <h4 className="font-display text-xl tracking-tight font-semibold mb-1 text-white">{member.name}</h4>
                  <p className="text-sm text-indigo-100/75 font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{member.bio}</p>

                  <div className="border-t border-white/5 pt-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 mb-3">Focus</p>
                    <p className="text-sm text-zinc-300 mb-4">{member.focus}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span key={skill} className="text-xs font-medium px-2 py-1 rounded-full bg-[#111] text-zinc-300 border border-white/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="team-member-title">
          <div className="absolute inset-0 backdrop-blur-md transition-opacity bg-black/60" onClick={() => setSelectedMember(null)}></div>
          <div className="relative w-full max-w-3xl bg-[#0a0a0a] border rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border-white/10 animate-fade-in-up">
            <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 p-2 rounded-full transition-colors z-20 backdrop-blur-md border bg-black/40 hover:bg-black/60 text-white border-white/10 cursor-hover-target" aria-label="Close team member details">
              <Icon icon="solar:close-circle-linear" width="24" height="24" />
            </button>

            <div className="grid md:grid-cols-[280px_1fr] overflow-y-auto">
              <div className="h-64 md:h-full min-h-[260px] relative bg-[#111]">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.24em] text-indigo-200/70 mb-3">Team Profile</p>
                <h3 id="team-member-title" className="font-display text-2xl md:text-4xl tracking-tight font-semibold mb-2 text-white">{selectedMember.name}</h3>
                <p className="text-sm font-medium mb-6 text-zinc-300">{selectedMember.role}</p>

                <p className="text-zinc-300 text-sm mb-6 leading-relaxed">{selectedMember.bio}</p>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-[0.24em] mb-3 font-semibold text-zinc-500">Primary Focus</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{selectedMember.focus}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-[0.24em] mb-3 font-semibold text-zinc-500">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill) => (
                      <span key={skill} className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {socialLinks.map(({ key, icon }) =>
                    selectedMember.socials[key] ? (
                      <a
                        key={key}
                        href={selectedMember.socials[key]}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-hover-target"
                      >
                        <Icon icon={icon} width="20" height="20" />
                      </a>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
