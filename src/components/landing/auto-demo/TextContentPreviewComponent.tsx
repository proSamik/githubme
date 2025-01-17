// TextContentPreviewComponent.tsx

import { PreviewLayout, PreviewProps } from "@/components/landing/auto-demo/PreviewLayout";
import React from "react";

export const TextContentPreviewComponent: React.FC<PreviewProps> = ({ isEditing, isMobile }) => {
    const textContent = {
        markdown: `# Text Content Examples

## Markdown Support in GitHubMe
This application supports various types of markdown including:
- GitHub Flavored Markdown (GFM)
- Pure Markdown
- Inline HTML and CSS

## Text Formatting
- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- ~~Strikethrough~~ for outdated content
- ***Combined bold and italic*** for strong emphasis
- <u>Underlined text</u> using HTML

## Block Quotes
> **Key Takeaway:** Markdown helps you structure content effectively.
> 
> You can create nested blockquotes:
>> This is a nested quote
>> - With bullet points
>> - And formatting

## Code Examples
Inline code: \`const greeting = "Hello World";\`

## Table Example
| ID | Name | Role | Status | Team | Experience |
|-----|------|------|--------|------|------------|
| 1 | John Doe | Developer | Active | Alpha | Senior |
| 2 | Jane Smith | Designer | Active | Beta | Mid-level |
| 3 | Bob Wilson | Manager | Away | Gamma | Lead |
| 4 | Alice Brown | DevOps | Active | Delta | Senior |
| 5 | Tom Clark | QA | Offline | Epsilon | Junior |

## Lists
### Unordered List
- First level item
  - Second level item
    - Third level item
  - Another second level
- Back to first level

### Ordered List
1. First step
   1. Sub-step one
   2. Sub-step two
2. Second step
   - Mixed with unordered
   - Another bullet point`,
        html: `
<h1>Text Content Examples</h1>
<h2>Markdown Support in GitHubMe</h2>
<p>This application supports various types of markdown including:</p>
<ul>
    <li>GitHub Flavored Markdown (GFM)</li>
    <li>Pure Markdown</li>
    <li>Inline HTML and CSS</li>
</ul>

<h2>Text Formatting</h2>
<ul>
    <li><strong>Bold text</strong> for emphasis</li>
    <li><em>Italic text</em> for subtle emphasis</li>
    <li><del>Strikethrough</del> for outdated content</li>
    <li><strong><em>Combined bold and italic</em></strong> for strong emphasis</li>
    <li><u>Underlined text</u> using HTML</li>
</ul>

<h2>Block Quotes</h2>
<blockquote>
    <p><strong>Key Takeaway:</strong> Markdown helps you structure content effectively.</p>
    <p>You can create nested blockquotes:</p>
    <blockquote>
        <p>This is a nested quote</p>
        <ul>
            <li>With bullet points</li>
            <li>And formatting</li>
        </ul>
    </blockquote>
</blockquote>

<h2>Code Examples</h2>
<p>Inline code: <code>const greeting = "Hello World";</code></p>

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
</table>

<h2>Lists</h2>
<h3>Unordered List</h3>
<ul>
    <li>First level item
        <ul>
            <li>Second level item
                <ul>
                    <li>Third level item</li>
                </ul>
            </li>
            <li>Another second level</li>
        </ul>
    </li>
    <li>Back to first level</li>
</ul>

<h3>Ordered List</h3>
<ol>
    <li>First step
        <ol>
            <li>Sub-step one</li>
            <li>Sub-step two</li>
        </ol>
    </li>
    <li>Second step
        <ul>
            <li>Mixed with unordered</li>
            <li>Another bullet point</li>
        </ul>
    </li>
</ol>`
    };

    return (
        <div className="h-[calc(100vh-6rem)] overflow-auto">
            <PreviewLayout
                isEditing={isEditing}
                isMobile={isMobile}
                content={textContent}
            />
        </div>
    );
};