import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react';
import { useLanguage } from '../i18n/LanguageContext';
import { socialLinks } from '../i18n/content';
import { subscribe, subscribeConfigured } from '../lib/subscribe';
import { Magnetic } from './ui/Magnetic';
import { Reveal } from './ui/Reveal';

type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'invalid';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { t, lang } = useLanguage();
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypot) return;
    if (!EMAIL_PATTERN.test(email)) {
      setStatus('invalid');
      return;
    }
    setStatus('sending');
    try {
      await subscribe(email, lang);
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  const socials = [
    { label: 'LinkedIn', href: socialLinks.linkedin, Icon: LinkedinLogoIcon },
    { label: 'GitHub', href: socialLinks.github, Icon: GithubLogoIcon },
    { label: 'Instagram', href: socialLinks.instagram, Icon: InstagramLogoIcon },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(48rem 30rem at 18% 90%, oklch(85% 0.124 195 / 7%), transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="glass rounded-2xl p-7 md:p-12">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm text-muted">
                  <span aria-hidden className="size-2 rounded-full bg-[oklch(78%_0.17_150)]" />
                  {t.contact.availability}
                </p>
                <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  {t.contact.heading}
                </h2>
                <p className="mt-4 max-w-[50ch] text-lg leading-relaxed text-muted">{t.contact.body}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <Magnetic key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost h-11 px-5 text-sm"
                      >
                        <Icon size={18} aria-hidden />
                        {label}
                      </a>
                    </Magnetic>
                  ))}
                </div>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="mt-5 inline-flex items-center gap-2 text-muted transition-colors duration-150 hover:text-ink"
                >
                  <EnvelopeSimpleIcon size={18} aria-hidden />
                  {socialLinks.email}
                </a>
              </div>

              <div>
                <h3 className="font-display text-xl font-medium tracking-tight">{t.contact.form.title}</h3>
                <p className="mt-2 max-w-[45ch] leading-relaxed text-muted">{t.contact.form.helper}</p>

                {subscribeConfigured ? (
                  <form onSubmit={onSubmit} className="mt-6" noValidate>
                    <label htmlFor="subscribe-email" className="block text-sm font-medium text-ink">
                      {t.contact.form.label}
                    </label>
                    <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                      <input
                        id="subscribe-email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'invalid' || status === 'error') setStatus('idle');
                        }}
                        placeholder={t.contact.form.placeholder}
                        className="h-12 w-full rounded-xl border border-line bg-bg px-4 text-ink placeholder:text-muted/70"
                        aria-invalid={status === 'invalid'}
                        aria-describedby="subscribe-status"
                      />
                      <input
                        type="text"
                        name="company"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden
                        className="hidden"
                      />
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="btn btn-primary shrink-0 disabled:opacity-60"
                      >
                        {status === 'sending' ? t.contact.form.sending : t.contact.form.button}
                      </button>
                    </div>
                    <p id="subscribe-status" aria-live="polite" className="mt-3 min-h-5 text-sm">
                      {status === 'success' && <span className="text-accent">{t.contact.form.success}</span>}
                      {status === 'error' && (
                        <span className="text-[oklch(75%_0.16_25)]">{t.contact.form.error}</span>
                      )}
                      {status === 'invalid' && (
                        <span className="text-[oklch(75%_0.16_25)]">{t.contact.form.invalid}</span>
                      )}
                    </p>
                  </form>
                ) : (
                  <p className="mt-6 rounded-xl border border-line bg-bg/60 px-4 py-3 text-sm leading-relaxed text-muted">
                    {t.contact.form.notConfigured}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
