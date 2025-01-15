// components/GitHubMeSection.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FeatureGrid from '@/components/about/FeatureGrid';

export default function GitHubMeSection() {
    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="text-center flex flex-col items-center">
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
                <p className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-amber-500 dark:from-amber-400 dark:to-amber-200 bg-clip-text text-transparent">
                    A Stylish Markdown Viewer
                </p>
            </div>

            {/* Origin Story Section */}
            <div className="not-prose max-w-none">
                <div className="
                    p-6
                    bg-gradient-to-r from-amber-50 to-amber-100
                    dark:from-amber-900/40 dark:to-amber-800/60
                    rounded-lg border border-amber-200 dark:border-amber-700
                    transition-all duration-300
                    hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600
                    dark:hover:from-amber-900/50 dark:hover:to-amber-800/70
                ">
                    <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mb-2 flex justify-center">
                    The Story
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        GitHubMe is a brainchild of {' '}
                        <Link href="https://prosamik.com" className="text-amber-600 dark:text-amber-400 hover:underline">
                            prosamik.com
                        </Link>
                        . The idea emerges from experiencing common challenges in managing personal blogs - dealing with hosting costs, handling databases, and maintaining multiple README files with basic layouts that don't capture their essence. I took on the challenge of transforming these basic layouts into something visually appealing and functional.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                        By leveraging GitHub as a database for markdown data and image containers, I built a modern UI that not only enhances the visual appeal but also adds powerful features like code export capabilities and syntax highlighting. This approach eliminates the need for traditional blog hosting and database management.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <FeatureGrid />

            {/* Call to Action */}
            {/*<div className="text-center">*/}
            {/*    <Link*/}
            {/*        href="https://prosamik.com/projects"*/}
            {/*        className="inline-block px-8 py-3 bg-amber-500 dark:bg-amber-700 text-white rounded-lg hover:bg-amber-600 dark:hover:bg-amber-600 transition-colors"*/}
            {/*    >*/}
            {/*        View More Similar Projects*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </div>
    );
}
