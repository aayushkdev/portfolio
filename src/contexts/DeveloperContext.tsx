import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface DeveloperContextType {
  isDeveloperMode: boolean;
  clickCount: number;
  showDeveloperToast: boolean;
  toastMessage: string;
  activateDeveloperMode: () => void;
  incrementClick: () => void;
  resetClicks: () => void;
}

const DeveloperContext = createContext<DeveloperContextType | undefined>(undefined);

export const DeveloperProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showDeveloperToast, setShowDeveloperToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [hasShownDeveloperMessage, setHasShownDeveloperMessage] = useState(false);

  const incrementClick = () => {
    if (isDeveloperMode) return;
    
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount >= 8) {
      setIsDeveloperMode(true);
    }

    if (newCount >= 5 && newCount <= 8 && !hasShownDeveloperMessage) {
      let message: string;
      
      if (newCount === 8) {
        message = 'You are now a developer!';
        setHasShownDeveloperMessage(true);
      } else {
        const remaining = 8 - newCount;
        message = `You are now ${remaining} step${remaining !== 1 ? 's' : ''} away from being a developer.`;
      }
      
      setToastMessage(message);
      setShowDeveloperToast(true);
    }
  };

  useEffect(() => {
    if (showDeveloperToast) {
      const timer = setTimeout(() => {
        setShowDeveloperToast(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [showDeveloperToast]);

  const activateDeveloperMode = () => {
    setIsDeveloperMode(true);
    setClickCount(8);
    setHasShownDeveloperMessage(true);
  };

  const resetClicks = () => {
    setClickCount(0);
    setIsDeveloperMode(false);
    setShowDeveloperToast(false);
    setToastMessage('');
    setHasShownDeveloperMessage(false);
  };

  return (
    <DeveloperContext.Provider value={{
      isDeveloperMode,
      clickCount,
      showDeveloperToast,
      toastMessage,
      activateDeveloperMode,
      incrementClick,
      resetClicks
    }}>
      {children}
    </DeveloperContext.Provider>
  );
};

export const useDeveloper = () => {
  const context = useContext(DeveloperContext);
  if (context === undefined) {
    throw new Error('useDeveloper must be used within a DeveloperProvider');
  }
  return context;
};