import { CornerDownLeft, RotateCcw, Terminal } from 'lucide-react';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { LEADERSHIP_ROLES, PROFILE, PROJECTS, RESEARCH_AREAS, SKILL_GROUPS, WORK_EXPERIENCE } from '../data/portfolio';

interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'heading';
  text: string;
}

const QUICK_COMMANDS = ['whoami', 'experience', 'projects', 'research', 'skills', 'contact'];

function buildInitialOutput(): TerminalLine[] {
  return [
    {
      id: 'init-1',
      type: 'heading',
      text: 'mursaline-portfolio CLI — interactive profile explorer',
    },
    {
      id: 'init-2',
      type: 'output',
      text: 'Type a command (whoami, experience, projects, research, leadership, skills, contact, clear) or select one below.',
    },
  ];
}

function evaluateCommand(rawInput: string): TerminalLine[] | 'CLEAR' {
  const cmd = rawInput.trim().toLowerCase();
  const ts = `${Date.now()}-${Math.random()}`;

  if (!cmd) return [];
  if (cmd === 'clear') return 'CLEAR';

  if (cmd === 'help') {
    return [
      { id: `${ts}-1`, type: 'heading', text: 'Available commands:' },
      {
        id: `${ts}-2`,
        type: 'output',
        text: 'whoami       — Background, location & B.Sc. CSE education',
      },
      {
        id: `${ts}-3`,
        type: 'output',
        text: 'experience   — Robo Tech Valley, WeCycle & BdOSN SISCA experience',
      },
      {
        id: `${ts}-4`,
        type: 'output',
        text: `projects     — Summary of ${PROJECTS.length} shipped websites, apps & agents`,
      },
      {
        id: `${ts}-5`,
        type: 'output',
        text: 'research     — Bangla NLP & grammatical error correction focus',
      },
      {
        id: `${ts}-6`,
        type: 'output',
        text: 'leadership   — BdJSO, SPSB & BdOSN STEM initiatives',
      },
      {
        id: `${ts}-7`,
        type: 'output',
        text: 'skills       — React, Node.js, MySQL/MongoDB basics, AI & n8n',
      },
      {
        id: `${ts}-8`,
        type: 'output',
        text: 'contact      — Direct email, phone & social profiles',
      },
    ];
  }

  if (cmd === 'whoami') {
    return [
      { id: `${ts}-1`, type: 'heading', text: `${PROFILE.name} — ${PROFILE.location}` },
      { id: `${ts}-2`, type: 'output', text: PROFILE.role },
      {
        id: `${ts}-3`,
        type: 'output',
        text: `${PROFILE.education.degree}, ${PROFILE.education.institution}`,
      },
      {
        id: `${ts}-4`,
        type: 'output',
        text: '~4 years of JavaScript & web development (React, Next.js, Node.js, MySQL/MongoDB basics) + n8n automation.',
      },
    ];
  }

  if (cmd === 'experience') {
    return WORK_EXPERIENCE.flatMap((exp, expIdx) => [
      { id: `${ts}-h-${expIdx}`, type: 'heading' as const, text: `${exp.role} — ${exp.company} (${exp.type})` },
      ...exp.highlights.map((item, idx) => ({
        id: `${ts}-${expIdx}-${idx}`,
        type: 'output' as const,
        text: `• ${item}`,
      })),
    ]);
  }

  if (cmd === 'projects') {
    return [
      { id: `${ts}-1`, type: 'heading', text: `Shipped Projects (${PROJECTS.length} total):` },
      ...PROJECTS.map((p) => ({
        id: `${ts}-${p.id}`,
        type: 'output' as const,
        text: `${p.index}. ${p.title} [${p.categoryLabel}]`,
      })),
    ];
  }

  if (cmd === 'research') {
    return [
      { id: `${ts}-1`, type: 'heading', text: 'Research & Publications:' },
      ...RESEARCH_AREAS.map((r) => ({
        id: `${ts}-${r.index}`,
        type: 'output' as const,
        text: `${r.index}. ${r.title}`,
      })),
    ];
  }

  if (cmd === 'leadership') {
    return [
      { id: `${ts}-1`, type: 'heading', text: 'Leadership & STEM Community:' },
      ...LEADERSHIP_ROLES.map((l) => ({
        id: `${ts}-${l.id}`,
        type: 'output' as const,
        text: `• ${l.role} — ${l.organization} (${l.period})`,
      })),
    ];
  }

  if (cmd === 'skills') {
    return [
      { id: `${ts}-1`, type: 'heading', text: 'Core Technical Stack:' },
      ...SKILL_GROUPS.map((g) => ({
        id: `${ts}-${g.id}`,
        type: 'output' as const,
        text: `${g.title}: ${g.items.join(', ')}`,
      })),
    ];
  }

  if (cmd === 'contact') {
    return [
      { id: `${ts}-1`, type: 'heading', text: 'Direct Channels:' },
      { id: `${ts}-2`, type: 'output', text: `Email:     ${PROFILE.email}` },
      { id: `${ts}-3`, type: 'output', text: `Phone:     ${PROFILE.phone}` },
      { id: `${ts}-4`, type: 'output', text: `Portfolio: ${PROFILE.portfolio}` },
      { id: `${ts}-5`, type: 'output', text: `GitHub:    ${PROFILE.github}` },
      { id: `${ts}-6`, type: 'output', text: `LinkedIn:  ${PROFILE.linkedin}` },
      { id: `${ts}-7`, type: 'output', text: `Kaggle:    ${PROFILE.kaggle}` },
    ];
  }

  return [
    {
      id: `${ts}-err`,
      type: 'output',
      text: `Command not found: "${cmd}". Type "help" to list available commands.`,
    },
  ];
}

