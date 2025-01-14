// components/ArticleContent.tsx
'use client';
import { useRef } from 'react';

interface Props {
    content: string;
}

export function ArticleContent({ content }: Props) {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={contentRef}
            className="prose prose-slate dark:prose-invert max-w-none
            dark:text-dark-text
            prose-img:mx-auto prose-img:block
            prose-headings:dark:text-dark-text
            prose-p:dark:text-dark-text
            prose-strong:dark:text-dark-text
            prose-a:dark:text-dark-accent hover:prose-a:dark:text-dark-accent/80
            prose-code:dark:bg-dark-background-soft prose-code:dark:text-dark-text
            prose-pre:dark:bg-dark-background-soft
            prose-blockquote:dark:border-dark-border prose-blockquote:dark:text-dark-text-secondary
            prose-li:dark:text-dark-text
            prose-hr:dark:border-dark-border
            [&_table]:block [&_table]:overflow-x-auto [&_table]:w-full
            [&_iframe]:w-full [&_iframe]:aspect-video"  // Added table styles
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}