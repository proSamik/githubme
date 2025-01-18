// MediaPreviewComponent.tsx

import {PreviewLayout, PreviewProps} from "@/components/landing/auto-demo/PreviewLayout";
import React from "react";

export const MediaPreviewComponent: React.FC<PreviewProps> = ({ isEditing, isMobile }) => {
    const mediaContent = {
        markdown: `# Media Example

## Static Image Example
![GitHubMe Logo](/logo-crop.png)

## SVG Example
<svg width="200" height="200">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

## GIF Example
![GIF](https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif)`,
        html: `
<h1>Media Example</h1>

<h2>Static Image Example</h2>
<img 
  src="/logo-crop.png" 
  alt="GitHubMe Logo" 
  style="
    background: black; 
    padding: 10px;
    max-width: 250px;
    height: auto;
  "
/>

<h2>SVG Example</h2>
<svg width="200" height="200">
  <circle cx="100" cy="100" r="90" stroke="#D97708" stroke-width="3" fill="#D97708" />
</svg>

<h2>GIF Example</h2>
<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="250" height="250" alt="Cat GIF"/>
`
    };

    return (
        <>
            <div className="h-[calc(100vh-6rem)] overflow-auto">
                <PreviewLayout
                    isEditing={isEditing}
                    isMobile={isMobile}
                    content={mediaContent}
                />
            </div>

        </>
    );
};
