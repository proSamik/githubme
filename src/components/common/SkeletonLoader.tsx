import React from 'react';

interface SkeletonLoaderProps {
    className?: string;
    count?: number;
    type?: 'text' | 'title' | 'circle' | 'rectangle';
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
    className = '',
    count = 1,
    type = 'text'
}) => {
    const getSkeletonClass = () => {
        const baseClass = 'animate-pulse bg-gray-200 dark:bg-gray-700 rounded';
        switch (type) {
            case 'title':
                return `${baseClass} h-8 w-3/4`;
            case 'circle':
                return `${baseClass} h-12 w-12 rounded-full`;
            case 'rectangle':
                return `${baseClass} h-48 w-full`;
            default:
                return `${baseClass} h-4 w-full`;
        }
    };

    return (
        <div className={`space-y-3 ${className}`} role="status" aria-label="Loading...">
            {Array.from({ length: count }, (_, i) => (
                <div key={i} className={getSkeletonClass()} />
            ))}
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default SkeletonLoader; 