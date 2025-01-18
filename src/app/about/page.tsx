// app/about/page.tsx
import React from 'react';
import AboutContent from '@/components/about/AboutContent';
import {trackPageView} from "@/lib/api";

export default function AboutPage() {

    // Track page view
    void trackPageView('githubme_about');

    return (
        <main className="flex min-h-screen flex-col items-center  px-4">
            <AboutContent />
        </main>
    );
}