// components/CreatorSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import BlogList from '@/components/about/BlogList';

// Sample blog posts data - you can replace this with actual data from your source
const samplePosts = [
    {
        id: '2',
        title: 'Best Practices for Project Details',
        slug: 'proSamik/README-template/blob/main/BLOGS/Best-practices-for-project-details.md',
        description: 'A guide to help recruiters and contributors understand your project architecture and quality.',
        readTime: 10,
        tags: ['Readme', 'Markdown', 'Project']
    },
    {
        id: '1',
        title: 'Best Practices for Project Readme',
        slug: 'proSamik/Blog-notes/blob/main/Best-Practices-for-project-readme.md',
        description: 'A guide to creating effective project READMEs that engage users and contributors.',
        readTime: 8,
        tags: ['Readme', 'Markdown', 'GitHub']
    },
    {
        id: '3',
        title: 'The Deployment Blueprint',
        slug: 'proSamik/README-template/blob/main/BLOGS/Deployment-Essentials.md',
        description: 'A guide for developers to master modern deployment strategies and build resilient systems.',
        readTime: 12,
        tags: ['Docker', 'Container', 'Deployment', 'CI/CD', 'Monitoring']
    },
    {
        id: '4',
        title: 'VPS Mastery: From Bare Metal to CI/CD Automation in 16 Steps',
        slug: 'proSamik/README-template/blob/main/BLOGS/Basics-of-VPS.md',
        description: 'Transform a raw virtual server into a production-ready powerhouse with Docker, Nginx, and GitHub Actions.',
        readTime: 15,
        tags: ['VPS', 'Docker', 'Nginx', 'CI/CD', 'Automation', 'Monitoring']
    },
    {
        id: '5',
        title: 'The Only Terminal Guide you need',
        slug: 'proSamik/README-template/blob/main/BLOGS/Revamp-Terminal-Complete-Guide.md',
        description: 'Read the Complete Guide on iTerm2, Tmux and Zsh- the only terminal configuration you will ever need',
        readTime: 10,
        tags: ['tmux', 'zsh', 'iterm', 'terminal', 'vps']
    },
    {
        id: '6',
        title: 'Tmux mystery solved',
        slug: 'proSamik/README-template/blob/main/BLOGS/Tmux-setup.md',
        description: 'The only blog post you need to configure your Tmux to Chad level and know all the beginner-friendly commands to get started.',
        readTime: 5,
        tags: ['tmux', 'terminal', 'vps']
    },
    {
        id: '7',
        title: 'Production-Ready VPS Setup: A Practical Checklist',
        slug: 'proSamik/README-template/blob/main/BLOGS/VPS-Checklist.md',
        description: 'A straightforward guide to essential requirements for deploying a secure and maintainable VPS, covering domain setup, SSH hardening, firewall rules, TLS automation, monitoring, and zero-downtime deployments.',
        readTime: 10,
        tags: ['vps', 'ssh', 'monitoring', 'logging', 'deployment']
    },
    {
        id: '8',
        title: 'Railway.com Deployment Guide: From Zero to Deployed in Minutes',
        slug: 'proSamik/README-template/blob/main/BLOGS/Railway-Deployment-Guide.md',
        description: 'Unlock effortless app deployment with Railway.com—simple, cost-effective, and tailored for developers at any level.',
        readTime: 7,
        tags: ['deployment', 'beginner', 'railway', 'vps']
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