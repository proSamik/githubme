// components/AboutContent.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function AboutContent() {
    const [showCreator, setShowCreator] = useState(false);

    const features = [
        "🎯 Render any GitHub markdown file directly using its URL",
        "🌓 Light/Dark mode support",
        "📱 Responsive design",
        "🔗 Social Sharing buttons",
        "📝 Clean typography with proper code highlighting",
        "📊 Responsive tables with horizontal scrolling",
        "🖼️ Centered image display"
    ];

    return (
        <div className="w-full max-w-4xl">
            {/* Toggle Section */}
            <div className="flex justify-center mb-12">
                <div className="bg-amber-100 dark:bg-amber-900/50 p-1 rounded-lg inline-flex">
                    <button
                        onClick={() => setShowCreator(false)}
                        className={`px-6 py-2 rounded-md transition-colors ${
                            !showCreator
                                ? 'bg-amber-500 dark:bg-amber-700 text-white'
                                : 'text-amber-800 dark:text-amber-200'
                        }`}
                    >
                        About GitHubMe
                    </button>
                    <button
                        onClick={() => setShowCreator(true)}
                        className={`px-6 py-2 rounded-md transition-colors ${
                            showCreator
                                ? 'bg-amber-500 dark:bg-amber-700 text-white'
                                : 'text-amber-800 dark:text-amber-200'
                        }`}
                    >
                        About Creator
                    </button>
                </div>
            </div>

            {!showCreator ? (
                // About GitHubMe Section
                <div className="space-y-12 animate-fadeIn">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-amber-800 dark:text-amber-200 mb-4">
                            GitHubMe
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            A Stylish Markdown Viewer
                        </p>
                    </div>

                    {/* Origin Story Section */}
                    <div className="prose dark:prose-invert max-w-none">
                        <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg border border-amber-200 dark:border-amber-700">
                            <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                                The Story
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                GitHubMe is a brainchild of {' '}
                                <Link href="https://prosamik.com" className="text-amber-600 dark:text-amber-400 hover:underline">
                                    prosamik.com
                                </Link>
                                . The idea was born from a common challenge - multiple README files with basic layouts that didn't quite capture their essence. We took on the challenge of transforming these basic layouts into something visually appealing and functional.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                                By leveraging GitHub as a database for markdown data and image containers, we've created a modern UI that not only enhances the visual appeal but also adds powerful features like code export capabilities and syntax highlighting.
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="bg-white dark:bg-dark-background p-6 rounded-lg border border-amber-200 dark:border-amber-700">
                        <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mb-6">
                            Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg"
                                >
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <Link
                            href="https://prosamik.com/projects"
                            className="inline-block px-8 py-3 bg-amber-500 dark:bg-amber-700 text-white rounded-lg hover:bg-amber-600 dark:hover:bg-amber-600 transition-colors"
                        >
                            View More Projects
                        </Link>
                    </div>
                </div>
            ) : (
                // About Creator Section
                <div className="animate-fadeIn">
                    <div className="flex flex-col items-center py-1 pt-2 w-full">
                        <div className="flex flex-col items-center space-y-4 mb-2">
                            <Image
                                src="/me-here.jpg"
                                alt="Samik"
                                width={250}
                                height={250}
                                className="rounded-full shadow-lg"
                                priority
                            />
                            <h2 className="text-2xl mb-2">Hey, I'm Samik</h2>
                        </div>

                        <div className="text-center space-y-4 dark:animate-pulse">
                            <h1 className="text-4xl sm:text-5xl font-bold dark:text-white relative">
                                I{' '}
                                <span className="relative inline-block">
                                    build
                                    <span
                                        className="absolute -inset-x-2 -inset-y-4 dark:bg-white/30 -rotate-3 transform bg-black/30"
                                        style={{
                                            clipPath: 'polygon(0% 55%, 100% 30%, 40% 80%, -10% 65%)'
                                        }}
                                    />
                                </span>{' '}
                                <Link
                                    href="https://prosamik.com/projects"
                                    className="text-amber-600 dark:text-amber-400 hover:underline"
                                >
                                    Products
                                </Link>
                            </h1>
                        </div>

                        <div className="flex flex-col items-center space-y-4 mt-5">
                            <div className="flex">
                                <div className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center space-x-4">
                                    <span>Reach me: </span>
                                    <a
                                        href="https://www.twitter.com/prosamik"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 flex flex-col items-center"
                                    >
                                        <FaTwitter size={30} />
                                    </a>
                                    <a
                                        href="https://www.github.com/prosamik"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-300 flex flex-col items-center"
                                    >
                                        <FaGithub size={30} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/prosamik"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 flex flex-col items-center"
                                    >
                                        <FaLinkedin size={30} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="https://prosamik.com/about"
                            className="inline-block px-8 py-3 bg-amber-500 dark:bg-amber-700 text-white rounded-lg hover:bg-amber-600 dark:hover:bg-amber-600 transition-colors"
                        >
                            Learn More About Me
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

