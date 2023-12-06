import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#ffffff' : '#333333';
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
};

export default DarkModeToggle;