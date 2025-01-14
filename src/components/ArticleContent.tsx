// components/ArticleContent.tsx
'use client';
import useProcessedContent from "@/hooks/useProcessedContent";

interface Props {
    content: string;
}

export function ArticleContent({ content }: Props) {
    const { processedContent, contentRef } = useProcessedContent(content);

    return (
        <article className="prose prose-lg dark:prose-invert w-full">
            <div
                ref={contentRef}
                dangerouslySetInnerHTML={{__html: processedContent}}
                className="github-markdown
                prose prose-slate dark:prose-invert max-w-none
                dark:text-dark-text
                prose-img:mx-auto prose-img:block
                prose-headings:dark:text-dark-text
                prose-p:dark:text-dark-text
                prose-strong:dark:text-dark-text
                prose-a:dark:text-dark-text hover:prose-a:dark:text-dark-accent/80
                prose-code:dark:bg-dark-background-soft prose-code:dark:text-dark-text
                prose-blockquote:dark:border-dark-border prose-blockquote:dark:text-dark-text-secondary
                prose-li:dark:text-dark-text
                prose-hr:dark:border-dark-border
                [&_table]:block [&_table]:overflow-x-auto [&_table]:w-full [&_table]:px-3
                [&_iframe]:max-w-full &_iframe]:h-auto [&_iframe]:aspect-video [&_iframe]:object-contain"
            />
        </article>
    );
}