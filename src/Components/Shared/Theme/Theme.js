import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Theme = () => {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        // Save Theme
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);
    
    return [colorTheme, setTheme]
};

export default Theme;