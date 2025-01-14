// components/ThemeToggle.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="fixed bottom-5 right-5 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-amber-200 dark:border-amber-700 hover:bg-amber-50 dark:hover:bg-gray-700 transition-all"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-amber-500" />
            ) : (
                <Moon className="w-6 h-6 text-amber-500" />
            )}
        </button>
    );
}