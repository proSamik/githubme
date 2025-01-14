import { BackendResponse } from '@/types';

interface Props {
    metadata: BackendResponse['metadata'];
}

export function ArticleFooter({ metadata }: Props) {
    return (
        <footer className="mt-8 pt-6 border-t">
            <div className="flex justify-between items-center text-sm text-gray-600">
                <a
                    href={metadata.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    View on GitHub
                </a>
                <span>Last updated: {new Date(metadata.lastUpdated).toLocaleDateString()}</span>
            </div>
        </footer>
    );
}