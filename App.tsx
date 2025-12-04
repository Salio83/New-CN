import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Argumentation } from './components/Argumentation';
import { Timeline } from './components/Timeline';
import { Experts } from './components/Experts';
import { Documentation } from './components/Documentation';
import { ArticleResume } from './components/ArticleResume';
import { Team } from './components/Team';
import { Disclaimer } from './components/Disclaimer';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('accueil');

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {activeSection === 'accueil' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'argumentation' && <Argumentation />}
        {activeSection === 'chronologie' && <Timeline />}
        {activeSection === 'experts' && <Experts />}
        {activeSection === 'documentation' && <Documentation />}
        {activeSection === 'article' && <ArticleResume />}
        {activeSection === 'equipe' && <Team />}
        {activeSection === 'disclaimer' && <Disclaimer />}
      </main>

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}
