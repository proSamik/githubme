// components/GithubUrlForm.tsx
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export function GithubUrlForm() {
    const [url, setUrl] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        let pathSegments: string[];

        try {
            if (url.includes('github.com')) {
                // Handle full GitHub URLs or github.com/user/repo
                const cleanUrl = url.includes('https://') ? url : `https://${url}`;
                const githubUrl = new URL(cleanUrl);
                pathSegments = githubUrl.pathname.split('/').filter(Boolean);
            } else {
                // Handle direct path input (user/repo)
                pathSegments = url.split('/').filter(Boolean);
            }

            if (pathSegments.length < 2) {
                setError('Please enter a valid GitHub repository path (username/repo)');
                return;
            }

            // Construct new path
            const newPath = `/${pathSegments.join('/')}`;
            router.push(newPath);
        } catch {  // Removed unused 'error' parameter
            setError('Please enter a valid GitHub repository path\nExample: username/repo or github.com/username/repo');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                <h1 className="text-3xl font-bold mb-8 text-center">GitHub Me- Markdown Viewer</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="github-url"
                            className="block text-sm font-medium mb-2"
                        >
                            Enter GitHub Repository Path
                        </label>
                        <input
                            id="github-url"
                            type="text"
                            value={url}
                            onChange={(e) => {
                                setUrl(e.target.value);
                                setError(null);
                            }}
                            placeholder="username/repo or github.com/username/repo"
                            className={`w-full px-4 py-2 border rounded-md ${
                                error ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {error && (
                            <p className="mt-2 text-sm text-red-600">
                                {error}
                            </p>
                        )}
                        <p className="mt-2 text-sm text-gray-600">
                            Examples:
                            <br />
                            • username/repo
                            <br />
                            • github.com/username/repo
                            <br />
                            • github.com/username/repo/blob/main/file.md
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        View Content
                    </button>
                </form>
            </div>
        </div>
    );
}