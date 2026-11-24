import { Briefcase, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { PROFILE, WORK_EXPERIENCE } from '../data/portfolio';

export function ExperienceSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="experience" className="border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">01. Background &amp; Experience</p>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-3xl">
              Where I&apos;ve worked and studied
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            Focused on React, Next.js, and Node.js web engineering alongside n8n workflow automation and CSE foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#121216]">
              <div className="aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-zinc-100 to-zinc-200/70 pt-4 dark:from-zinc-900/60 dark:to-[#121216]">
                {!imgError ? (
                  <img
                    src={PROFILE.portrait}
                    alt={`${PROFILE.name} — Software Engineer portrait`}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-contain object-bottom"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 text-center">
                    <span className="font-display text-3xl font-bold text-zinc-200">MP</span>
                    <span className="mt-2 text-xs text-zinc-400">{PROFILE.name}</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">{PROFILE.name}</div>
                <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  {PROFILE.location} · Web Developer &amp; Software Engineer
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-8">
            {WORK_EXPERIENCE.map((exp) => (
              <div
                key={exp.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#121216] md:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg border border-zinc-200 bg-zinc-50 p-2 text-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-blue-400">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-zinc-50">{exp.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {exp.company}
                        <span className="mx-2 text-zinc-400 dark:text-zinc-600" aria-hidden="true">
                          ·
                        </span>
                        <span className="font-normal text-zinc-600 dark:text-zinc-400">{exp.type}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#121216] md:p-7">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg border border-zinc-200 bg-zinc-50 p-2 text-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-blue-400">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-zinc-50">
                    {PROFILE.education.degree}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {PROFILE.education.institution}
                    <span className="mx-2 text-zinc-400 dark:text-zinc-600" aria-hidden="true">
                      ·
                    </span>
                    {PROFILE.education.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{PROFILE.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
