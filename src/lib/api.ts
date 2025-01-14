import { config } from '@/config/api';
import { BackendResponse } from '@/types';

export async function fetchContent(url: string): Promise<BackendResponse> {
    const response = await fetch(`${config.baseUrl}${config.apiEndpoints.md}?url=${encodeURIComponent(url)}`);

    if (!response.ok) {
        throw new Error('Failed to fetch content');
    }

    return response.json();
}