// app/[...path]/page.tsx
import {fetchContent, trackPageView} from "@/lib/api";
import { ErrorDisplay } from "@/components/layout/ErrorDisplay";
import React from "react";
import Article from "@/components/article/Article";

interface Props {
    params: Promise<{
        path: string[];
    }>;
}

export default async function Page({ params: paramsPromise }: Props) {
    const params = await paramsPromise;
    const { path } = params;

    // Track page view
    void trackPageView('githubme_markdown');

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
                <Article
                    data={data}
                    currentUrl={`githubme.com/${path.join('/')}`}
                />
            </>
        );
    } catch {
        return <ErrorDisplay />;
    }
}