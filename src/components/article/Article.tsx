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
            <QuickSearch />
            <ArticleHeader
                metadata={data.metadata}
                currentUrl={currentUrl}
            />
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