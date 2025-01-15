// src/components/Navigation.tsx
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-dark-background border-b-2 border-amber-200 dark:border-amber-700/30 z-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 text-transparent bg-clip-text">
                        GithubMe
                    </Link>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                                Home
                            </Link>
                            <Link href="/about" className="text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                                About
                            </Link>
                        </div>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}