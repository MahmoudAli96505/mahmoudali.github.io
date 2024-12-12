import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const sections = ['about', 'experience', 'education', 'skills', 'contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <Header />
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        sections={sections} 
      />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl">
        <About isActive={activeSection === 'about'} />
        <Experience isActive={activeSection === 'experience'} />
        <Education isActive={activeSection === 'education'} />
        <Skills isActive={activeSection === 'skills'} />
        <Contact isActive={activeSection === 'contact'} />
      </main>
    </div>
  );
}

export default App;