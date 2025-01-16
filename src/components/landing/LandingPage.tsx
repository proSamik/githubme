'use client';

import React, { useEffect, useRef } from 'react';
import { AutoDemoSection } from '@/components/landing/AutoDemoSection';
import { GithubUrlForm } from '@/components/landing/GithubUrlForm';
import HeroSection from "@/components/landing/HeroSection";

interface LandingPageProps {
    error?: string;
}

export function LandingPage({ error }: LandingPageProps) {
    const lastScrollTimeRef = useRef(0);
    const scrollCooldown = 1000; // 1 second cooldown between scrolls

    const scrollToSection = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offset = window.innerHeight * 0.25; // 1/4 of viewport height
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getCurrentSection = () => {
        const sections = ['hero-section', 'auto-demo-section', 'github-url-form'];
        const viewportMiddle = window.innerHeight / 2;

        for (const sectionId of sections) {
            const rect = document.getElementById(sectionId)?.getBoundingClientRect();
            if (rect && rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
                return sectionId;
            }
        }
        return sections[0]; // Default to hero section
    };

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            const currentTime = Date.now();
            if (currentTime - lastScrollTimeRef.current < scrollCooldown) {
                return;
            }

            const currentSection = getCurrentSection();
            const sections = ['hero-section', 'auto-demo-section', 'github-url-form'];
            const currentIndex = sections.indexOf(currentSection);

            if (event.deltaY > 0 && currentIndex < sections.length - 1) {
                // Scrolling down
                scrollToSection(sections[currentIndex + 1]);
                lastScrollTimeRef.current = currentTime;
            } else if (event.deltaY < 0 && currentIndex > 0) {
                // Scrolling up
                if (currentIndex === 1) {
                    scrollToTop();
                } else {
                    scrollToSection(sections[currentIndex - 1]);
                }
                lastScrollTimeRef.current = currentTime;
            }
        };

        window.addEventListener('wheel', handleWheel);
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className="flex flex-col items-center px-4 pb-4">
            <div className="pt-8" id="hero-section">
                <HeroSection />
            </div>

            <div className="pt-4 mb-12" id="auto-demo-section">
                <AutoDemoSection />
            </div>

            <div className="pt-8" id="github-url-form">
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