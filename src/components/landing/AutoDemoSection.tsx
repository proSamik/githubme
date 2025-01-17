// AutoDemoSection.tsx
'use client';
import React from 'react';
import {PreviewManager} from "@/components/landing/auto-demo/PreviewManager";

export function AutoDemoSection() {
    return (
        <div className="w-full flex flex-col items-center space-y-12 max-h-screen">
            <div className="w-full max-w-5xl h-[calc(100vh-1rem)]"> {/* Subtract space for margins/padding */}
                <PreviewManager />
            </div>
        </div>
    );
}