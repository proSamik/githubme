// components/landing/HeroSection.tsx
'use client';
import React from 'react';
import Image from 'next/image';

export function HeroSection() {
    return (
        <div className="w-full max-w-2xl text-center space-y-4">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-amber-50 dark:bg-amber-900/40">
                <Image
                    src="/logo.png"
                    alt="GithubMe Logo"
                    fill
                    priority
                    className="object-contain invert dark:invert-0 p-2"
                />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-amber-500 dark:from-amber-400 dark:to-amber-200 bg-clip-text text-transparent">
                Transform Your GitHub READMEs
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
                Turn markdown files into beautiful blog posts in seconds
            </p>
        </div>
    );
}
