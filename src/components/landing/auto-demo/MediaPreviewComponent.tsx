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