export function TerminalExplorer() {
  const [lines, setLines] = useState<TerminalLine[]>(() => [
    ...buildInitialOutput(),
    { id: 'boot-cmd', type: 'command', text: 'whoami' },
    ...(evaluateCommand('whoami') as TerminalLine[]),
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    const result = evaluateCommand(trimmed);
    if (result === 'CLEAR') {
      setLines(buildInitialOutput());
      return;
    }
    setLines((prev) => [
      ...prev,
      { id: `cmd-${Date.now()}-${Math.random()}`, type: 'command', text: trimmed },
      ...result,
    ]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    runCommand(input);
    setInput('');
  };

  return (
    <div className="flex h-full min-h-[380px] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 text-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-[#111115]">
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
          <Terminal className="h-3.5 w-3.5 text-blue-400" />
          <span className="font-mono">mursaline ~ %</span>
        </div>
        <button
          type="button"
          onClick={() => setLines(buildInitialOutput())}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 whitespace-nowrap shrink-0"
          title="Reset terminal output"
        >
          <RotateCcw className="h-3 w-3" />
          <span>Reset</span>
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 space-y-1.5 overflow-y-auto px-4 py-4 font-mono text-xs leading-relaxed sm:text-[13px]"
        style={{ maxHeight: '290px' }}
      >
        {lines.map((line) => {
          if (line.type === 'command') {
            return (
              <div key={line.id} className="pt-2 text-blue-400">
                <span className="text-zinc-500">mursaline % </span>
                <span>{line.text}</span>
              </div>
            );
          }
          if (line.type === 'heading') {
            return (
              <div key={line.id} className="font-semibold text-zinc-100">
                {line.text}
              </div>
            );
          }
          return (
            <div key={line.id} className="text-zinc-400 break-words">
              {line.text}
            </div>
          );
        })}
      </div>

      <div className="border-t border-zinc-800/90 bg-zinc-900/60 px-4 py-3">
        <div className="mb-2.5 flex flex-wrap gap-1.5">
          {QUICK_COMMANDS.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => runCommand(cmd)}
              className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-[11px] font-medium text-zinc-300 transition-colors hover:border-blue-500/60 hover:text-blue-400 whitespace-nowrap shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="font-mono text-xs text-blue-400 shrink-0">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type help, projects, skills..."
            aria-label="Portfolio terminal command input"
            className="w-full bg-transparent font-mono text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none sm:text-[13px]"
          />
          <button
            type="submit"
            aria-label="Run terminal command"
            className="inline-flex items-center gap-1 rounded-md bg-zinc-800 px-2.5 py-1 text-[11px] font-medium text-zinc-200 transition-colors hover:bg-blue-600 hover:text-white whitespace-nowrap shrink-0"
          >
            <span>Run</span>
            <CornerDownLeft className="h-3 w-3" />
          </button>
        </form>
      </div>
    </div>
  );
}
