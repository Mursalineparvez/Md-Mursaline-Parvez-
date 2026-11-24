import { SKILL_GROUPS } from '../data/portfolio';

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">05. Technical Stack</p>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-3xl">
              Tools I reach for
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            Centered on React, Next.js, Node.js, responsive web UI, and foundational MySQL &amp; MongoDB databases, plus n8n automation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#121216]"
            >
              <h3 className="font-display text-base font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                {group.title}
              </h3>

              <div className="mt-4 border-t border-zinc-200 pt-4 text-sm leading-7 text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
                {group.items.map((item, idx) => (
                  <span key={item}>
                    <span>{item}</span>
                    {idx < group.items.length - 1 && (
                      <span className="mx-2 text-zinc-300 dark:text-zinc-700" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
