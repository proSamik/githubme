'use client';

import React from 'react';
import { Camera, Code2, FileCode, GitBranch, ImageIcon, PenLine, MonitorSmartphone, Moon, Table2, Share2 } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    category: 'creation' | 'content' | 'experience';
}

const features: Feature[] = [
    // Creation & Conversion Features
    {
        icon: <FaGithub size={24} className="text-amber-600 dark:text-amber-400" />,
        title: "Instant Conversion",
        description: "Transform GitHub markdown files into stylish pages with a single URL",
        category: 'creation'
    },
    {
        icon: <GitBranch size={24} className="text-amber-600 dark:text-amber-400" />,
        title: "Mermaid Diagrams",
        description: "Built-in support for rendering Mermaid.js diagrams and flowcharts",
        category: 'creation'
    },
    {
        icon: <ImageIcon size={24} className="text-amber-600 dark:text-amber-400" />,
        title: "SVG Support",
        description: "Native support for SVG graphics with perfect rendering",
        category: 'creation'
    },
    {
        icon: <Code2 size={24} className="text-amber-600 dark:text-amber-400" />,
        title: "HTML/CSS Support",
        description: "Seamless integration of custom HTML and CSS within markdown",
        category: 'creation'
    },

    // Content & Sharing Features
    {
        icon: <FileCode size={24} className="text-amber-600 dark:text-amber-400" />,
        title: "Code Export",
        description: "Export your code snippets in various formats",
        category: 'content'
    },
    {
        icon: <Camera size={24} className="text-amber-600 dark:text-amber-400" />,
        title: "Code Screenshot",
        description: "Create beautiful screenshots of your code for sharing",
        category: 'content'
    },
    {
        icon: <Share2 size={24} className="text-amber-600 dark:text-amber-400" />,
        title: "Social Integration",
        description: "Built-in social sharing features for wider reach",
        category: 'content'
    },

    // User Experience Features
    {
        icon: <MonitorSmartphone size={24} className="text-amber-600 dark:text-amber-400" />,
        title: "Responsive Layout",
        description: "Perfect display across all devices and screen sizes",
        category: 'experience'
    },
    {
        icon: <Moon size={24} className="text-amber-600 dark:text-amber-400" />,
        title: "Smart Theme",
        description: "Automatic light/dark mode switching for comfortable viewing",
        category: 'experience'
    },
    {
        icon: <PenLine size={24} className="text-amber-600 dark:text-amber-400" />,
        title: "Enhanced Typography",
        description: "Clean typography with syntax highlighting for better readability",
        category: 'experience'
    },
    {
        icon: <Table2 size={24} className="text-amber-600 dark:text-amber-400" />,
        title: "Smart Tables",
        description: "Responsive tables with horizontal scrolling capability",
        category: 'experience'
    }
];

export default function FeatureGrid() {
    return (
        <div className="bg-white dark:bg-dark-background p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-amber-800 dark:text-amber-200 mb-8 text-center">
                Feature Summary
            </h2>

            <div className="space-y-8">
                {/* Creation & Conversion Section */}
                <div>
                    <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-400 mb-4">
                        Creation & Conversion
                    </h3>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        {features
                            .filter(feature => feature.category === 'creation')
                            .map((feature, index) => (
                                <FeatureCard key={index} feature={feature} />
                            ))}
                    </div>
                </div>

                {/* Content & Sharing Section */}
                <div>
                    <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-400 mb-4">
                        Content & Sharing
                    </h3>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        {features
                            .filter(feature => feature.category === 'content')
                            .map((feature, index) => (
                                <FeatureCard key={index} feature={feature} />
                            ))}
                    </div>
                </div>

                {/* User Experience Section */}
                <div>
                    <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-400 mb-4">
                        User Experience
                    </h3>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        {features
                            .filter(feature => feature.category === 'experience')
                            .map((feature, index) => (
                                <FeatureCard key={index} feature={feature} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ feature }: { feature: Feature }) {
    return (
        <div className="p-4 bg-gradient-to-r from-amber-50 to-amber-100
            dark:from-amber-900/40 dark:to-amber-800/60
            rounded-lg border border-amber-200 dark:border-amber-700
            hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600
            dark:hover:from-amber-900/50 dark:hover:to-amber-800/70
            transform transition-all duration-300 hover:scale-[1.02]
            cursor-pointer group">
            <div className="flex items-start space-x-4">
                <span className="group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {feature.icon}
                </span>
                <div>
                    <h4 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-1">
                        {feature.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature.description}
                    </p>
                </div>
            </div>
        </div>
    );
}