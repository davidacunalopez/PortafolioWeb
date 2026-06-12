import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { LanguageProvider } from './i18n/LanguageContext';
import { SmoothScroll } from './components/SmoothScroll';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Events } from './components/Events';
import { TechStack } from './components/TechStack';
import { BigType } from './components/BigType';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Aurora } from './components/ui/Aurora';
import { BackToTop } from './components/ui/BackToTop';
import { CustomCursor } from './components/ui/CustomCursor';
import { Grain } from './components/ui/Grain';
import { Preloader } from './components/ui/Preloader';
import { ScrollProgress } from './components/ui/ScrollProgress';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(
    () => typeof window !== 'undefined' && !!sessionStorage.getItem('preloader_shown'),
  );

  return (
    <LanguageProvider>
      <AnimatePresence>
        {!preloaderDone && (
          <Preloader
            key="preloader"
            onDone={() => {
              sessionStorage.setItem('preloader_shown', '1');
              setPreloaderDone(true);
            }}
          />
        )}
      </AnimatePresence>
      <SmoothScroll>
        <Aurora />
        <ScrollProgress />
        <CustomCursor />
        <Grain />
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Events />
          <TechStack />
          <BigType />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </SmoothScroll>
    </LanguageProvider>
  );
}
