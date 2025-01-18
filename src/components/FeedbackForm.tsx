'use client';

import React, { useState, FormEvent } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { sendFeedback } from '@/lib/api';

const FeedbackForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const validateForm = (): boolean => {
        if (!email || !email.includes('@')) {
            setError('Please enter a valid email address');
            return false;
        }
        if (!message.trim()) {
            setError('Please enter a message');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setError('');

        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            await sendFeedback({ email, message });
            setSuccess(true);
            setEmail('');
            setMessage('');
            setTimeout(() => {
                setIsOpen(false);
                setSuccess(false);
            }, 2000);
        } catch {
            setError('Failed to submit feedback. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Feedback Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="pb-5 rounded-md dark:hover:text-amber-300 hover:text-amber-600 p-1 text-amber-500"
                aria-label="Open feedback form"
            >
                <div className="flex flex-col justify-center items-center space-x-2 gap-2 mx-3">
                    <div className="flex justify-center items-center space-x-2">
                        <MessageSquare size={32} className="transform transition-transform hover:scale-105"/>
                        <p>Just Say it</p>
                    </div>

                    <div className="flex flex-col sm:flex-row p-3 mx-3 gap-2 rounded-lg text-white bg-amber-500">
                        {/* First group */}
                        <div className="flex gap-2">
                            <p className="text-xs sm:text-[14px]">Found a bug?</p>
                            <span className="text-xs sm:text-[14px]">|</span>
                            <p className="text-xs sm:text-[14px]">Have Questions?</p>
                        </div>

                        {/* Second group */}
                        <div className="flex gap-2">
                            <span className="hidden sm:inline text-xs sm:text-[14px]">|</span>
                            <p className="text-xs sm:text-[14px]">Need to Roast</p>
                            <span className="text-xs sm:text-[14px]">|</span>
                            <p className="text-xs sm:text-[14px]">Suggest Features</p>
                        </div>
                    </div>
                </div>
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
                    <div className="bg-white dark:bg-dark-background rounded-lg shadow-xl w-full max-w-md m-4 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            <X size={20}/>
                        </button>

                        {/* Form Content */}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-400 mb-4">
                                Just Say it
                            </h2>

                            {success ? (
                                <div className="text-green-600 text-center py-4">
                                    Thank you for your feedback!
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="message"
                                               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Share your thoughts
                                        </label>
                                        <textarea
                                            id="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                            placeholder="Once improved I will send you an email"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email"
                                               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            State your email address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                            placeholder="I won't spam you"
                                            required
                                        />
                                    </div>


                                    {error && (
                                        <div className="text-red-600 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transform transition-transform hover:scale-105 disabled:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            'Sending...'
                                        ) : (
                                            <>
                                                Send
                                                <Send size={20}/>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FeedbackForm;