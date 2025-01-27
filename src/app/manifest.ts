// app/manifest.ts
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'GitHubMe',
        short_name: 'GitHubMe',
        description: 'Transform Boring GitHub Markdown README files into Technical Blog, Product Documentation or Personal Notes',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '48x48',
                type: 'image/x-icon',
            },
            {
                src: '/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                src: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png'
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png'
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            }
        ],
        orientation: 'portrait',
        categories: ['productivity', 'developer tools'],
        prefer_related_applications: false,
        shortcuts: [
            {
                name: 'About GitHubMe',
                short_name: 'About',
                description: 'Learn about GitHubMe',
                url: '/about',
                icons: [{ src: '/logo.png', sizes: '96x96' }]
            }
        ]
    };
}