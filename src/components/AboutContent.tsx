// components/AboutContent.tsx
'use client';

import React, { useState } from 'react';
import GitHubMeSection from '@/components/GitHubMeSection';
import CreatorSection from '@/components/CreatorSection';

export default function AboutContent() {
    const [showCreator, setShowCreator] = useState(false);

    return (
        <div className="w-full max-w-4xl">
            {/* Toggle Section */}
            <div className="flex justify-center mb-12">
                <div className="bg-amber-100 dark:bg-amber-900/50 p-1 rounded-lg inline-flex">
                    <button
                        onClick={() => setShowCreator(false)}
                        className={`px-6 py-2 rounded-md transition-colors ${
                            !showCreator
                                ? 'bg-amber-500 dark:bg-amber-700 text-white'
                                : 'text-amber-800 dark:text-amber-200'
                        }`}
                    >
                        About GitHubMe
                    </button>
                    <button
                        onClick={() => setShowCreator(true)}
                        className={`px-6 py-2 rounded-md transition-colors ${
                            showCreator
                                ? 'bg-amber-500 dark:bg-amber-700 text-white'
                                : 'text-amber-800 dark:text-amber-200'
                        }`}
                    >
                        About Creator
                    </button>
                </div>
            </div>

            {!showCreator ? <GitHubMeSection /> : <CreatorSection />}
        </div>
    );
}