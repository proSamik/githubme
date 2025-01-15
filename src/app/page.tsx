// src/app/page.tsx

import { ArticleHeader } from '@/components/article/ArticleHeader';
import { ArticleContent } from '@/components/article/ArticleContent';
import { ArticleFooter } from '@/components/article/ArticleFooter';
import { fetchContent } from '@/lib/api';
import { LandingPage } from '@/components/landing/LandingPage';

interface PageProps {
    searchParams: Promise<{ url?: string }>;
}

export default async function Page({ searchParams: searchParamsPromise }: PageProps) {
    const searchParams = await searchParamsPromise;
    const { url } = searchParams;

    if (!url) {
        return <LandingPage />;
    }

    try {
        const data = await fetchContent(url);
        return (
            <>
                <ArticleHeader metadata={data.metadata} currentUrl={url} />
                <ArticleContent content={data.content} />
                <ArticleFooter metadata={data.metadata} />
            </>
        );
    } catch {
        return <LandingPage error="Error loading content. Please check the URL and try again." />;
    }
}
