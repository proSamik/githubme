import { useEffect, useRef, useState } from 'react';
import { processYouTubeLinks } from "@/utils/contentProcessors/youtubeProcessor";
import { processCodeBlocks } from "@/utils/contentProcessors/codeBlockProcessor";
import { processSVGs } from "@/utils/contentProcessors/svgProcessor";
import { useCodeBlockSyntaxHighlighter } from "@/hooks/useCodeBlockSyntaxHighlighter";
import { useMermaidProcessor } from '@/hooks/useMermaidProcessor';
import {processCenteredMedia} from "@/utils/contentProcessors/mediaCenterProcessor";

export default function useProcessedContent(content: string) {
    const [processedContent, setProcessedContent] = useState<string>("");
    const contentRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Syntax highlighter for code blocks
    useCodeBlockSyntaxHighlighter(contentRef, [processedContent, String(isMobile)]);

    useMermaidProcessor(contentRef, processedContent);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    useEffect(() => {
        const processContent = () => {
            let processedHtml = content;
            processedHtml = processYouTubeLinks(processedHtml);
            processedHtml = processCodeBlocks(processedHtml);
            processedHtml = processSVGs(processedHtml);
            processedHtml = processCenteredMedia(processedHtml);
            setProcessedContent(processedHtml);
        };

        processContent();
    }, [content]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1090);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { processedContent, contentRef, isMobile, shareUrl };
}
