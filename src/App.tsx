import React, { useState } from 'react';
import MatchingCardsGame from './components/MatchingCardsGame';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [view, setView] = useState<'home' | 'matching'>('home');

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text))] transition-colors duration-300 p-4">
        <div className="flex justify-end mb-4">
          <button onClick={toggleTheme} className="btn-primary rounded px-3 py-1 text-sm">
            Toggle Theme
          </button>
        </div>

        {view === 'home' ? (
          <div className="flex flex-col items-center justify-center gap-4 mt-20">
            <h1 className="text-3xl font-bold">English Games</h1>
            <button
              onClick={() => setView('matching')}
              className="btn-primary rounded px-4 py-2"
            >
              Play Matching Cards
            </button>
          </div>
        ) : (
          <MatchingCardsGame onBack={() => setView('home')} />
        )}
      </div>
    </div>
  );
};

export default App;
