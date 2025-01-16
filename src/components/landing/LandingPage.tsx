'use client';

import React, { useEffect, useRef } from 'react';
import { AutoDemoSection } from '@/components/landing/AutoDemoSection';
import { GithubUrlForm } from '@/components/landing/GithubUrlForm';
import HeroSection from "@/components/landing/HeroSection";

interface LandingPageProps {
    error?: string;
}

export function LandingPage({ error }: LandingPageProps) {
    const autoDemoRef = useRef<HTMLDivElement>(null);
    const githubFormRef = useRef<HTMLDivElement>(null);
    const lastScrollTimeRef = useRef(0);
    const scrollCooldown = 1000; // 1 second cooldown between scrolls

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            const currentTime = Date.now();

            // Check if enough time has passed since last scroll
            if (currentTime - lastScrollTimeRef.current < scrollCooldown) {
                return;
            }

            if (event.deltaY > 0) { // Scrolling down
                const heroRect = document.getElementById('hero-section')?.getBoundingClientRect();
                const autoDemoRect = autoDemoRef.current?.getBoundingClientRect();
                const githubFormRect = githubFormRef.current?.getBoundingClientRect();

                if (heroRect && heroRect.bottom > 0) {
                    // When in hero section, scroll to auto demo
                    autoDemoRef.current?.scrollIntoView({ behavior: 'smooth' });
                    lastScrollTimeRef.current = currentTime;
                } else if (autoDemoRect && autoDemoRect.bottom > 0 && githubFormRect && githubFormRect.bottom > window.innerHeight) {
                    // When in auto demo section and GitHub form is below viewport, scroll to gitHub form
                    githubFormRef.current?.scrollIntoView({ behavior: 'smooth' });
                    lastScrollTimeRef.current = currentTime;
                }
            }
        };

        window.addEventListener('wheel', handleWheel);
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className="flex flex-col items-center px-4 pb-4">
            <div className="min-h-screen flex items-start" id="hero-section">
                <HeroSection />
            </div>

            <div className="min-h-screen flex items-center" ref={autoDemoRef}>
                <AutoDemoSection />
            </div>

            <div className="min-h-screen flex items-center" ref={githubFormRef} id="github-url-form">
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