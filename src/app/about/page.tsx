// app/about/page.tsx
import React from 'react';
import AboutContent from '@/components/about/AboutContent';
import {trackPageView} from "@/lib/api";
import { Metadata } from 'next';

const siteMetadata = {
    title: 'GitHubMe',
    siteUrl: 'https://githubme.com',
    logoUrl: 'https://githubme.com/logo-crop.png',
    ogImageUrl: 'https://githubme.com/og-image.png'
};

const features = [
    'GitHub Flavored Markdown (GFM) Support',
    'Mermaid.js Diagram Rendering',
    'SVG Rendering',
    'Inline HTML & CSS Support',
    'Code Copy Functionality',
    'Screenshot Generation',
    'Syntax Highlighting',
    'Responsive Design',
    'Dark/Light Theme',
    'Smart Tables',
    'Social Sharing'
];

const jsonLd = {
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
        "url": "https://githubme.com/og-image.png",
        "caption": "GitHubMe - Transform Your Markdown Content"
    },
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/OnlineOnly"
    },
    "featureList": features,
    "downloadUrl": "https://githubme.com",
    "url": "https://githubme.com",
    "permissions": "requires JavaScript, requires HTML5",
    "requirements": "Modern web browser with JavaScript enabled",
    "applicationSubCategory": "Markdown Converter",
    "releaseNotes": "Transform your boring GitHub Markdown README files into amazing Technical Blogs, Product Documentation, or Personal Notes with built-in SEO support."
};

export const metadata: Metadata = {
    title: 'About',
    description: 'Transform GitHub Markdown README files into Technical Blog, Product Documentation or Personal Notes with built-in SEO support',
    openGraph: {
        title: 'About GitHubMe',
        description: 'Transform GitHub Markdown README files into Technical Blog, Product Documentation or Personal Notes with built-in SEO support',
        url: 'https://githubme.com/about',
        type: 'website',
        siteName: 'GitHubMe',
        images: [{
            url: siteMetadata.ogImageUrl,
            width: 1200,
            height: 630,
            alt: 'GitHubMe - Transform Your Markdown Content'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About GitHubMe',
        description: 'Transform GitHub Markdown README files into Technical Blog, Product Documentation or Personal Notes with built-in SEO support',
    },
    other: {
        'application/ld+json': JSON.stringify(jsonLd)
    }
};

export default async function AboutPage() {
    void trackPageView('githubme_about');

    return (
        <main className="flex min-h-screen flex-col items-center px-4">
            <AboutContent />
        </main>
    );
}