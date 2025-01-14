// app/page.tsx
import { ArticleHeader } from '@/components/ArticleHeader';
import { ArticleContent } from '@/components/ArticleContent';
import { ArticleFooter } from '@/components/ArticleFooter';
import { fetchContent } from '@/lib/api';
import { GithubUrlForm } from '@/components/GithubUrlForm';

export default async function Page({
                                       searchParams: { url },
                                   }: {
    searchParams: { url?: string };
}) {
    if (!url) {
        return <GithubUrlForm />;
    }

    try {
        const data = await fetchContent(url);
        return (
            <>
                <ArticleHeader
                    metadata={data.metadata}
                    currentUrl={url}
                />
                <ArticleContent content={data.content} />
                <ArticleFooter metadata={data.metadata} />
            </>
        );
    } catch (error) {
        console.log(error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center text-red-600">
                    <h2 className="text-2xl font-bold mb-4">Error loading content</h2>
                    <p>Please check the URL and try again</p>
                    <GithubUrlForm />
                </div>
            </div>
        );
    }
}