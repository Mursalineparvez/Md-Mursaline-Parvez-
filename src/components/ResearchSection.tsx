import { BookOpen } from 'lucide-react';
import { RESEARCH_AREAS } from '../data/portfolio';

export function ResearchSection() {
  const singleTrack = RESEARCH_AREAS.length === 1;

  return (
    <section id="research" className="border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">03. Research &amp; Publications</p>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-3xl">
              Applied Bangla NLP &amp; language tooling
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            Focused on low-resource Bengali language processing, grammatical error correction, and transformer models.
          </p>
        </div>

        <div className={singleTrack ? 'grid grid-cols-1 gap-6' : 'grid grid-cols-1 gap-6 md:grid-cols-2'}>
          {RESEARCH_AREAS.map((area) => (
            <article
              key={area.index}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#121216] md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs font-medium text-zinc-500 tabular-nums dark:text-zinc-400">
                  Track {area.index}
                </span>
                <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>

              <div className={singleTrack ? 'mt-3 grid grid-cols-1 gap-8 lg:grid-cols-12' : ''}>
                <div className={singleTrack ? 'lg:col-span-6' : ''}>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 [text-wrap:balance]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{area.description}</p>
                </div>

                <ul
                  className={
                    singleTrack
                      ? 'space-y-2.5 border-t border-zinc-200 pt-5 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300 lg:col-span-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0'
                      : 'mt-5 space-y-2 border-t border-zinc-200 pt-5 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300'
                  }
                >
                  {area.focusPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
