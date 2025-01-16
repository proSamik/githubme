'use client';

import React, { useState } from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaCopy } from "react-icons/fa";

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
        <div className="flex flex-col items-center">
            {/* Share Buttons Container */}
            <div className="flex">
                <div className="bg-white dark:bg-dark-background shadow-lg dark:shadow-amber-200 dark:shadow-sm
                             px-6 py-3 rounded-full flex items-center space-x-4
                             border border-amber-200 dark:border-amber-800">
                    <span className="text-gray-700 dark:text-gray-300">Share: </span>

                    {/* Twitter */}
                    <a
                        onClick={shareHandlers.twitter}
                        className="cursor-pointer hover:text-blue-400 flex flex-col items-center transition-colors"
                        aria-label="Share on Twitter"
                    >
                        <FaTwitter size={24} />
                    </a>

                    {/* LinkedIn */}
                    <a
                        onClick={shareHandlers.linkedin}
                        className="cursor-pointer hover:text-blue-600 flex flex-col items-center transition-colors"
                        aria-label="Share on LinkedIn"
                    >
                        <FaLinkedinIn size={24} />
                    </a>

                    {/* Instagram */}
                    <a
                        onClick={shareHandlers.instagram}
                        className="cursor-pointer hover:text-pink-600 flex flex-col items-center transition-colors"
                        aria-label="Share on Instagram"
                    >
                        <FaInstagram size={24} />
                    </a>

                    {/* More Share Options */}
                    <a
                        onClick={() => setIsModalOpen(true)}
                        className="cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 flex flex-col items-center transition-colors"
                        aria-label="More share options"
                    >
                        <FaCopy size={20} />
                    </a>
                </div>
            </div>

            {/* Share Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                     onClick={() => setIsModalOpen(false)}>
                    <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-lg w-96 max-w-[90vw]"
                         onClick={e => e.stopPropagation()}>
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
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    readOnly
                                    value={shareUrl}
                                    className="flex-1 p-2 text-sm border border-amber-200 dark:border-amber-800 rounded-full
                                             dark:bg-dark-background dark:text-white focus:ring-2 focus:ring-amber-500"
                                />
                                <button
                                    onClick={handleCopyLink}
                                    className="p-2 bg-amber-600 text-white rounded-full hover:bg-amber-700
                                             transition-colors flex items-center space-x-2"
                                    aria-label="Copy link"
                                >
                                    <FaCopy className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Copied Feedback */}
                        {copied && (
                            <div className="mt-3 text-sm text-amber-600 dark:text-amber-400">
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