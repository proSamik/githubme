// src/app/providers.tsx
'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
            storageKey="theme"
            forcedTheme={typeof window === 'undefined' ? 'light' : undefined}
        >
            {children}
        </ThemeProvider>
    );
}