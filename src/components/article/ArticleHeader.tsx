'use client';

import React from 'react';
import Image from 'next/image';
import { BackendResponse } from '@/types';
import SocialShareButtons from './SocialShareButtons';

interface ArticleHeaderProps {
    metadata: BackendResponse['metadata'];
    currentUrl: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
                                                                metadata,
                                                                currentUrl
                                                            }) => {
    const githubProfileUrl = `https://github.com/${metadata.author}`;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }).replace(',', '');
    };

    const AuthorInfo = () => (
        <div className="flex flex-col items-center space-y-4">
            <div className="flex">
                <div className="bg-white dark:bg-dark-background
                              rounded-full flex items-center space-x-4
                             ">
                    <a
                        href={githubProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 group"
                    >
                        <div className="relative">
                            <Image
                                src={`https://github.com/${metadata.author}.png`}
                                alt={metadata.author}
                                className="rounded-full ring-2 ring-amber-600 dark:ring-amber-400
                                         group-hover:ring-amber-500 transition-all"
                                width={36}
                                height={36}
                            />
                        </div>
                        <div>
                            <div className="font-medium text-gray-900 dark:text-white
                                          group-hover:text-amber-600 dark:group-hover:text-amber-400
                                          transition-colors">
                                {metadata.author}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                {formatDate(metadata.lastUpdated)}
                            </div>
                        </div>
                    </a>
                    <a
                        href={githubProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 text-sm bg-white dark:bg-dark-background
                                 shadow-md hover:shadow-lg dark:shadow-amber-200/50
                                 rounded-full hover:bg-amber-50 dark:hover:bg-amber-900/10
                                 transition-all duration-200 border border-amber-200
                                 dark:border-amber-800 text-amber-600 dark:text-amber-400"
                    >
                        Follow
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <header className="w-full max-w-screen-lg mx-auto px-4 mb-8">
            {/* Mobile layout */}
            <div className="sm:hidden space-y-6">
                <div className="flex flex-col items-center gap-6">
                    <AuthorInfo />
                    <SocialShareButtons
                        shareUrl={currentUrl}
                        shareTitle={metadata.title}
                    />
                </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden sm:flex justify-between items-center gap-6">
                <AuthorInfo />
                <SocialShareButtons
                    shareUrl={currentUrl}
                    shareTitle={metadata.title}
                />
            </div>
        </header>
    );
};

export default ArticleHeader;