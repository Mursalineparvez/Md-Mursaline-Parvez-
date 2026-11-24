import { Award, Users } from 'lucide-react';
import { EXTRACURRICULARS, LEADERSHIP_ROLES } from '../data/portfolio';

export function LeadershipSection() {
  return (
    <section id="leadership" className="border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">04. Leadership &amp; Community</p>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-3xl">
              STEM mentorship &amp; olympiad leadership
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            Organizing national science competitions and mentoring youth across Bangladesh through BdJSO, SPSB, and
            BdOSN.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {LEADERSHIP_ROLES.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#121216]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="font-mono tabular-nums">{item.period}</span>
                  <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>

                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.organization}</p>

                <ul className="mt-4 space-y-2 border-t border-zinc-200 pt-4 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
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

        <div className="mt-10 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <div className="mb-6 flex items-center gap-2">
            <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <h3 className="font-display text-lg font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Extracurricular &amp; Community Tracks
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {EXTRACURRICULARS.map((track) => (
              <div
                key={track.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#121216]"
              >
                <h4 className="font-display text-base font-bold text-zinc-950 dark:text-zinc-50">{track.title}</h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {track.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600"
                        aria-hidden="true"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
