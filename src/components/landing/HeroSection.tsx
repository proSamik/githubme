'use client'

import React from 'react';
import {ArrowRight, Camera, FileCode, Laptop, Sparkles} from 'lucide-react';
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

    return (
        <div className="
            flex
            flex-col
            items-center
            w-full
            max-w-screen-lg
            mb-2
        ">
            <div className="pt-1 mt-4 mb-2">
                <QuickSearch/>
            </div>

            <div className="flex-1 flex flex-col my-auto items-center space-y-10 py-10 w-full">

                <h1 className=" font-bold text-center text-wrap"> {/* Add responsive text and word breaking */}
                    <AnimatedTitle/>
                </h1>

                <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 text-wrap"> {/* Remove mx-auto since parent is centered */}
                    Transform your boring README files into stunning pages that capture attention
                </p>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {/* Each box now has justify-center to center its contents */}
                    <div
                        className="md:basis-[calc(33%-1rem)] min-w-fit bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm shadow-lg px-4 py-2 rounded-full flex items-center justify-center gap-2  whitespace-nowrap">
                        <FaGithub size={20} className="text-amber-600 dark:text-amber-400"/>
                        <span>Instant Conversion</span>
                    </div>

                    {/* Hidden on mobile, visible on desktop */}
                    <div
                        className="hidden md:flex md:basis-[calc(33%-1rem)] min-w-fit bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm shadow-lg px-4 py-2 rounded-full items-center justify-center gap-2  whitespace-nowrap">
                        <Laptop size={20} className="text-amber-600 dark:text-amber-400"/>
                        <span>Responsive Design</span>
                    </div>

                    {/* Hidden on mobile, visible on desktop */}
                    <div
                        className="hidden md:flex md:basis-[calc(33%-1rem)] min-w-fit bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm shadow-lg px-4 py-2 rounded-full items-center justify-center gap-2 whitespace-nowrap">
                        <FileCode size={20} className="text-amber-600 dark:text-amber-400"/>
                        <span>Code Export</span>
                    </div>

                    <div
                        className="md:basis-[calc(33%-1rem)] min-w-fit bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm shadow-lg px-4 py-2 rounded-full flex items-center justify-center gap-2 whitespace-nowrap">
                        <Camera size={20} className="text-amber-600 dark:text-amber-400"/>
                        <span>Code Screenshot</span>
                    </div>

                    <div
                        className="md:basis-[calc(33%-1rem)] min-w-fit bg-white dark:bg-dark-background dark:shadow-amber-200 dark:shadow-sm px-4 py-2 rounded-full flex items-center justify-center gap-2 shadow-lg whitespace-nowrap">
                        <Sparkles size={20} className="text-amber-600 dark:text-amber-400"/>
                        <span>Smart Theme</span>
                    </div>
                </div>

                <TypingDemo/>

                <button
                    onClick={scrollToGithubForm}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto transform transition-transform hover:scale-105"
                >
                    Get Started
                    <ArrowRight size={20}/>
                </button>
            </div>
        </div>
    );
}