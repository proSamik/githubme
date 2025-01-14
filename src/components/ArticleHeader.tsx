// components/ArticleHeader.tsx
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

    const AuthorInfo = () => (
        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mt-7">
            <a
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
            >
                <Image
                    src={`https://github.com/${metadata.author}.png`}
                    alt={metadata.author}
                    className="rounded-full"
                    width={48}
                    height={48}
                />
                <div>
                    <div className="font-medium dark:text-white">
                        {metadata.author}
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-dark-text-secondary">
                        {new Date(metadata.lastUpdated).toLocaleDateString()}
                    </div>
                </div>
            </a>
            <a
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100"
            >
            Follow
        </a>
</div>
);

    return (
        <header className="mb-8 w-full">
            {/* Mobile layout */}
            <div className="md:hidden space-y-4">
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="flex-grow">
                        <AuthorInfo />
                    </div>
                    <div className="w-full sm:w-auto">
                        <SocialShareButtons
                            shareUrl={currentUrl}
                            shareTitle={metadata.title}
                        />
                    </div>
                </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:flex justify-between items-center">
                <AuthorInfo />
                <div className="flex items-center">
                    <SocialShareButtons
                        shareUrl={currentUrl}
                        shareTitle={metadata.title}
                    />
                </div>
            </div>
        </header>
    );
};

export default ArticleHeader;