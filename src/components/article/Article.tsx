'use client';

import React from 'react';
import QuickSearch from '@/components/QuickSearch';
import ArticleHeader from '@/components/article/ArticleHeader';
import ArticleContent from '@/components/article/ArticleContent';
import ArticleFooter from '@/components/article/ArticleFooter';
import { BackendResponse } from '@/types'; // Adjust the import path as needed

interface ArticleData {
    metadata: BackendResponse['metadata'];
    content: string;
}

interface ArticleProps {
    data: ArticleData;
    currentUrl: string;
}

const Article: React.FC<ArticleProps> = ({ data, currentUrl }) => {
    return (
        <>
            <div className="mt-4 mb-6
            w-full
            max-w-[350px]
            sm:max-w-screen-md
            md:max-w-screen-lg
            flex justify-center
            mx-auto
            ">
                <QuickSearch/>
            </div>
            <div className="px-2
            w-full
            mx-auto
            max-w-[350px]
            sm:max-w-screen-md
            md:max-w-screen-lg
            flex justify-center
            ">
                <ArticleHeader
                    metadata={data.metadata}
                    currentUrl={currentUrl}
                />
            </div>
            <ArticleContent
                content={data.content}
            />
            <ArticleFooter
                metadata={data.metadata}
            />
        </>
    );
};

export default Article;