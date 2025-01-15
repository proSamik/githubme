'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const QuickSearch = () => {
    const [url, setUrl] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let pathSegments: string[];

        try {
            if (url.includes('github.com')) {
                const cleanUrl = url.includes('https://') ? url : `https://${url}`;
                const githubUrl = new URL(cleanUrl);
                pathSegments = githubUrl.pathname.split('/').filter(Boolean);
            } else {
                pathSegments = url.split('/').filter(Boolean);
            }

            if (pathSegments.length >= 2) {
                const newPath = `/${pathSegments.join('/')}`;
                router.push(newPath);
                setUrl('');
            }
        } catch {
            return;
        }
    };

    return (
        <div className="py-4 shadow-md">
            <div className="container mx-auto px-4 max-w-4xl">
                <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Search your markdown"
                        className="flex-1 px-4 py-2 rounded-md border-2 border-amber-200
                                 focus:ring-2 focus:ring-amber-200 focus:border-amber-300
                                 transition-all dark:bg-zinc-700 dark:text-white
                                 dark:border-zinc-600 dark:focus:border-amber-300"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-md bg-amber-500
                                 text-white hover:bg-amber-600
                                 transition-all font-medium"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default QuickSearch;