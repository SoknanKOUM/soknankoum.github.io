import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '@/pages/Home';
import AboutMe from '@/pages/AboutMe';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import Blog from '@/pages/Blog';
import BlogArticle from '@/pages/BlogArticle';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState<'in' | 'out'>('in');
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setStage('out');
    }
  }, [location, displayLocation]);

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName !== 'opacity' || e.target !== containerRef.current) return;
    if (stage === 'out') {
      setDisplayLocation(location);
      window.scrollTo({ top: 0, behavior: 'auto' });
      setStage('in');
    }
  };

  return (
    <div
      ref={containerRef}
      onTransitionEnd={handleTransitionEnd}
      style={{ transitionDuration: '320ms' }}
      className={`ease-[cubic-bezier(0.22,1,0.36,1)] transition-all will-change-transform ${
        stage === 'out'
          ? 'opacity-0 translate-y-2 blur-[6px]'
          : 'opacity-100 translate-y-0 blur-0'
      }`}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
