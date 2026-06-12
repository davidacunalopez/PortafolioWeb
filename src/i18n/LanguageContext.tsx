import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { content } from './content';
import type { Content, Lang } from './content';

interface LanguageValue {
  lang: Lang;
  t: Content;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageValue | null>(null);

function initialLang(): Lang {
  const stored = localStorage.getItem('lang');
  return stored === 'en' || stored === 'es' ? stored : 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.title = content[lang].meta.title;
  }, [lang]);

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      t: content[lang],
      toggle: () => setLang((prev) => (prev === 'es' ? 'en' : 'es')),
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageValue {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used within LanguageProvider');
  return value;
}
