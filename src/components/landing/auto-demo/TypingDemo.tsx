import React, { useEffect, useState, useMemo } from 'react';
import { CiGlobe } from 'react-icons/ci';

export function TypingDemo() {
    const [typedText, setTypedText] = useState('');
    const [isTransformed, setIsTransformed] = useState(false);
    const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const demoUrls = useMemo(() => [
        'github.com/path-to-md',
        'github.com/username/repo',
        'github.com/username/repo/blob/branch/file.md',
        'github.com/username/repo/blob/branch/dir/file.md',
    ], []); // Empty dependency array since these URLs are static

    useEffect(() => {
        let currentIndex = 0;
        let transformTimeout: number | undefined;
        let resetTimeout: number | undefined;
        let fadeTimeout: number | undefined;

        const typeInterval = setInterval(() => {
            const currentUrl = demoUrls[currentUrlIndex];

            if (currentIndex <= currentUrl.length) {
                setTypedText(currentUrl.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typeInterval);
                transformTimeout = window.setTimeout(() => {
                    setIsTransformed(true);
                    setTypedText(currentUrl.replace('github', 'githubme'));

                    resetTimeout = window.setTimeout(() => {
                        setIsVisible(false);  // Start fade out

                        fadeTimeout = window.setTimeout(() => {
                            setTypedText('');
                            setIsTransformed(false);
                            currentIndex = 0;
                            setCurrentUrlIndex((prev) => (prev + 1) % demoUrls.length);
                            setIsVisible(true);  // Start fade in
                        }, 300); // Wait for fade out to complete
                    }, 2000);
                }, 1000);
            }
        }, 50);

        return () => {
            clearInterval(typeInterval);
            if (transformTimeout) clearTimeout(transformTimeout);
            if (resetTimeout) clearTimeout(resetTimeout);
            if (fadeTimeout) clearTimeout(fadeTimeout);
        };
    }, [currentUrlIndex, demoUrls]); // demoUrls is now memoized, so it won't cause unnecessary re-renders

    return (
        <div className="w-96 sm:w-[620px] md:w-[600px] lg:w-[740px] justify-center px-4 sm:px-0">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
                {/* Browser-like header */}
                <div className="p-2 sm:p-3 bg-gray-100 dark:bg-zinc-900 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"/>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"/>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"/>
                    </div>
                    <div className="flex items-center bg-white dark:bg-zinc-800 rounded px-2 sm:px-3 py-1 overflow-x-auto">
                        <div className="flex min-w-0">
                            <span className="text-gray-400 flex-shrink-0">
                                <CiGlobe className="w-3 h-3 sm:w-4 sm:h-4"/>
                            </span>
                            <div className="flex-1 ml-2 font-mono text-xs sm:text-sm whitespace-nowrap">
                                <div className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                                    <span className="text-gray-400">https://</span>
                                    {isTransformed ? (
                                        <>
                                            <span>github</span>
                                            <span className="text-amber-500 dark:text-amber-400 transition-colors duration-300">me</span>
                                            <span>{typedText.slice(8)}</span>
                                        </>
                                    ) : (
                                        <span>{typedText}</span>
                                    )}
                                    <span className="animate-pulse">|</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CTA instead of loading animation */}
                <div className="p-3 sm:p-4 flex justify-center">
                    <a
                        href="https://github.com/proSamik/README-template"
                        target="_blank"
                        className="text-amber-500 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-500 font-medium transition-colors duration-200"
                    >
                        Try on GitHub →
                    </a>
                </div>
            </div>
        </div>
    );
}