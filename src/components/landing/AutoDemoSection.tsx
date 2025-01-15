// components/landing/AutoDemoSection.tsx
'use client';
import React, { useState } from 'react';

export function AutoDemoSection() {
    const [showGithub, setShowGithub] = useState(false);

    const demoMarkdown = `# Project Title
## Features
- Feature 1: Amazing stuff
- Feature 2: Even better things

\`\`\`javascript
const demo = "Hello World";
console.log(demo);
\`\`\`

![Demo Image](demo.png)
`;

    return (
        <div className="w-full max-w-2xl space-y-6">
            {/* Toggle Section */}
            <div className="flex justify-center">
                <div className="bg-amber-100 dark:bg-amber-900/50 p-1 rounded-lg inline-flex">
                    <button
                        onClick={() => setShowGithub(false)}
                        className={`px-6 py-2 rounded-md transition-colors ${
                            !showGithub
                                ? 'bg-amber-500 dark:bg-amber-700 text-white'
                                : 'text-amber-800 dark:text-amber-200'
                        }`}
                    >
                        GitHubMe
                    </button>
                    <button
                        onClick={() => setShowGithub(true)}
                        className={`px-6 py-2 rounded-md transition-colors ${
                            showGithub
                                ? 'bg-amber-500 dark:bg-amber-700 text-white'
                                : 'text-amber-800 dark:text-amber-200'
                        }`}
                    >
                        GitHub
                    </button>
                </div>
            </div>

            {/* Preview Cards */}
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
                {showGithub ? (
                    // GitHub Style
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="p-4 bg-gray-50 dark:bg-zinc-900">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                        </div>
                        <div className="p-6 font-mono text-sm overflow-x-auto">
                            <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">
                                {demoMarkdown}
                            </pre>
                        </div>
                    </div>
                ) : (
                    // GitHubMe Style
                    <div>
                        <div className="p-6 prose dark:prose-invert max-w-none">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Project Title</h1>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Features</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li className="text-gray-700 dark:text-gray-300">Feature 1: Amazing stuff</li>
                                <li className="text-gray-700 dark:text-gray-300">Feature 2: Even better things</li>
                            </ul>
                            <div className="mt-4 bg-gray-100 dark:bg-zinc-900 rounded-lg p-4">
                                <pre className="text-sm">
                                    <code className="language-javascript">
                                        <span className="text-blue-600 dark:text-blue-400">const</span>{' '}
                                        <span className="text-purple-600 dark:text-purple-400">demo</span> ={' '}
                                        <span className="text-green-600 dark:text-green-400">"Hello World"</span>;{'\n'}
                                        <span className="text-gray-600">console</span>.
                                        <span className="text-blue-600 dark:text-blue-400">log</span>(demo);
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}