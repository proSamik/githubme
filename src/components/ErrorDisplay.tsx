// components/ErrorDisplay.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export function ErrorDisplay() {
    const [mounted, setMounted] = useState(false);

    // Handle mounting to prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Don't render anything until mounted
    if (!mounted) {
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-amber-200 dark:border-amber-700">
                <div className="mb-6 text-amber-500 dark:text-amber-400">
                    <svg
                        className="mx-auto h-16 w-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-amber-600 to-yellow-500 dark:from-amber-400 dark:to-yellow-300 text-transparent bg-clip-text">
                    Error Loading Content
                </h2>
                <p className="text-amber-800 dark:text-amber-200 text-center mb-6">
                    Please check the URL and try again
                </p>
                <Link
                    href="/"
                    className="w-full py-2 px-4 rounded-md transition-all bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-amber-600 dark:to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-600 dark:hover:from-amber-700 dark:hover:to-yellow-700 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    Return Home
                </Link>
            </div>
        </div>
    );
}