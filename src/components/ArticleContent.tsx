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
                border-none outline-none shadow-none

                // Headers with gradient and explicitly no decoration
                prose-h1:text-zinc-800 dark:prose-h1:text-zinc-200
                prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:no-underline prose-h1:text-4xl
                prose-h1:decoration-0 prose-h1:border-0

                // Links with amber styling
                prose-a:text-amber-700 hover:prose-a:text-amber-500
                dark:prose-a:text-amber-400 hover:prose-a:dark:text-amber-300

                // Images and media
                prose-img:mx-auto prose-img:block prose-img:rounded-lg
                prose-img:shadow-md hover:prose-img:shadow-lg

                // Code blocks with amber accents
                prose-code:text-amber-700 prose-code:bg-amber-50
                prose-code:dark:bg-amber-900/10 prose-code:dark:text-amber-300

                // Blockquotes with amber border
                prose-blockquote:border-amber-300 prose-blockquote:text-amber-800
                dark:prose-blockquote:border-amber-700 dark:prose-blockquote:text-amber-200

                // Lists with amber bullets
                prose-li:marker:text-zinc-800 dark:prose-li:marker:text-zinc-200
                prose-li:text-zinc-800 dark:prose-li:text-zinc-200

                // Tables with amber accents
                [&_table]:border-amber-200 dark:[&_table]:border-amber-800
                [&_th]:text-amber-800 dark:[&_th]:text-amber-200
                [&_tr]:border-amber-200 dark:[&_tr]:border-amber-800


                // Table layout
                [&_table]:block [&_table]:overflow-x-auto [&_table]:w-full [&_table]:px-3

                // Iframe handling
                [&_iframe]:max-w-full [&_iframe]:h-auto [&_iframe]:aspect-video [&_iframe]:object-contain

                // Transitions for interactive elements
                [&_a]:transition-colors [&_img]:transition-shadow

                // Remove horizontal rules
                prose-hr:hidden
                "


            />
        </article>
    );
}