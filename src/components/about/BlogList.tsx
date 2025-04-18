'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    description: string;
    date?: string;
    readTime?: number;
    tags?: string[];
}

interface BlogListProps {
    posts: BlogPost[];
    className?: string;
}

const BlogList: React.FC<BlogListProps> = ({ posts, className = '' }) => {
    return (
        <div className={`w-full py-8 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-6">
                    <h2 className="text-3xl font-bold text-amber-800 dark:text-amber-400">
                        Latest Blogs
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
                        Explore technical writings, insights, and updates about software development and DevOps
                    </p>
                </div>

                <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link 
                            key={post.id}
                            href={`/${post.slug}`}
                            className="group relative flex flex-col p-6 bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm shadow-lg rounded-lg hover:shadow-xl transition-all duration-200"
                        >
                            <article className="flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                                        {post.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-amber-600 dark:text-amber-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                                
                                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                                    {post.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {post.tags?.map((tag) => (
                                        <span 
                                            key={tag}
                                            className="px-3 py-1 text-sm rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                                    {post.date && (
                                        <time className="mr-4" dateTime={post.date}>
                                            {new Date(post.date).toLocaleDateString()}
                                        </time>
                                    )}
                                    {post.readTime && (
                                        <span className="flex items-center">
                                            <span className="mr-1">📚</span>
                                            {post.readTime} min read
                                        </span>
                                    )}
                                </div>
                            </article>
                            
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogList;