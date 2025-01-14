export interface BackendResponse {
    content: string;  // HTML string
    metadata: {
        title: string;
        repository: string;
        lastUpdated: string;
        author: string;
        description: string;
    };
}