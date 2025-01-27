import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FeatureGrid from '@/components/about/FeatureGrid';

const AnimatedTitle = () => {
    const text = "A Stylish Markdown Viewer";
    return (
        <div className="flex justify-center">
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className={`
                        text-[24px] lg:text-3xl md:text-3xl sm:text-3xl font-bold
                        transition-colors duration-500 ease-in-out
                        ${char === ' ' ? 'mr-2' : ''}
                    `}
                    style={{
                        animation: `colorWaveCycle 3s ease-in-out infinite`,
                        animationDelay: `${index * 50}ms`,
                        color: '#78350f'
                    }}
                >
                    {char}
                </span>
            ))}
        </div>
    );
};

export default function GitHubMeSection() {
    return (
        <div className="flex flex-col items-center w-full max-w-screen-lg space-y-10 animate-fadeIn">
            {/* Logo and Title Section */}
            <div className="flex-1 flex flex-col items-center space-y-6">
                <div className="relative w-32 h-32">
                    <Image
                        src="/logo-crop.png"
                        alt="GithubMe Logo"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain invert dark:invert-0"
                    />
                </div>
                <AnimatedTitle />
            </div>

            {/* Story Section */}
            <div className="w-full max-w-4xl">
                <div className="
                    bg-white dark:bg-dark-background
                    shadow-lg dark:shadow-amber-200 dark:shadow-sm
                    px-8 py-6 rounded-lg
                ">
                    <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-400 mb-4 text-center">
                        The Story
                    </h2>
                    <div className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-300">
                            GitHubMe is a brainchild of {' '}
                            <Link href="https://prosamik.com"
                                  className="text-amber-600 dark:text-amber-400 hover:underline font-medium">
                                prosamik.com
                            </Link>
                            . The idea emerges from experiencing common challenges in managing personal blogs - dealing with hosting costs, handling databases, and maintaining multiple README files with basic layouts that don&apos;t capture their essence.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            By leveraging GitHub as a database for markdown data and image containers, I built a modern UI that not only enhances the visual appeal but also adds powerful features like code export capabilities and syntax highlighting. This approach eliminates the need for traditional blog hosting and database management.
                        </p>
                    </div>
                </div>
            </div>

            {/* Disclaimer Section */}
            <div className="w-full max-w-4xl">
                <div className="
                    bg-white dark:bg-dark-background
                    shadow-lg dark:shadow-amber-200 dark:shadow-sm
                    px-8 py-6 rounded-lg
                ">
                    <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-400 mb-4 text-center">
                        Disclaimer
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                        This project provides enhanced presentation and functionality for publicly available markdown content using the GitHub API. 
                        This service is not affiliated with, endorsed by, or associated with GitHub, Inc. and github.com.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <FeatureGrid />

            {/* Call to Action - Commented out as in original */}
            {/*<div className="text-center">
                <Link
                    href="https://prosamik.com/projects"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transform transition-transform hover:scale-105"
                >
                    View More Similar Projects
                </Link>
            </div>*/}
        </div>
    );
}