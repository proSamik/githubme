// components/ArticleFooter.tsx
import { BackendResponse } from '@/types';
import {FaGithub} from "react-icons/fa";

interface Props {
    metadata: BackendResponse['metadata'];
}

export default function ArticleFooter({ metadata }: Props) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }).replace(',', '');
    };

    return (
        <footer className="mt-8
        pt-6
        border-t border-amber-200 dark:border-amber-700/30
        ">
            <div className="
            flex flex-col
            sm:flex-row
            justify-center items-center
            gap-8 text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">
                    Last updated: {formatDate(metadata.lastUpdated)}
                </span>

                <a
                    href={metadata.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/10
                    rounded-lg text-amber-700 dark:text-amber-300 hover:bg-amber-100
                    dark:hover:bg-amber-900/20 transition-colors"
                >
                    <FaGithub size={16}/>
                    <div className="flex flex-col">
                        <span>View Repository</span>
                    </div>
                </a>

            </div>
        </footer>
    );
}