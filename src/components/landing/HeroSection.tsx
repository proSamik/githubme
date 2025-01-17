'use client'

import React from 'react';
import {ArrowRight, Camera, FileCode, Code2, GitBranch, ImageIcon, Copy} from 'lucide-react';
import { TypingDemo } from '@/components/landing/auto-demo/TypingDemo';
import { FaGithub } from "react-icons/fa";
import QuickSearch from "@/components/QuickSearch";

const AnimatedTitle = () => {
    const text = "Elevate Your GitHub Story";
    return (
        <div className="flex justify-center">
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className={`
                        text-[28px] lg:text-5xl md:text-5xl sm:text-5xl font-bold
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

export default function HeroSection() {
    const scrollToGithubForm = () => {
        const formElement = document.getElementById('github-url-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToDemo = () => {
        const demoElement = document.getElementById('auto-demo-section');
        if (demoElement) {
            demoElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="
            flex
            flex-col
            items-center
            w-full
            max-w-screen-lg
            mb-2
        ">
            <div className="pt-1 sm:mt-4 mb-2">
                <QuickSearch/>
            </div>

            <div
                className="flex-1 flex flex-col my-auto items-center space-y-6 pt-5 w-full md:space-y-8 lg:space-y-12">
                <h1 className="font-bold text-center text-wrap">
                    <AnimatedTitle/>
                </h1>

                <div className="flex flex-col space-y-2 lg:space-y-4">
                    <p className="text-[16px] md:text-2xl font-bold text-center text-amber-600 dark:text-gray-300 text-wrap max-w-3xl">
                        One Stop Place for Markdown Content Viewer
                    </p>

                    <p className="text-[16px] md:text-2xl text-center text-gray-600 dark:text-gray-300 text-wrap max-w-3xl">
                        Transform boring Markdown README files into Technical Blog, Product Documentation or Personal
                        Notes.
                    </p>
                </div>


                <div className="flex flex-col gap-8 lg:gap-10 max-w-4xl w-full">
                    {/* Creation & Conversion Features */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-400 text-center">Markdown
                            with Extra Features</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                        <div
                                className="min-w-fit bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm shadow-lg px-3 py-2.5 rounded-full flex items-center justify-center gap-3">
                                <FaGithub size={20} className="text-amber-600 dark:text-amber-400"/>
                                <span>Instant Conversion</span>
                            </div>

                            <div
                                className="min-w-fit bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm shadow-lg px-3 py-2.5 rounded-full flex items-center justify-center gap-3">
                                <GitBranch size={20} className="text-amber-600 dark:text-amber-400"/>
                                <span>Render Mermaid.js</span>
                            </div>

                            <div
                                className="min-w-fit bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm shadow-lg px-3 py-2.5 rounded-full flex items-center justify-center gap-3">
                                <ImageIcon size={20} className="text-amber-600 dark:text-amber-400"/>
                                <span>Render SVG</span>
                            </div>

                            <div
                                className="hidden lg:visible min-w-fit bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm shadow-lg px-3 py-2.5 rounded-full lg:flex items-center justify-center gap-3">
                                <Code2 size={20} className="text-amber-600 dark:text-amber-400"/>
                                <span>Render inline-HTML & CSS</span>
                            </div>
                        </div>
                    </div>

                    {/* Content & Sharing Features */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-400 text-center">Code
                            Specific</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div
                                className="min-w-fit bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm shadow-lg px-3 py-2.5 rounded-full flex items-center justify-center gap-3">
                                <Copy size={20} className="text-amber-600 dark:text-amber-400"/>
                                <span>Code Copy</span>
                            </div>

                            <div
                                className="min-w-fit bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm shadow-lg px-3 py-2.5 rounded-full flex items-center justify-center gap-3">
                                <Camera size={20} className="text-amber-600 dark:text-amber-400"/>
                                <span>Screenshot png</span>
                            </div>

                            <div
                                className="hidden lg:visible min-w-fit bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm shadow-lg px-3 py-2.5 rounded-full lg:flex items-center justify-center gap-3">
                                <FileCode size={20} className="text-amber-600 dark:text-amber-400"/>
                                <span>Syntax Highlighter</span>
                            </div>
                        </div>
                    </div>
                </div>


                <TypingDemo/>

                <div className="flex flex-wrap gap-4 justify-center">
                    <button
                        onClick={scrollToGithubForm}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg flex items-center gap-2 transform transition-transform hover:scale-105"
                    >
                        Get Started
                        <ArrowRight size={20}/>
                    </button>

                    <button
                        onClick={scrollToDemo}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg flex items-center gap-2 transform transition-transform hover:scale-105"
                    >
                        See Examples
                        <ArrowRight size={20}/>
                    </button>
                </div>
            </div>
        </div>
    );
}