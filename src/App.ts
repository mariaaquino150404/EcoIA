import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Indicators from './components/Indicators';
import Timeline from './components/Timeline';
import ImpactsSolutions from './components/ImpactsSolutions';
import OdsSection from './components/OdsSection';
import ArticlesSection from './components/ArticlesSection';
import BestPractices from './components/BestPractices';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll helper matching navigation offset bounds
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 76; // Match sticky navigation bar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  // Setup intersection observer to reflect user scroll position onto navbar links
  useEffect(() => {
    const sectionIds = ['hero', 'indicators', 'timeline', 'impacts', 'ods', 'articles', 'practices'];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: '-35% 0px -55% 0px', // Trigger highlights precisely when sections cross upper-middle folds
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* 1. Header / Navigation Bar */}
      <Navbar onScrollTo={handleScrollTo} activeSection={activeSection} />

      {/* Main Single Page Educational Flow Scroll Content */}
      <main className="relative">
        
        {/* Decorative Top Background light leak */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-emerald-950/20 blur-[130px] rounded-full pointer-events-none" />

        {/* 2. Hero Section */}
        <Hero onScrollTo={handleScrollTo} />

        {/* 3. Indicators Section */}
        <Indicators />

        {/* 4. Timeline Journey Lifecycle Section */}
        <Timeline />

        {/* 5. Side-by-side Comparative Impacts/Solutions Section */}
        <ImpactsSolutions />

        {/* 6. UN ODS Links Connection Section */}
        <OdsSection />

        {/* 7. Grid Articles & Functional Reading Modal Section */}
        <ArticlesSection />

        {/* 8. Best Practices Interactive Checklist Section */}
        <BestPractices />

      </main>

      {/* 9. Sophisticated Footer & Scroll back control */}
      <Footer onScrollTo={handleScrollTo} />

    </div>
  );
}
