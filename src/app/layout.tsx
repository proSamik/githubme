// src/app/layout.tsx
'use client';

import {Inter} from 'next/font/google';
import {ErrorBoundary} from '@/components/layout/ErrorBoundary';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import './globals.css';
import React from "react";
import {Providers} from './providers';
import FeedbackForm from "@/components/FeedbackForm";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${inter.className} bg-white dark:bg-dark-background text-zinc-900 dark:text-white transition-colors min-h-screen flex flex-col`}>
        <Providers>
            <ErrorBoundary>
                <Navigation/>
                <main className="container
                px-4 py-8
                w-full
                mx-auto
                sm:max-w-screen-md
                md:max-w-screen-lg
                mt-8">
                    {children}
                </main>
                <FeedbackForm />
                <Footer/>
            </ErrorBoundary>
        </Providers>
        </body>
        </html>
    );
}