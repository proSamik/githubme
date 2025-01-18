// config/api.ts
export const config = {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:10000',
    port: process.env.NEXT_PUBLIC_PORT || 10000,
    apiEndpoints: {
        md: '/md',
        analytics: '/analytics',
        feedback: '/feedback?site=githubme',
    }
};