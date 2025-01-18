# GitHub Me - A Stylish Markdown Viewer

A modern web application that renders GitHub markdown files with a clean, responsive interface. Built with Next.js 13+ and TypeScript, featuring both light and dark modes.

## Features

- 🎯 Render any GitHub markdown file directly using its URL
- 🌓 Light/Dark mode support
- 📱 Responsive design
- 🔗 Social Sharing buttons
- 📝 Clean typography with proper code highlighting
- 📊 Responsive tables with horizontal scrolling
- 🖼️ Centered image display

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 20+
- npm/yarn/pnpm
- [Backend Server](https://github.com/proSamik/prosamik-golang-server) running

## Installation

1. Clone the repository:
```bash
git clone git@github.com:proSamik/githubme.git
cd githubme
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:10000  # Your backend server URL
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Usage

1. Visit the homepage
2. Enter a GitHub URL in any of these formats:
   - `github.com/username/repo`
   - `https://github.com/username/repo`
   - `username/repo`
   - Full path to specific file: `github.com/username/repo/blob/main/path/to/file.md`

3. The application will render the markdown content with proper styling

## Development

The project structure:
```
src/
├── app/
│   ├── layout.tsx       # Root layout with theme support
│   └── page.tsx         # Main page with URL input
├── components/
│   ├── ArticleContent.tsx    # Markdown renderer
│   ├── ArticleFooter.tsx     # Article footer
│   ├── ArticleHeader.tsx     # Article header with author info
│   ├── ErrorBoundary.tsx     # Error handling
│   ├── GithubUrlForm.tsx     # URL input form
│   ├── SocialShareButtons.tsx # Social sharing
│   └── ThemeToggle.tsx       # Light/Dark mode toggle
├── config/
│   └── api.ts           # API configuration
├── lib/
│   └── api.ts           # API utilities
└── types/
    └── index.ts         # TypeScript interfaces
```

## Backend Server

This project requires the [prosamik-golang-server](https://github.com/proSamik/prosamik-golang-server) to be running. Follow the installation instructions in the backend repository to set it up.

## Disclaimer

This application is an independent tool and is not affiliated with, endorsed by, or associated with **GitHub, Inc.** The use of the term **GitHub** is solely for descriptive purposes to convey the functionality of the tool, which interacts with public data available through the **GitHub API**.

The creators of this project disclaim any responsibility for misuse of the **GitHub API** or violations of GitHub’s terms of service. Users are advised to adhere to GitHub’s API rate limits and usage policies.

## Technologies Used

- Next.js 15+
- TypeScript
- Tailwind CSS
- @tailwindcss/typography
- lucide-react
- react-icons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Legal

- [Terms of Service](./terms-of-service.md)
