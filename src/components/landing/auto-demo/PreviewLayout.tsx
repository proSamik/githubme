import React from 'react';
import ArticleContent from "@/components/article/ArticleContent";

export interface PreviewProps {
    isEditing: boolean;
    isMobile: boolean;
}

export interface PreviewLayoutProps extends PreviewProps {
    content: {
        markdown: string;
        html: string;
    };
}

export const PreviewLayout: React.FC<PreviewLayoutProps> = ({ isEditing, isMobile, content }) => {
    const isPreviewOnly = isMobile && !isEditing;

    return (
        <div className="flex justify-center items-center w-full p-2">
            <div className={`w-full grid ${!isMobile ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                {/* Markdown Panel */}
                <div className={`${isMobile && !isEditing ? 'hidden' : ''} h-full`}>
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg h-full flex flex-col">
                        {/* Fixed Header */}
                        <div className="sticky top-0 z-10 p-4 rounded-md  bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-sm text-gray-500">Markdown</span>
                            </div>
                        </div>
                        {/* Scrollable Content */}
                        <div className="overflow-auto flex-1">
                            <div className="p-4">
                                <pre className="font-mono text-sm whitespace-pre-wrap text-gray-800 dark:text-gray-200">
                                    {content.markdown}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview Panel */}
                <div className={`${isMobile && isEditing ? 'hidden' : ''} h-full ${isPreviewOnly ? 'col-span-1 mx-auto max-w-2xl w-full' : ''}`}>
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg h-full flex flex-col">
                        {/* Fixed Header */}
                        <div className="sticky top-0 z-10 p-4 rounded-md bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-sm text-gray-500">Preview</span>
                            </div>
                        </div>
                        {/* Scrollable Content */}
                        <div className="overflow-auto flex-1">
                            <div className="p-4">
                                <ArticleContent content={content.html} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}