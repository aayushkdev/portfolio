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
      <div className="flex h-screen flex-col lg:flex-row">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className={`flex-1 overflow-y-auto lg:h-full p-4 sm:p-6 lg:p-8`}>
          {renderSection()}
        </main>
      </div>
    </DeveloperProvider>
  );
};

export default App;