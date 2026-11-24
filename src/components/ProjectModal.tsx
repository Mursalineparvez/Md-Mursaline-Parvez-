import { ChevronLeft, ChevronRight, ExternalLink, Layers, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ProjectItem } from '../data/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  initialSlideIndex?: number;
  onClose: () => void;
}

export function ProjectModal({ project, initialSlideIndex = 0, onClose }: ProjectModalProps) {
  const [activeSlide, setActiveSlide] = useState(initialSlideIndex);

  useEffect(() => {
    setActiveSlide(initialSlideIndex);
  }, [project, initialSlideIndex]);

  useEffect(() => {
    if (!project) return;
    const galleryLen = project.gallery?.length ?? 0;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (galleryLen > 1 && e.key === 'ArrowRight') {
        setActiveSlide((prev) => (prev + 1) % galleryLen);
      }
      if (galleryLen > 1 && e.key === 'ArrowLeft') {
        setActiveSlide((prev) => (prev - 1 + galleryLen) % galleryLen);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : null;
  const currentMedia = gallery ? gallery[activeSlide] ?? gallery[0] : null;

  const handlePrev = () => {
    if (!gallery) return;
    setActiveSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleNext = () => {
    if (!gallery) return;
    setActiveSlide((prev) => (prev + 1) % gallery.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-[#121216] md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <div>
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <span className="font-mono tabular-nums">{project.index}</span>
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              <span>{project.subtitle}</span>
              {project.tagline && (
                <>
                  <span className="mx-2" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-blue-600 dark:text-blue-400">{project.tagline}</span>
                </>
              )}
            </p>
            <h3
              id="project-modal-title"
              className="mt-1 font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {currentMedia ? (
          <div className="mt-6 space-y-4">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-2.5 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-mono font-medium text-blue-600 tabular-nums dark:text-blue-400">
                    {String(activeSlide + 1).padStart(2, '0')} / {String(gallery!.length).padStart(2, '0')}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">
                    ·
                  </span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{currentMedia.title}</span>
                  <span className="hidden text-zinc-500 dark:text-zinc-400 sm:inline">
                    ({currentMedia.module})
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous screenshot"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next screenshot"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex max-h-[460px] w-full items-center justify-center bg-[#f4f7f5] p-3 dark:bg-zinc-950/80 md:p-5">
                <img
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[420px] w-auto rounded-lg object-contain shadow-sm"
                />
              </div>

              <div className="border-t border-zinc-200 bg-white px-4 py-2.5 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                {currentMedia.caption}
              </div>
            </div>

            <div>
              <div className="mb-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                All App Screens ({gallery!.length})
              </div>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                {gallery!.map((item, idx) => {
                  const isActive = idx === activeSlide;
                  return (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      className={`group overflow-hidden rounded-lg border text-left transition-colors ${
                        isActive
                          ? 'border-blue-600 ring-1 ring-blue-600 dark:border-blue-400 dark:ring-blue-400'
                          : 'border-zinc-200 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600'
                      }`}
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-white">
                        <img
                          src={item.src}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="truncate bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                        {String(idx + 1).padStart(2, '0')}. {item.module}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          project.image && (
            <div className="mt-5 aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
          )
        )}

        <p className="mt-6 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{project.summary}</p>

        {project.coreModules && project.coreModules.length > 0 && (
          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-xs font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
              <Layers className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>{project.id === 'zikr-plus' ? 'Seven Core Experiences' : 'Core Modules & Capabilities'}</span>
            </h4>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {project.coreModules.map((mod) => (
                <div
                  key={mod.name}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <div className="text-xs font-semibold text-zinc-950 dark:text-zinc-100">{mod.name}</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{mod.purpose}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6">
          <h4 className="text-xs font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
            Key Capabilities &amp; Implementation
          </h4>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.highlights.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.architectureNotes && project.architectureNotes.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
              {project.id === 'zikr-plus' ? 'Architecture & Persistence' : 'Workflow & Architecture'}
            </h4>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.architectureNotes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600"
                    aria-hidden="true"
                  />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Technology Stack: </span>
            {project.stack.join(' · ')}
          </div>

          {project.links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 whitespace-nowrap shrink-0"
                >
                  <span>Visit {link.label}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
