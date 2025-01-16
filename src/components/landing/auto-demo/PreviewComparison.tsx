import React, { useState, useEffect } from 'react';
import { Code, Image, FileText } from 'lucide-react';
import ArticleContent from "@/components/article/ArticleContent";

export function PreviewComparison() {
    const [activeFeature, setActiveFeature] = useState('code');
    const [isEditing, setIsEditing] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const features = [
        {
            id: 'code',
            label: 'Code',
            icon: Code,
            markdown: `# Code Example

\`\`\`javascript
function greet(name) {
    return \`Hello, \${name}!\`;
}
\`\`\``,
            html: `
<h1>Code Example</h1>
<pre><code class="language-javascript">function greet(name) {
    return \`Hello, \${name}!\`;
}</code></pre>`
        },
        {
            id: 'diagram',
            label: 'Diagrams',
            icon: FileText,
            markdown: `# Mermaid Diagram Example

\`\`\`mermaid
graph TD
    A[Start] --> B[Process]
    B --> C[End]
\`\`\``,
            html: `
<h1>Mermaid Diagram Example</h1>
<pre><code class="language-mermaid">graph TD
    A[Start] --> B[Process]
    B --> C[End]</code></pre>`
        },
        {
            id: 'media',
            label: 'Media',
            icon: Image,
            markdown: `# Media Example

![GitHubMe Logo](/logo-crop.png)

## Table Example
| Header 1 | Header 2 |
|----------|----------|
| Content 1| Content 2|`,
            html: `
<h1>Media Example</h1>
<img src="/logo-crop.png" width="250" height="250" alt="GitHubMe Logo" style="background: black; padding: 10px"/>
<h2>Table Example</h2>
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Content 1</td>
            <td>Content 2</td>
        </tr>
    </tbody>
</table>`
        }
    ];

    const activeContent = features.find(f => f.id === activeFeature);

    return (
        <div className="w-full max-w-5xl mx-auto space-y-4">
            {/* Feature Toggle */}
            <div className="flex justify-center">
                <div className="bg-amber-100 dark:bg-amber-900/50 p-1 rounded-lg inline-flex">
                    {features.map(feature => (
                        <button
                            key={feature.id}
                            onClick={() => setActiveFeature(feature.id)}
                            className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                                activeFeature === feature.id
                                    ? 'bg-amber-500 dark:bg-amber-700 text-white'
                                    : 'text-amber-800 dark:text-amber-200'
                            }`}
                        >
                            <feature.icon size={16} />
                            <span className="hidden sm:inline">{feature.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile View Tabs */}
            {isMobile && (
                <div className="flex justify-center">
                    <div className="bg-gray-100 dark:bg-zinc-800 p-1 rounded-lg inline-flex">
                        <button
                            onClick={() => setIsEditing(true)}
                            className={`px-6 py-2 rounded-md transition-colors ${
                                isEditing
                                    ? 'bg-amber-500 dark:bg-amber-700 text-white'
                                    : 'text-gray-600 dark:text-gray-300'
                            }`}
                        >
                            Markdown
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className={`px-6 py-2 rounded-md transition-colors ${
                                !isEditing
                                    ? 'bg-amber-500 dark:bg-amber-700 text-white'
                                    : 'text-gray-600 dark:text-gray-300'
                            }`}
                        >
                            Preview
                        </button>
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                {/* Markdown Panel */}
                <div className={`${isMobile && !isEditing ? 'hidden' : ''} h-full`}>
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                        <div className="p-4 bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-sm text-gray-500">Markdown</span>
                            </div>
                        </div>
                        <div className="p-4 flex-grow overflow-auto">
                            <pre className="h-full w-full font-mono text-sm whitespace-pre-wrap text-gray-800 dark:text-gray-200">
                                {activeContent?.markdown}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Preview Panel */}
                <div className={`${isMobile && isEditing ? 'hidden' : ''} h-full`}>
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                        <div className="p-4 bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-sm text-gray-500">Preview</span>
                            </div>
                        </div>
                        <div className="p-4 flex-grow overflow-auto">
                            <ArticleContent content={activeContent?.html || ''} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreviewComparison;