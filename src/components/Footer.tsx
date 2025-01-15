// src/components/Footer.tsx
export default function Footer() {
    return (
        <footer className="border-t-2 border-amber-200 dark:border-amber-700/30 mt-auto">
            <div className="container mx-auto px-4 max-w-4xl py-6">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                            © {new Date().getFullYear()} GithubMe. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com.prosamik"
                            className="text-sm text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}