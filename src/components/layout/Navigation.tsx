import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '@/components/layout/ThemeToggle';

export default function Navigation() {
    return (
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-dark-background z-50 flex justify-center">
            <nav
                className="flex w-full max-w-4xl px-3 border-b border-l border-r border-amber-200 dark:border-amber-700 rounded-b-lg">
                <div className="flex justify-between items-center h-16 w-full">
                    <Link
                        href="/"
                        className="relative w-16 h-16"
                    >
                        <Image
                            src="/logo-crop.png"
                            alt="GithubMe Logo"
                            fill
                            priority
                            className="object-contain invert dark:invert-0"
                        />
                    </Link>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-4">
                            <Link href="/public"
                                  className="text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                                Home
                            </Link>
                            <Link href="/about"
                                  className="text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                                About
                            </Link>
                        </div>
                        <ThemeToggle/>
                    </div>
                </div>
            </nav>
        </div>
    );
}