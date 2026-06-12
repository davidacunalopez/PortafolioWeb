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
import { CustomCursor } from './components/ui/CustomCursor';
import { Grain } from './components/ui/Grain';
import { ScrollProgress } from './components/ui/ScrollProgress';

export default function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
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
      </SmoothScroll>
    </LanguageProvider>
  );
}
