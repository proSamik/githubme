// app/[...path]/page.tsx
import {fetchContent} from "@/lib/api";
import {ArticleContent} from "@/components/ArticleContent";
import ArticleHeader from "@/components/ArticleHeader";
import {ArticleFooter} from "@/components/ArticleFooter";
import Link from "next/link";

interface Props {
    params: {
        path: string[];
    };
}

export default async function Page({ params }: Props) {
    const { path } = params;

    // Handle the GitHub URL construction
    // First two segments are username and repo
    const [username, repo, ...remainingPath] = path;

    // Construct GitHub URL
    let githubUrl: string;
    if (remainingPath.length > 0) {
        // If there's a path, it's a specific file
        githubUrl = `https://github.com/${username}/${repo}/${remainingPath.join('/')}`;
    } else {
        // If no path, it's the repo root (README.md)
        githubUrl = `https://github.com/${username}/${repo}`;
    }

    try {
        const data = await fetchContent(githubUrl);
        return (
            <>
                <ArticleHeader
                    metadata={data.metadata}
                    currentUrl={`/${path.join('/')}`}
                />
                <ArticleContent content={data.content} />
                <ArticleFooter metadata={data.metadata} />
            </>
        );
    } catch (error) {
        console.error(error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center text-red-600">
                    <h2 className="text-2xl font-bold mb-4">Error loading content</h2>
                    <p>Please check the URL and try again</p>
                    <Link
                        href="/"
                        className="mt-4 inline-block text-blue-500 hover:underline"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
        );
    }
}