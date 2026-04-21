'use client';

import { lazy, Suspense } from 'react';
import Hero from '@/components/sections/Hero';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LazySection from '@/components/LazySection';

// Lazy load non-critical sections
const About = lazy(() => import('@/components/sections/About'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Education = lazy(() => import('@/components/sections/Education'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Contact = lazy(() => import('@/components/sections/Contact'));

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-transparent">
      <Navigation />
      <main>
        <Hero />
        
        <LazySection>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <About />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <Skills />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <Experience />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <Projects />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <Education />
          </Suspense>
        </LazySection>
        
        <LazySection>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <Contact />
          </Suspense>
        </LazySection>
      </main>
      <Footer />
    </div>
  );
}