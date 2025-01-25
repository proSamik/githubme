// src/app/layout.tsx
import {Inter} from 'next/font/google';
import {ErrorBoundary} from '@/components/layout/ErrorBoundary';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import './globals.css';
import React from "react";
import {Providers} from './providers';
import FeedbackForm from "@/components/FeedbackForm";
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

const siteMetadata = {
    title: 'GitHubMe',
    siteUrl: 'https://githubme.com',
    description: 'Transform GitHub Markdown README files into Technical Blog, Product Documentation or Personal Notes'
};

// Define default metadata
export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: siteMetadata.title,
    description: siteMetadata.description,
    applicationName: 'GitHubMe',
    authors: [{ name: 'Samik Choudhury', url: 'https://prosamik.com' }],
    generator: 'Next.js',
    keywords: ['GitHub', 'Markdown', 'Documentation', 'Blog', 'Technical Writing'],
    referrer: 'origin-when-cross-origin',
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: siteMetadata.siteUrl,
        siteName: siteMetadata.title,
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: siteMetadata.title,
        description: siteMetadata.description,
        creator: '@ProSamik'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    alternates: {
        canonical: siteMetadata.siteUrl,
    }
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            suppressHydrationWarning
            className={`${inter.className} bg-white dark:bg-dark-background text-zinc-900 dark:text-white transition-colors min-h-screen flex flex-col`}>
        <Providers>
            <ErrorBoundary>
                <Navigation/>
                <main className="container px-4 py-8 w-full mx-auto sm:max-w-screen-md md:max-w-screen-lg mt-8">
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