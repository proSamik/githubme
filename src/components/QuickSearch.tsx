'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Search } from 'lucide-react';

const QuickSearch = () => {
    const [url, setUrl] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

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

                if (newPath !== pathname) {
                    setIsFetching(true);
                }

                router.push(newPath);
            }
        } catch {
            setIsFetching(false);
            return;
        }
    };

    return (
        <div className="py-4 my-3">
            <div className="container mx-auto px-4 max-w-4xl">
                <form onSubmit={handleSubmit} className="relative flex items-center">
                    <div className="absolute left-3 text-gray-400">
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Convert your markdown"
                        className="flex-1 pl-10 pr-24 py-2 rounded-md border-2 border-amber-200
                                 focus:ring-2 focus:ring-amber-200 focus:border-amber-300
                                 transition-all dark:bg-zinc-700 dark:text-white
                                 dark:border-zinc-600 dark:focus:border-amber-300"
                        disabled={isFetching}
                    />
                    <button
                        type="submit"
                        className={`absolute right-0 h-full px-6 rounded-r-md transition-all font-medium
                                 ${isFetching
                            ? 'bg-amber-300 cursor-not-allowed'
                            : 'bg-amber-500 text-white hover:bg-amber-600'}`}
                        disabled={isFetching}
                    >
                        {isFetching ? 'Converting...' : 'Convert'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default QuickSearch;