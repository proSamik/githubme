// components/FeatureGrid.tsx
'use client';

import React from 'react';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: "🎯",
        title: "Direct URL Rendering",
        description: "Render any GitHub markdown file directly using its URL with a clean, modern interface"
    },
    {
        icon: "🌓",
        title: "Smart Theme Switching",
        description: "Seamless Light/Dark mode support for comfortable viewing in any environment"
    },
    {
        icon: "📱",
        title: "Responsive Layout",
        description: "Fully responsive design that adapts beautifully across all devices and screen sizes"
    },
    {
        icon: "🔗",
        title: "Social Integration",
        description: "Built-in social sharing buttons to help spread your content effectively"
    },
    {
        icon: "📝",
        title: "Enhanced Typography",
        description: "Clean typography with advanced code highlighting for better readability"
    },
    {
        icon: "📊",
        title: "Smart Tables",
        description: "Responsive tables with horizontal scrolling for better data presentation"
    },
    {
        icon: "🖼️",
        title: "Optimized Images",
        description: "Perfectly centered and responsive image display for visual content"
    }
];

export default function FeatureGrid() {
    return (
        <div className="bg-white dark:bg-dark-background p-6 rounded-lg">
            <h2 className="text-3xl font-semibold text-amber-800 dark:text-amber-200 mb-6 flex justify-center">
                Features
            </h2>
            <div className="space-y-4">
                {features.map((feature: Feature, index: number) => (
                    <div
                        key={index}
                        className={`transform transition-all duration-300 hover:scale-[1.02] 
                    ${index % 2 === 0 ? 'translate-x-0' : 'translate-x-4 md:translate-x-8'}
                    p-6 bg-gradient-to-r from-amber-50 to-amber-100 
                    dark:from-amber-900/40 dark:to-amber-800/60 
                    rounded-lg border border-amber-200 dark:border-amber-700
                    hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600
                    dark:hover:from-amber-900/50 dark:hover:to-amber-800/70
                    cursor-pointer group`}
                    >
                        <div className="flex items-start space-x-4">
                            <span className="text-4xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                {feature.icon}
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}