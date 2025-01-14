'use client';

import React, { useState } from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaShareAlt, FaCopy } from "react-icons/fa";

interface SocialShareButtonsProps {
    shareUrl: string;
    shareTitle: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ shareUrl, shareTitle }) => {
    const [copied, setCopied] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy link:", err);
        }
    };

    const handleCopyContentWithLink = async () => {
        try {
            await navigator.clipboard.writeText(`${shareTitle}\n${shareUrl}`);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy content with link:", err);
        }
    };

    const shareHandlers = {
        twitter: () => {
            window.open(
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
                "_blank"
            );
        },
        linkedin: () => {
            window.open(
                `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`,
                "_blank"
            );
        },
        instagram: () => {
            window.open(
                `https://www.instagram.com/share?url=${encodeURIComponent(shareUrl)}`,
                "_blank"
            );
        }
    };

    return (
        <div className="relative">
            {/* Share Buttons */}
            <div className="flex space-x-2">
                <button
                    onClick={shareHandlers.twitter}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
                    aria-label="Share on Twitter"
                >
                    <FaTwitter className="w-6 h-6" />
                </button>

                <button
                    onClick={shareHandlers.linkedin}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
                    aria-label="Share on LinkedIn"
                >
                    <FaLinkedinIn className="w-6 h-6" />
                </button>

                <button
                    onClick={shareHandlers.instagram}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
                    aria-label="Share on Instagram"
                >
                    <FaInstagram className="w-6 h-6" />
                </button>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
                    aria-label="More share options"
                >
                    <FaShareAlt className="w-5 h-5" />
                </button>
            </div>

            {/* Share Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-96 max-w-[90vw]" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Share Options
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                            >
                                <span className="sr-only">Close</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Copy Link Section */}
                        <div className="mb-4">
                            <label htmlFor="link" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Copy Link
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    id="link"
                                    readOnly
                                    value={shareUrl}
                                    className="flex-1 p-2 text-sm border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                                <button
                                    onClick={handleCopyLink}
                                    className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                                    aria-label="Copy link"
                                >
                                    <FaCopy className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Copy Content with Link Section */}
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Copy Content with Link
                            </label>
                            <div className="flex gap-2">
                                <textarea
                                    id="content"
                                    readOnly
                                    value={`${shareTitle}\n${shareUrl}`}
                                    rows={3}
                                    className="flex-1 p-2 text-sm border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
                                />
                                <button
                                    onClick={handleCopyContentWithLink}
                                    className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                                    aria-label="Copy content with link"
                                >
                                    <FaCopy className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Copied Feedback */}
                        {copied && (
                            <div className="mt-3 text-sm text-green-500 dark:text-green-400">
                                Copied to clipboard!
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SocialShareButtons;