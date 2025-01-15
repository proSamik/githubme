// components/landing/LandingPage.tsx
import React from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { AutoDemoSection } from '@/components/landing/AutoDemoSection';
import { GithubUrlForm } from '@/components/landing/GithubUrlForm';

interface LandingPageProps {
    error?: string;
}

export function LandingPage({ error }: LandingPageProps) {
    return (
        <div className="min-h-screen flex flex-col items-center px-4 py-8 space-y-12">
            <HeroSection />
            <AutoDemoSection />
            <div className="w-full max-w-xl">
                {error && (
                    <div className="text-center text-red-600 mb-6">
                        <p className="font-medium">{error}</p>
                    </div>
                )}
                <GithubUrlForm />
            </div>
        </div>
    );
}
