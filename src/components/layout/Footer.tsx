// src/components/Footer.tsx
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-auto flex justify-center">
            <div className="w-full
             mx-auto
             sm:max-w-screen-md
             md:max-w-screen-lg
            border-t border-l border-r border-amber-200 dark:border-amber-700 rounded-t-lg">
                <div className="px-4 py-2">
                    <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                        <div>
                            <p className="text-sm text-amber-800 dark:text-amber-200 ">
                                © {new Date().getFullYear()} GithubMe. All rights reserved.
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <a
                            href="https://www.linkedin.com/in/prosamik"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center text-amber-800 dark:text-amber-200
                            hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                            >
                            <FaLinkedin size={24} />
                            <span className="mt-1 text-xs">
                                    proSamik
                            </span>
                        </a>
                        <a
                        href="https://www.twitter.com/prosamik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center text-amber-800 dark:text-amber-200
                        hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                        >
                        <FaTwitter size={24} />
                        <span className="mt-1 text-xs">
                                    proSamik
                                </span>
                    </a>
                    <a
                    href="https://www.github.com/prosamik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-amber-800 dark:text-amber-200
                    hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                    <FaGithub size={24} />
                    <span className="mt-1 text-xs">
                                    proSamik
                                </span>
                </a>
            </div>
                    </div>
                </div>
            </div>
        </footer>
);
}