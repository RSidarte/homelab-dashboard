import React from 'react';
import { Sun, Moon, Terminal } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white flex items-center gap-3">
          <Terminal size={40} />
          Labaky Home
        </h1>
      </div>
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 flex items-center justify-between px-6 shadow-md">
        <div className="flex items-center gap-2">
          <Terminal className="text-blue-600 dark:text-blue-400" size={24} />
          <span className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard</span>
        </div>
        
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </header>
    </div>
  );
};
