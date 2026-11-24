import { ArrowUpRight, Layers } from 'lucide-react';
import { useState } from 'react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';

const FILTER_OPTIONS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-platforms', label: 'Web & Platforms' },
  { id: 'ai-automation', label: 'AI & Automation' },
  { id: 'ml-research', label: 'ML & Research' },
];

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [initialSlideIndex, setInitialSlideIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const openProjectModal = (project: ProjectItem, slideIdx = 0) => {
    setInitialSlideIndex(slideIdx);
    setActiveProject(project);
  };

  const filteredProjects = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const flagshipProject = filteredProjects.find((p) => p.flagship);
  const featuredVisuals = filteredProjects.filter((p) => p.featured && !p.flagship && p.image);
  const remainingProjects = filteredProjects.filter((p) => !p.featured && !p.flagship);

  return (
    <section id="projects" className="border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">02. Selected Work</p>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-3xl">
              Things I&apos;ve built
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1 rounded-xl border border-zinc-200 bg-zinc-100 p-1 dark:border-zinc-800 dark:bg-zinc-900"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = filter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setFilter(option.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-white text-zinc-950 shadow-sm dark:bg-zinc-800 dark:text-zinc-50'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-3 text-xs text-zinc-500 tabular-nums dark:text-zinc-400">
          Showing {filteredProjects.length} of {PROJECTS.length} documented projects · Click any card for full details
        </p>

        {flagshipProject && (
          <article className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#121216]">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
              <div className="border-b border-zinc-200 bg-zinc-100 p-5 dark:border-zinc-800 dark:bg-zinc-950/70 lg:col-span-5 lg:border-b-0 lg:border-r">
                <button
                  type="button"
                  onClick={() => openProjectModal(flagshipProject, 0)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white text-left shadow-sm transition-colors hover:border-blue-500/70 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-3.5 py-2 text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                    <span className="font-mono">zikr-mate.vercel.app</span>
                    <span className="tabular-nums text-blue-600 dark:text-blue-400">
                      {flagshipProject.gallery?.length ?? 1} App Screens
                    </span>
                  </div>

                  <div className="aspect-[4/3] w-full flex-1 overflow-hidden bg-white">
                    {!failedImages[flagshipProject.id] && flagshipProject.image ? (
                      <img
                        src={flagshipProject.image}
                        alt={flagshipProject.imageAlt || flagshipProject.title}
                        referrerPolicy="no-referrer"
                        onError={() => setFailedImages((prev) => ({ ...prev, [flagshipProject.id]: true }))}
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 text-center">
                        <Layers className="h-6 w-6 text-blue-400" />
                        <span className="mt-2 font-display text-sm font-semibold text-zinc-200">
                          {flagshipProject.title}
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              </div>

              <div className="flex flex-col justify-between p-6 lg:col-span-7 md:p-8">
                <div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-mono tabular-nums">{flagshipProject.index}</span>
                    <span className="mx-1.5" aria-hidden="true">
                      ·
                    </span>
                    <span>{flagshipProject.subtitle}</span>
                    <span className="mx-1.5" aria-hidden="true">
                      ·
                    </span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">Featured Release</span>
                  </div>

                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                    <button
                      type="button"
                      onClick={() => openProjectModal(flagshipProject, 0)}
                      className="text-left transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {flagshipProject.title}
                    </button>
                  </h3>

                  {flagshipProject.tagline && (
                    <p className="mt-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {flagshipProject.tagline}
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {flagshipProject.summary}
                  </p>

                  {flagshipProject.coreModules && (
                    <div className="mt-5 grid grid-cols-1 gap-2 border-t border-zinc-200 pt-4 text-xs dark:border-zinc-800 sm:grid-cols-2">
                      {flagshipProject.coreModules.slice(0, 6).map((mod) => (
                        <div key={mod.name} className="flex items-start gap-2">
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"
                            aria-hidden="true"
                          />
                          <div>
                            <span className="font-semibold text-zinc-900 dark:text-zinc-100">{mod.name}: </span>
                            <span className="text-zinc-600 dark:text-zinc-400">{mod.purpose}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {flagshipProject.stack.slice(0, 5).join(' · ')}
                  </span>

                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    {flagshipProject.links.map((link, idx) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className={
                          idx === 0
                            ? 'inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 whitespace-nowrap shrink-0'
                            : 'inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 whitespace-nowrap shrink-0'
                        }
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                    <button
                      type="button"
                      onClick={() => openProjectModal(flagshipProject, 0)}
                      className="inline-flex items-center rounded-lg border border-zinc-200 px-3.5 py-2 text-xs font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-800 whitespace-nowrap shrink-0"
                    >
                      Details &amp; {flagshipProject.gallery?.length ?? 0} Screens
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {featuredVisuals.length > 0 && (
          <div
            className={`mt-8 grid grid-cols-1 gap-6 ${
              featuredVisuals.length === 2 || featuredVisuals.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-3'
            }`}
          >
            {featuredVisuals.map((project) => {
              const hasFailed = failedImages[project.id];
              return (
                <article
                  key={project.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-[#121216] dark:hover:border-zinc-700"
                >
                  <button
                    type="button"
                    onClick={() => openProjectModal(project, 0)}
                    className="block aspect-[4/3] w-full overflow-hidden bg-zinc-950 text-left focus-visible:outline-2 focus-visible:outline-blue-600"
                  >
                    {!hasFailed && project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        referrerPolicy="no-referrer"
                        onError={() => setFailedImages((prev) => ({ ...prev, [project.id]: true }))}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 text-center">
                        <Layers className="h-6 w-6 text-blue-400" />
                        <span className="mt-2 font-display text-sm font-semibold text-zinc-200">{project.title}</span>
                      </div>
                    )}
                  </button>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        <span className="font-mono tabular-nums">{project.index}</span>
                        <span className="mx-1.5" aria-hidden="true">
                          ·
                        </span>
                        <span>{project.subtitle}</span>
                      </div>

                      <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                        <button
                          type="button"
                          onClick={() => openProjectModal(project, 0)}
                          className="text-left transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {project.title}
                        </button>
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.summary}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-200 pt-4 text-xs dark:border-zinc-800">
                      <span className="truncate text-zinc-500 dark:text-zinc-400">
                        {project.stack.slice(0, 3).join(' · ')}
                      </span>

                      <div className="flex items-center gap-3 shrink-0">
                        {project.links[0] && (
                          <a
                            href={project.links[0].url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline dark:text-blue-400 whitespace-nowrap"
                          >
                            <span>{project.links[0].label}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => openProjectModal(project, 0)}
                          className="font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white whitespace-nowrap"
                        >
                          {project.gallery && project.gallery.length > 1
                            ? `Details (${project.gallery.length} Screens)`
                            : 'Details'}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {remainingProjects.length > 0 && (
          <div
            className={`mt-8 grid grid-cols-1 gap-4 ${
              remainingProjects.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'
            }`}
          >
            {remainingProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-[#121216] dark:hover:border-zinc-700"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                    <span>
                      <span className="font-mono tabular-nums">{project.index}</span>
                      <span className="mx-1.5" aria-hidden="true">
                        ·
                      </span>
                      <span>{project.subtitle}</span>
                    </span>
                    <span className="shrink-0 font-medium text-zinc-600 dark:text-zinc-400">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                    <button
                      type="button"
                      onClick={() => openProjectModal(project, 0)}
                      className="text-left transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {project.title}
                    </button>
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.summary}</p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-zinc-200 pt-4 text-xs dark:border-zinc-800">
                  <span className="truncate text-zinc-500 dark:text-zinc-400">{project.stack.join(' · ')}</span>

                  <div className="flex items-center gap-3 shrink-0">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline dark:text-blue-400 whitespace-nowrap"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                    <button
                      type="button"
                      onClick={() => openProjectModal(project, 0)}
                      className="font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white whitespace-nowrap"
                    >
                      {project.gallery && project.gallery.length > 1
                        ? `Details (${project.gallery.length} Screens)`
                        : 'Details'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        project={activeProject}
        initialSlideIndex={initialSlideIndex}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
