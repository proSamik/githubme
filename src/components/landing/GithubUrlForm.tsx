'use client';
import React from 'react';
import QuickSearch from "@/components/QuickSearch";
import { FileCode } from 'lucide-react';

export function GithubUrlForm() {
    return (
        <div className="w-full max-w-screen-lg px-4">
            {/* Main container with gradient background */}
            <div className="flex flex-col items-center space-y-8">
                {/* Title section */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 text-transparent bg-clip-text">
                        GitHub Me
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        A Stylish Markdown Viewer
                    </p>
                </div>

                {/* Search section */}
                <div className="w-full" id="github-url-form">
                    <QuickSearch />
                </div>

                {/* Examples section */}
                <div className="w-full max-w-4xl mx-auto">
                    <div className="bg-white dark:bg-dark-background shadow-lg rounded-xl p-6 space-y-4">
                        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                            <FileCode size={20} />
                            <h2 className="text-lg font-semibold">Example Formats</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Basic Format */}
                            <div className="space-y-2">
                                <h3 className="font-medium text-amber-700 dark:text-amber-300">
                                    Basic Format
                                </h3>
                                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 overflow-x-auto">
                                    <code className="text-sm whitespace-nowrap">username/repo</code>
                                </div>
                            </div>

                            {/* GitHub URL */}
                            <div className="space-y-2">
                                <h3 className="font-medium text-amber-700 dark:text-amber-300">
                                    GitHub URL
                                </h3>
                                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 overflow-x-auto">
                                    <code className="text-sm whitespace-nowrap">github.com/username/repo</code>
                                </div>
                            </div>

                            {/* Full Repository Path */}
                            <div className="space-y-2">
                                <h3 className="font-medium text-amber-700 dark:text-amber-300">
                                    Repository with File
                                </h3>
                                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 overflow-x-auto">
                                    <code className="text-sm whitespace-nowrap">github.com/username/repo/blob/main/file.md</code>
                                </div>
                            </div>

                            {/* Fetch README.md */}
                            <div className="space-y-2">
                                <h3 className="font-medium text-amber-700 dark:text-amber-300">
                                    Fetch README.md
                                </h3>
                                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 overflow-x-auto">
                                    <code className="text-sm whitespace-nowrap">https://github.com/username/repo</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}