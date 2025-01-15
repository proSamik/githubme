'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export function GithubUrlForm() {
    const [url, setUrl] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsFetching(true);

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
                setIsFetching(false);
                return;
            }

            // Construct new path
            const newPath = `/${pathSegments.join('/')}`;
            router.push(newPath);
        } catch {
            setError('Please enter a valid GitHub repository path\nExample: username/repo or github.com/username/repo');
            setIsFetching(false);
        }
    };

    return (
        // Gradient background container
        <div className="flex items-center justify-center p-4">
            {/* Card container with golden border */}
            <div className="w-full max-w-md dark:bg-zinc-800 rounded-xl shadow-xl p-8">
                {/* Gradient title */}
                <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-yellow-500 text-transparent bg-clip-text">
                    GitHub Me- A Stylish Markdown Viewer
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="github-url"
                            className="block text-sm font-medium mb-2 text-amber-800"
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
                            placeholder="github.com/username/filepath"
                            className={`w-full px-4 py-2 rounded-md border-2 focus:ring-2 focus:ring-amber-200 focus:border-amber-300 transition-all dark:bg-white dark:text-dark-background ${
                                error ? 'border-red-500' : 'border-amber-200'
                            }`}
                        />
                        {error && (
                            <p className="mt-2 text-sm text-red-600">
                                {error}
                            </p>
                        )}
                        <p className="mt-2 text-sm text-amber-700">
                            Examples:
                            <br/>
                            • username/repo
                            <br/>
                            • github.com/username/repo
                            <br/>
                            • github.com/username/repo/blob/main/file.md
                            <br/>
                            • https://github.com/username/repo/blob/main/file.md
                        </p>
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-2 px-4 rounded-md transition-all ${
                            isFetching
                                ? 'bg-amber-300 cursor-not-allowed'
                                : 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600 shadow-md hover:shadow-lg'
                        }`}
                        disabled={isFetching}
                    >
                        {isFetching ? 'Fetching...' : 'View Content'}
                    </button>
                </form>
            </div>
        </div>
    );
}