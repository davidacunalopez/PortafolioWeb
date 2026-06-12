import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react';
import { useLanguage } from '../i18n/LanguageContext';
import { socialLinks } from '../i18n/content';

export function Footer() {
  const { t } = useLanguage();

  const socials = [
    { label: 'GitHub', href: socialLinks.github, Icon: GithubLogoIcon },
    { label: 'LinkedIn', href: socialLinks.linkedin, Icon: LinkedinLogoIcon },
    { label: 'Instagram', href: socialLinks.instagram, Icon: InstagramLogoIcon },
    {
      label: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
      Icon: EnvelopeSimpleIcon,
    },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">{t.hero.name.split(' ').slice(0, 2).join(' ')}</p>
            <p className="mt-1 max-w-[42ch] text-muted">{t.hero.tagline}</p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
              <span
                aria-hidden
                className="size-2 animate-pulse rounded-full bg-[oklch(78%_0.17_150)] shadow-[0_0_6px_oklch(78%_0.17_150/50%)] motion-reduce:animate-none"
              />
              {t.contact.availability}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors duration-150 hover:border-accent/50 hover:text-ink"
              >
                <Icon size={18} aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-6">
          <p className="text-sm text-muted">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
