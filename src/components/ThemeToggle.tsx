// src/components/ThemeToggle.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        // Check system preference if no saved theme
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

        setTheme(initialTheme);
        applyTheme(initialTheme);
    }, []);

    const applyTheme = (selectedTheme: 'light' | 'dark') => {
        if (selectedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.style.colorScheme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.style.colorScheme = 'light';
        }
        localStorage.setItem('theme', selectedTheme);

        // Dispatch custom event for theme change
        window.dispatchEvent(
            new CustomEvent('themeChange', {
                detail: { theme: selectedTheme },
            })
        );
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 p-2 rounded-full bg-zinc-100 dark:bg-dark-background-soft hover:bg-zinc-200 dark:hover:bg-dark-background-hover transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <Moon className="h-5 w-5 text-zinc-800" />
            ) : (
                <Sun className="h-5 w-5 text-zinc-200" />
            )}
        </button>
    );
};

export default ThemeToggle;