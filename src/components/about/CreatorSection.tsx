// components/CreatorSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import BlogList from '../blog/BlogList';

// Sample blog posts data - you can replace this with actual data from your source
const samplePosts = [
    {
        id: '1',
        title: 'Building Modern DevOps Pipelines',
        slug: 'modern-devops-pipelines',
        description: 'Learn how to create efficient CI/CD pipelines using modern DevOps tools and practices.',
        date: '2025-01-21',
        readTime: 8,
        tags: ['DevOps', 'CI/CD', 'Automation']
    },
    {
        id: '2',
        title: 'Golang Best Practices',
        slug: 'golang-best-practices',
        description: 'Essential patterns and practices for writing maintainable Go code in production.',
        date: '2025-01-18',
        readTime: 10,
        tags: ['Golang', 'Backend', 'Programming']
    },
    {
        id: '3',
        title: 'React Performance Tips',
        slug: 'react-performance-tips',
        description: 'Advanced techniques for optimizing React applications for better performance.',
        date: '2025-01-15',
        readTime: 6,
        tags: ['React', 'JavaScript', 'Frontend']
    }
];

export default function CreatorSection() {
    return (
        <div className="animate-fadeIn">
            <div className="flex flex-col items-center py-1 pt-2 w-full">
                <div className="flex flex-col items-center space-y-4 mb-2">
                    <Image
                        src="/me-here.png"
                        alt="Samik Choudhury"
                        width={250}
                        height={250}
                        className="rounded-full shadow-2xl shadow-gray-600 dark:shadow-gray-100 dark:shadow-lg"
                        priority
                    />
                    <h2 className="text-2xl mb-2">Hey, I&apos;m Samik</h2>
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
                        <div className="bg-zinc-800 text-white px-4 py-2 rounded-md flex items-center space-x-4">
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
                            {/* <a
                                href="https://www.linkedin.com/in/prosamik"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 flex flex-col items-center"
                            >
                                <FaLinkedin size={30} />
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-2 mb-12">
                <Link
                    href="https://prosamik.com/about"
                    className="inline-block px-8 py-3 bg-amber-500 dark:bg-amber-700 text-white rounded-lg hover:bg-amber-600 dark:hover:bg-amber-600 transition-colors"
                >
                    See my timeline here
                </Link>
            </div>

            {/* Blog List Section */}
            <BlogList posts={samplePosts} className="mt-8" />
        </div>
    );
}