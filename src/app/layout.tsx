// src/app/layout.tsx
import { Inter } from 'next/font/google';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';
import React from "react";
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'GithubMe',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-white dark:bg-dark-background text-zinc-900 dark:text-white transition-colors min-h-screen flex flex-col`}>
        <Providers>
            <ErrorBoundary>
                <Navigation />
                <main className="container mx-auto px-4 py-8 max-w-4xl mt-16">
                    {children}
                </main>
                <Footer />
            </ErrorBoundary>
        </Providers>
        </body>
        </html>
    );
}