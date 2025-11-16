import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Overview from './components/Overview';
import Terminal from './components/Terminal';
import { DeveloperProvider } from './contexts/DeveloperContext';

export type Section = 'overview' | 'experience' | 'projects' | 'terminal';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'terminal':
        return <Terminal />;
      default:
        return <Overview />;
    }
  };

  return (
    <DeveloperProvider>
      <div className="flex h-full flex-col p-2 sm:p-4 md:p-6 lg:flex-row lg:p-8 lg:gap-8">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className={`mt-4 sm:mt-6 flex-1 lg:mt-0 lg:pl-8 overflow-y-auto`}>
          {renderSection()}
        </main>
      </div>
    </DeveloperProvider>
  );
};

export default App;