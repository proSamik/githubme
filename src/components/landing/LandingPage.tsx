'use client';

import React, { Suspense, lazy } from 'react';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { SkeletonLoader } from '@/components/common/SkeletonLoader';
import HeroSection from "@/components/landing/HeroSection";

// Lazy load components that are not immediately visible
const AutoDemoSection = lazy(() => import('@/components/landing/AutoDemoSection'));
const GithubUrlForm = lazy(() => import('@/components/landing/GithubUrlForm'));

interface LandingPageProps {
    error?: string;
}

const DemoSectionFallback = () => (
    <div className="w-full max-w-5xl px-4">
        <SkeletonLoader type="rectangle" className="mb-4" />
        <div className="grid grid-cols-2 gap-4">
            <SkeletonLoader count={3} />
            <SkeletonLoader count={3} />
        </div>
    </div>
);

const FormSectionFallback = () => (
    <div className="w-full max-w-screen-lg px-4">
        <SkeletonLoader type="title" className="mb-4" />
        <SkeletonLoader type="text" count={2} className="max-w-md mx-auto" />
    </div>
);

export function LandingPage({ error }: LandingPageProps) {
    return (
        <main className="flex flex-col items-center px-4 pb-4" role="main">
            <div className="pt-4" id="hero-section">
                <ErrorBoundary>
                    <HeroSection />
                </ErrorBoundary>
            </div>

            <div className="max-h-screen mt-10 mb-20 md:mb-5" id="auto-demo-section">
                <ErrorBoundary>
                    <Suspense fallback={<DemoSectionFallback />}>
                        <AutoDemoSection />
                    </Suspense>
                </ErrorBoundary>
            </div>

            <div className="" id="github-url-form">
                <ErrorBoundary>
                    {error && (
                        <div className="text-center text-red-600 mb-6" role="alert" aria-live="polite">
                            <p className="font-medium">{error}</p>
                        </div>
                    )}
                    <Suspense fallback={<FormSectionFallback />}>
                        <GithubUrlForm />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </main>
    );
}

export default LandingPage;