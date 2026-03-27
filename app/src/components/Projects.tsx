import { useEffect, useState } from 'react';
import { PROJECTS, type Project } from '../data/projects';
import { Icon } from '@iconify/react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      document.body.classList.remove('modal-open');
      return;
    }

    document.body.classList.add('modal-open');

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  return (
    <>
      <section className="md:py-32 overflow-hidden pt-20 pb-20 relative" id="projects">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0 bg-cyan-600/10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] blur-[100px] md:blur-[150px] rounded-full pointer-events-none z-0 bg-indigo-600/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 reveal gap-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/70 mb-4">Selected Work</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white">Projects with stronger signal</h2>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                A few examples of how we approach clarity, interaction design, and technical implementation across different kinds of digital products.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-zinc-300">
              <span className="block text-xs uppercase tracking-[0.24em] text-zinc-500 mb-2">What we optimize for</span>
              Clear hierarchy, strong first impressions, and interfaces that feel fast.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
                className={`glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden group cursor-hover-target reveal stagger-${(index % 2) + 1} text-left transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} opacity-15 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-30 group-hover:scale-150 transition-all duration-700`}></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8 gap-4">
                    <div>
                      <span className="inline-flex mb-4 px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium uppercase tracking-[0.24em] border border-white/10 text-zinc-300">{project.status}</span>
                      <h3 className="font-display text-2xl md:text-3xl tracking-tight font-semibold mb-3 text-white">{project.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-all border border-white/10 shrink-0">
                      <Icon icon="solar:arrow-right-up-linear" width="20" height="20" />
                    </div>
                  </div>

                  <p className="text-zinc-300 text-sm mb-5 leading-relaxed">{project.description}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-8">{project.outcome}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2 py-1 rounded-full bg-black/50 text-zinc-300 border border-white/10 backdrop-blur-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="project-title">
          <div className="absolute inset-0 backdrop-blur-md transition-opacity bg-black/60" onClick={() => setSelectedProject(null)}></div>
          <div className="relative w-full max-w-4xl bg-[#0a0a0a] border rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border-white/10 animate-fade-in-up">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 rounded-full transition-colors z-20 backdrop-blur-md border bg-black/40 hover:bg-black/60 text-white border-white/10 cursor-hover-target" aria-label="Close project details">
              <Icon icon="solar:close-circle-linear" width="24" height="24" />
            </button>

            <div className="overflow-y-auto w-full">
              <div className="relative h-56 sm:h-72 overflow-hidden bg-[#111] flex-shrink-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-40`}></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_45%)]"></div>
                <div className="absolute inset-0 flex items-end p-6 md:p-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/70 mb-3">{selectedProject.status}</p>
                    <h3 id="project-title" className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl">{selectedProject.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 grid gap-8 lg:grid-cols-[1.3fr_0.8fr]">
                <div>
                  <p className="text-zinc-300 leading-relaxed text-sm md:text-base mb-6">{selectedProject.details}</p>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 mb-3">Outcome</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{selectedProject.outcome}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 mb-3">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="text-xs font-mono px-2 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {selectedProject.link ? (
                      <a href={selectedProject.link} target="_blank" rel="noreferrer" className="btn-color-animated px-6 py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 text-white cursor-hover-target">
                        Visit Website <Icon icon="solar:link-circle-linear" width="20" height="20" />
                      </a>
                    ) : null}
                    {selectedProject.github ? (
                      <a href={selectedProject.github} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border font-medium text-sm flex items-center justify-center gap-2 transition-colors border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white cursor-hover-target">
                        <Icon icon="solar:code-square-linear" width="20" height="20" /> View Code
                      </a>
                    ) : null}
                    {!selectedProject.link && !selectedProject.github ? (
                      <div className="rounded-2xl border border-dashed border-white/10 px-4 py-5 text-sm text-zinc-500">
                        Public links are not attached yet. This card is currently being used as a case study preview.
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
