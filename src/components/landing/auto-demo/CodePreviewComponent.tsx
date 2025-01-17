// CodePreviewComponent.tsx
import React from 'react';
import {PreviewLayout, PreviewProps} from "@/components/landing/auto-demo/PreviewLayout";

export const CodePreviewComponent: React.FC<PreviewProps> = ({ isEditing, isMobile }) => {
    const codeContent = {
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
    };

    return (
        <>
            <div className="h-[calc(100vh-6rem)] overflow-auto">
                <PreviewLayout
                    isEditing={isEditing}
                    isMobile={isMobile}
                    content={codeContent}
                />
            </div>

        </>

    );
};

