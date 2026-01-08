import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Clients } from './components/Clients';
import { TechStack } from './components/TechStack';
import { Services } from './components/Services';
import { Sectors } from './components/Sectors';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />
      <main>
        <Hero />
        <Clients />
        <TechStack />
        <Services />
        <Sectors />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;