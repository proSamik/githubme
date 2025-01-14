// src/app/layout.tsx
import { Inter } from 'next/font/google';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import ThemeToggle from '@/components/ThemeToggle';
import './globals.css';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                            (function() {
                                function getTheme() {
                                    const savedTheme = localStorage.getItem('theme');
                                    if (savedTheme) return savedTheme;
                                    
                                    return window.matchMedia('(prefers-color-scheme: dark)').matches 
                                        ? 'dark' 
                                        : 'light';
                                }

                                const theme = getTheme();
                                if (theme === 'dark') {
                                    document.documentElement.classList.add('dark');
                                    document.documentElement.style.colorScheme = 'dark';
                                }
                            })();
                        `,
                }}
            />
            <title>GithubMe</title>
        </head>
        <body
            className={`${inter.className} bg-white dark:bg-dark-background text-zinc-900 dark:text-white transition-colors`}>
        <ErrorBoundary>
            <ThemeToggle/>
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                {children}
            </main>
        </ErrorBoundary>
        </body>
        </html>
    );
}