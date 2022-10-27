import React from 'react';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Theme from '../Theme/Theme';

const ToggleDarkMode = () => {
    const [colorTheme, setTheme] = Theme();
    const [isDarkMode, setDarkMode] = useState(colorTheme === "light" ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkMode(checked);
  };
    return (
        <DarkModeSwitch
    //   style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={20}
    />
    );
};

export default ToggleDarkMode;