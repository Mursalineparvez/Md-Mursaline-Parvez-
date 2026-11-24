import { ArrowUp, Check, Copy, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { PROFILE } from '../data/portfolio';

export function ContactSection() {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      if (field === 'email') window.location.href = `mailto:${value}`;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName.trim()}`);
    const body = encodeURIComponent(
      `Name: ${senderName.trim()}\nEmail: ${senderEmail.trim()}\n\n${message.trim()}`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer id="contact" className="bg-zinc-50 dark:bg-[#09090B]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">06. Contact</p>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-3xl [text-wrap:balance]">
              Let&apos;s collaborate on AI automation or web engineering.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Open to software engineering, AI workflow automation, and research collaborations. Certifications and
              academic/professional references are available upon request.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-[#121216]">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-2.5 font-medium text-zinc-900 hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400"
                >
                  <Mail className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                  <span className="truncate">{PROFILE.email}</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE.email, 'email')}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 whitespace-nowrap shrink-0"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-blue-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-[#121216]">
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="flex items-center gap-2.5 font-medium text-zinc-900 tabular-nums hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400"
                >
                  <Phone className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                  <span>{PROFILE.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE.phone, 'phone')}
                  aria-label="Copy phone number"
                  className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 whitespace-nowrap shrink-0"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-blue-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2.5 px-1 pt-1 text-xs text-zinc-600 dark:text-zinc-400">
                <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                <span>{PROFILE.location}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#121216] md:p-8"
            >
              <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-zinc-50">Send a direct message</h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Prepares a pre-addressed message directly in your email client.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Jane Doe"
                    className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@organization.com"
                    className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share project details, role opportunity, or research topic..."
                  className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 whitespace-nowrap shrink-0"
                >
                  <Send className="h-4 w-4" />
                  <span>Compose Email</span>
                </button>

                {submitted && (
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    Opening email client with your message.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-zinc-200 pt-8 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. References &amp; certifications available upon request.
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href={PROFILE.kaggle}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <span>Kaggle</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1 font-medium text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
