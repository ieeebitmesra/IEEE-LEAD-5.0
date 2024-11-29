// src/components/DarkModeToggle.js
import React from 'react';
import { useTheme } from '../ThemeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none transition-colors duration-300"
    >
      {darkMode ? '🌞' : '🌜'}
    </button>
  );
};

export default DarkModeToggle;
