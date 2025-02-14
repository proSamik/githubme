// src/lib/api.ts

import { config } from '@/config/api';
import { BackendResponse } from '@/types';
import { getCachedData } from '@/utils/cache/nodeCache';

interface FeedbackRequest {
    email: string;
    message: string;
}

interface FeedbackResponse {
    success: string;
    message: string;
}

export async function fetchContent(url: string): Promise<BackendResponse> {
    const cacheKey = `content-${url}`;
    
    return getCachedData(cacheKey, async () => {
        const response = await fetch(`${config.baseUrl}${config.apiEndpoints.md}?url=${encodeURIComponent(url)}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch content');
        }
        
        return response.json();
    });
}

export async function trackPageView(pageName: string): Promise<void> {
    try {
        await fetch(`${config.baseUrl}${config.apiEndpoints.analytics}?page=${encodeURIComponent(pageName)}`, {
            method: 'POST',
            // Since it's fire and forget, we don't need to handle the response
        });
    } catch {
    }
}

export async function sendFeedback(data: FeedbackRequest): Promise<FeedbackResponse> {
    const response = await fetch(`${config.baseUrl}${config.apiEndpoints.feedback}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to submit feedback');
    }

    return response.json();
}