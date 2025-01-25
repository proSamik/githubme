// AutoDemoSection.tsx
'use client';
import React from 'react';
import {PreviewManager} from "@/components/landing/auto-demo/PreviewManager";

const AutoDemoSection: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center space-y-12 max-h-screen">
            <div className="w-full max-w-5xl">
                <PreviewManager />
            </div>
        </div>
    );
}

export default AutoDemoSection;