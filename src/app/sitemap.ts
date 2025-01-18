// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://githubme.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://githubme.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }
        // Dynamic routes cannot be added here as they're generated on-demand
    ];
}