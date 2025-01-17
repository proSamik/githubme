// DiagramsPreviewComponent.tsx
import React from "react";
import {PreviewLayout, PreviewProps} from "@/components/landing/auto-demo/PreviewLayout";

export const DiagramsPreviewComponent: React.FC<PreviewProps> = ({ isEditing, isMobile }) => {
    const diagramContent = {
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
    };

    return (
        <>
            <div className="h-[calc(100vh-6rem)] overflow-auto">
                <PreviewLayout
                    isEditing={isEditing}
                    isMobile={isMobile}
                    content={diagramContent}
                />
            </div>

        </>
    );
};
