import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
        <p className="text-sm text-muted">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
