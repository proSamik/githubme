// app/[...path]/page.tsx
import {fetchContent} from "@/lib/api";
import {ArticleContent} from "@/components/ArticleContent";
import ArticleHeader from "@/components/ArticleHeader";
import {ArticleFooter} from "@/components/ArticleFooter";
import { ErrorDisplay } from "@/components/ErrorDisplay";

interface Props {
    params: Promise<{
        path: string[];
    }>;
}

export default async function Page({ params: paramsPromise }: Props) {
    const params = await paramsPromise;
    const { path } = params;

    const [username, repo, ...remainingPath] = path;

    let githubUrl: string;
    if (remainingPath.length > 0) {
        githubUrl = `https://github.com/${username}/${repo}/${remainingPath.join('/')}`;
    } else {
        githubUrl = `https://github.com/${username}/${repo}`;
    }

    try {
        const data = await fetchContent(githubUrl);
        return (
            <>
                <ArticleHeader
                    metadata={data.metadata}
                    currentUrl={`/${path.join('/')}`}
                />
                <ArticleContent content={data.content} />
                <ArticleFooter metadata={data.metadata} />
            </>
        );
    } catch {
        return <ErrorDisplay />;
    }
}