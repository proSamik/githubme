// app/[...path]/page.tsx
import { fetchContent, trackPageView } from "@/lib/api";
import { ErrorDisplay } from "@/components/layout/ErrorDisplay";
import React from "react";
import Article from "@/components/article/Article";
import { Metadata } from 'next';

interface Props {
    params: Promise<{
        path: string[];
    }>;
}

// Site metadata configuration
const siteMetadata = {
    title: 'GithubMe',
    siteUrl: 'https://githubme.com',
    defaultDescription: 'Explore and analyze GitHub profiles with GithubMe'
};

// Text extraction function for server-side
function extractTextFromHTML(html: string) {
    // Since we're on the server side, we'll do basic HTML stripping
    return html.replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

async function getPageData(path: string[]) {
    const [username, repo, ...remainingPath] = path;
    const githubUrl = remainingPath.length > 0
        ? `https://github.com/${username}/${repo}/${remainingPath.join('/')}`
        : `https://github.com/${username}/${repo}`;

    try {
        const data = await fetchContent(githubUrl);
        return { data, githubUrl };
    } catch {
        return null;
    }
}

export async function generateMetadata({ params: paramsPromise }: Props): Promise<Metadata> {
    const params = await paramsPromise;
    const { path } = params;
    const [username, repo] = path;

    const pageData = await getPageData(path);

    if (!pageData) {
        return {
            title: 'Repository Not Found',
            description: 'The requested GitHub repository could not be found',
        };
    }

    const { data, githubUrl } = pageData;

    // Extract text from content if available
    const articleText = data.content ? extractTextFromHTML(data.content) : '';

    // Create JSON-LD structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.metadata.title,
        "description": data.metadata.description || siteMetadata.defaultDescription,
        "author": {
            "@type": "Person",
            "name": data.metadata.author,
            "url": `https://github.com/${data.metadata.author}`,
        },
        "dateModified": data.metadata.lastUpdated,
        "publisher": {
            "@type": "Organization",
            "name": siteMetadata.title,
            "logo": {
                "@type": "ImageObject",
                "url": `${siteMetadata.siteUrl}/favicon.svg`,
            },
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteMetadata.siteUrl}/${path.join('/')}`,
        },
        "articleBody": articleText,
        "url": githubUrl,
        "datePublished": data.metadata.lastUpdated,
    };

    return {
        title: `${data.metadata.title} (${data.metadata.author})`,
        description: data.metadata.description || `Exploring ${username}/${repo} repository`,
        openGraph: {
            title: `${data.metadata.title} (${data.metadata.author})`,
            description: data.metadata.description || `Exploring ${username}/${repo} repository`,
            url: `${siteMetadata.siteUrl}/${path.join('/')}`,
            type: 'article',
            publishedTime: data.metadata.lastUpdated,
            modifiedTime: data.metadata.lastUpdated,
            authors: [`https://github.com/${data.metadata.author}`],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${data.metadata.title} (${data.metadata.author})`,
            description: data.metadata.description,
        },
        alternates: {
            canonical: `/${data.metadata.author}` // This will become https://githubme.com/username/repo
        },
        other: {
            'application/ld+json': JSON.stringify(jsonLd)
        }
    };
}

export default async function Page({ params: paramsPromise }: Props) {
    const params = await paramsPromise;
    const { path } = params;

    void trackPageView('githubme_markdown');

    const pageData = await getPageData(path);

    if (!pageData) {
        return <ErrorDisplay />;
    }

    return (
        <>
            <Article
                data={pageData.data}
                currentUrl={`githubme.com/${path.join('/')}`}
            />
        </>
    );
}