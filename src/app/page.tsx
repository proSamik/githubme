// src/app/page.tsx
import {fetchContent, trackPageView} from '@/lib/api';
import { LandingPage } from '@/components/landing/LandingPage';
import React from "react";
import Article from "@/components/article/Article";

interface PageProps {
    searchParams: Promise<{ url?: string }>;
}

export default async function Page({ searchParams: searchParamsPromise }: PageProps) {
    const searchParams = await searchParamsPromise;
    const { url } = searchParams;

    // Track page view
    void trackPageView('githubme_home');

    if (!url) {
        return (
            <>
                <LandingPage />
            </>
        );
    }

    try {
        const data = await fetchContent(url);
        return (
            <>
                <Article
                    data={data}
                    currentUrl={url}
                />
            </>
        );
    } catch {
        return(
            <>
                <LandingPage error="Error loading content. Please check the URL and try again." />
            </>
        );
    }
}
