// app/page.tsx
import { LandingPage } from '@/components/landing/LandingPage';
import React from "react";
import { Metadata } from 'next';

const siteMetadata = {
    title: 'GitHubMe',
    siteUrl: 'https://githubme.com',
    logoUrl: 'https://githubme.com/logo-crop.png',
    ogImageUrl: 'https://githubme.com/og-image.png'
};

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'GitHubMe',
        description: 'Transform GitHub Markdown README files into Technical Blog, Product Documentation or Personal Notes',
        alternates: {
            canonical: '/'
        },
        openGraph: {
            title: 'GitHubMe - Transform Your Markdown Content',
            description: 'Transform GitHub Markdown README files into Technical Blog, Product Documentation or Personal Notes',
            url: '/',
            images: [{
                url: siteMetadata.ogImageUrl,
                width: 1200,
                height: 630,
                alt: 'GitHubMe - Transform Your Markdown Content'
            }]
        },
        twitter: {
            card: 'summary_large_image',
            title: 'GitHubMe - Transform Your Markdown Content',
            description: 'Transform GitHub Markdown README files into Technical Blog, Product Documentation or Personal Notes'
        },
        other: {
            'application/ld+json': JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "GitHubMe",
                "applicationCategory": "DeveloperApplication",
                "abstract": "Transform GitHub Markdown README files into Technical Blog, Product Documentation or Personal Notes with built-in SEO support.",
                "creator": {
                    "@type": "Person",
                    "name": "Samik Choudhury",
                    "url": "https://prosamik.com"
                },
                "datePublished": "2024-01-18",
                "dateModified": "2024-01-18",
                "softwareVersion": "1.0",
                "operatingSystem": "Any",
                "image": {
                    "@type": "ImageObject",
                    "url": siteMetadata.ogImageUrl,
                    "caption": "GitHubMe - Transform Your Markdown Content"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/OnlineOnly"
                },
                "downloadUrl": siteMetadata.siteUrl,
                "url": siteMetadata.siteUrl
            })
        }
    };
}

export default function Page() {
    return (
        <>
            <LandingPage />
        </>
    );
}