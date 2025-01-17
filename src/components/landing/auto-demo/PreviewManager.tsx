import React, { useState, useEffect } from 'react';
import { Code, Image, FileText } from 'lucide-react';
import {CodePreviewComponent} from "@/components/landing/auto-demo/CodePreviewComponent";
import {DiagramsPreviewComponent} from "@/components/landing/auto-demo/DiagramsPreviewComponent";
import {MediaPreviewComponent} from "@/components/landing/auto-demo/MediaPreviewComponent";

export function PreviewManager() {
    const [activeFeature, setActiveFeature] = useState('code');
    const [isEditing, setIsEditing] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const features = [
        {
            id: 'code',
            label: 'Code',
            icon: Code,
            component: CodePreviewComponent
        },
        {
            id: 'diagram',
            label: 'Diagrams',
            icon: FileText,
            component: DiagramsPreviewComponent
        },
        {
            id: 'media',
            label: 'Media',
            icon: Image,
            component: MediaPreviewComponent
        }
    ];

    const ActiveComponent = features.find(f => f.id === activeFeature)?.component;

    return (
        <div className="w-full flex flex-col ">
            {/* Feature Toggle */}
            <div className="flex justify-center mb-4 flex-shrink-0">
                <div className="bg-amber-100 dark:bg-amber-900/50 p-1 rounded-lg inline-flex">
                    {features.map(feature => (
                        <button
                            key={feature.id}
                            onClick={() => setActiveFeature(feature.id)}
                            className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                                activeFeature === feature.id
                                    ? 'bg-amber-500 dark:bg-amber-700 text-white'
                                    : 'text-amber-800 dark:text-amber-200'
                            }`}
                        >
                            <feature.icon size={16} />
                            <span className="hidden sm:inline">{feature.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile View Tabs */}
            {isMobile && (
                <div className="flex justify-center mb-4 flex-shrink-0">
                    <div className="bg-gray-100 dark:bg-zinc-800 p-1 rounded-lg inline-flex">
                        <button
                            onClick={() => setIsEditing(true)}
                            className={`px-6 py-2 rounded-md transition-colors ${
                                isEditing
                                    ? 'bg-amber-500 dark:bg-amber-700 text-white'
                                    : 'text-gray-600 dark:text-gray-300'
                            }`}
                        >
                            Markdown
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className={`px-6 py-2 rounded-md transition-colors ${
                                !isEditing
                                    ? 'bg-amber-500 dark:bg-amber-700 text-white'
                                    : 'text-gray-600 dark:text-gray-300'
                            }`}
                        >
                            Preview
                        </button>
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            {ActiveComponent && (
                <div className="flex-grow">
                    <div className="h-[calc(100vh-6rem)] overflow-auto custom-scrollbar">
                        <ActiveComponent isEditing={isEditing} isMobile={isMobile} />
                    </div>
                </div>
            )}
        </div>
    );
}