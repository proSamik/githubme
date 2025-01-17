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

#### Hover to export and copy

\`\`\`javascript
// JavaScript Hello World
function greet() {
    console.log("Hello, World!");
}
greet();
\`\`\`

\`\`\`bash
# Clone repository
git clone git@github.com:proSamik/githubme.git
\`\`\`

\`\`\`plaintext
# Environment Variables
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp
API_KEY=your-secret-key
NODE_ENV=development
\`\`\``,
            html: `
<h1>Code Example</h1>
<h4>Hover to export and copy</h4>
<pre><code class="language-javascript">// JavaScript Hello World
function greet() {
    console.log("Hello, World!");
}
greet();</code></pre>

<pre><code class="language-bash"># Clone repository
git clone git@github.com:proSamik/githubme.git</code></pre>

<pre><code class="language-plaintext"># Environment Variables
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp
API_KEY=your-secret-key
NODE_ENV=development</code></pre>`
        },
        {
            id: 'diagram',
            label: 'Diagrams',
            icon: FileText,
            markdown: `# Mermaid Diagram Example

\`\`\`mermaid
graph TD
    A[Start] --> B[Load Data]
    A --> C[Initialize]
    B --> D[Process]
    C --> D
    D --> E[Validate]
    D --> F[Cache]
    E --> G[Store]
    F --> G
    G --> H[End]
\`\`\`

\`\`\`mermaid
graph LR
    A[Start] --> B[Load Data]
    A --> C[Initialize]
    B --> D[Process]
    C --> D
    D --> E[Validate]
    D --> F[Cache]
    E --> G[Store]
    F --> G
    G --> H[End]
\`\`\``,
            html: `
<h1>Mermaid Diagram Example</h1>
<pre><code class="language-mermaid">graph TD
    A[Start] --> B[Load Data]
    A --> C[Initialize]
    B --> D[Process]
    C --> D
    D --> E[Validate]
    D --> F[Cache]
    E --> G[Store]
    F --> G
    G --> H[End]</code></pre>
<pre><code class="language-mermaid">graph LR
    A[Start] --> B[Load Data]
    A --> C[Initialize]
    B --> D[Process]
    C --> D
    D --> E[Validate]
    D --> F[Cache]
    E --> G[Store]
    F --> G
    G --> H[End]</code></pre>`
        },
        {
            id: 'media',
            label: 'Media',
            icon: Image,
            markdown: `# Media Example

## Logo
![GitHubMe Logo](/logo-crop.png)

## SVG Example
<svg width="200" height="200">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

## Animated GIF Example
![GIF](https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif)

## Table Example
| ID | Name | Role | Status | Team | Experience |
|-----|------|------|--------|------|------------|
| 1 | John Doe | Developer | Active | Alpha | Senior |
| 2 | Jane Smith | Designer | Active | Beta | Mid-level |
| 3 | Bob Wilson | Manager | Away | Gamma | Lead |
| 4 | Alice Brown | DevOps | Active | Delta | Senior |
| 5 | Tom Clark | QA | Offline | Epsilon | Junior |`,
            html: `
<h1>Media Example</h1>

<h2>Logo</h2>
<img src="/logo-crop.png" width="250" height="250" alt="GitHubMe Logo" style="background: black; padding: 10px"/>

<h2>SVG Example</h2>
<svg width="200" height="200">
  <circle cx="100" cy="100" r="90" stroke="#D97708" stroke-width="3" fill="#D97708" />
</svg>

<h2>Animated GIF Example</h2>
<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="250" height="250" alt="Cat GIF"/>

<h2>Table Example</h2>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Team</th>
            <th>Experience</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Developer</td>
            <td>Active</td>
            <td>Alpha</td>
            <td>Senior</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Designer</td>
            <td>Active</td>
            <td>Beta</td>
            <td>Mid-level</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bob Wilson</td>
            <td>Manager</td>
            <td>Away</td>
            <td>Gamma</td>
            <td>Lead</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Alice Brown</td>
            <td>DevOps</td>
            <td>Active</td>
            <td>Delta</td>
            <td>Senior</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Tom Clark</td>
            <td>QA</td>
            <td>Offline</td>
            <td>Epsilon</td>
            <td>Junior</td>
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