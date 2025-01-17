'use client';

import { AutoDemoSection } from '@/components/landing/AutoDemoSection';
import { GithubUrlForm } from '@/components/landing/GithubUrlForm';
import HeroSection from "@/components/landing/HeroSection";

interface LandingPageProps {
    error?: string;
}

export function LandingPage({ error }: LandingPageProps) {

    return (
        <div className="flex flex-col items-center px-4 pb-4">
            <div className="pt-4" id="hero-section">
                <HeroSection />
            </div>

            <div className="max-h-screen mb-20" id="auto-demo-section">
                <AutoDemoSection />
            </div>

            <div className="max-h-screen" id="github-url-form">
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

export default LandingPage;