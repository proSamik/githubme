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
        <div className="
                w-96
                sm:w-[620px]
                md:w-[600px]
                lg:w-[740px]
                justify-center
                px-4 sm:px-0">
            <div className="container mx-auto px-4 ">
                <form onSubmit={handleSubmit} className="relative flex items-center">
                    <div className="absolute left-3 text-gray-400 dark:text-gray-500">
                        <Search size={20}/>
                    </div>
                    <div className="relative flex w-full rounded-lg border border-amber-200 dark:border-amber-700">
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Markdown Path"
                            className="w-full pl-10 pr-24 py-2 rounded-lg
                                     bg-transparent
                                     focus:outline-none focus:ring-2 focus:ring-amber-200
                                     dark:text-white border-0"
                            disabled={isFetching}
                        />
                        <button
                            type="submit"
                            className={`absolute right-0 h-full px-6 rounded-r-lg
                                     transition-all font-medium border-l border-amber-200 
                                     dark:border-amber-700
                                     ${isFetching
                                ? 'bg-amber-300 dark:bg-amber-800 cursor-not-allowed text-amber-700 dark:text-amber-300'
                                : 'bg-amber-500 text-white hover:bg-amber-600 dark:hover:bg-amber-600'}`}
                            disabled={isFetching}
                        >
                            {isFetching ? 'Converting...' : 'Convert'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuickSearch;