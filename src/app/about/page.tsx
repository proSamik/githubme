// app/about/page.tsx
import React from 'react';
import AboutContent from '@/components/AboutContent';

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center  px-4">
            <AboutContent />
        </main>
    );
}