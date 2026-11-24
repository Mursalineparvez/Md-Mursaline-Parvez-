import { ArrowRight, Check, Copy, ExternalLink, FileDown, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { KEY_METRICS, PROFILE } from '../data/portfolio';
import { downloadResumePdf } from '../utils/generateResumePdf';
import { TerminalExplorer } from './TerminalExplorer';

interface HeroSectionProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function HeroSection({ isDark, onToggleTheme }: HeroSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [downloadingResume, setDownloadingResume] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const handleDownloadResume = async () => {
    if (downloadingResume) return;
    setDownloadingResume(true);
    try {
      await downloadResumePdf();
    } finally {
      setTimeout(() => setDownloadingResume(false), 1200);
    }
  };

  return (
    <section id="top" className="border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
                  {PROFILE.location}
                  <span className="mx-2 text-zinc-400 dark:text-zinc-600" aria-hidden="true">
                    ·
                  </span>
                  B.Sc. CSE, Green University of Bangladesh
                </p>

                <button
                  type="button"
                  onClick={onToggleTheme}
                  aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 whitespace-nowrap shrink-0"
                >
                  {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                  <span>{isDark ? 'Light' : 'Dark'}</span>
                </button>
              </div>

              <h1 className="mt-6 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-zinc-950 dark:text-zinc-50 [text-wrap:balance]">
                Web developer building modern websites, React apps, and smart automation.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                I&apos;m <span className="font-medium text-zinc-900 dark:text-zinc-100">{PROFILE.name}</span> — a Web
                Developer and CSE graduate crafting responsive websites and full-stack apps with React, Next.js,
                Node.js, and WordPress, supported by foundational MySQL, MongoDB, and n8n AI automation.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 whitespace-nowrap shrink-0"
                >
                  <span>View Selected Work</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={handleDownloadResume}
                  disabled={downloadingResume}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 disabled:opacity-60 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 whitespace-nowrap shrink-0"
                >
                  <FileDown className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>{downloadingResume ? 'Preparing PDF...' : 'Download Resume'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 whitespace-nowrap shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-4 w-4 text-blue-500" />
                      <span>Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                <a
                  href={PROFILE.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap shrink-0"
                >
                  <span>Portfolio</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">
                  /
                </span>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap shrink-0"
                >
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">
                  /
                </span>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap shrink-0"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">
                  /
                </span>
                <a
                  href={PROFILE.kaggle}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap shrink-0"
                >
                  <span>Kaggle</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">
                  /
                </span>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {PROFILE.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <TerminalExplorer />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-zinc-200 pt-8 dark:border-zinc-800/80 md:grid-cols-4">
          {KEY_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <div className="font-display text-2xl font-bold tracking-tight text-zinc-950 tabular-nums dark:text-zinc-50 md:text-3xl">
                {metric.value}
              </div>
              <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
