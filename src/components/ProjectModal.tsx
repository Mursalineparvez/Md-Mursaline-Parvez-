import { ExternalLink, X } from 'lucide-react';
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
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : null;
  const currentMedia = gallery ? gallery[activeSlide] ?? gallery[0] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-[#121216] md:p-8"
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
          <div className="mt-5 space-y-3">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
              <img
                src={currentMedia.src}
                alt={currentMedia.alt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-300">{currentMedia.caption}</p>

              <div className="flex items-center gap-1.5">
                {gallery!.map((item, idx) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      idx === activeSlide
                        ? 'bg-blue-600 text-white'
                        : 'border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800'
                    }`}
                  >
                    Screen {idx + 1}
                  </button>
                ))}
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

        <p className="mt-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{project.summary}</p>

        <div className="mt-6">
          <h4 className="text-xs font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
            Key Contributions &amp; Implementation
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

        <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Focus &amp; Stack: </span>
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
