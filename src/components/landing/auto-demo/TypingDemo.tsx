// components/landing/auto-demo/TypingDemo.tsx
'use client';
import React, { useEffect, useState } from 'react';

export function TypingDemo() {
    const [typedText, setTypedText] = useState('');
    const [isTransformed, setIsTransformed] = useState(false);
    const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

    const demoUrls = [
        'github.com/username/repo',
        'github.com/username/repo/blob/main/file.md',
        'https://github.com/username/repo/blob/main/file.md'
    ];

    useEffect(() => {
        let currentIndex = 0;
        let transformTimeout: NodeJS.Timeout;
        let resetTimeout: NodeJS.Timeout;

        const typeInterval = setInterval(() => {
            const currentUrl = demoUrls[currentUrlIndex];

            if (currentIndex <= currentUrl.length) {
                setTypedText(currentUrl.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typeInterval);
                // Transform github to githubme after typing is complete
                transformTimeout = setTimeout(() => {
                    setIsTransformed(true);
                    setTypedText(currentUrl.replace('github', 'githubme'));

                    // Reset after showing transformed URL
                    resetTimeout = setTimeout(() => {
                        setTypedText('');
                        setIsTransformed(false);
                        currentIndex = 0;
                        setCurrentUrlIndex((prev) => (prev + 1) % demoUrls.length);
                    }, 2000);
                }, 1000);
            }
        }, 50);

        return () => {
            clearInterval(typeInterval);
            clearTimeout(transformTimeout);
            clearTimeout(resetTimeout);
        };
    }, [currentUrlIndex]);

    return (
        <div className="w-full max-w-2xl">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
                {/* Browser-like header */}
                <div className="p-3 bg-gray-100 dark:bg-zinc-900 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex items-center bg-white dark:bg-zinc-800 rounded px-3 py-1">
                        <span className="text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <div className="flex-1 ml-2 font-mono text-sm">
                            {typedText.startsWith('https://') ? '' :
                                typedText.startsWith('github') || typedText.startsWith('githubme') ? 'https://' : ''}
                            <span className={`${isTransformed ? 'text-amber-500 dark:text-amber-400' : ''} transition-colors duration-300`}>
                                {typedText}
                            </span>
                            <span className="animate-pulse">|</span>
                        </div>
                    </div>
                </div>
                {/* Loading animation */}
                <div className="p-4">
                    <div className="space-y-2">
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
