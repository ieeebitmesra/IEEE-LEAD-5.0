'use client';
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Work from './components/Work';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import CodeforcesProfile from './components/CodeforcesProfile';
import FadeInWhenVisible from './components/FadeIn';

const sections = [
  { id: 'about', component: <About /> },
  { id: 'projects', component: <Projects /> },
  { id: 'work', component: <Work /> },
  { id: 'codeforces', component: <CodeforcesProfile /> },
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="font-light text-customText antialiased selection:bg-customBgSel selection:text-customText2 h-auto min-h-0">
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
      <Navbar />
      <Hero />
      <Marquee />
      {sections.map((section) => (
        <FadeInWhenVisible key={section.id}>{section.component}</FadeInWhenVisible>
      ))}
      <Contact />
    </main>
  );
};

export default App;
